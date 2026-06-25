export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface ExtractWebsiteMetadataRequest {
  url: string;
  includeHeadings?: boolean;
  includeFormsDetected?: boolean;
  includeContactLinks?: boolean;
}

export interface ExtractWebsiteMetadataResponse {
  url: string;
  finalUrl: string;
  title: string | null;
  metaDescription: string | null;
  headings: string[] | null;
  formsDetected: boolean | null;
  ctaText: string[] | null;
  contactLinks: string[] | null;
  socialLinks: string[] | null;
  warnings: string[];
  sourceNote: string;
  assumptions: string[];
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateExtractWebsiteMetadataRequest(input: unknown): ExtractWebsiteMetadataRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  if (input.url === undefined || input.url === null || input.url === "") {
    throw new ValidationError("url is required.");
  }

  if (typeof input.url !== "string") {
      throw new ValidationError("url must be a string.");
  }

  try {
      const url = new URL(input.url);
      if (url.protocol !== "http:" && url.protocol !== "https:") {
          throw new ValidationError("url must be http or https.");
      }

      const hostname = url.hostname;
      if (hostname === "localhost" || hostname.startsWith("127.") || hostname.startsWith("192.168.") || hostname.startsWith("10.") || hostname.match(/^172\.(1[6-9]|2[0-9]|3[0-1])\./)) {
          throw new ValidationError("url cannot be localhost or a private IP.");
      }
  } catch (e) {
      throw new ValidationError("url must be a valid URL.");
  }

  return {
      url: input.url,
      includeHeadings: typeof input.includeHeadings === "boolean" ? input.includeHeadings : undefined,
      includeFormsDetected: typeof input.includeFormsDetected === "boolean" ? input.includeFormsDetected : undefined,
      includeContactLinks: typeof input.includeContactLinks === "boolean" ? input.includeContactLinks : undefined,
  };
}

export async function extractWebsiteMetadata(input: ExtractWebsiteMetadataRequest): Promise<ExtractWebsiteMetadataResponse> {
  const warnings: string[] = [];
  let html = "";
  let finalUrl = input.url;

  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 5000);
    const response = await fetch(input.url, { signal: controller.signal, headers: { "User-Agent": "SMB-AI-Builder-Action/1.0" } });
    clearTimeout(id);

    finalUrl = response.url;
    if (!response.ok) {
      warnings.push(`Fetch failed with status ${response.status}`);
    } else {
      const arrayBuffer = await response.arrayBuffer();
      const text = new TextDecoder().decode(arrayBuffer.slice(0, 500 * 1024)); // limit to 500KB
      html = text;
      if (arrayBuffer.byteLength > 500 * 1024) warnings.push("Response truncated to 500KB.");
    }
  } catch (err: any) {
    warnings.push(`Fetch error: ${err.message}`);
  }

  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;

  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
                        html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["'][^>]*>/i);
  const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : null;

  let headings: string[] | null = null;
  if (input.includeHeadings) {
    headings = [];
    const h1s = html.match(/<h1[^>]*>(.*?)<\/h1>/gi) || [];
    const h2s = html.match(/<h2[^>]*>(.*?)<\/h2>/gi) || [];
    for (const h of [...h1s, ...h2s]) {
      const clean = h.replace(/<[^>]+>/g, '').trim();
      if (clean && headings.length < 20) headings.push(clean);
    }
  }

  let formsDetected: boolean | null = null;
  if (input.includeFormsDetected) {
    formsDetected = /<form/i.test(html);
  }

  let contactLinks: string[] | null = null;
  if (input.includeContactLinks) {
    contactLinks = [];
    const aTags = html.match(/<a[^>]+href=["']([^"']+)["']/gi) || [];
    for (const a of aTags) {
      const m = a.match(/href=["']([^"']+)["']/i);
      if (m && (m[1].startsWith("mailto:") || m[1].startsWith("tel:"))) {
        if (!contactLinks.includes(m[1]) && contactLinks.length < 10) contactLinks.push(m[1]);
      }
    }
  }

  return {
    url: input.url,
    finalUrl,
    title,
    metaDescription,
    headings,
    formsDetected,
    ctaText: [],
    contactLinks,
    socialLinks: [],
    warnings,
    sourceNote: "Fetched website directly",
    assumptions: ["Public URLs only. Max 500KB parsed."]
  };
}

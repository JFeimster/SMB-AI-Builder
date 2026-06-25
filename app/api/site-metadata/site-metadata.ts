import { assertPublicHttpUrl, fetchPublicText } from "../../../lib/security/url-safety";

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

function stripTags(value: string): string {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
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
    if (url.protocol !== "https:") {
      throw new ValidationError("url must use https.");
    }
    if (url.username || url.password) {
      throw new ValidationError("url credentials are not allowed.");
    }
  } catch {
    throw new ValidationError("url must be a valid HTTPS URL.");
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
    await assertPublicHttpUrl(input.url);
    const fetched = await fetchPublicText(input.url, {
      allowedContentTypes: ["text/html", "application/xhtml", "text/plain"],
      maxBytes: 500 * 1024,
      timeoutMs: 5000,
    });
    html = fetched.text;
    finalUrl = fetched.finalUrl;
    if (fetched.truncated) warnings.push("Response truncated to 500KB.");
  } catch (err) {
    warnings.push(`Fetch error: ${err instanceof Error ? err.message : "Unknown error."}`);
  }

  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? stripTags(titleMatch[1]) : null;

  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
    html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["'][^>]*>/i);
  const metaDescription = metaDescMatch ? stripTags(metaDescMatch[1]) : null;

  let headings: string[] | null = null;
  if (input.includeHeadings) {
    headings = [];
    const headingMatches = html.match(/<h[12][^>]*>(.*?)<\/h[12]>/gi) || [];
    for (const heading of headingMatches) {
      const clean = stripTags(heading);
      if (clean && headings.length < 20) headings.push(clean);
    }
  }

  const formsDetected = input.includeFormsDetected ? /<form\b/i.test(html) : null;

  let contactLinks: string[] | null = null;
  if (input.includeContactLinks) {
    contactLinks = [];
    const anchorTags = html.match(/<a[^>]+href=["']([^"']+)["']/gi) || [];
    for (const anchor of anchorTags) {
      const match = anchor.match(/href=["']([^"']+)["']/i);
      if (match && (match[1].startsWith("mailto:") || match[1].startsWith("tel:"))) {
        if (!contactLinks.includes(match[1]) && contactLinks.length < 10) contactLinks.push(match[1]);
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
    sourceNote: "Fetched public HTTPS website with redirect, size, timeout, and private-network safeguards.",
    assumptions: ["Public HTTPS URLs only.", "Max 500KB parsed.", "Metadata extraction is best-effort and does not execute JavaScript."],
  };
}

import { assertPublicHttpUrl, fetchPublicText } from "../../../lib/security/url-safety";

export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface AnalyzeSitemapRequest {
  domainOrSitemapUrl: string;
  maxUrls?: number;
  includePageTypeGuesses?: boolean;
}

export interface AnalyzeSitemapResponse {
  sitemapUrl: string;
  urls: string[];
  pageTypeGuesses: Record<string, unknown> | null;
  likelyServicePages: string[] | null;
  likelyResourcePages: string[] | null;
  likelyContactPages: string[] | null;
  likelyOnboardingPages: string[] | null;
  warnings: string[];
  sourceNote: string;
  assumptions: string[];
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeSitemapUrl(value: string): string {
  const raw = value.startsWith("https://") ? value : `https://${value}`;
  const url = new URL(raw);
  return url.pathname.endsWith(".xml") ? url.toString() : `https://${url.hostname}/sitemap.xml`;
}

export function validateAnalyzeSitemapRequest(input: unknown): AnalyzeSitemapRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  if (typeof input.domainOrSitemapUrl !== "string" || input.domainOrSitemapUrl.trim() === "") {
    throw new ValidationError("domainOrSitemapUrl is required and must be a string.");
  }

  try {
    const parsed = new URL(normalizeSitemapUrl(input.domainOrSitemapUrl));
    if (parsed.protocol !== "https:") throw new ValidationError("domainOrSitemapUrl must use https.");
    if (parsed.username || parsed.password) throw new ValidationError("URL credentials are not allowed.");
  } catch {
    throw new ValidationError("domainOrSitemapUrl must be a valid HTTPS domain or sitemap URL.");
  }

  if (input.maxUrls !== undefined && (typeof input.maxUrls !== "number" || !Number.isInteger(input.maxUrls) || input.maxUrls < 1 || input.maxUrls > 250)) {
    throw new ValidationError("maxUrls must be an integer between 1 and 250.");
  }

  return {
    domainOrSitemapUrl: input.domainOrSitemapUrl,
    maxUrls: typeof input.maxUrls === "number" ? input.maxUrls : undefined,
    includePageTypeGuesses: typeof input.includePageTypeGuesses === "boolean" ? input.includePageTypeGuesses : undefined,
  };
}

export async function analyzeSitemap(input: AnalyzeSitemapRequest): Promise<AnalyzeSitemapResponse> {
  const sitemapUrl = normalizeSitemapUrl(input.domainOrSitemapUrl);
  const warnings: string[] = [];
  const urls: string[] = [];
  const maxUrls = input.maxUrls ?? 50;

  try {
    await assertPublicHttpUrl(sitemapUrl);
    const fetched = await fetchPublicText(sitemapUrl, {
      allowedContentTypes: ["application/xml", "text/xml", "text/plain"],
      maxBytes: 1024 * 1024,
      timeoutMs: 5000,
    });
    if (fetched.truncated) warnings.push("Sitemap response truncated to 1MB before parsing.");

    const locs = fetched.text.match(/<loc>([^<]+)<\/loc>/g) || [];
    for (const loc of locs) {
      if (urls.length >= maxUrls) {
        warnings.push(`Sitemap truncated to ${maxUrls} URLs.`);
        break;
      }
      const clean = loc.replace(/<\/?loc>/g, "").trim();
      if (clean.startsWith("https://")) urls.push(clean);
    }
  } catch (err) {
    warnings.push(`Error fetching sitemap: ${err instanceof Error ? err.message : "Unknown error."}`);
  }

  let pageTypeGuesses: Record<string, string> | null = null;
  if (input.includePageTypeGuesses && urls.length > 0) {
    pageTypeGuesses = {};
    for (const url of urls) {
      if (url.includes("contact")) pageTypeGuesses[url] = "contact";
      else if (url.includes("about")) pageTypeGuesses[url] = "about";
      else if (url.includes("blog") || url.includes("article") || url.includes("guide")) pageTypeGuesses[url] = "resource";
      else if (url.includes("service") || url.includes("product")) pageTypeGuesses[url] = "service";
      else pageTypeGuesses[url] = "other";
    }
  }

  return {
    sitemapUrl,
    urls,
    pageTypeGuesses,
    likelyServicePages: urls.filter((url) => url.includes("service") || url.includes("product")),
    likelyResourcePages: urls.filter((url) => url.includes("blog") || url.includes("article") || url.includes("guide")),
    likelyContactPages: urls.filter((url) => url.includes("contact") || url.includes("about")),
    likelyOnboardingPages: urls.filter((url) => url.includes("start") || url.includes("apply") || url.includes("join")),
    warnings,
    sourceNote: "Fetched public HTTPS sitemap with redirect, size, timeout, and host safeguards.",
    assumptions: ["Only standard XML sitemap loc entries are parsed.", "Max URL count is capped at 250.", "HTTPS-only public hosts are required."],
  };
}

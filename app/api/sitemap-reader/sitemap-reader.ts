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

export function validateAnalyzeSitemapRequest(input: unknown): AnalyzeSitemapRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  if (input.domainOrSitemapUrl === undefined || input.domainOrSitemapUrl === null || input.domainOrSitemapUrl === "") {
    throw new ValidationError("domainOrSitemapUrl is required.");
  }

  if (typeof input.domainOrSitemapUrl !== "string") {
      throw new ValidationError("domainOrSitemapUrl must be a string.");
  }

  let urlStr = input.domainOrSitemapUrl;
  if (!urlStr.startsWith("http://") && !urlStr.startsWith("https://")) {
      urlStr = "https://" + urlStr;
  }

  try {
      const url = new URL(urlStr);
      if (url.protocol !== "http:" && url.protocol !== "https:") {
          throw new ValidationError("domainOrSitemapUrl must be http or https.");
      }

      const hostname = url.hostname;
      if (hostname === "localhost" || hostname.startsWith("127.") || hostname.startsWith("192.168.") || hostname.startsWith("10.") || hostname.match(/^172\.(1[6-9]|2[0-9]|3[0-1])\./)) {
          throw new ValidationError("domainOrSitemapUrl cannot be localhost or a private IP.");
      }
  } catch (e) {
      throw new ValidationError("domainOrSitemapUrl must be a valid URL.");
  }

  return {
      domainOrSitemapUrl: input.domainOrSitemapUrl,
      maxUrls: typeof input.maxUrls === "number" ? input.maxUrls : undefined,
      includePageTypeGuesses: typeof input.includePageTypeGuesses === "boolean" ? input.includePageTypeGuesses : undefined,
  };
}

export async function analyzeSitemap(input: AnalyzeSitemapRequest): Promise<AnalyzeSitemapResponse> {
  const isSitemap = input.domainOrSitemapUrl.endsWith(".xml");
  const urlObj = new URL(input.domainOrSitemapUrl.startsWith("http") ? input.domainOrSitemapUrl : "https://" + input.domainOrSitemapUrl);
  const sitemapUrl = isSitemap ? urlObj.href : `https://${urlObj.hostname}/sitemap.xml`;

  const warnings: string[] = [];
  const urls: string[] = [];
  const maxUrls = input.maxUrls || 50;

  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 5000);
    const response = await fetch(sitemapUrl, { signal: controller.signal, headers: { "User-Agent": "SMB-AI-Builder-Action/1.0" } });
    clearTimeout(id);

    if (!response.ok) {
      warnings.push(`Failed to fetch sitemap: ${response.status}`);
    } else {
      const text = await response.text();
      const locs = text.match(/<loc>([^<]+)<\/loc>/g) || [];
      for (const loc of locs) {
        if (urls.length >= maxUrls) {
          warnings.push(`Sitemap truncated to ${maxUrls} URLs.`);
          break;
        }
        const clean = loc.replace(/<\/?loc>/g, '').trim();
        if (clean) urls.push(clean);
      }
    }
  } catch (err: any) {
    warnings.push(`Error fetching sitemap: ${err.message}`);
  }

  let pageTypeGuesses: Record<string, string> | null = null;
  if (input.includePageTypeGuesses && urls.length > 0) {
    pageTypeGuesses = {};
    for (const u of urls) {
      if (u.includes("contact")) pageTypeGuesses[u] = "contact";
      else if (u.includes("about")) pageTypeGuesses[u] = "about";
      else if (u.includes("blog") || u.includes("article")) pageTypeGuesses[u] = "resource";
      else if (u.includes("service")) pageTypeGuesses[u] = "service";
      else pageTypeGuesses[u] = "other";
    }
  }

  const servicePages = urls.filter(u => /service|product/i.test(u));
  const resourcePages = urls.filter(u => /blog|article|guide/i.test(u));
  const contactPages = urls.filter(u => /contact|about/i.test(u));
  const onboardingPages = urls.filter(u => /signup|register|login/i.test(u));

  return {
    sitemapUrl,
    urls,
    pageTypeGuesses,
    likelyServicePages: servicePages,
    likelyResourcePages: resourcePages,
    likelyContactPages: contactPages,
    likelyOnboardingPages: onboardingPages,
    warnings,
    sourceNote: "Fetched sitemap XML",
    assumptions: ["Max timeout 5s.", "Only reads standard XML sitemaps."]
  };
}

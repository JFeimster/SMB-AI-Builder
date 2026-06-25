export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface CheckRobotsTxtRequest {
  domain: string;
  userAgent?: string;
}

export interface CheckRobotsTxtResponse {
  robotsUrl: string;
  exists: boolean;
  allowedSummary: string;
  disallowedPaths: string[];
  sitemapLinks: string[];
  crawlWarnings: string[];
  sourceNote: string;
  assumptions: string[];
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateCheckRobotsTxtRequest(input: unknown): CheckRobotsTxtRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  if (input.domain === undefined || input.domain === null || input.domain === "") {
    throw new ValidationError("domain is required.");
  }

  if (typeof input.domain !== "string") {
      throw new ValidationError("domain must be a string.");
  }

  let urlStr = input.domain;
  if (!urlStr.startsWith("http://") && !urlStr.startsWith("https://")) {
      urlStr = "https://" + urlStr;
  }

  try {
      const url = new URL(urlStr);
      if (url.protocol !== "http:" && url.protocol !== "https:") {
          throw new ValidationError("domain must be http or https.");
      }

      const hostname = url.hostname;
      if (hostname === "localhost" || hostname.startsWith("127.") || hostname.startsWith("192.168.") || hostname.startsWith("10.") || hostname.match(/^172\.(1[6-9]|2[0-9]|3[0-1])\./)) {
          throw new ValidationError("domain cannot be localhost or a private IP.");
      }
  } catch (e) {
      throw new ValidationError("domain must be a valid domain or URL.");
  }

  return {
      domain: input.domain,
      userAgent: typeof input.userAgent === "string" ? input.userAgent : undefined,
  };
}

export async function checkRobotsTxt(input: CheckRobotsTxtRequest): Promise<CheckRobotsTxtResponse> {
  const hostname = new URL(input.domain.startsWith("http") ? input.domain : "https://" + input.domain).hostname;
  const robotsUrl = `https://${hostname}/robots.txt`;

  let exists = false;
  let text = "";
  const crawlWarnings: string[] = [];

  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 5000);
    const response = await fetch(robotsUrl, { signal: controller.signal, headers: { "User-Agent": "SMB-AI-Builder-Action/1.0" } });
    clearTimeout(id);

    if (response.ok) {
      exists = true;
      text = await response.text();
    } else {
      crawlWarnings.push(`Failed to fetch robots.txt: ${response.status}`);
    }
  } catch (err: any) {
    crawlWarnings.push(`Error fetching robots.txt: ${err.message}`);
  }

  const disallowedPaths: string[] = [];
  const sitemapLinks: string[] = [];

  const lines = text.split('\n');
  let currentUserAgent = "*";
  const targetAgent = input.userAgent || "*";

  for (const line of lines) {
    const clean = line.trim();
    if (!clean || clean.startsWith("#")) continue;

    const parts = clean.split(":");
    if (parts.length >= 2) {
      const key = parts[0].trim().toLowerCase();
      const val = parts.slice(1).join(":").trim();

      if (key === "user-agent") {
        currentUserAgent = val;
      } else if (key === "disallow") {
        if (currentUserAgent === "*" || currentUserAgent.toLowerCase() === targetAgent.toLowerCase()) {
          if (val && !disallowedPaths.includes(val)) disallowedPaths.push(val);
        }
      } else if (key === "sitemap") {
        if (!sitemapLinks.includes(val)) sitemapLinks.push(val);
      }
    }
  }

  return {
    robotsUrl,
    exists,
    allowedSummary: exists ? (disallowedPaths.length > 0 ? "Some paths restricted" : "All allowed") : "Unknown",
    disallowedPaths,
    sitemapLinks,
    crawlWarnings,
    sourceNote: "Fetched robots.txt",
    assumptions: ["Short timeout applies.", "Summary only."]
  };
}

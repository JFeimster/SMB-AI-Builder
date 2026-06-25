import { assertPublicHttpUrl, fetchPublicText } from "../../../lib/security/url-safety";

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

function normalizeRobotsUrl(value: string): string {
  const raw = value.startsWith("https://") ? value : `https://${value}`;
  const url = new URL(raw);
  return `https://${url.hostname}/robots.txt`;
}

export function validateCheckRobotsTxtRequest(input: unknown): CheckRobotsTxtRequest {
  if (!isPlainObject(input)) throw new ValidationError("Request body must be a JSON object.");
  if (typeof input.domain !== "string" || input.domain.trim() === "") throw new ValidationError("domain is required and must be a string.");

  try {
    const parsed = new URL(normalizeRobotsUrl(input.domain));
    if (parsed.protocol !== "https:") throw new ValidationError("domain must use https.");
  } catch {
    throw new ValidationError("domain must be a valid HTTPS domain or URL.");
  }

  if (input.userAgent !== undefined && typeof input.userAgent !== "string") throw new ValidationError("userAgent must be a string when provided.");

  return {
    domain: input.domain,
    userAgent: typeof input.userAgent === "string" && input.userAgent.trim() ? input.userAgent : undefined,
  };
}

export async function checkRobotsTxt(input: CheckRobotsTxtRequest): Promise<CheckRobotsTxtResponse> {
  const robotsUrl = normalizeRobotsUrl(input.domain);
  let exists = false;
  let text = "";
  const crawlWarnings: string[] = [];

  try {
    await assertPublicHttpUrl(robotsUrl);
    const fetched = await fetchPublicText(robotsUrl, {
      allowedContentTypes: ["text/plain"],
      maxBytes: 256 * 1024,
      timeoutMs: 5000,
    });
    exists = true;
    text = fetched.text;
    if (fetched.truncated) crawlWarnings.push("robots.txt response truncated to 256KB before parsing.");
  } catch (err) {
    crawlWarnings.push(`Error fetching robots.txt: ${err instanceof Error ? err.message : "Unknown error."}`);
  }

  const disallowedPaths: string[] = [];
  const sitemapLinks: string[] = [];
  const targetAgent = input.userAgent || "*";
  let currentAgent = "*";

  for (const line of text.split("\n")) {
    const clean = line.trim();
    if (!clean || clean.startsWith("#")) continue;
    const separator = clean.indexOf(":");
    if (separator === -1) continue;

    const key = clean.slice(0, separator).trim().toLowerCase();
    const value = clean.slice(separator + 1).trim();

    if (key === "user-agent") currentAgent = value;
    if (key === "disallow" && value) {
      const applies = currentAgent === "*" || currentAgent.toLowerCase() === targetAgent.toLowerCase();
      if (applies && !disallowedPaths.includes(value)) disallowedPaths.push(value);
    }
    if (key === "sitemap" && value.startsWith("https://") && !sitemapLinks.includes(value)) sitemapLinks.push(value);
  }

  return {
    robotsUrl,
    exists,
    allowedSummary: exists ? (disallowedPaths.length > 0 ? "Some paths restricted" : "No disallow rules found for target agent") : "Unknown",
    disallowedPaths,
    sitemapLinks,
    crawlWarnings,
    sourceNote: "Fetched public HTTPS robots.txt with redirect, size, timeout, and host safeguards.",
    assumptions: ["Summary only; robots.txt parsing is intentionally conservative.", "HTTPS-only public hosts are required."],
  };
}

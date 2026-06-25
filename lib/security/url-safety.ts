import { lookup } from "node:dns/promises";
import net from "node:net";

export interface PublicUrlOptions {
  allowHttp?: boolean;
  maxRedirects?: number;
  timeoutMs?: number;
  maxBytes?: number;
  allowedContentTypes?: string[];
}

const DEFAULT_TIMEOUT_MS = 5000;
const DEFAULT_MAX_BYTES = 500 * 1024;
const DEFAULT_MAX_REDIRECTS = 3;

const BLOCKED_HOSTS = new Set(["localhost", "metadata.google.internal"]);

function isPrivateIpv4(ip: string): boolean {
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4 || parts.some((part) => Number.isNaN(part)))
    return true;

  const [a, b] = parts;
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    a >= 224
  );
}

function isPrivateIpv6(ip: string): boolean {
  const normalized = ip.toLowerCase();
  return (
    normalized === "::1" ||
    normalized === "::" ||
    normalized.startsWith("fc") ||
    normalized.startsWith("fd") ||
    normalized.startsWith("fe80") ||
    normalized.startsWith("::ffff:127.") ||
    normalized.startsWith("::ffff:10.") ||
    normalized.startsWith("::ffff:192.168.") ||
    /^::ffff:172\.(1[6-9]|2\d|3[0-1])\./.test(normalized)
  );
}

function isPrivateIp(ip: string): boolean {
  const version = net.isIP(ip);
  if (version === 4) return isPrivateIpv4(ip);
  if (version === 6) return isPrivateIpv6(ip);
  return true;
}

export async function assertPublicHttpUrl(
  rawUrl: string,
  options: PublicUrlOptions = {},
): Promise<URL> {
  let parsed: URL;

  try {
    parsed = new URL(rawUrl);
  } catch {
    throw new Error("URL must be valid.");
  }

  const allowedProtocols = options.allowHttp ? ["https:", "http:"] : ["https:"];
  if (!allowedProtocols.includes(parsed.protocol)) {
    throw new Error(
      options.allowHttp ? "URL must use http or https." : "URL must use https.",
    );
  }

  if (parsed.username || parsed.password) {
    throw new Error("URL credentials are not allowed.");
  }

  const hostname = parsed.hostname.toLowerCase();
  if (
    !hostname ||
    BLOCKED_HOSTS.has(hostname) ||
    hostname.endsWith(".localhost")
  ) {
    throw new Error("URL hostname is not allowed.");
  }

  const addresses = await lookup(hostname, { all: true, verbatim: true });
  if (
    addresses.length === 0 ||
    addresses.some((entry) => isPrivateIp(entry.address))
  ) {
    throw new Error("URL must resolve only to public IP addresses.");
  }

  return parsed;
}

export async function fetchPublicText(
  rawUrl: string,
  options: PublicUrlOptions = {},
): Promise<{
  text: string;
  finalUrl: string;
  contentType: string | null;
  truncated: boolean;
}> {
  const maxRedirects = options.maxRedirects ?? DEFAULT_MAX_REDIRECTS;
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const maxBytes = options.maxBytes ?? DEFAULT_MAX_BYTES;
  let currentUrl = rawUrl;

  for (
    let redirectCount = 0;
    redirectCount <= maxRedirects;
    redirectCount += 1
  ) {
    const safeUrl = await assertPublicHttpUrl(currentUrl, options);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(safeUrl, {
        signal: controller.signal,
        redirect: "manual",
        headers: {
          "User-Agent": "SMB-AI-Builder-Action/1.0",
          Accept:
            "text/html,application/xhtml+xml,application/xml,text/xml,text/plain;q=0.9,*/*;q=0.5",
        },
      });

      const location = response.headers.get("location");
      if ([301, 302, 303, 307, 308].includes(response.status) && location) {
        currentUrl = new URL(location, safeUrl).toString();
        continue;
      }

      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}.`);
      }

      const contentType = response.headers.get("content-type");
      if (options.allowedContentTypes?.length && contentType) {
        const lower = contentType.toLowerCase();
        const allowed = options.allowedContentTypes.some((type) =>
          lower.includes(type.toLowerCase()),
        );
        if (!allowed) {
          throw new Error(`Unsupported content type: ${contentType}.`);
        }
      }

      if (!response.body) {
        return {
          text: "",
          finalUrl: response.url || safeUrl.toString(),
          contentType,
          truncated: false,
        };
      }

      const reader = response.body.getReader();
      const chunks: Uint8Array[] = [];
      let total = 0;
      let truncated = false;

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (!value) continue;

        total += value.byteLength;
        if (total > maxBytes) {
          const allowedBytes = value.byteLength - (total - maxBytes);
          if (allowedBytes > 0) chunks.push(value.slice(0, allowedBytes));
          truncated = true;
          await reader.cancel();
          break;
        }
        chunks.push(value);
      }

      const merged = new Uint8Array(
        chunks.reduce((sum, chunk) => sum + chunk.byteLength, 0),
      );
      let offset = 0;
      for (const chunk of chunks) {
        merged.set(chunk, offset);
        offset += chunk.byteLength;
      }

      return {
        text: new TextDecoder().decode(merged),
        finalUrl: response.url || safeUrl.toString(),
        contentType,
        truncated,
      };
    } finally {
      clearTimeout(timeout);
    }
  }

  throw new Error(
    `Too many redirects. Maximum allowed redirects: ${maxRedirects}.`,
  );
}

import type { ActionResult } from "../types/shared";

/**
 * Ensures the given URL string starts with standard web protocols.
 * @param url The input string.
 * @returns true if protocol is http or https.
 */
export function isHttpOrHttps(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Checks if a hostname resolves to a restricted private or local loopback context.
 * NOTE: This is a static lexical check and does not perform DNS resolution.
 * @param hostname The string host name.
 * @returns true if it is a private/local IP or hostname.
 */
export function isPrivateOrLocalHost(hostname: string): boolean {
  const lower = hostname.toLowerCase();

  // Basic host matching
  if (
    lower === "localhost" ||
    lower.endsWith(".localhost") ||
    lower === "metadata.google.internal"
  ) {
    return true;
  }

  // Very rudimentary IPv4 check just based on strings, e.g. 127.x.x.x
  if (
    lower.startsWith("127.") ||
    lower.startsWith("10.") ||
    lower.startsWith("192.168.") ||
    lower.startsWith("169.254.")
  ) {
    return true;
  }

  // 172.16.0.0/12 check
  if (lower.startsWith("172.")) {
    const parts = lower.split(".");
    if (parts.length === 4) {
      const secondOctet = parseInt(parts[1], 10);
      if (secondOctet >= 16 && secondOctet <= 31) {
        return true;
      }
    }
  }

  // Basic IPv6 loopback and link-local ranges
  if (
    lower === "::1" ||
    lower.startsWith("fc00:") ||
    lower.startsWith("fd00:") ||
    lower.startsWith("fe80:")
  ) {
    return true;
  }

  return false;
}

/**
 * Normalizes a URL input, coercing it to https if it's lacking a schema or uses http.
 * @param url the input URL.
 * @returns a safely formatted URL.
 */
export function normalizeUrl(url: string): string {
  let cleaned = url.trim();
  if (!cleaned.startsWith("http://") && !cleaned.startsWith("https://")) {
    cleaned = `https://${cleaned}`;
  }
  return cleaned;
}

/**
 * Asserts that a URL safely points to a public HTTP/HTTPS endpoint.
 * Note: DNS validation of dynamic resolution to private IPs is out of scope for this helper.
 * @param url the input URL to validate.
 * @returns ActionResult indicating validity or errors.
 */
export function assertSafePublicUrl(url: string): ActionResult<URL> {
  try {
    const parsed = new URL(url);

    if (!isHttpOrHttps(url)) {
      return {
        ok: false,
        errors: [
          {
            code: "INVALID_PROTOCOL",
            message: "Only HTTP and HTTPS protocols are allowed.",
            field: "url",
          },
        ],
      };
    }

    if (isPrivateOrLocalHost(parsed.hostname)) {
      return {
        ok: false,
        errors: [
          {
            code: "PRIVATE_HOST_FORBIDDEN",
            message: "Private or local network requests are not allowed.",
            field: "url",
          },
        ],
      };
    }

    if (parsed.username || parsed.password) {
      return {
        ok: false,
        errors: [
          {
            code: "CREDENTIALS_FORBIDDEN",
            message: "URLs with embedded credentials are not allowed.",
            field: "url",
          },
        ],
      };
    }

    return { ok: true, data: parsed };
  } catch {
    return {
      ok: false,
      errors: [
        {
          code: "INVALID_URL",
          message: "The provided URL is not valid.",
          field: "url",
        },
      ],
    };
  }
}

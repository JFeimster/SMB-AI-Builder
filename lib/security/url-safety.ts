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
  if (parts.length !== 4 || parts.some((part) => Number.isNaN(part))) return true;

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

export async function assertSafePublicUrl(rawUrl: string, options: PublicUrlOptions = {}): Promise<URL> {
  let parsed: URL;

  try {
    parsed = new URL(rawUrl);
  } catch {
    throw new Error("URL must be valid.");
  }

  const allowedProtocols = options.allowHttp ? ["https:", "http:"] : ["https:"];
  if (!allowedProtocols.includes(parsed.protocol)) {
    throw new Error(options.allowHttp ? "URL must use http or https." : "URL must use https.");
  }

  if (parsed.username || parsed.password) {
    throw new Error("URL credentials are not allowed.");
  }

  const hostname = parsed.hostname.toLowerCase();
  if (!hostname || BLOCKED_HOSTS.has(hostname) || hostname.endsWith(".localhost")) {
    throw new Error("URL hostname is not allowed.");
  }

  const addresses = await lookup(hostname, { all: true, verbatim: true });
  if (addresses.length === 0 || addresses.some((entry) => isPrivateIp(entry.address))) {
    throw new Error("URL must resolve only to public IP addresses.");
  }

  return parsed;
}

// Backward-compatible name used by existing route implementations.
export const assertPublicHttpUrl = assertSafePublicUrl;

export async function fetchPublicText(rawUrl: string, options: PublicUrlOptions = {}): Promise<{ text: string; finalUrl: string; contentType: string | null; truncated: boolean }> {
  const maxRedirects = options.maxRedirects ?? DEFAULT_MAX_REDIRECTS;
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const maxBytes = options.maxBytes ?? DEFAULT_MAX_BYTES;
  let currentUrl = rawUrl;

  for (let redirectCount = 0; redirectCount <= maxRedirects; redirectCount += 1) {
    const safeUrl = await assertSafePublicUrl(currentUrl, options);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(safeUrl, {
        signal: controller.signal,
        redirect: "manual",
        headers: {
          "User-Agent": "SMB-AI-Builder-Action/1.0",
          "Accept": "text/html,application/xhtml+xml,application/xml,text/xml,text/plain;q=0.9,*/*;q=0.5",
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
        const allowed = options.allowedContentTypes.some((type) => lower.includes(type.toLowerCase()));
        if (!allowed) {
          throw new Error(`Unsupported content type: ${contentType}.`);
        }
      }

      if (!response.body) {
        return { text: "", finalUrl: response.url || safeUrl.toString(), contentType, truncated: false };
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

      const merged = new Uint8Array(chunks.reduce((sum, chunk) => sum + chunk.byteLength, 0));
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

  throw new Error(`Too many redirects. Maximum allowed redirects: ${maxRedirects}.`);
}

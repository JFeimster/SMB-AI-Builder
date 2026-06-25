import { assertSafePublicUrl } from "../security/url-safety";

export interface FetchOptions {
  timeoutMs?: number;
  maxBytes?: number;
  maxRedirects?: number;
}

const DEFAULT_TIMEOUT_MS = 5000;
const DEFAULT_MAX_BYTES = 1024 * 1024; // 1MB
const DEFAULT_MAX_REDIRECTS = 3;

export async function safeFetchText(url: string, options: FetchOptions = {}): Promise<string> {
  const maxRedirects = options.maxRedirects ?? DEFAULT_MAX_REDIRECTS;
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const maxBytes = options.maxBytes ?? DEFAULT_MAX_BYTES;

  let currentUrl = url;

  for (let redirectCount = 0; redirectCount <= maxRedirects; redirectCount++) {
    const safeUrl = await assertSafePublicUrl(currentUrl, {
      allowHttp: true,
    });

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(safeUrl, {
        signal: controller.signal,
        redirect: "manual",
        headers: {
          "User-Agent": "SMB-AI-Builder/1.0",
        },
      });

      // Handle redirects manually
      const location = response.headers.get("location");
      if ([301, 302, 303, 307, 308].includes(response.status) && location) {
        currentUrl = new URL(location, safeUrl).toString();
        continue;
      }

      if (!response.ok) {
        throw new Error(`Fetch failed with status: ${response.status}`);
      }

      if (!response.body) {
        return "";
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let result = "";
      let bytesRead = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        if (value) {
          bytesRead += value.length;
          result += decoder.decode(value, { stream: true });

          if (bytesRead > maxBytes) {
            reader.cancel();
            break; // Stop reading once we hit max bytes
          }
        }
      }

      result += decoder.decode(); // flush remaining

      return result;
    } finally {
      clearTimeout(timeout);
    }
  }

  throw new Error(`Too many redirects. Maximum allowed redirects: ${maxRedirects}.`);
}

export async function safeFetchJson<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const text = await safeFetchText(url, options);
  return JSON.parse(text) as T;
}

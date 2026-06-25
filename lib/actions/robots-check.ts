import { ActionResult, RobotsCheckResponse } from "../types/actions";
import { safeFetchText } from "./_fetch";

export async function checkRobotsTxt(url: string, targetPath?: string): Promise<ActionResult<RobotsCheckResponse>> {
  if (!url) {
    return {
      success: false,
      error: "Website URL is required.",
    };
  }

  try {
    let robotsUrl = url;
    if (!url.endsWith('/robots.txt')) {
       try {
         const parsedUrl = new URL(url);
         robotsUrl = `${parsedUrl.origin}/robots.txt`;
       } catch {
         return {
           success: false,
           error: "Invalid URL format.",
         };
       }
    }

    const text = await safeFetchText(robotsUrl, { maxBytes: 1024 * 1024 }); // Read up to 1MB

    const lines = text.split('\n');
    const disallowedPaths: string[] = [];
    const sitemapLinks: string[] = [];

    let isUserAgentTarget = false;
    let anyUserAgentSection = false;

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;

      const lower = trimmed.toLowerCase();

      if (lower.startsWith('user-agent:')) {
        const agent = lower.substring(11).trim();
        if (agent === '*') {
          isUserAgentTarget = true;
          anyUserAgentSection = true;
        } else if (agent === 'smb-ai-builder' || agent === 'chatgpt-user') {
          // If we find our specific user agent or a common AI agent
          isUserAgentTarget = true;
          anyUserAgentSection = true;
        } else {
          // We are not this specific user agent
          isUserAgentTarget = false;
        }
      } else if (lower.startsWith('disallow:') && isUserAgentTarget) {
        const path = trimmed.substring(9).trim();
        if (path && !disallowedPaths.includes(path)) {
          disallowedPaths.push(path);
        }
      } else if (lower.startsWith('sitemap:')) {
        const sitemapUrl = trimmed.substring(8).trim();
        if (sitemapUrl && !sitemapLinks.includes(sitemapUrl)) {
          sitemapLinks.push(sitemapUrl);
        }
      }
    }

    // Default to true if no rules found for us
    let isAllowed = true;

    if (targetPath && disallowedPaths.length > 0) {
       for (const path of disallowedPaths) {
         if (path === '/') {
           isAllowed = false;
           break;
         }
         if (targetPath.startsWith(path)) {
           isAllowed = false;
           break;
         }
       }
    }

    return {
      success: true,
      data: {
        isAllowed,
        disallowedPaths,
        sitemapLinks,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch robots.txt.",
    };
  }
}

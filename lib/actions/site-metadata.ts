import { ActionResult, SiteMetadataResponse } from "../types/actions";
import { safeFetchText } from "./_fetch";

export async function extractWebsiteMetadata(url: string): Promise<ActionResult<SiteMetadataResponse>> {
  if (!url) {
    return {
      success: false,
      error: "URL is required.",
    };
  }

  try {
    const html = await safeFetchText(url, { maxBytes: 2 * 1024 * 1024 }); // Read up to 2MB

    // Simple RegEx parsing for metadata to avoid full DOM parsing and extra dependencies

    // Title
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : undefined;

    // Meta description
    const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                          html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
    const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : undefined;

    // Headings
    const h1s: string[] = [];
    const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
    let match;
    while ((match = h1Regex.exec(html)) !== null) {
      h1s.push(match[1].replace(/<[^>]+>/g, '').trim());
    }

    const h2s: string[] = [];
    const h2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
    let h2Count = 0;
    while ((match = h2Regex.exec(html)) !== null && h2Count < 5) {
      h2s.push(match[1].replace(/<[^>]+>/g, '').trim());
      h2Count++;
    }

    // Forms
    const formsDetected = (html.match(/<form/gi) || []).length;

    // CTAs (buttons or links containing typical CTA text)
    const ctaText: string[] = [];
    const buttonLinksRegex = /<(?:button|a)[^>]*>([\s\S]*?)<\/(?:button|a)>/gi;
    const commonCtaWords = ['contact', 'sign up', 'get started', 'buy', 'learn more', 'subscribe', 'download', 'book'];

    let ctaCount = 0;
    while ((match = buttonLinksRegex.exec(html)) !== null && ctaCount < 10) {
      const text = match[1].replace(/<[^>]+>/g, '').trim();
      const lowerText = text.toLowerCase();
      if (text.length > 2 && text.length < 30 && commonCtaWords.some(word => lowerText.includes(word))) {
        if (!ctaText.includes(text)) {
           ctaText.push(text);
           ctaCount++;
        }
      }
    }

    // Contact/Social links
    const contactLinks: string[] = [];
    const socialLinks = new Set<string>();

    const hrefRegex = /href=["']([^"']+)["']/gi;
    while ((match = hrefRegex.exec(html)) !== null) {
      const href = match[1];
      if (href.startsWith('mailto:') || href.startsWith('tel:') || href.includes('contact')) {
        if (!contactLinks.includes(href) && contactLinks.length < 5) {
          contactLinks.push(href);
        }
      } else if (href.includes('twitter.com') || href.includes('facebook.com') || href.includes('linkedin.com') || href.includes('instagram.com')) {
        if (socialLinks.size < 5 && !socialLinks.has(href)) {
          socialLinks.add(href);
        }
      }
    }

    return {
      success: true,
      data: {
        title,
        metaDescription,
        headings: {
          h1: h1s,
          h2: h2s,
        },
        formsDetected,
        ctaText,
        contactLinks,
        socialLinks: Array.from(socialLinks),
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to extract website metadata.",
    };
  }
}

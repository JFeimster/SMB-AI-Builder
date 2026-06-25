import { ActionResult, SitemapAnalysisResponse } from "../types/actions";
import { safeFetchText } from "./_fetch";

export async function analyzeSitemap(url: string, maxUrls: number = 100): Promise<ActionResult<SitemapAnalysisResponse>> {
  if (!url) {
    return {
      success: false,
      error: "Sitemap URL is required.",
    };
  }

  try {
    const xml = await safeFetchText(url, { maxBytes: 5 * 1024 * 1024 }); // Read up to 5MB

    const locRegex = /<loc>(.*?)<\/loc>/gi;
    const urls: string[] = [];
    let match;

    while ((match = locRegex.exec(xml)) !== null) {
      urls.push(match[1].trim());
    }

    const totalUrls = urls.length;
    const analyzedUrls = Math.min(totalUrls, maxUrls);
    const urlsToAnalyze = urls.slice(0, analyzedUrls);

    const likelyPageTypes: Record<string, number> = {
      blog: 0,
      product: 0,
      category: 0,
      service: 0,
      contact: 0,
      about: 0,
      other: 0,
    };

    for (const u of urlsToAnalyze) {
      const lowerUrl = u.toLowerCase();
      if (lowerUrl.includes('/blog/') || lowerUrl.includes('/post/') || lowerUrl.includes('/news/')) {
        likelyPageTypes.blog++;
      } else if (lowerUrl.includes('/product/') || lowerUrl.includes('/item/')) {
        likelyPageTypes.product++;
      } else if (lowerUrl.includes('/category/') || lowerUrl.includes('/collection/')) {
        likelyPageTypes.category++;
      } else if (lowerUrl.includes('/service/') || lowerUrl.includes('/services/')) {
        likelyPageTypes.service++;
      } else if (lowerUrl.includes('contact')) {
        likelyPageTypes.contact++;
      } else if (lowerUrl.includes('about')) {
        likelyPageTypes.about++;
      } else {
        likelyPageTypes.other++;
      }
    }

    // Filter out types with 0 count
    for (const key in likelyPageTypes) {
      if (likelyPageTypes[key] === 0) {
        delete likelyPageTypes[key];
      }
    }

    return {
      success: true,
      data: {
        totalUrls,
        analyzedUrls,
        likelyPageTypes,
        urls: urlsToAnalyze,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to analyze sitemap.",
    };
  }
}

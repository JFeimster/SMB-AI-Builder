# Robots and LLMs Crawler Notes

This document defines the strategy and guidelines for our crawler configuration files: `robots.txt` and `llms.txt`.

## Location
- `robots.txt` MUST reside in the repository root.
- `llms.txt` MUST reside in the repository root (or `/pages/seo-support/` if specified by current memory, but root is standard for direct crawler access. Standard memory states crawler files like robots and sitemaps must be root, while SEO support files like llms.txt and JSON-LD *can* be in `pages/seo-support/`. For safety, maintain root directives if required by crawlers).
- *Correction based on memory*: "SEO support files like llms.txt and JSON-LD schemas are maintained in the `pages/seo-support/` directory. However, crawler files `robots.txt` and `sitemap.xml` must reside in the repository root."

## robots.txt Strategy
- **Allow:** All standard search engines (Googlebot, Bingbot) to crawl the public HTML pages.
- **Sitemap Location:** Must explicitly declare the absolute path to the sitemap at the bottom of the file.
- **Disallow:** Prevent crawling of internal tool configuration files (`/tools/`), raw prompt files (`/prompts/`), or any private assets.

### Example robots.txt Draft
```text
User-agent: *
Allow: /
Disallow: /tools/
Disallow: /prompts/

Sitemap: https://smb-ai-builder.vercel.app/sitemap.xml
```

## llms.txt Strategy
- **Purpose:** Provide a clear, markdown-formatted summary of the site's purpose, rules, and canonical knowledge for AI crawlers (like OpenAI's bot, Anthropic's bot).
- **Content:**
  - Briefly state the project purpose (SMB AI Workflow & Agent Builder).
  - List core principles (audit before building, human-in-the-loop, no fake claims).
  - Provide links to canonical documentation or the primary CTA.
- **Location:** Managed in `pages/seo-support/llms.txt`.

### Example llms.txt Guidelines
- Keep it concise and semantic.
- Do not use HTML, use standard Markdown.
- Explicitly state the stance on sensitive workflows (requires human review).

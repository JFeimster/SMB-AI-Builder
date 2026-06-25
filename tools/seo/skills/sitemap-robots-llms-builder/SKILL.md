# sitemap-robots-llms-builder

## Purpose
To maintain the site's core crawling and AI indexing directives (`sitemap.xml`, `robots.txt`, and `llms.txt`), ensuring new content is discoverable by search engines and LLM agents.

## When to use this skill
- Whenever a new page is created and ready for indexation.
- When a page is permanently removed or relocated.
- When updating site-wide crawling rules.

## When not to use this skill
- During draft phases of page creation.

## Inputs SEO should collect
- The absolute URL of the newly created, updated, or removed page.
- The `lastmod` date.

## Files and folders this skill may touch
- `sitemap.xml` (Root)
- `robots.txt` (Root)
- `pages/seo-support/llms.txt`

## Source-of-truth files to read first
- `jules.json` (for the production domain).
- `tools/jules/jules-seo-rules.md`

## Process
1. **sitemap.xml**: Add or update the `<url>` entry with the `<loc>` (absolute URL) and `<lastmod>` date. Maintain valid XML structure.
2. **robots.txt**: Ensure the `Sitemap:` directive points to the absolute URL of the `sitemap.xml`. Verify no core pages are unintentionally blocked.
3. **llms.txt**: If the new page contains high-value contextual information for LLMs (e.g., safety rules, product capabilities), add a clean Markdown summary or link reference to `pages/seo-support/llms.txt`.

## Output requirements
- Valid, updated `sitemap.xml`, `robots.txt`, and `llms.txt` files.

## SEO safety rules
- Do not block `pages/seo/` or `/` in `robots.txt` unless explicitly instructed.
- All URLs in `sitemap.xml` must be absolute and point to the correct production domain.

## QA checklist
- [ ] Is `sitemap.xml` valid XML?
- [ ] Are all URLs in the sitemap absolute?
- [ ] Does `robots.txt` correctly reference the sitemap?
- [ ] Has `llms.txt` been updated if applicable?

## Common mistakes to avoid
- Forgetting to close XML tags in the sitemap, breaking the file.
- Using relative URLs (`/pages/seo/...`) in the sitemap instead of absolute URLs.

## Final response format
A confirmation that the crawler files have been updated, noting the specific URLs added or modified.

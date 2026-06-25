# Robots, Sitemap, and LLMs txt

## Purpose
Configure and audit the crawler and discoverability files (`robots.txt`, `sitemap.xml`, `llms.txt`) to ensure proper indexing and interaction with search engines and LLM crawlers.

## When to use this skill
- When preparing for a production Vercel deployment.
- When new pages or sections are added to the site.
- When restricting access to certain paths from crawlers.

## When not to use this skill
- When working on private or draft branches that are not meant to be indexed.

## Inputs Jules should collect
- The production absolute domain URL.
- A list of paths that should be excluded from crawling.

## Files and folders this skill may touch
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `pages/seo-support/` (for supplementary SEO files if applicable, though crawler files must be root)

## Source-of-truth files to read first
- `JULES.md`
- `vercel.json` (for routing rules)

## Process
1. **Audit `robots.txt`:**
   - Must reside in the repository root (or be generated at the root by Next.js).
   - Ensure it includes a `Sitemap` directive pointing to the absolute production URL.
   - Verify `Disallow` rules are correct for any private or API routes.
2. **Audit `sitemap.xml`:**
   - Must reside in the repository root (or be generated at the root).
   - Ensure all URLs use the correct absolute production domain (`https://smb-ai-builder.vercel.app`).
   - Confirm all valid public pages are included.
3. **Audit `llms.txt`:**
   - Ensure it exists to provide LLM-specific context or instructions for agents crawling the site.
   - Verify it does not contain sensitive system prompts or internal logic.
4. **Placeholder Replacement:**
   - Ensure no placeholder domains (e.g., `example.com`) remain in any of these files before deployment.

## Output requirements
- Valid `robots.txt`, `sitemap.xml`, and `llms.txt` files correctly configured for the production domain.
- A report confirming all placeholder URLs have been replaced.

## Security and privacy rules
- Never use `robots.txt` to "hide" sensitive files or secrets; it is a public file. Secure sensitive routes at the server/hosting level instead.
- Do not expose internal API structures unnecessarily in `sitemap.xml`.

## QA checklist
- [ ] Are `robots.txt` and `sitemap.xml` located at (or served from) the root?
- [ ] Does `robots.txt` point to the correct absolute sitemap URL?
- [ ] Are all URLs in the sitemap absolute production URLs?
- [ ] Is `llms.txt` present and free of sensitive information?

## Common mistakes to avoid
- Leaving `Disallow: /` in `robots.txt` for production deployments.
- Using relative paths in `sitemap.xml`.
- Placing `robots.txt` in a subfolder where crawlers won't find it.

## Final response format
Provide a summary of the crawler file audit, detailing any URLs updated to production standards and confirming root accessibility.

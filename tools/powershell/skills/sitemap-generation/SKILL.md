# Sitemap Generation

## Purpose
Audits existing sitemaps or generates template entries for new pages, ensuring domain placeholders are correct and all necessary SEO pages are included.

## When to use this skill
- When adding new SEO clusters or workflow pages.
- During site audits to ensure sitemap parity with actual file structures.

## When not to use this skill
- For generating dynamic sitemaps in Next.js (use App Router functionality for that). This is for static site management.

## Inputs PowerShell should collect
- Base domain URL.
- Directory containing HTML files to include.
- Path to existing `sitemap.xml` (if auditing).

## Files and folders this skill may touch
- `public/sitemap.xml` (Read/Write if generating)
- Target HTML directories (Read)

## Source-of-truth files to read first
- `README.md`
- `tools/seo/seo-rules.md` (if applicable)

## Process
1. Scan target directories for `.html` files.
2. If auditing: Compare discovered files against entries in the existing `sitemap.xml`. Flag missing or orphaned pages.
3. If generating: Construct XML `<url>` blocks using the base domain and relative file paths.
4. Verify no placeholder domains (like `example.com`) are present in production generation.

## Output requirements
- Audit report of missing/orphaned URLs.
- Or, raw XML output ready to be appended or saved to `sitemap.xml`.

## Safety rules
- **Do not overwrite** an existing `sitemap.xml` without explicit user instruction. Default to outputting to the console or a `.new.xml` file.
- Read-only for auditing.

## QA checklist
- [ ] Maps local paths to correct domain URLs?
- [ ] Audits against existing sitemap correctly?
- [ ] Checks for placeholder domains?

## Common mistakes to avoid
- Including build artifacts, components, or draft pages in the sitemap.
- Generating URLs with double slashes (e.g., `domain.com//page.html`).

## Final response format
Sitemap audit report or generated XML snippet for review.

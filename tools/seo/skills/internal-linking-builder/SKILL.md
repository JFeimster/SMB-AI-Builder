# internal-linking-builder

## Purpose
To build and maintain robust internal link clusters across the SMB AI Workflow & Agent Builder site, ensuring no page is orphaned and search engines can effectively crawl the hierarchy.

## When to use this skill
- When publishing a new page.
- When reorganizing content clusters.
- During an SEO content refresh or audit.

## When not to use this skill
- When updating metadata or sitemaps.

## Inputs SEO should collect
- The target page being added or updated.
- The `seo-keyword-map.md` to understand cluster relationships.

## Files and folders this skill may touch
- Any HTML file in `pages/` or the root directory.

## Source-of-truth files to read first
- `pages/seo-support/seo-keyword-map.md`
- `tools/jules/jules-seo-rules.md`

## Process
1. Verify the new or updated page has at least one contextual link pointing *to* it from a relevant parent or sibling page.
2. Verify the page contains links *out* to:
   - The Home page (`/index.html`).
   - Relevant sibling pages within its cluster.
   - The main product CTA.
3. Ensure relative link paths are accurate based on directory depth (e.g., `../../index.html`).
4. Ensure anchor text is descriptive and relevant to the target page, avoiding generic "click here" links.

## Output requirements
- Contextual HTML anchor (`<a>`) tags inserted into the relevant pages.

## SEO safety rules
- Do not spam internal links (keyword stuffing in anchor text).
- Avoid deceptive anchor text.

## QA checklist
- [ ] Is the page linked *from* at least one other page (not orphaned)?
- [ ] Does the page link *to* the Home page and cluster siblings?
- [ ] Are relative paths correct based on directory depth?
- [ ] Is the anchor text descriptive?

## Common mistakes to avoid
- Leaving a newly created page completely unlinked from the rest of the site (orphan page).
- Using incorrect relative paths, leading to 404 errors.

## Final response format
A summary of the internal links added, including the source page, target page, and the anchor text used.

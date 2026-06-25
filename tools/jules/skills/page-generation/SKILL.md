# page-generation

## Purpose
Create static product/tool pages.

## When to use this skill
- When requested to build standard site pages, tool pages, or landing pages.

## When not to use this skill
- When creating SEO-specific or workflow-specific pages (use `seo-generation`).
- When creating embeds (use `embed-generation`).

## Inputs Jules should collect
- Page topic and primary goal.
- Target path (e.g., `pages/site/` or `pages/tools/`).

## Files and folders this skill may touch
- `pages/site/`
- `pages/tools/`

## Source-of-truth files to read first
- JULES.md
- jules.json
- jules.qa.md
- jules.style.md
- tools/jules/*

## Process
1. Determine the path and relative path depth (for CSS/JS links).
2. Generate plain semantic HTML.
3. Ensure exactly one `<h1>` tag is present.
4. Add metadata (title, meta description).
5. Link to root `styles.css` and `script.js` using correct relative paths.
6. Insert the primary CTA URL and use approved CTA copy.
7. Apply neobrutalist/cyberpunk design classes if relevant.

## Output requirements
- A static HTML file at the requested path.

## Safety and claims rules
- This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Do not invent fake testimonials, fake reviews, fake ratings, fake logos, fake case studies, fake user counts, fake revenue numbers, fake guarantees, fake compliance claims, fake partner relationships, fake integrations, or unsupported competitor claims.

## QA checklist
- [ ] CSS/JS paths are relatively correct based on depth.
- [ ] Only one H1 tag exists.
- [ ] Page metadata is present.
- [ ] The primary CTA URL is used and not buried.
- [ ] No fake proof was included.

## Common mistakes to avoid
- Using absolute paths for CSS/JS.
- Adding fake testimonials to pad out the page.
- Using forbidden AI hype words in the copy.

## Final response format
Output the path of the created page, confirm CSS/JS links, and list any CTAs included.

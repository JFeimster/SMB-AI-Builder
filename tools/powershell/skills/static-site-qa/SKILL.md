# Static Site QA

## Purpose
Performs automated Quality Assurance checks on static HTML pages to ensure adherence to SEO, accessibility, and structural guidelines defined in the project.

## When to use this skill
- Before deploying a new batch of static SEO or workflow pages.
- As a local pre-commit check for front-end developers.

## When not to use this skill
- For dynamic Next.js App Router pages (which require build-time or runtime testing). This is strictly for static `.html` files.

## Inputs PowerShell should collect
- Path to the directory containing static HTML files to check (e.g., `pages/seo/`).

## Files and folders this skill may touch
- Static `.html` files (Read)

## Source-of-truth files to read first
- `tools/jules/JULES.md` (for SEO and HTML rules)
- `tools/qa/qa-checklist.md` (if applicable)

## Process
1. Locate target HTML files.
2. Parse HTML content (using regex or HTML agility tools if available in the PS environment).
3. Check for correct CSS paths (e.g., `<link rel="stylesheet">`).
4. Check for correct JS paths (e.g., `<script src="...">`).
5. Verify exactly one `<h1>` tag exists per page.
6. Verify essential metadata exists (`<title>`, `<meta name="description">`).
7. Verify primary CTAs are present and accessible.

## Output requirements
- A QA report per file, flagging missing H1s, metadata, broken asset paths, or missing CTAs.

## Safety rules
- Read-only operations. Do not auto-fix HTML.

## QA checklist
- [ ] Checks CSS/JS paths?
- [ ] Verifies single H1 rule?
- [ ] Checks for title and description metadata?
- [ ] Checks for CTA presence?

## Common mistakes to avoid
- Failing to handle multi-line HTML tags when using simple regex.
- Flagging valid relative asset paths as broken due to incorrect working directory assumptions.

## Final response format
A summarized QA report highlighting passed files and detailing specific rule violations for failed files.

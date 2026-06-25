# metadata-optimizer

## Purpose
To optimize and ensure the uniqueness and accuracy of all SEO metadata across the SMB AI Workflow & Agent Builder site, including titles, meta descriptions, canonical URLs, and Open Graph tags.

## When to use this skill
- During the final stages of page creation.
- When performing a content refresh or SEO audit.
- When addressing metadata duplication issues.

## When not to use this skill
- When writing the main body content of a page.

## Inputs SEO should collect
- The target HTML file(s).
- The target keyword for the page.

## Files and folders this skill may touch
- Any HTML file in `pages/`, `embeds/`, or the root directory.

## Source-of-truth files to read first
- `tools/jules/jules-seo-rules.md`
- `JULES.md`
- `jules.json`

## Process
1. Review the existing or drafted content to understand the page's core message.
2. Draft a unique `<title>` (under 60 characters).
3. Draft a unique `<meta name="description">` (between 120-155 characters).
4. Ensure the `<link rel="canonical">` points to the absolute deployed site URL (`https://smb-ai-builder.vercel.app/...`).
5. Draft `og:title` and `og:description` (usually matching the standard title/description).
6. Ensure `og:url` and `og:image` use absolute paths.
7. Inject the optimized metadata into the `<head>` of the target HTML file.

## Output requirements
- Fully optimized and injected metadata tags within the target HTML file.

## SEO safety rules
- Do not use fake ratings or reviews in meta descriptions to artificially inflate CTR.
- Ensure all canonical and OG URLs use the production domain, avoiding placeholders like `example.com`.

## QA checklist
- [ ] Is the title unique and < 60 characters?
- [ ] Is the meta description unique and 120-155 characters?
- [ ] Are canonical and OG URLs absolute?
- [ ] Does the metadata accurately reflect the page content without hype?

## Common mistakes to avoid
- Leaving placeholder URLs in canonical tags.
- Writing meta descriptions that sound like generic SaaS hype.

## Final response format
A summary of the optimized metadata applied to the target page(s).

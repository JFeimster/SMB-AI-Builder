# seo-generation

## Purpose
Create SEO pages and SEO support docs.

## When to use this skill
- When requested to create pages under `pages/seo/`, `pages/seo/workflows/`, or `pages/seo/comparisons/`.

## When not to use this skill
- When building standard site pages (use `page-generation`).

## Inputs Jules should collect
- Target keyword or topic.
- Search intent.
- Desired page type (e.g., workflow audit, comparison, general SEO).

## Files and folders this skill may touch
- `pages/seo/`
- `pages/seo/workflows/`
- `pages/seo/comparisons/`
- `pages/seo-support/`

## Source-of-truth files to read first
- JULES.md
- jules.json
- jules.qa.md
- jules.style.md
- tools/jules/*

## Process
1. Determine the path and relative path depth (for CSS/JS links).
2. Align content with search intent. Do not create thin doorway pages.
3. Generate semantic HTML including one `<h1>` and descriptive `<h2>`s.
4. Add unique `<title>` and `<meta name="description">`.
5. Include an FAQ section (4-6 questions) answering practical, real questions.
6. Inject valid JSON-LD schema (e.g., Article, FAQPage) in the `<head>`.
7. Include internal links to relevant pages.
8. Add a CTA band using the primary CTA.

## Output requirements
- A robust, search-intent aligned static HTML file.

## Safety and claims rules
- This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Do not invent fake testimonials, fake reviews, fake ratings, fake logos, fake case studies, fake user counts, fake revenue numbers, fake guarantees, fake compliance claims, fake partner relationships, fake integrations, or unsupported competitor claims.

## QA checklist
- [ ] Content meets search intent.
- [ ] FAQ section is included.
- [ ] JSON-LD is valid and included.
- [ ] Internal links are present.
- [ ] Page is not thin or boilerplate.

## Common mistakes to avoid
- Keyword stuffing.
- Using fake review schema or fake ratings.
- Failing to include the sensitive workflow disclaimer when writing about HR/Finance/Legal topics.

## Final response format
Output the path of the created page, list the H2s, confirm JSON-LD inclusion, and verify the FAQ section.

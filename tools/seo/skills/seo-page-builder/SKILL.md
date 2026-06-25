# seo-page-builder

## Purpose
To create the main SEO guide pages that serve as foundational content for the SMB AI Workflow & Agent Builder.

## When to use this skill
- When building core informational articles and guides.
- After a search intent brief has been created for a target keyword mapped to `pages/seo/`.

## When not to use this skill
- When building workflow audit pages (use `workflow-seo-builder`).
- When building comparison pages (use `comparison-seo-builder`).

## Inputs SEO should collect
- The approved page brief.
- The target keyword.

## Files and folders this skill may touch
- `pages/seo/[filename].html`

## Source-of-truth files to read first
- `tools/jules/jules-seo-rules.md`
- `JULES.md`
- `jules.style.md`

## Process
1. Use the approved page brief to structure the content.
2. Write the content using plain semantic HTML.
3. Ensure the tone is direct, anti-hype, and operator-friendly.
4. Include exactly one H1.
5. Create a descriptive, unique title and meta description.
6. Integrate 4-6 FAQs as planned in the brief.
7. Add internal links pointing to relevant sections of the site.
8. Embed the core product CTA band clearly.

## Output requirements
- A completed HTML file in `pages/seo/` that follows all structural and stylistic guidelines.

## SEO safety rules
- No thin doorway pages.
- No keyword stuffing.
- No fake claims, reviews, or testimonials.

## QA checklist
- [ ] Is the file located in `pages/seo/`?
- [ ] Is there exactly one H1?
- [ ] Are the title and meta description unique?
- [ ] Are there 4-6 FAQs included?
- [ ] Is the CTA band present and using the correct URL?
- [ ] Is the tone operator-friendly and anti-hype?

## Common mistakes to avoid
- Overusing buzzwords or hype language.
- Forgetting to include internal links or the main CTA.

## Final response format
A confirmation that the SEO guide page has been created, along with its path and a brief summary of its metadata.

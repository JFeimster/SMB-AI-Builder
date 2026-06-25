# jsonld-schema-builder

## Purpose
To generate and inject valid structured data (JSON-LD) into SEO pages to enhance search engine understanding, strictly avoiding deceptive schema tactics.

## When to use this skill
- After the content and FAQs of an SEO page have been finalized.
- When performing technical SEO updates to improve rich snippet eligibility.

## When not to use this skill
- Before the page content is finalized.
- When generating generic metadata like titles or descriptions.

## Inputs SEO should collect
- The final HTML content of the target page.
- The absolute URL of the page.

## Files and folders this skill may touch
- Any HTML file in `pages/` or the root directory.

## Source-of-truth files to read first
- `tools/jules/jules-seo-rules.md`
- `JULES.md`
- `jules.json`

## Process
1. Determine the appropriate schema types for the page (e.g., `Article`, `FAQPage`, `BreadcrumbList`, `SoftwareApplication`).
2. Generate valid JSON-LD for the selected schema types using the page's actual content.
3. For `FAQPage`, ensure every Question and Answer exactly matches the visible content on the page.
4. Inject the JSON-LD script block into the `<head>` of the HTML document.
5. Validate the JSON structure to ensure there are no syntax errors.

## Output requirements
- A valid `<script type="application/ld+json">` block injected into the target page.

## SEO safety rules
- **Absolutely NO fake `aggregateRating` or `Review` schema.**
- Schema content must perfectly match the visible content on the page.
- Do not mark up hidden content.

## QA checklist
- [ ] Is the JSON syntax valid?
- [ ] Are `Article`, `FAQPage`, or other relevant schemas included appropriately?
- [ ] Are fake `aggregateRating` and `Review` schemas strictly excluded?
- [ ] Does the `FAQPage` schema exactly match the visible FAQs?

## Common mistakes to avoid
- Leaving trailing commas in the JSON block, causing parsing errors.
- Adding `aggregateRating` to a page that has no actual user reviews.
- Schema drift (where the schema content is updated but the visible HTML content is not).

## Final response format
A confirmation that the JSON-LD schema has been built and injected, listing the specific schema types used on the page.

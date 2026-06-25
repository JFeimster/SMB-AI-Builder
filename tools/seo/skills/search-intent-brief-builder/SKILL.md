# search-intent-brief-builder

## Purpose
To create comprehensive page briefs that align with user search intent, ensuring each planned page for the SMB AI Workflow & Agent Builder has a clear structure and purpose.

## When to use this skill
- Before writing a new SEO page.
- When planning the structure of a specific topic.

## When not to use this skill
- When building the high-level keyword map.
- When doing final SEO QA.

## Inputs SEO should collect
- The target keyword and URL mapping from the keyword map.
- Information about the target audience for the page.

## Files and folders this skill may touch
- Generally creates output in the current context or saves briefs in `docs/` or `pages/seo-support/` as needed.

## Source-of-truth files to read first
- `pages/seo-support/seo-keyword-map.md`
- `JULES.md`
- `tools/jules/jules-seo-rules.md`

## Process
1. Identify the primary search intent for the target keyword.
2. Outline the H1 (one per page).
3. Plan the main sections (H2s) to thoroughly cover the topic.
4. Draft 4-6 practical FAQs relevant to the topic.
5. Plan internal links to other relevant pages within the site.
6. Specify the CTA and its placement within the content.

## Output requirements
- A page brief containing: target keyword, H1, sections (H2s), FAQs, internal links, and CTA.

## SEO safety rules
- Do not plan for fake testimonials, reviews, or unsupported claims in the sections.
- Ensure the brief aligns with a helpful, practical, and operator-friendly voice.

## QA checklist
- [ ] Is there exactly one H1 planned?
- [ ] Are the planned H2s descriptive and logically ordered?
- [ ] Are there 4-6 practical FAQs included?
- [ ] Are internal links specified?
- [ ] Is a clear CTA included?

## Common mistakes to avoid
- Creating a brief that doesn't answer the user's primary search intent.
- Planning for keyword stuffing in headings or content.

## Final response format
The completed search intent page brief, structured clearly with headings for each required element.

# workflow-seo-builder

## Purpose
To create structured workflow audit SEO pages that guide users on how to audit specific business workflows before attempting AI automation.

## When to use this skill
- When creating content specifically mapped to `pages/seo/workflows/`.
- When targeting Primary Commercial keywords related to workflow audits and automation readiness.

## When not to use this skill
- When building general SEO guides (use `seo-page-builder`).
- When creating comparison pages (use `comparison-seo-builder`).

## Inputs SEO should collect
- The target workflow to audit.
- The approved page brief.

## Files and folders this skill may touch
- `pages/seo/workflows/[filename].html`

## Source-of-truth files to read first
- `tools/jules/jules-seo-rules.md`
- `JULES.md`
- `jules.json` (for sensitive workflow disclaimers)

## Process
1. Follow the required structure for workflow pages:
   - H1: "Audit Your [Workflow] Before Automating It With AI"
   - Why it's tempting to automate
   - What can go wrong
   - What the GPT checks
   - Readiness factors
   - Suggested safe pilot
   - Human review checkpoints
2. Write the content using plain semantic HTML.
3. Ensure the tone is direct, safety-aware, and operator-friendly.
4. If the workflow is sensitive (finance, legal, HR, etc.), include the explicit disclaimer from `jules.json`.
5. Include 3-5 FAQs.
6. Add the CTA band.

## Output requirements
- A completed HTML file in `pages/seo/workflows/` adhering strictly to the workflow audit structure.

## SEO safety rules
- No fake guarantees of automation outcomes.
- Sensitive workflows must have clear recommendations for human-in-the-loop and human review checkpoints.

## QA checklist
- [ ] Is the H1 formatted correctly?
- [ ] Are all required sections present?
- [ ] Is the sensitive workflow disclaimer included if applicable?
- [ ] Are 3-5 FAQs included?
- [ ] Is the CTA band present?

## Common mistakes to avoid
- Recommending full automation for sensitive processes without human oversight.
- Deviating from the required H1 and section structure.

## Final response format
A confirmation that the workflow audit SEO page has been created, noting its path and whether a sensitive workflow disclaimer was required.

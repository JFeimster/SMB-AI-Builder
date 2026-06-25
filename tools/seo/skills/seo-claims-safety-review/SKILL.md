# seo-claims-safety-review

## Purpose
To enforce absolute truthfulness across the SMB AI Workflow & Agent Builder site by meticulously reviewing SEO pages for fake proof, unsupported comparisons, and risky compliance claims.

## When to use this skill
- Before finalizing and publishing any new page.
- During a comprehensive content refresh.
- When reviewing a PR or draft from another agent.

## When not to use this skill
- Never skip this skill before publishing. (There is no "when not to use" before a release).

## Inputs SEO should collect
- The drafted or existing HTML content.

## Files and folders this skill may touch
- Any HTML file being reviewed (read/edit).

## Source-of-truth files to read first
- `jules.json` (specifically `forbiddenClaims` and `sensitiveWorkflowDisclaimer`).
- `JULES.md`

## Process
1. Scan the text for any mentions of testimonials, reviews, or user quotes. If they exist, verify their authenticity or remove them (the project currently uses NO fake proof).
2. Scan for quantitative claims (e.g., "saves 10 hours a week", "100% compliance"). Remove if unsupported.
3. Review competitor comparisons (e.g., against Zapier). Ensure they are balanced and do not invent integration features.
4. Check if the page discusses sensitive workflows (finance, HR, legal, etc.).
5. If it does, ensure the exact `sensitiveWorkflowDisclaimer` from `jules.json` is visible and prominently placed.
6. Ensure no guarantees of automation outcomes are made.

## Output requirements
- A marked-up file with risky claims removed, or a clean bill of health report.

## SEO safety rules
- Zero tolerance for fake testimonials, fake ratings, or fake reviews.
- Zero tolerance for offering legal, financial, or medical advice.

## QA checklist
- [ ] Are all testimonials/reviews verified or removed?
- [ ] Are quantitative claims supported?
- [ ] Are competitor comparisons objective and attack-free?
- [ ] Is the sensitive workflow disclaimer present if required?

## Common mistakes to avoid
- Letting generic AI-generated fluff slip through that implies a guarantee ("This will solve all your HR problems").
- Missing subtle fake proof like "Trusted by 10,000 users".

## Final response format
A safety report detailing any claims removed or modified, and a final confirmation that the page is safe to publish.

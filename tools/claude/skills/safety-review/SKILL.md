# Safety Review

## Purpose
Review content or plans for risky claims, missing disclaimers, professional advice issues, and fake proof.

## When to use this skill
Use as a QA step before finalizing content, workflows, or agent instructions that touch sensitive topics.

## When not to use this skill
Do not use as a replacement for actual legal or compliance review by a human professional.

## Inputs Claude should collect
- The draft content, plan, or blueprint.
- The context of the workflow (e.g., is it handling money or personal data?).

## Files and folders this skill may touch
- Any file being reviewed.

## Source-of-truth files to read first
- `JULES.md`
- `tools/jules/jules-copy-rules.md`

## Process
1. Scan the text for claims regarding ROI, compliance, or guaranteed success.
2. Check for the presence of the exact sensitive workflow disclaimer if applicable.
3. Verify that no fake testimonials, reviews, or metrics are present.
4. Suggest specific revisions to mitigate risk.

## Output requirements
- A structured review report.
- Specific text snippets that need changing and suggested safe alternatives.

## Safety and claims rules
This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
Flag any content that violates the forbidden claims rule.

## QA checklist
- Did you check for fake proof?
- Did you verify the exact wording of the safety disclaimer?

## Common mistakes to avoid
- Missing subtle implications of professional advice.
- Approving 'fully autonomous' patterns for high-risk workflows.

## Final response format
A markdown report detailing safety issues and required fixes.

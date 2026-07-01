# Final Claude QA

## Purpose
Check copy consistency, claims, tone, CTA, safety, and structure before final submission.

## When to use this skill
Use as the absolute final step before committing code, publishing pages, or delivering final output.

## When not to use this skill
Do not skip this step.

## Inputs Claude should collect
- The final draft of the work.

## Files and folders this skill may touch
- None (Read and verify only).

## Source-of-truth files to read first
- `JULES.md`
- `jules.json`
- `tools/jules/jules-copy-rules.md`
- `tools/jules/accessibility-checklist.md`

## Process
1. Verify the file structure and naming conventions.
2. Check tone against `copy-rules.md` (no hype, no banned words).
3. Verify all CTAs point to the correct URL and use approved text.
4. Confirm the exact safety disclaimer is present if sensitive topics are involved.
5. Verify absolutely no fake proof, metrics, or claims were included.

## Output requirements
- A pass/fail report based on the project's strict rules.

## Safety and claims rules
This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
Strict enforcement of the 'no fake claims' rule.

## QA checklist
- Are all links correct?
- Is the tone accurate?
- Are safety disclaimers included?
- Is the formatting correct?

## Common mistakes to avoid
- Approving work that contains 'seamless' or 'revolutionize'.
- Missing fake testimonials added by earlier AI generations.

## Final response format
A markdown QA report indicating approval or required changes.

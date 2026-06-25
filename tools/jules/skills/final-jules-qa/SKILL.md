# final-jules-qa

## Purpose
Final cross-file QA.

## When to use this skill
- At the very end of any task sequence, immediately before submitting changes.

## When not to use this skill
- During active drafting or intermediate reviews.

## Inputs Jules should collect
- The list of files modified during the task.

## Files and folders this skill may touch
- All files modified during the task sequence.
- `tools/jules/qa-checklist.md`

## Source-of-truth files to read first
- JULES.md
- jules.json
- jules.qa.md
- jules.style.md
- tools/jules/*

## Process
1. Verify that all expected files were created or updated successfully.
2. If JSON files were touched, ensure syntax is completely valid.
3. Check that all internal and relative links (including CSS/JS references) resolve correctly.
4. Confirm the primary CTA URL is correct and functions as expected.
5. Do a final sweep to ensure no safety boundaries were breached and no fake claims were added.
6. Verify headings and standard file structures are consistent.

## Output requirements
- A final confirmation that all rules, links, and structures meet the repository standards.

## Safety and claims rules
- This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Do not invent fake testimonials, fake reviews, fake ratings, fake logos, fake case studies, fake user counts, fake revenue numbers, fake guarantees, fake compliance claims, fake partner relationships, fake integrations, or unsupported competitor claims.

## QA checklist
- [ ] Expected files exist.
- [ ] JSON valid.
- [ ] Links work.
- [ ] CTA correct.
- [ ] Safety rules present.

## Common mistakes to avoid
- Skipping this final check and committing broken links or invalid JSON.
- Forgetting to verify relative paths based on depth.

## Final response format
Provide a summary of the final QA check, noting any last-minute fixes applied before finalizing the task.

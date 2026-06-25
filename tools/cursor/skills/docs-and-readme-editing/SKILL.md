# docs-and-readme-editing

## Purpose
Update repository documentation cleanly while adhering strictly to the product voice and safety constraints.

## When to use this skill
When updating `README.md`, architecture notes, setup guides, or any markdown files in the `docs/` folder.

## When not to use this skill
When modifying executable code or prompt files.

## Inputs Cursor should collect
- Target markdown file.
- `tools/jules/style-guide.md` for voice constraints.
- `jules.json` for forbidden claims and approved phrases.

## Files and folders this skill may touch
- `README.md`
- `docs/**`
- Architecture notes and setup docs.

## Source-of-truth files to read first
- `JULES.md`
- `tools/jules/jules.json`
- `tools/jules/style-guide.md`

## Process
1. Review the existing documentation style.
2. Draft the new documentation ensuring a direct, operator-friendly, anti-hype voice.
3. Validate that no forbidden claims (e.g., fake integrations, fake metrics) are introduced.
4. Ensure Markdown formatting is clean and readable.
5. Apply the edits.

## Output requirements
Clear, practical, and factual documentation updates.

## Safety and claims rules
- Do not invent fake proof, fake integrations, fake deployment success, fake customers, fake ratings, fake reviews, or fake revenue claims.
- Voice must be direct, operator-friendly, anti-hype, and safety-aware.

## QA checklist
- [ ] No fake claims invented.
- [ ] Voice adheres to the anti-hype guidelines.
- [ ] Markdown syntax is valid.
- [ ] Setup docs are accurate to the current codebase.

## Common mistakes to avoid
- Adding marketing buzzwords (e.g., "revolutionize", "seamless").
- Writing overly theoretical documentation instead of practical, operator-friendly steps.

## Final response format
"Documentation updated according to voice and safety rules."

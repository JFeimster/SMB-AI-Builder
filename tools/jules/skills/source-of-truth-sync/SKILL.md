# source-of-truth-sync

## Purpose
Keep JULES.md, jules.json, jules.qa.md, jules.style.md, and tools/jules docs aligned.

## When to use this skill
- When updating overarching rules, project scope, design systems, or directory mappings.
- When there's a discrepancy noticed between source-of-truth files.

## When not to use this skill
- When updating specific site pages, code files, or localized scripts.

## Inputs Jules should collect
- The rule or mapping change requested.
- Existing copies of the relevant source-of-truth files.

## Files and folders this skill may touch
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/qa-checklist.md`
- `tools/jules/style-guide.md`
- `tools/jules/file-map.json`
- `tools/jules/page-blueprints.json`
- `tools/jules/copy-rules.md`
- `tools/jules/seo-rules.md`
- `tools/jules/accessibility-checklist.md`

## Source-of-truth files to read first
- JULES.md
- jules.json
- jules.qa.md
- jules.style.md
- tools/jules/*

## Process
1. Read the proposed change.
2. Identify all source-of-truth files that need to be updated. (e.g., a style change affects both `JULES.md` and `style-guide.md`).
3. Update related files safely by ensuring JSON remains valid and Markdown formatting stays consistent.
4. Compare human-readable files (like `JULES.md`) with machine-readable files (like `jules.json`) to avoid drift.
5. Report any pre-existing mismatches found during the process.

## Output requirements
- Synchronized updates across all relevant source-of-truth files.
- A summary of which files were touched.

## Safety and claims rules
- This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Do not invent fake testimonials, fake reviews, fake ratings, fake logos, fake case studies, fake user counts, fake revenue numbers, fake guarantees, fake compliance claims, fake partner relationships, fake integrations, or unsupported competitor claims.

## QA checklist
- [ ] Confirmed `jules.json` syntax is valid.
- [ ] Confirmed changes in `.md` files mirror `.json` where applicable.
- [ ] Checked for conflicting rules.

## Common mistakes to avoid
- Updating a rule in `JULES.md` but forgetting to add it to `jules.json`.
- Introducing JSON syntax errors when updating `jules.json` or `file-map.json`.

## Final response format
Provide a list of files updated, specific changes made, and any discrepancies that were resolved or require user attention.

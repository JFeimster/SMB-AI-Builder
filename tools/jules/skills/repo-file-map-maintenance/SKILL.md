# repo-file-map-maintenance

## Purpose
Maintain jules-file-map and project folder references.

## When to use this skill
- When requested to audit or update the repository's folder structure definitions.
- When new top-level directories are added or core paths are changed.

## When not to use this skill
- When updating overarching product rules or design systems (use `source-of-truth-sync`).

## Inputs Jules should collect
- Requested structural changes.
- Current state of the repository directories.

## Files and folders this skill may touch
- `tools/jules/file-map.json`
- `tools/jules/jules.json` (folders block)
- `tools/jules/JULES.md` (folder rules section)

## Source-of-truth files to read first
- JULES.md
- jules.json
- jules.qa.md
- jules.style.md
- tools/jules/*

## Process
1. Review the proposed path modifications.
2. Validate that the paths exist or are approved for creation.
3. Detect any missing folders referenced in the map.
4. Avoid conflicting folder structures (e.g., mixing static paths with App Router paths improperly).
5. Update `file-map.json` and ensure JSON validity.
6. Trigger `source-of-truth-sync` if updates are needed in `JULES.md` or `jules.json`.

## Output requirements
- An updated, validated file map documenting core repository paths.

## Safety and claims rules
- This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Do not invent fake testimonials, fake reviews, fake ratings, fake logos, fake case studies, fake user counts, fake revenue numbers, fake guarantees, fake compliance claims, fake partner relationships, fake integrations, or unsupported competitor claims.

## QA checklist
- [ ] Paths validated against physical repository layout.
- [ ] No conflicting structures introduced.
- [ ] JSON format is correct.
- [ ] Related docs updated if necessary.

## Common mistakes to avoid
- Leaving references to deprecated folders.
- Creating invalid JSON syntax in `file-map.json`.

## Final response format
Output a list of the paths added, modified, or removed from the file map, and state the status of JSON validation.

# multi-file-edit-planning

## Purpose
Plan edits across multiple files before making any actual code changes.

## When to use this skill
When a task involves modifying APIs, shared interfaces, routing, or components that affect multiple files simultaneously.

## When not to use this skill
When a change is strictly localized to a single file with no external dependencies.

## Inputs Cursor should collect
- Task requirements.
- Full list of files impacted by the change.
- Current state of the affected files.

## Files and folders this skill may touch
- None directly for planning, but prepares to edit any project files.

## Source-of-truth files to read first
- `README.md`
- `JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`

## Process
1. Analyze the requested change and determine all files that will be impacted.
2. Outline a step-by-step plan detailing which file will be edited and what the edit will be.
3. Review the plan to ensure no dependencies are missed and the system will remain stable after the changes.
4. Verify the plan adheres to the style guide, voice, and rules.

## Output requirements
A structured, multi-step plan detailing the files to be touched and the specific logic/content changes for each.

## Safety and claims rules
- Do not invent fake proof, fake integrations, fake deployment success, fake customers, fake ratings, fake reviews, or fake revenue claims.
- Maintain a direct, operator-friendly, anti-hype, and safety-aware voice.

## QA checklist
- [ ] Identified all files needing modification.
- [ ] Ensured sequential logic (e.g., update interface before updating implementations).

## Common mistakes to avoid
- Starting edits without identifying all impacted files, leading to incomplete refactors and broken builds.
- Missing updates to central exports or configuration files (like Next.js layouts or static asset links).

## Final response format
"Multi-file edit plan formulated. Ready to execute changes."

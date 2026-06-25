# context-gathering

## Purpose
Teach Cursor to thoroughly inspect related files and gather full context before making code changes.

## When to use this skill
When preparing to edit a specific file or module, to ensure dependencies, imports, and related components are understood.

## When not to use this skill
When performing trivial text replacements where context is already known.

## Inputs Cursor should collect
- The target file to be edited.
- Files importing the target file.
- Files imported by the target file.

## Files and folders this skill may touch
- Any file in the repository being analyzed for dependencies.

## Source-of-truth files to read first
- `README.md`
- `JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`

## Process
1. Identify the file to be edited.
2. Search the repository for references to this file to identify dependents.
3. Read the imports within the file to identify dependencies.
4. Review relevant documentation (`JULES.md`, `style-guide.md`) related to the domain of the file.
5. Synthesize the context to ensure the planned change won't break dependents.

## Output requirements
An internal understanding or brief summary of the impact the intended change will have on the broader system.

## Safety and claims rules
- Do not invent fake proof, fake integrations, fake deployment success, fake customers, fake ratings, fake reviews, or fake revenue claims.
- Voice must be direct, operator-friendly, anti-hype, and safety-aware.

## QA checklist
- [ ] Checked imported dependencies.
- [ ] Checked where the file is used across the repo.

## Common mistakes to avoid
- Editing a shared component or utility without checking its usage in other files.
- Ignoring global styling or scripting conventions defined in `styles.css` or `script.js`.

## Final response format
"Context gathered. Ready to formulate an edit plan."

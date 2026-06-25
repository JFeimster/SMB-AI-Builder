# cursor-orientation

## Purpose
Explain how Cursor should understand the repo structure before making any edits.

## When to use this skill
At the beginning of any task to map out the repository architecture and conventions.

## When not to use this skill
When the task strictly requires no filesystem inspection or you already hold full context.

## Inputs Cursor should collect
- File tree structure.
- Key configuration files (`jules.json`, `tools/jules/file-map.json`).
- Key documentation (`README.md`, `JULES.md`).

## Files and folders this skill may touch
- `README.md`
- `tools/jules/*`
- `tools/cursor/*`

## Source-of-truth files to read first
- `README.md`
- `JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/qa-checklist.md`
- `tools/jules/style-guide.md`

## Process
1. Inspect the root level files.
2. Read `README.md` and `JULES.md`.
3. Check `tools/jules/jules.json` for project rules and `tools/jules/file-map.json` for folder paths.
4. Establish the operational boundaries, audience, voice, and constraints.

## Output requirements
A clear internal or external summary of the repository structure and constraints before proceeding with further actions.

## Safety and claims rules
- Do not invent fake proof, fake integrations, fake deployment success, fake customers, fake ratings, fake reviews, or fake revenue claims.
- Maintain a direct, operator-friendly, anti-hype, and safety-aware voice.

## QA checklist
- [ ] Confirmed understanding of repo layout.
- [ ] Identified key source-of-truth files.

## Common mistakes to avoid
- Jumping straight to code edits without reading `JULES.md` and constraints.
- Assuming standard directory structures instead of looking at `file-map.json`.

## Final response format
"Orientation complete. Ready to proceed with edits."

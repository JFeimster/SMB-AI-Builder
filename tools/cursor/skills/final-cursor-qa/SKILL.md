# final-cursor-qa

## Purpose
Execute a comprehensive final quality assurance check across the entire scope of changes before completing a task.

## When to use this skill
At the very end of any task that modifies code, content, or configuration.

## When not to use this skill
When a task is abandoned or no files were modified.

## Inputs Cursor should collect
- All modified files.
- Build/lint scripts defined in `package.json` (if applicable).
- `tools/jules/qa-checklist.md`.

## Files and folders this skill may touch
- None (read-only execution and terminal commands).

## Source-of-truth files to read first
- `README.md`
- `JULES.md`
- `tools/jules/qa-checklist.md`

## Process
1. Run build and lint commands if available in the repository.
2. Verify all file and resource paths (e.g., CSS, JS, images) are correct relative to their directories.
3. Check all modified files against the project rules to ensure no fake claims were introduced.
4. Scan all diffs to confirm no API keys, tokens, or secrets are exposed.
5. Confirm exactly and only the expected files were changed.

## Output requirements
A boolean confirmation of quality and safety, or a list of required fixes to be addressed immediately.

## Safety and claims rules
- No fake claims, proof, or metrics.
- No secrets committed.
- Sensitive workflow disclaimers intact where required.

## QA checklist
- [ ] Build/lint passes (if available).
- [ ] File paths are correct.
- [ ] No fake claims.
- [ ] No secrets exposed.
- [ ] Only expected files were modified.

## Common mistakes to avoid
- Trusting that code works just because it looks correct without running available linters/builds.
- Ignoring modified files that weren't part of the original plan.

## Final response format
"Final QA complete. All checks passed and task is ready for submission."

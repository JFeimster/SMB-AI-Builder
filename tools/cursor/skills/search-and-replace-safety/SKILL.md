# search-and-replace-safety

## Purpose
Perform multi-file search and replace operations safely without unintended collateral damage.

## When to use this skill
When renaming a variable, updating a global URL, or modifying a consistent string across multiple files.

## When not to use this skill
When context-dependent semantic changes are required that cannot be captured by a simple string match.

## Inputs Cursor should collect
- Exact search string/regex.
- Exact replacement string.
- Scope of files to search.

## Files and folders this skill may touch
- Any file matching the search parameters.

## Source-of-truth files to read first
- `README.md`
- `JULES.md`

## Process
1. Define an exact, highly specific search pattern.
2. Preview the matches to identify any unintended captures (e.g., matching `user` inside `username`).
3. Refine the pattern if unintended matches are found.
4. Execute the replacement.
5. Inspect the generated diffs to verify correctness.

## Output requirements
Target strings replaced exactly, with zero unintended modifications to surrounding code.

## Safety and claims rules
- Ensure replaced text (e.g., URLs) adheres to project requirements and does not point to fake resources.
- Maintain voice and tone if replacing copy.

## QA checklist
- [ ] Search pattern was exact.
- [ ] Diffs inspected for unintended replacements.
- [ ] Build/lint still passes (if applicable).

## Common mistakes to avoid
- Using broad string matches that accidentally replace parts of unrelated words or variables.
- Failing to inspect diffs before committing the changes.

## Final response format
"Search and replace executed safely. Diffs verified."

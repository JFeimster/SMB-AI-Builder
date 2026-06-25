# git-diff-review

## Purpose
Systematically review generated code diffs before finalization to ensure quality and prevent unintended modifications.

## When to use this skill
After any code modification or file creation step, prior to committing or calling a task complete.

## When not to use this skill
When simply reading files without making changes.

## Inputs Cursor should collect
- List of changed files (`git status`).
- The actual diffs (`git diff`).

## Files and folders this skill may touch
- None (read-only action).

## Source-of-truth files to read first
- `README.md`
- `JULES.md`
- `tools/jules/qa-checklist.md`

## Process
1. Run `git status` to get a list of all modified, added, or deleted files.
2. Confirm the list matches the expected scope of the task.
3. Review the actual diffs for each file.
4. Detect and revert any unintended edits, accidental deletions, or formatting anomalies.
5. Summarize the changes clearly.

## Output requirements
A clear summary of verified changes and confirmation that no unexpected files were touched.

## Safety and claims rules
- Ensure no sensitive information or secrets have been accidentally added to the diff.
- Verify that claims in modified files still adhere to project rules.

## QA checklist
- [ ] Only expected files were modified.
- [ ] Diffs contain exactly the intended logic changes.
- [ ] No formatting regressions introduced.
- [ ] Summarized changes correctly.

## Common mistakes to avoid
- Skipping diff review and committing unintended files (like `.DS_Store` or `.env` files).
- Overlooking accidental deletions of required logic or closing tags.

## Final response format
"Git diff review complete. All changes are expected and verified."

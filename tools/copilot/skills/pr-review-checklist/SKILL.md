# pr-review-checklist

## Purpose
To assist the developer in preparing code changes for a Pull Request, ensuring all standards are met, tests are passing, and documentation is updated.

## When to use this skill
- When preparing to commit and push a feature or fix.
- When reviewing the diff of a completed task.

## When not to use this skill
- During active early development or prototyping.

## Inputs Copilot should collect
- The `git diff` or list of changed files.
- The intent of the PR.

## Files and folders this skill may touch
- Reads across modified files. May suggest edits to `README.md` or documentation if applicable.

## Source-of-truth files to read first
- `README.md`
- `.github/pull_request_template.md` (if it exists).

## Process
1. Review the changed files against the project guidelines.
2. Verify that test files have been created or updated for changed logic.
3. Check that no secrets or fake credentials have been introduced in the diff.
4. Identify any known limitations or follow-up tasks required.
5. Generate a summary of the changes suitable for a PR description.

## Output requirements
- A structured review of PR readiness.
- A draft PR description.

## Security and safety rules
- Final check: Ensure absolutely no secrets or unauthorized dependencies are in the diff.
- Verify that sensitive workflow guidelines are respected in examples.

## QA checklist
- [ ] Are changed files summarized?
- [ ] Is test coverage status noted?
- [ ] Is the "no secrets" rule explicitly verified?
- [ ] Are known limitations documented?

## Common mistakes to avoid
- Generating a generic PR description that doesn't accurately reflect the specific changes.
- Failing to highlight missing tests for new logic.

## Final response format
A Markdown-formatted checklist and draft PR description.

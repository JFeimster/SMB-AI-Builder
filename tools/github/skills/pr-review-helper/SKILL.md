# Skill: PR Review Helper

## Purpose
Assists in reviewing Pull Requests by providing structured checklists and automated checks.

## Use When
When preparing a PR for submission or reviewing an open PR.

## Inputs Needed
- PR description and goals
- List of changed files or a diff
- Project coding standards

## Outputs
- A PR review checklist tailored to the changes
- Identification of potential risks or regressions
- Suggestions for testing the changes

## Procedure
1. Analyze the PR scope and changed files.
2. Generate a checklist covering code quality, testing, documentation, and deployment impacts.
3. Highlight any critical files modified (e.g., configuration, core logic) that require extra scrutiny.
4. Suggest specific manual tests to verify the changes.
5. Apply safety rules.

## Safety / Human Review
- Do not claim to automatically merge or approve PRs.
- Focus on operator readiness and safety.

## Quality Checklist
- [ ] Checklist covers relevant areas (code, docs, tests)?
- [ ] Critical file changes are flagged?
- [ ] Manual testing steps are actionable?

## Example Prompt
```
I am about to open a PR that updates our main navigation menu and adds three new landing pages. What should I check before I submit it for review?
```

## Related Tool Docs
- [GitHub Tool Docs](../../README.md)

## Related Site Pages
- [GitHub Pages](../../../../pages/tools/github)

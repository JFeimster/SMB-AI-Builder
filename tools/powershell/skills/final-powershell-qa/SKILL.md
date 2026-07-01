# Final PowerShell QA

## Purpose
Runs a comprehensive, final scripted QA checklist utilizing other PowerShell skills to ensure the repository is clean, valid, and ready for submission or deployment.

## When to use this skill
- As the final step before completing a major task or preparing a Pull Request.

## When not to use this skill
- For quick, iterative checks during development (it may be too comprehensive and slow).

## Inputs PowerShell should collect
- Scope of the QA run (e.g., "all files", or specific changed paths).

## Files and folders this skill may touch
- Entire repository (Read-only execution of other checks).

## Source-of-truth files to read first
- `tools/qa/qa-checklist.md`
- `JULES.md`

## Process
1. Execute `windows-repo-setup` checks.
2. Execute `json-validation` on configuration files.
3. Execute `xml-validation` on sitemaps.
4. Execute `link-checking` on modified docs/pages.
5. Execute `static-site-qa` on modified static pages.
6. Compile all results into a single final report.

## Output requirements
- A consolidated QA report showing overall Pass/Fail status and detailed results from each sub-check.

## Safety rules
- Orchestrates read-only checks. Does not perform auto-fixes.

## QA checklist
- [ ] Incorporates JSON validation?
- [ ] Incorporates XML validation?
- [ ] Incorporates Link checking?
- [ ] Incorporates Static Site QA?
- [ ] Compiles a readable final report?

## Common mistakes to avoid
- Failing to halt or flag the final report as "Failed" if a critical sub-check fails.
- Generating excessively long output that obscures the actual failures.

## Final response format
A high-level pass/fail summary followed by detailed logs of any failed checks.

# JSON Validation

## Purpose
Ensures that all critical JSON files within the repository are structurally valid, well-formatted, and parseable by tools and applications.

## When to use this skill
- After manually editing JSON configuration files.
- During local pre-flight checks before pushing code.
- As part of a bulk audit of data files.

## When not to use this skill
- For semantic validation (checking if the *values* are correct according to business logic), unless specific schema validation is built-in. This primarily checks syntax.

## Inputs PowerShell should collect
- Paths or glob patterns for JSON files to validate (e.g., `*.json`, `tools/**/*.json`).

## Files and folders this skill may touch
- `jules.json` (Read)
- `openapi/*.json` (Read)
- `tools/**/*.json` (Read)
- `examples/*.json` (Read)

## Source-of-truth files to read first
- `jules.json`
- `README.md`

## Process
1. Locate all JSON files matching the provided input patterns.
2. Iterate through each file.
3. Attempt to parse the file using `Get-Content <file> | ConvertFrom-Json`.
4. Catch any parsing exceptions.
5. Record successes and failures (including specific error messages for failures).

## Output requirements
- A clear report indicating which files passed and which failed.
- For failures, the specific parsing error message and line number (if available from the parser) must be provided.

## Safety rules
- Read-only operations. Do not attempt to auto-fix broken JSON files to prevent data corruption.
- Ensure large JSON files don't cause memory exhaustion by handling them appropriately if necessary.

## QA checklist
- [ ] Validates `jules.json`?
- [ ] Validates files in `openapi/`?
- [ ] Validates files in `tools/` and `examples/`?
- [ ] Gracefully handles parsing errors without crashing the script?

## Common mistakes to avoid
- Relying on simple string matching instead of an actual JSON parser.
- Failing to specify `-Raw` when using `Get-Content` for JSON parsing, which can sometimes lead to array conversion issues in PowerShell.

## Final response format
A summarized list of scanned files categorized into "Passed" and "Failed", with detailed error messages for any failures.

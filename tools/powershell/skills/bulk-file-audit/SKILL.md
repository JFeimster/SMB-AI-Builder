# Bulk File Audit

## Purpose
Lists expected and missing files to verify the completeness of large generation tasks (like creating multiple page clusters or tool layers).

## When to use this skill
- After a bulk file generation script has run.
- When verifying the structure of a new feature branch against a file map.

## When not to use this skill
- For checking file *contents* (use QA skills for that). This strictly checks existence and location.

## Inputs PowerShell should collect
- A predefined list or JSON map of expected files.
- The base directory to audit.

## Files and folders this skill may touch
- `tools/jules/file-map.json` (Read, if applicable)
- Any target directory specified (Read)

## Source-of-truth files to read first
- `jules.json`
- `tools/jules/file-map.json` (if applicable)

## Process
1. Load the list of expected files.
2. Iterate through the list and test the path for each expected file in the repository.
3. Record files that are present and files that are missing.
4. Optionally scan the target directory for unexpected files (files present but not in the expected list).

## Output requirements
- A detailed report showing expected files found, expected files missing, and unexpected files present.

## Safety rules
- Strictly read-only file system operations.

## QA checklist
- [ ] Correctly identifies missing expected files?
- [ ] Correctly identifies present expected files?
- [ ] Optionally identifies unexpected files?

## Common mistakes to avoid
- Failing to account for hidden files or OS-specific files (like `.DS_Store`) when flagging unexpected files.
- Path resolution errors when comparing absolute vs relative paths.

## Final response format
A summarized audit report categorizing files into Found, Missing, and Unexpected.

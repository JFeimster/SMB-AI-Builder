# Link Checking

## Purpose
Identifies broken relative links within HTML and Markdown files across the repository to maintain site integrity and documentation accuracy.

## When to use this skill
- Before merging major content updates or structural changes.
- During routine repository maintenance or SEO audits.
- After moving or renaming files.

## When not to use this skill
- For checking external outbound links requiring network requests (unless explicitly scoped and authorized). This skill focuses on internal, relative resolution.

## Inputs PowerShell should collect
- Target directory or file extensions to scan (e.g., `*.html`, `*.md`).
- Optional depth limit.

## Files and folders this skill may touch
- All `.md` files (Read)
- All `.html` files in static directories (Read)

## Source-of-truth files to read first
- `README.md`
- `tools/jules/JULES.md` (for link structure rules)

## Process
1. Recursively find HTML and Markdown files.
2. Extract relative links using regex patterns appropriate for Markdown `[text](link)` and HTML `<a href="link">` and `<img src="link">`.
3. Resolve the relative paths based on the current file's location.
4. Verify if the resolved target file actually exists on disk.
5. Compile a list of broken links (links pointing to non-existent local files).

## Output requirements
- A detailed report listing the source file, the broken link found within it, and the resolved path that failed the check.

## Safety rules
- Read-only operations. Do not auto-update links.
- Avoid network calls; stick to local file system checks to ensure fast and safe execution.

## QA checklist
- [ ] Extracts Markdown links correctly?
- [ ] Extracts HTML `href` and `src` links correctly?
- [ ] Resolves relative paths correctly based on directory depth?
- [ ] Reports broken links clearly?

## Common mistakes to avoid
- Failing to account for anchors (`#section`) appended to file paths.
- Incorrectly resolving paths that start with `/` (absolute to repo root) vs `./` or `../` (relative to current file).

## Final response format
A summarized list of files containing broken links, detailing the specific failures.

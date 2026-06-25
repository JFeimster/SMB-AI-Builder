# XML Validation

## Purpose
Ensures that XML files in the repository (such as sitemaps or manifests) are syntactically valid and well-formed.

## When to use this skill
- After generating or updating `sitemap.xml`.
- When modifying any XML manifests or configuration files.
- Before deploying updates to public-facing XML assets.

## When not to use this skill
- For checking the HTTP status of URLs inside the sitemap (use `link-checking` for that).
- On non-XML files.

## Inputs PowerShell should collect
- File paths for XML files to check (e.g., `public/sitemap.xml`).

## Files and folders this skill may touch
- `public/sitemap.xml` (Read)
- Any defined XML manifests (Read)
- `public/robots.txt` (Read, to verify sitemap references)

## Source-of-truth files to read first
- `README.md`
- `tools/seo/seo-rules.md` (if applicable)

## Process
1. Locate target XML files.
2. Attempt to parse the XML using PowerShell's native XML handling (e.g., `[xml](Get-Content <file>)`).
3. Catch any parsing exceptions indicating malformed XML.
4. If checking `sitemap.xml`, optionally read `robots.txt` to verify the sitemap is correctly referenced.
5. Report status.

## Output requirements
- A validation report detailing successes and parsing errors.
- Confirmation if `robots.txt` references the checked sitemaps correctly.

## Safety rules
- Read-only operations. Do not attempt to auto-correct malformed XML.

## QA checklist
- [ ] Validates `sitemap.xml`?
- [ ] Checks `robots.txt` references?
- [ ] Gracefully handles parse errors?

## Common mistakes to avoid
- Ignoring namespace declarations which can cause valid XML to fail specific schema checks (though basic syntax validation might pass).
- Using regex to validate XML structure instead of a proper XML parser.

## Final response format
A summarized validation status of XML files and related `robots.txt` entries.

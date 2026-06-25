# OpenAPI Validation

## Purpose
Validates OpenAPI schema JSON files to ensure they meet basic syntax requirements and contain necessary key fields required for GPT Action integrations.

## When to use this skill
- After creating or modifying an OpenAPI specification in the `openapi/` directory.
- Before importing an OpenAPI schema into the Custom GPT builder.

## When not to use this skill
- For deep semantic validation of API routes (this checks schema structure, not server logic).

## Inputs PowerShell should collect
- File paths for OpenAPI JSON files.

## Files and folders this skill may touch
- `openapi/*.json` (Read)

## Source-of-truth files to read first
- `README.md`
- `docs/actions/openapi-style-guide.md` (if applicable)

## Process
1. Parse the target OpenAPI JSON files.
2. Verify it is valid JSON.
3. Check for required top-level OpenAPI fields (e.g., `openapi`, `info`, `paths`).
4. Check that `servers` contains the correct deployed URL (not localhost or example.com, unless explicitly flagged as a dev schema).
5. Verify that operational paths have defined responses.

## Output requirements
- A validation report per schema file, highlighting structural issues or missing key fields.

## Safety rules
- Read-only operations. Do not auto-modify schemas.

## QA checklist
- [ ] Checks JSON syntax?
- [ ] Verifies required OpenAPI fields (`info`, `paths`)?
- [ ] Checks `servers` URLs?

## Common mistakes to avoid
- Assuming a schema is valid just because it parses as JSON; OpenAPI requires specific structural elements.
- Forgetting to flag placeholder URLs (like `example.com`) if the schema is intended for production deployment.

## Final response format
A summarized validation status of OpenAPI schemas, detailing specific structural violations if found.

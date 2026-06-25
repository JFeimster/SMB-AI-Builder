# example-fixture-builder

## Purpose
To create realistic, safe, and structured example JSON requests, responses, and test fixtures for documentation, GPT Actions, and test suites.

## When to use this skill
- When populating `examples/*.json`.
- When creating fixtures in `tests/fixtures/`.
- When providing sample inputs for sensitive workflows.

## When not to use this skill
- When writing OpenAPI schemas (use `openapi-schema-implementation`).
- When writing test execution logic (use `test-scaffold-builder`).

## Inputs Copilot should collect
- The expected schema or data shape for the example.
- The context of the example (e.g., "valid request", "invalid missing field", "sensitive workflow").

## Files and folders this skill may touch
- `examples/*.json`
- `tests/fixtures/*.json`

## Source-of-truth files to read first
- `openapi/*.json` (to ensure examples match schemas).
- `README.md` (for safety guidelines on sensitive workflows).

## Process
1. Determine the structure required by the target schema.
2. Generate realistic data for the fields.
3. If creating an "invalid" fixture, intentionally alter the structure to match the failure scenario.
4. Ensure the example represents an SMB workflow accurately while maintaining absolute privacy.

## Output requirements
- Valid JSON.
- Data that accurately reflects the intended scenario.

## Security and safety rules
- **CRITICAL:** Do NOT invent or use real Personally Identifiable Information (PII). Use generic placeholders (e.g., `user@example.com`, `John Doe`, `123 Main St`).
- For sensitive workflow examples (e.g., HR, legal, financial), ensure the mock data is clearly fictional and does not represent real business scenarios that could be misconstrued as actual data.

## QA checklist
- [ ] Is the JSON syntax valid?
- [ ] Does the data match the required schema?
- [ ] Are there distinct valid and invalid examples as requested?
- [ ] Is it 100% free of real PII and sensitive data?

## Common mistakes to avoid
- Creating JSON with trailing commas (invalid JSON).
- Failing to match the data types defined in the schema.
- Using realistic-looking API keys or tokens in examples.

## Final response format
A valid JSON code block representing the fixture or example.

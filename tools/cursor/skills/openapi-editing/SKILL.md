# openapi-editing

## Purpose
Edit OpenAPI schema files while ensuring compatibility with GPT Actions and route structures.

## When to use this skill
When adding or updating endpoints that need to be exposed as GPT Actions.

## When not to use this skill
When modifying internal API routes not meant for public GPT consumption.

## Inputs Cursor should collect
- Target OpenAPI JSON file.
- The corresponding API route logic (`app/api/**/route.ts`).
- Examples schemas.

## Files and folders this skill may touch
- `openapi/*.json`

## Source-of-truth files to read first
- `README.md`
- `JULES.md`

## Process
1. Match the OpenAPI schema to the implementation of the API route.
2. Ensure stable and unique `operationId`s.
3. Validate GPT Action compatibility (e.g., proper descriptions, clear schemas).
4. Update the schema to accurately reflect required parameters and responses.

## Output requirements
Valid OpenAPI JSON schemas that align perfectly with the backend implementation.

## Safety and claims rules
- Descriptions must follow the direct, operator-friendly, anti-hype voice.
- Do not invent fake integrations or outputs.

## QA checklist
- [ ] Schema is valid JSON.
- [ ] `operationId` is stable and unique.
- [ ] Schema accurately reflects the actual API route inputs and outputs.
- [ ] Compatible with GPT Actions constraints.

## Common mistakes to avoid
- Changing `operationId`s unnecessarily, breaking existing GPT Action links.
- Schema diverging from the actual API route implementation.

## Final response format
"OpenAPI schema edited and synchronized with API route."

# openapi-schema-implementation

## Purpose
To create, update, and maintain OpenAPI schemas that define the structure and behavior of the no-auth GPT Actions provided by the repository.

## When to use this skill
- When creating a new endpoint intended to be a GPT Action.
- When updating the inputs or outputs of an existing Action.
- When working within the `openapi/` directory.

## When not to use this skill
- When implementing the actual API route logic.
- When defining internal TypeScript interfaces not exposed to the GPT.

## Inputs Copilot should collect
- The corresponding API route or core logic interface.
- Required parameters and expected response structures.
- A descriptive name and purpose for the Action.

## Files and folders this skill may touch
- `openapi/*.json`

## Source-of-truth files to read first
- `README.md` (GPT Action conventions)
- Existing `openapi/*.json` files for style reference.

## Process
1. Define the OpenAPI version (usually `3.1.0`).
2. Create accurate `info` metadata.
3. Define the `paths` and specific HTTP methods (usually `POST` or `GET`).
4. Ensure every operation has a unique and descriptive `operationId` (critical for GPT Actions).
5. Rigorously define requestBody and response schemas using JSON Schema conventions.
6. Add clear, descriptive summaries and descriptions for parameters and schemas to guide the GPT's understanding.

## Output requirements
- Valid JSON OpenAPI schema.
- Clear `operationId`s.
- Compatibility with ChatGPT Custom Actions.

## Security and safety rules
- Do not include fake server URLs for production; use placeholders like the Vercel app URL.
- Ensure the schema accurately reflects the API's safety mechanisms (e.g., requiring specific parameters for validation).

## QA checklist
- [ ] Is the JSON valid?
- [ ] Is the `operationId` present and unique?
- [ ] Are request and response schemas completely defined?
- [ ] Are descriptions clear enough for an LLM to understand how to use the endpoint?

## Common mistakes to avoid
- Omitting `operationId`.
- Using overly complex schema references that the GPT Action parser might struggle with.
- Documenting endpoints or fields that don't actually exist in the API route.

## Final response format
A complete, valid JSON block representing the OpenAPI schema.

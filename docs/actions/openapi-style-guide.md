# OpenAPI Style Guide

Guidelines for writing and combining OpenAPI schemas for GPT Actions.

## OpenAPI 3.1.0 rules
- All schemas must declare `"openapi": "3.1.0"`. GPT Builder fully supports 3.1.0, which allows better integration with JSON Schema Draft 2020-12.

## operationId naming
- `operationId` must be strictly defined and unique.
- Use verb-noun formats, PascalCase or camelCase.
- Example: `calculateReadinessScore`, `formatWorkflowBlueprint`.
- The GPT uses this ID to map its intent to the Action, so make it descriptive.

## summary/description guidance
- **summary**: Short, human-readable title (max 50 chars).
- **description**: Explicitly tell the GPT *when* to use this endpoint and *what* it does. Be verbose here; the GPT reads this to understand context.
  - Example: "Use this endpoint when the user asks to score their workflow for automation readiness. It requires a detailed description of the current manual steps."

## requestBody patterns
- Always use `application/json`.
- Strictly define `required` fields.
- Provide clear `description` fields for every property so the GPT knows what data to extract from the conversation to populate it.

## response patterns
- Define the `200` success response clearly.
- Include the expected JSON structure in `content.application/json.schema`.
- Ensure the GPT knows how to interpret the response fields (e.g., "A score from 0-30").

## error response patterns
- Define a generic error format for `400` (Bad Request) and `500` (Server Error).
- Example schema:
  ```json
  {
    "type": "object",
    "properties": {
      "error": { "type": "string" },
      "code": { "type": "string" }
    }
  }
  ```

## enum usage
- Use `enum` where applicable to constrain the GPT's inputs (e.g., `["manual", "human-in-the-loop", "fully-automated"]`).

## examples
- Provide `examples` in the schema for complex inputs. The GPT uses these to learn the expected format.

## no fake auth
- Do not include `securitySchemes` or require `Authorization` headers.

## no fake domains
- Do not use example.com or fake domains in the `servers` block for production schemas. Use the actual Vercel deployment URL.

## combined schema guidance
- When merging multiple endpoints, maintain a single `servers` block.
- Ensure no `operationId` conflicts exist.
- Group related endpoints using tags if helpful for organization, though the GPT primarily relies on descriptions.

## GPT Builder compatibility
- Keep the overall schema size small. Remove unnecessary boilerplate.
- Avoid deeply nested objects if flat structures work just as well.

# Skill: GPT Action Schema Builder

## Purpose
Creates OpenAPI schemas specifically tailored and formatted for custom GPT Actions.

## Use When
When a user needs to connect a custom GPT to an external API and needs the required OpenAPI schema.

## Inputs Needed
- Target API documentation or endpoints
- Required authentication method
- Specific actions the GPT needs to perform

## Outputs
- A valid OpenAPI 3.1.0 schema (JSON or YAML)
- Descriptions optimized for GPT comprehension
- Server and path configurations

## Procedure
1. Analyze the target API endpoints and required parameters.
2. Construct the basic OpenAPI structure (openapi, info, servers).
3. Define the paths and methods, ensuring `operationId`s are descriptive and clear.
4. Write detailed, natural-language descriptions for each endpoint and parameter so the GPT understands how to use them.
5. Define the schema components (responses and request bodies).
6. Verify against GPT Action constraints (e.g., size limits, auth types).

## Safety / Human Review
- Ensure no hardcoded secrets or API keys are in the generated schema.
- Adhere strictly to the safety rules regarding public fetch and no-auth requirements if applicable.

## Quality Checklist
- [ ] Schema is OpenAPI 3.1.0?
- [ ] Descriptions are clear for an LLM?
- [ ] No secrets are included?

## Example Prompt
```
I want to create a custom GPT that can check the weather using the open-meteo API. Can you build the OpenAPI schema for the forecast endpoint that the GPT Action will need?
```

## Related Tool Docs
- [OpenAPI Tool Docs](../../README.md)

## Related Site Pages
- [OpenAPI Pages](../../../../pages/tools/openapi)

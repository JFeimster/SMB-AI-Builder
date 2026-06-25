# OpenAPI Endpoints

## Purpose
Ensure OpenAPI specifications and endpoints are correctly configured, accessible, and ready for integration with Custom GPT Actions without requiring authentication.

## When to use this skill
- When exposing a new API route intended for a Custom GPT.
- When updating an existing OpenAPI JSON/YAML specification.
- When validating the `/api/openapi` route for deployment.

## When not to use this skill
- When dealing with internal API routes not intended for external LLM consumption.
- When configuring standard web pages.

## Inputs Jules should collect
- The intended behavior of the GPT Action.
- The request/response schema for the targeted endpoints.

## Files and folders this skill may touch
- `/api/openapi` (route or handler)
- OpenAPI JSON/YAML specification files (e.g., `openapi.json`, `public/openapi.yaml`)
- Related API route handlers

## Source-of-truth files to read first
- `JULES.md`
- Existing OpenAPI specifications

## Process
1. **Audit OpenAPI Specification:**
   - Verify that the OpenAPI document (JSON or YAML) is structurally valid according to OpenAPI 3.x standards.
   - Ensure all paths, methods, request bodies, and responses are accurately documented.
2. **Verify Server URL:**
   - Check the `servers` array in the OpenAPI spec. Ensure it uses placeholder domains or the correct absolute production domain (`https://smb-ai-builder.vercel.app`) as required by the environment.
3. **Audit `/api/openapi` Route:**
   - If serving the spec dynamically via a route, ensure it returns the correct `application/json` or `application/yaml` Content-Type.
   - Verify the route is publicly accessible.
4. **GPT Actions Import Readiness:**
   - Ensure descriptions and operation IDs are clear and semantic, as LLMs rely heavily on these for proper action invocation.
   - Confirm no authentication is defined in the spec if the action is intended to be no-auth.

## Output requirements
- A valid, accessible OpenAPI specification.
- Confirmation that the specification aligns exactly with the implemented API routes.

## Security and privacy rules
- Do not expose administrative or sensitive endpoints in the public OpenAPI spec.
- Ensure the API routes described enforce their own validation and security independently of the spec.

## QA checklist
- [ ] Is the OpenAPI spec valid against standard validators?
- [ ] Are the `servers` URLs correct and absolute?
- [ ] Is the `/api/openapi` route serving the spec with the correct Content-Type?
- [ ] Are operation descriptions clear for an LLM to understand?

## Common mistakes to avoid
- Leaving `http://localhost:3000` as the server URL in production specs.
- Forgetting to document required parameters, causing the GPT to fail action execution.
- Including authentication schemes in the spec for no-auth endpoints.

## Final response format
Provide a summary of the OpenAPI validation, noting any schema corrections made and confirming its readiness for GPT Action import.

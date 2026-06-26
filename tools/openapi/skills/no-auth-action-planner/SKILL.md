# Skill: No-Auth Action Planner

## Purpose
Plans GPT Actions that utilize public, no-authentication APIs for safe data retrieval.

## Use When
When designing GPT Actions that must strictly adhere to no-auth, stateless, and read-only principles.

## Inputs Needed
- Goal of the action (e.g., get public holidays, fetch exchange rates)
- Candidate public APIs

## Outputs
- An action architecture plan
- Selected API endpoints
- Data mapping for the GPT

## Procedure
1. Identify suitable public APIs that do not require authentication or API keys.
2. Verify the API allows CORS or can be accessed by OpenAI's servers.
3. Plan the specific endpoints to be used and the data to extract.
4. Design the OpenAPI schema structure (to be built by the Schema Builder).
5. Ensure compliance with public fetch safety rules (e.g., timeouts, size limits).

## Safety / Human Review
- Strictly enforce read-only (GET) requests.
- Ensure the API is genuinely public and doesn't require a hidden key.
- Avoid APIs that return massive datasets without pagination.

## Quality Checklist
- [ ] APIs require zero authentication?
- [ ] Only GET requests are planned?
- [ ] Data size is manageable?

## Example Prompt
```
I want my GPT to be able to tell users what public holidays are coming up in different countries. What public, no-auth API can I use, and how should I plan the action?
```

## Related Tool Docs
- [OpenAPI Tool Docs](../../README.md)

## Related Site Pages
- [OpenAPI Pages](../../../../pages/tools/openapi)

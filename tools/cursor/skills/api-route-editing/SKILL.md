# api-route-editing

## Purpose
Safely edit or create API routes while maintaining strict validation and security standards.

## When to use this skill
When modifying the backend Next.js API routes handling business logic or GPT Actions.

## When not to use this skill
When dealing with client-side UI components.

## Inputs Cursor should collect
- Existing route structure.
- Expected JSON request/response format.
- Validation logic.

## Files and folders this skill may touch
- `app/api/**/route.ts`

## Source-of-truth files to read first
- `README.md`
- `JULES.md`
- `tools/jules/jules.json`

## Process
1. Locate the correct `route.ts`.
2. Ensure input validation is robust before processing data.
3. Ensure JSON responses match the corresponding OpenAPI schemas.
4. Verify no secrets are exposed or logged.
5. Verify no sensitive logging occurs that might capture PII or business data.

## Output requirements
Secure, stateless (where possible) API routes returning proper JSON responses.

## Safety and claims rules
- No secrets in code.
- No sensitive logging.
- Maintain safety-aware responses and logic.

## QA checklist
- [ ] Input validation is present.
- [ ] JSON response is correctly formatted.
- [ ] No secrets or sensitive logging.

## Common mistakes to avoid
- Trusting client input without validation.
- Accidentally logging full request bodies containing sensitive workflow data.

## Final response format
"API route edited securely and validated."

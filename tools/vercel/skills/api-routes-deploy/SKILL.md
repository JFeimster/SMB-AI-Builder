# API Routes Deploy

## Purpose
Ensure that Vercel or Next.js API endpoints are secure, stateless, properly formatted, and safe for a public, no-auth environment.

## When to use this skill
- When creating or updating API routes (`app/api/**/route.ts` or `pages/api/**`).
- When exposing endpoints for Custom GPT Actions.
- When debugging API 500 errors or timeout issues on Vercel.

## When not to use this skill
- When working entirely on static front-end assets.
- When configuring database migrations (as this project relies on stateless or external APIs without persistent storage unless specifically requested).

## Inputs Jules should collect
- The intended consumer of the API (e.g., ChatGPT Actions, internal frontend).
- Expected request payload and response schema.

## Files and folders this skill may touch
- `app/api/**/route.ts`
- `pages/api/**/*.ts` (if legacy)
- Relevant type definitions or schema files.

## Source-of-truth files to read first
- `JULES.md`
- `next.config.ts`

## Process
1. **Verify Statelessness:**
   - Ensure the API route does not rely on local file system writes or persistent memory storage across requests (Vercel Serverless Functions are stateless).
2. **Input Validation:**
   - Confirm robust input validation exists for all incoming request bodies, queries, and parameters.
   - Return appropriate 400 Bad Request HTTP status codes for invalid input.
3. **JSON Responses:**
   - Ensure all successful responses and error messages are returned as properly formatted JSON (using `Response.json()` for App Router).
4. **Security and Logging:**
   - Confirm that no sensitive information (e.g., API keys, user PII, or internal stack traces) is logged to the console or included in error responses.
5. **No-Auth Limitations:**
   - Since these are public no-auth endpoints (designed for GPT Actions), verify that they do not expose sensitive business logic or private data.

## Output requirements
- A secure, validated API route ready for Vercel deployment.
- Documentation or summary of the endpoint's expected input/output if changed.

## Security and privacy rules
- **CRITICAL:** Do not include secrets or API keys in the code. Use `.env` variables only.
- Never return sensitive user data or internal server errors to the client.
- Treat all inputs as untrusted and sanitize accordingly.

## QA checklist
- [ ] Is input validation implemented for all payload fields?
- [ ] Are responses properly formatted as JSON?
- [ ] Is the route completely stateless?
- [ ] Are error logs sanitized to prevent leaking sensitive data?
- [ ] Is the route safe to be public and unauthenticated?

## Common mistakes to avoid
- Attempting to write to the `/tmp` directory or local disk expecting persistence.
- Returning generic 500 errors with full stack traces attached to the response.
- Forgetting to handle OPTIONS requests or CORS headers if required for cross-origin GPT Actions.

## Final response format
Provide a summary of the API route audit, detailing the validation rules enforced and confirming adherence to stateless and no-auth security constraints.

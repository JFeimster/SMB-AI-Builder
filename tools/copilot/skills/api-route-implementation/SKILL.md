# api-route-implementation

## Purpose
To guide the creation of Next.js API routes that act as no-auth endpoints or GPT Actions, ensuring they are stateless, validate inputs, and return deterministic JSON responses.

## When to use this skill
- When implementing endpoints in `app/api/**/route.ts`.
- When wrapping core logic from `lib/` into a web request handler.

## When not to use this skill
- When writing core calculation logic (that belongs in `lib/`).
- When writing frontend components.

## Inputs Copilot should collect
- The OpenAPI schema defining the endpoint, if available.
- The core logic function to be called from `lib/`.
- Expected request body and response formats.

## Files and folders this skill may touch
- `app/api/**/route.ts`

## Source-of-truth files to read first
- `README.md` (API conventions and safety rules)
- `openapi/*.json` (to align with schema definitions)

## Process
1. Define the Next.js Route Handler (e.g., `export async function POST(request: Request)`).
2. Implement robust input validation (using Zod or manual checks) before processing.
3. Call the deterministic core logic from the `lib/` directory.
4. Format the output as a strict, schema-compliant JSON response.
5. Handle errors gracefully and return appropriate HTTP status codes (400, 500).

## Output requirements
- A complete Next.js route handler.
- Strict request validation.
- JSON response format (`NextResponse.json`).

## Security and safety rules
- Endpoints must be stateless.
- Do not implement unauthorized database writes.
- **Crucial:** Do not include sensitive logging. Do not log full request bodies or user data.
- Enforce CORS or appropriate headers if required by project settings.

## QA checklist
- [ ] Is the input validated before use?
- [ ] Is the response standard JSON?
- [ ] Are errors handled with correct status codes?
- [ ] Is sensitive logging completely avoided?
- [ ] Does it align with the corresponding OpenAPI schema?

## Common mistakes to avoid
- Putting heavy business logic directly in the route handler instead of importing from `lib/`.
- Failing to handle malformed JSON requests safely.
- Leaving `console.log(requestBody)` in production code.

## Final response format
A complete `route.ts` file block, including imports, validation, execution, and error handling.

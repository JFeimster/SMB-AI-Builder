# Vercel Deployment Notes

Guidelines for deploying GPT Actions and API routes on Vercel.

## Vercel App Router route notes
- Use Next.js App Router for API routes.
- Routes live in `app/api/[route-name]/route.ts`.

## API route structure
- Each route should export standard HTTP methods: `export async function POST(request: Request)`.
- Keep logic modular: validate request -> process -> format response.

## Environment variables
- Keep `.env.local` out of version control.
- Use `.env.example` to document required variables.
- Do not require real environment variables for deterministic, no-auth logic if possible.

## No-auth endpoint considerations
- Ensure endpoints do not inadvertently expose internal system state.
- Rate limiting should be considered at the Vercel edge if abuse is a concern, though GPT builder IPs are generally stable.

## Timeout and public fetch notes
- Vercel hobby tier limits function execution to 10 seconds.
- Pro tier limits to 60 seconds by default.
- Keep GPT Action endpoints under 5 seconds to provide a snappy UX in ChatGPT.
- If fetching public APIs, set an explicit `AbortController` timeout (e.g., 3s) so your function doesn't hang waiting for an external service.

## OpenAPI endpoint hosting
- Host the combined OpenAPI schema as a static file or a GET route (e.g., `app/api/openapi.json/route.ts`) so the GPT Builder can fetch it directly.

## Privacy/terms pages
- Vercel can host the static privacy policy required by the GPT Store.
- Create `app/privacy/page.tsx`.

## Build/deploy checklist
- [ ] `npm run build` succeeds locally.
- [ ] No secrets in the codebase.
- [ ] API routes return correct JSON on test.
- [ ] Vercel project configured correctly.
- [ ] CORS headers configured if needed (Next.js handles basic API routes fine, but explicit open CORS may be needed for web clients).

## Common Vercel issues
- **Cold starts:** Edge functions or lightweight Node.js runtimes mitigate this.
- **Missing dependencies:** Ensure `package.json` is accurate.

## Do not commit secrets
- Never commit API keys, database credentials, or private tokens. Use Vercel Environment Variables settings.

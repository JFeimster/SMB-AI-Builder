# Security Headers

## Purpose
Configure and audit HTTP security headers in the Vercel deployment configuration to protect the application from common web vulnerabilities.

## When to use this skill
- When setting up a new Vercel deployment.
- When configuring embed rules for partner sites.
- When enabling cross-origin requests for GPT Actions.

## When not to use this skill
- When working entirely on local-only styling that does not require deployment configuration changes.

## Inputs Jules should collect
- Required CORS origins (if any, specifically for GPT Actions).
- Framing requirements (e.g., if the site needs to be embedded in an iframe on specific partner domains).

## Files and folders this skill may touch
- `vercel.json`
- `next.config.ts` (if using Next.js headers configuration)

## Source-of-truth files to read first
- `JULES.md`
- `tools/embeds/` operations layer instructions (for framing rules)

## Process
1. **Audit `vercel.json` / `next.config.ts` Headers:**
   - Locate the `headers` section.
2. **Basic Security Headers:**
   - Ensure standard security headers are present:
     - `X-DNS-Prefetch-Control`
     - `X-Content-Type-Options` (nosniff)
     - `Referrer-Policy` (strict-origin-when-cross-origin)
3. **Frame Rules (Embeds):**
   - Check `X-Frame-Options` or `Content-Security-Policy: frame-ancestors`.
   - If the site must be embedded by partners, ensure the policies strictly allow only configured partner domains and block generic framing to prevent clickjacking.
4. **CORS Notes for GPT Actions:**
   - For `/api/openapi` or GPT Action API endpoints, ensure CORS headers (`Access-Control-Allow-Origin`) are appropriately configured if required for ChatGPT to consume them, while keeping general site routes secure.

## Output requirements
- A validated configuration file (`vercel.json` or `next.config.ts`) containing the correct security headers.
- A summary of the applied headers and their purpose.

## Security and privacy rules
- Do not use wildcard (`*`) for CORS origins or frame-ancestors unless explicitly required and documented as a public API constraint.
- Ensure that headers do not inadvertently leak server information (`X-Powered-By` should be disabled).

## QA checklist
- [ ] Are basic security headers (nosniff, referrer-policy) applied?
- [ ] Are framing rules strictly defined based on partner embed requirements?
- [ ] Are CORS policies correctly scoped for GPT Actions?
- [ ] Is `X-Powered-By` disabled?

## Common mistakes to avoid
- Applying a strict `X-Frame-Options: DENY` when partner embeds are actually required.
- Opening CORS to `*` across the entire application instead of just specific API routes.
- Overwriting existing necessary headers during an audit.

## Final response format
Provide a structured list of the security headers verified or added, explaining the rationale for framing and CORS decisions based on project requirements.

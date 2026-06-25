# Domain Readiness

## Purpose
Ensure all absolute URLs across the repository are updated to point to the correct production domain before finalizing a Vercel deployment.

## When to use this skill
- Before switching a repository from development/draft state to production.
- When performing a final QA pass on SEO and metadata files.
- When configuring the Custom GPT Action with production URLs.

## When not to use this skill
- When working on local, relative links that do not require an absolute domain.

## Inputs Jules should collect
- The target production domain (e.g., `https://smb-ai-builder.vercel.app`).

## Files and folders this skill may touch
- `sitemap.xml`
- `robots.txt`
- OpenAPI specifications (e.g., `openapi.json`, `/api/openapi`)
- Metadata configurations (`layout.tsx`, static `<head>` tags)
- `privacy.html`, `terms.html` or their Next.js equivalents.

## Source-of-truth files to read first
- `JULES.md`
- `vercel.json`

## Process
1. **Placeholder Search:**
   - Search the repository for placeholder domains such as `example.com`, `localhost:3000`, or `yourdomain.com`.
2. **Canonical URLs:**
   - Ensure all `<link rel="canonical" href="..." />` tags point to the exact absolute production domain.
3. **Sitemap Domain:**
   - Verify every `<loc>` entry in `sitemap.xml` uses the production domain.
4. **OpenAPI Server URL:**
   - Update the `servers` array in the OpenAPI specification to point to the production API base URL.
5. **Legal and Privacy Links:**
   - Ensure links to the Privacy Policy and Terms of Service (especially those provided to the Custom GPT) use the absolute production URL.

## Output requirements
- A repository entirely free of placeholder domains for production-facing assets.
- A summary of the files modified to include the production domain.

## Security and privacy rules
- Never invent fake production domains. Use only the domain explicitly defined in `JULES.md` or memory as the production URL.

## QA checklist
- [ ] Were all placeholders (`example.com`, `localhost`) replaced?
- [ ] Do canonical URLs use the correct domain?
- [ ] Does the sitemap use the correct domain?
- [ ] Does the OpenAPI spec use the correct server URL?

## Common mistakes to avoid
- Leaving `http://localhost:3000` in the OpenAPI spec, causing the Custom GPT Action to fail in production.
- Using relative paths (`/pages/seo/`) in the `sitemap.xml` instead of absolute paths.
- Inventing a fake `.com` domain when the project is hosted on `.vercel.app`.

## Final response format
Provide a confirmation statement listing the files where the domain was updated, confirming readiness for the production Custom GPT integration.

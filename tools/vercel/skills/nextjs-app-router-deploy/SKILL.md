# Next.js App Router Deploy

## Purpose
Prepare, review, and QA a Next.js application utilizing the App Router architecture for a successful Vercel deployment.

## When to use this skill
- When deploying or updating a Next.js App Router project on Vercel.
- When adding new routes, layouts, or API endpoints within the `app/` directory.
- When configuring global styles or metadata in a Next.js application.

## When not to use this skill
- When the repository is a pure static HTML site without Next.js.
- When working on legacy Next.js Pages Router (`pages/`) applications.

## Inputs Jules should collect
- Details of newly added routes or components.
- Specific metadata requirements for pages.

## Files and folders this skill may touch
- `app/layout.tsx`
- `app/page.tsx`
- `app/api/**/route.ts`
- `app/globals.css`
- Metadata files (e.g., `favicon.ico`, `opengraph-image.png`)

## Source-of-truth files to read first
- `JULES.md`
- `next.config.ts`

## Process
1. **Audit `app/layout.tsx`:**
   - Verify proper HTML structure, global providers, and correct metadata implementation (title, description, open graph).
   - Ensure global styles (`globals.css`) are imported correctly.
2. **Audit `app/page.tsx`:**
   - Check the root page for proper rendering and data fetching strategies (Server Components vs. Client Components).
3. **Audit API Routes (`app/api/**/route.ts`):**
   - Ensure correct HTTP method exports (GET, POST, etc.).
   - Verify Response objects are used correctly.
4. **Audit `app/globals.css`:**
   - Confirm global variables, Tailwind imports (if applicable), and essential base styles are intact.
5. **Review Server/Client Boundaries:**
   - Ensure the `"use client"` directive is only used where necessary (e.g., components with state, effects, or event listeners).
   - Verify that sensitive data fetching happens on the server.
6. **Review Metadata:**
   - Ensure `generateMetadata` or static `metadata` objects are correctly defined and do not contain fake claims or placeholder text meant to be replaced.

## Output requirements
- Confirmation that all App Router files are syntactically correct and follow Next.js conventions.
- A summary of any corrected server/client boundaries or metadata updates.

## Security and privacy rules
- Never log sensitive information or secrets in API routes.
- Ensure API routes validate input to prevent injection attacks.
- Do not expose server-side logic or secrets to client components.

## QA checklist
- [ ] Is `layout.tsx` correctly structured with necessary metadata?
- [ ] Is `"use client"` appropriately applied to interactive components only?
- [ ] Do API routes return standard Web `Response` objects?
- [ ] Is `globals.css` imported properly?
- [ ] Are there any hardcoded secrets in the `app/` directory?

## Common mistakes to avoid
- Adding `"use client"` to the root layout or unnecessarily high in the component tree.
- Using Next.js specific imports (like `next/image`) improperly, causing build failures.
- Returning Node.js `res.json()` instead of `Response.json()` in App Router API routes.

## Final response format
Provide a deployment readiness statement for the App Router structure, highlighting verified routes, confirmed server/client boundaries, and any remediations performed.

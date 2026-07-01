# Privacy and Terms Routes

## Purpose
Ensure that Privacy Policy and Terms of Service pages are present, accessible, and accurately reflect the project's data handling practices, particularly concerning no-auth GPT Actions.

## When to use this skill
- When preparing for a production Vercel deployment.
- When configuring a new Custom GPT Action that requires a Privacy Policy URL.
- When performing a compliance or readiness audit.

## When not to use this skill
- When drafting the legal language itself (Jules should handle the route/structure, not provide legal advice).

## Inputs Jules should collect
- The target deployment architecture (Static HTML vs. Next.js).
- Specific required disclaimers (e.g., no-auth data handling).

## Files and folders this skill may touch
- `app/privacy/page.tsx`
- `app/terms/page.tsx`
- `pages/privacy.html`
- `pages/terms.html`

## Source-of-truth files to read first
- `JULES.md`

## Process
1. **Locate Routes:**
   - Determine if the project uses Next.js (`app/privacy/page.tsx`) or Static HTML (`pages/privacy.html` or `privacy.html`).
2. **Audit Content:**
   - Verify that the pages exist and render correctly.
   - Ensure the content includes necessary technical disclaimers, specifically stating that data sent via no-auth endpoints is not stored persistently (unless otherwise configured) and outlining how data is handled.
3. **Verify Links:**
   - Ensure these pages are linked appropriately from the main site footer or navigation.
   - Confirm the absolute URLs for these pages are ready to be pasted into the ChatGPT Action configuration.

## Output requirements
- Confirmation that Privacy and Terms pages exist at the expected routes.
- Verification that required no-auth data handling disclaimers are present.

## Security and privacy rules
- Do not provide legal advice. Stick to structural validation and technical data handling descriptions.
- Ensure the disclaimers accurately reflect the stateless nature of the deployed API routes.

## QA checklist
- [ ] Do the Privacy and Terms routes exist?
- [ ] Are they accessible without authentication?
- [ ] Do they contain disclaimers about no-auth data handling?
- [ ] Are the pages linked from the main site?

## Common mistakes to avoid
- Forgetting to create these pages, preventing the Custom GPT from being published publicly.
- Using placeholder "Lorem Ipsum" text in the final deployment.
- Making inaccurate claims about data encryption or storage that contradict the actual codebase.

## Final response format
Provide a status report confirming the presence and accessibility of the Privacy and Terms routes, noting any missing disclaimers that need to be added.

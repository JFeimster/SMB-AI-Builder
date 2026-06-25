# Deployment Readiness QA

## Purpose
Execute a comprehensive final quality assurance checklist to ensure the repository is fully prepared for a successful, secure, and functional deployment to Vercel.

## When to use this skill
- As the final step before committing code intended for a Vercel production deployment.
- When performing a final audit of the `main` branch.

## When not to use this skill
- When still actively developing features or writing initial drafts of content.

## Inputs Jules should collect
- The target deployment branch.
- Confirmation of the intended architecture (Static vs. Next.js).

## Files and folders this skill may touch
- Entire Repository (Inspection only).

## Source-of-truth files to read first
- `JULES.md`
- `tools/vercel/skills/*/SKILL.md` (Reviewing previous skill outputs if necessary).

## Process
1. **Build Passes:**
   - Verify that `npm run build` (if applicable) executes without errors locally.
2. **Routes Exist:**
   - Confirm that all intended pages (`index.html`, `pages/**/*.html` or `app/**/page.tsx`) are present.
3. **Links Work:**
   - Verify that internal relative links navigate correctly based on directory depth.
4. **OpenAPI Accessible:**
   - Ensure the OpenAPI spec is valid and accessible for GPT Actions.
5. **Privacy/Terms Exist:**
   - Confirm that the privacy policy and terms of service pages are present and contain necessary no-auth disclaimers.
6. **No Secrets Committed:**
   - Execute a final grep/scan to ensure `.env` values are strictly placeholders and no real API keys are present in the codebase.
7. **Domain Configuration:**
   - Verify all absolute URLs use the correct production domain, with no `localhost` or `example.com` leftovers.

## Output requirements
- A formal "Deployment Readiness Report" detailing the pass/fail status of the final checklist.
- Immediate fixes for any critical failures discovered during the QA pass.

## Security and privacy rules
- Do not invent fake deployment success or uptime metrics in the report.
- Treat the "No Secrets Committed" check as absolute and blocking.

## QA checklist
- [ ] Does the build pass?
- [ ] Do all required routes exist?
- [ ] Are internal links functioning correctly?
- [ ] Is the OpenAPI spec ready?
- [ ] Are Privacy and Terms routes present?
- [ ] Are there ZERO secrets committed?

## Common mistakes to avoid
- Skipping the local build check and pushing directly, leading to a Vercel build failure.
- Approving the QA pass while `.env.example` contains a real token.
- Forgetting to check if the OpenAPI `servers` URL was updated from `localhost`.

## Final response format
Provide a structured Markdown report summarizing the final Deployment Readiness QA pass, explicitly stating "DEPLOYMENT READY" or detailing the specific blockers that must be resolved.

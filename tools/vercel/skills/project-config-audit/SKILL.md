# Project Config Audit

## Purpose
Audit all core configuration files to ensure project settings, build rules, and environment placeholders are consistent, properly structured, and ready for deployment on Vercel.

## When to use this skill
- When preparing for a Vercel deployment.
- When troubleshooting build errors or deployment failures.
- When changing core technologies (e.g., adding Next.js to a static site).

## When not to use this skill
- When updating simple static content without configuration changes.
- When working entirely on client-side styles or scripts that don't affect build configs.

## Inputs Jules should collect
- Current branch/deployment state.
- Known build errors or target deployment architecture.

## Files and folders this skill may touch
- `package.json`
- `next.config.ts`
- `vercel.json`
- `tsconfig.json`
- `.env.example`
- (Inspection only for `app/`, `public/`, `pages/`)

## Source-of-truth files to read first
- `JULES.md`
- `jules.json`

## Process
1. **Audit `package.json`:**
   - Verify dependencies and devDependencies are correctly classified.
   - Ensure build scripts (e.g., `build`, `start`, `dev`) are present and correct.
2. **Audit `next.config.ts` (if applicable):**
   - Check for correct routing, redirects, headers, and image domain configurations.
   - Ensure strict mode is handled according to project needs.
3. **Audit `vercel.json`:**
   - Verify routing rules, headers, and specific Vercel configuration flags (e.g., `git.deploymentEnabled`).
   - Check if the configuration matches the project type (static vs. Next.js).
4. **Audit `tsconfig.json`:**
   - Ensure TypeScript settings align with the Next.js or static framework requirements.
5. **Audit `.env.example`:**
   - Confirm all necessary environment variables have placeholder values.
   - Ensure absolutely no real secrets, API keys, or production tokens are present.
6. **Cross-Check Folders:**
   - Inspect `app/`, `public/`, and `pages/` to verify the configuration files align with the actual project structure.

## Output requirements
- A detailed report listing any missing, inconsistent, or incorrect configurations.
- Actionable steps to resolve the identified issues.

## Security and privacy rules
- **CRITICAL:** `.env.example` must only contain placeholder values. Never commit real secrets.
- Do not invent fake production domains or uptime claims in the report.

## QA checklist
- [ ] Were all config files (`package.json`, `next.config.ts`, `vercel.json`, `tsconfig.json`, `.env.example`) inspected?
- [ ] Do the configs match the directory structure (`app/`, `public/`, `pages/`)?
- [ ] Are all environment variable placeholders safe and generic?
- [ ] Are build scripts correctly defined?

## Common mistakes to avoid
- Approving `.env.example` that accidentally contains a real API key.
- Recommending Next.js configs for a purely static project.
- Ignoring conflicting settings between `vercel.json` and `next.config.ts`.

## Final response format
Provide a structured Markdown report highlighting "Passed Checks", "Issues Found", and "Required Actions", focusing on configuration alignment and missing values.

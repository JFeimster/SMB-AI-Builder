# Skill: Deployment Readiness Auditor

## Purpose
Execute a comprehensive final quality assurance checklist to ensure the repository is fully prepared for a successful, secure, and functional deployment to Vercel.

## Use When
- As the final step before committing code intended for a Vercel production deployment.
- When performing a final audit of the `main` branch.

## Inputs Needed
- The target deployment branch.
- Confirmation of the intended architecture (Static vs. Next.js).

## Outputs
- A formal "Deployment Readiness Report" detailing the pass/fail status of the final checklist.
- Immediate fixes for any critical failures discovered during the QA pass.

## Procedure
1. Verify that `npm run build` (if applicable) executes without errors locally.
2. Confirm that all intended pages (`index.html`, `pages/**/*.html` or `app/**/page.tsx`) are present.
3. Verify that internal relative links navigate correctly based on directory depth.
4. Ensure the OpenAPI spec is valid and accessible for GPT Actions.
5. Confirm that the privacy policy and terms of service pages are present and contain necessary no-auth disclaimers.
6. Execute a final grep/scan to ensure `.env` values are strictly placeholders and no real API keys are present in the codebase.
7. Verify all absolute URLs use the correct production domain, with no `localhost` or `example.com` leftovers.

## Safety / Human Review
- Do not invent fake deployment success or uptime metrics in the report.
- Treat the "No Secrets Committed" check as absolute and blocking.
- No destructive actions without explicit human review language.

## Quality Checklist
- [ ] Does the build pass?
- [ ] Do all required routes exist?
- [ ] Are internal links functioning correctly?
- [ ] Is the OpenAPI spec ready?
- [ ] Are Privacy and Terms routes present?
- [ ] Are there ZERO secrets committed?

## Example Prompt
```
I am ready to deploy our site to Vercel. Can you run a deployment readiness audit to make sure everything is configured properly, no secrets are committed, and the build passes?
```

## Related Tool Docs
- [Vercel Tool Docs](../../README.md)

## Related Site Pages
- [Vercel Pages](../../../../pages/tools/vercel)

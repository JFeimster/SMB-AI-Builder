# Vercel Preflight

## Purpose
Simulates deployment readiness checks for Vercel without actually initiating a deployment. It ensures configurations and environment expectations are met.

## When to use this skill
- Before pushing code intended for a Vercel deployment.
- When troubleshooting failed Vercel builds locally.

## When not to use this skill
- For actual deployments (this is a local preflight check only).

## Inputs PowerShell should collect
- Current working directory.
- `vercel.json` config.

## Files and folders this skill may touch
- `vercel.json` (Read)
- `package.json` (Read)
- `.env` or `.env.example` (Read)

## Source-of-truth files to read first
- `vercel.json`
- `README.md`
- `tools/vercel/deployment-rules.md` (if applicable)

## Process
1. Check for the existence of `vercel.json`.
2. Validate `vercel.json` structure (ensure it's valid JSON).
3. Check `package.json` for required build scripts (`build`).
4. Ensure critical secrets are documented in `.env.example` but NOT hardcoded in the repository.
5. Check if the project is configured to disable automatic Git deployments (`"github": {"enabled": false}` or similar, per safety rules).

## Output requirements
- A preflight checklist status report showing passed/failed checks.

## Safety rules
- Do not execute the Vercel CLI to deploy.
- Never log the contents of real `.env` files.

## QA checklist
- [ ] Validates `vercel.json` JSON syntax?
- [ ] Checks for build scripts?
- [ ] Checks deployment posture (e.g., manual vs auto)?

## Common mistakes to avoid
- Overlooking missing environment variables required by the build step.
- Assuming local success guarantees Vercel success if Node versions differ (note Node version mismatch if possible).

## Final response format
A summarized preflight report detailing deployment readiness.

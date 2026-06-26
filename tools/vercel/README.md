# Vercel Tool-Ops Layer

## Purpose
What this tool helps with inside SMB AI Builder.

## Best Used For
- Use case 1
- Use case 2
- Use case 3
- Use case 4
- Use case 5

## Not For
Where this tool should not be used or should require human review.

## Common Tasks
- Task 1
- Task 2

## Inputs Needed
What the user must provide.

## Outputs
What this tool layer should produce.

## Skills
List related skills in tools/vercel/skills/.

## Prompts
Point to tools/vercel/prompts/ if present.

## Risk Notes
Mention privacy, auth, destructive actions, sensitive workflows, or deployment risks.

## Related Site Pages
Link to relevant static pages.

This directory contains durable deployment documentation and QA checklists for running the **SMB AI Workflow & Agent Builder** repository on Vercel.

## Supported Deployment Modes

This project can be deployed in three ways:

1. **Plain Static HTML/CSS/JS Site:** Serving the raw root files without a framework build step.
2. **Next.js App Router Site:** Serving dynamically via the `app/` directory.
3. **Hybrid Repo:** Containing both static pages and Next.js app files.

## Recommended Default Posture

> **IMPORTANT:** Automatic Git deployments are disabled by default (`"deploymentEnabled": false` in `vercel.json`) until the site is thoroughly QA’d. Do not enable automatic deployments until you are fully ready to ship to production automatically.

## Included Documentation

- [Deployment Checklist](./vercel-deploy-checklist.md) - Pre- and post-deployment checks.
- [Preview Rules](./vercel-preview-rules.md) - QA procedures for preview deployments.
- [Production Rules](./vercel-production-rules.md) - Final checks before production.
- [Environment Rules](./vercel-env-rules.md) - Safe handling of placeholders and environment variables.
- [Routing Notes](./vercel-routing-notes.md) - Path conventions for static and Next.js setups.
- [Rollback Plan](./vercel-rollback-plan.md) - Emergency response for broken production builds.
- [Domain Checklist](./vercel-domain-checklist.md) - Instructions for custom domain setup.
- [Static Site Notes](./vercel-static-site-notes.md) - Guidance for deploying the plain static version.
- [Next.js Notes](./vercel-nextjs-notes.md) - Guidance for deploying the App Router version.
- [Analytics Notes](./vercel-analytics-notes.md) - Optional tracking setup.
- [Security Notes](./vercel-security-notes.md) - Security posture and restrictions.
- [Build Settings](./vercel-build-settings.md) - Documentation on adjusting the `vercel.json` deployment rules.
- [Troubleshooting](./vercel-troubleshooting.md) - Solutions for common Vercel issues.
- [Release Template](./vercel-release-template.md) - A standard format for announcing updates.

## Quick-Start Checklist

- [ ] Confirm your intended deployment mode (Static vs. Next.js).
- [ ] Connect the repository to Vercel.
- [ ] Check `vercel.json` ensures `"git": { "deploymentEnabled": false }`.
- [ ] Deploy manually through the Vercel dashboard or CLI for preview testing.
- [ ] Read through [Preview Rules](./vercel-preview-rules.md).

## Production Launch Checklist Summary

- [ ] Ensure all placeholders (e.g., URLs, domains) have been replaced with actual production values.
- [ ] QA preview builds successfully.
- [ ] Point custom domain to Vercel correctly.
- [ ] If desired and verified, re-enable `"deploymentEnabled": true`.

## Rollback Summary

If production breaks:
1. Locate the last successful deployment in the Vercel dashboard.
2. Click "Promote to Production" (or Revert) to roll back immediately.
3. Run through the [Rollback Plan](./vercel-rollback-plan.md) emergency checklist.

---

**Note:** This folder contains documentation only. It does not contain real secrets, API keys, private tokens, org IDs, team IDs, or project IDs.

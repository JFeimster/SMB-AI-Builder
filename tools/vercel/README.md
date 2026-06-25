# Vercel Tool-Ops Layer

Welcome to the Vercel tool-ops layer for the **SMB AI Workflow & Agent Builder**.

## Purpose

This folder contains durable deployment documentation and QA checklists for running this repository on Vercel. This repository can be deployed in three modes:
1. **Plain Static Site:** Serving plain HTML/CSS/JS files from the root and subdirectories.
2. **Next.js App Router Site:** Utilizing `app/page.tsx` and other App Router conventions.
3. **Hybrid Repo:** A combination of static pages and Next.js app files.

## Default Deployment Posture

**Important:** This project should default to safe/manual deployment behavior. Automatic Vercel deployments from Git should be disabled by default using `"deploymentEnabled": false` in `vercel.json`. Keep automatic deployments disabled until the site is thoroughly QA'd.

_Note: This folder does not contain secrets, API keys, or deployment credentials. Never commit real environment variables to this repository._

## Documentation Index

- [Deployment Checklist](deploy-checklist.md)
- [Preview Deployment Rules](preview-rules.md)
- [Production Deployment Rules](production-rules.md)
- [Environment Variable Rules](env-rules.md)
- [Routing Notes](routing-notes.md)
- [Rollback Plan](rollback-plan.md)
- [Domain Setup Checklist](domain-checklist.md)
- [Static Site Deployment Notes](static-site-notes.md)
- [Next.js App Router Notes](nextjs-notes.md)
- [Analytics Notes](analytics-notes.md)
- [Security & Safety Notes](security-notes.md)
- [Build Settings Documentation](build-settings.md)
- [Troubleshooting Guide](troubleshooting.md)
- [Release Note Template](release-template.md)

## Quick-Start Checklist

1. Review the desired deployment mode (Static, Next.js, or Hybrid).
2. Connect your domain to Vercel (see [domain-checklist.md](domain-checklist.md)).
3. Trigger a manual preview deployment.
4. Perform QA using the [preview-rules.md](preview-rules.md) checklist.
5. If issues arise, consult the [Troubleshooting Guide](troubleshooting.md).

## Production Launch Checklist Summary

- Verify custom domain and canonical URLs.
- Test primary CTA URL.
- Test Notion and GitHub URLs.
- Confirm sensitive workflow disclaimers exist where needed.
- Review and enable `vercel.json` automatic deployments only if absolutely ready.
- Full details in [production-rules.md](production-rules.md).

## Rollback Summary

If a deployment breaks production:
- Use the Vercel deployment history to revert to the last known working deployment.
- Consult the [rollback-plan.md](rollback-plan.md) for detailed steps and communication templates.
---
name: vercel-deployment-checklist
description: Use when reviewing Vercel deployment readiness, manual deployment posture, preview/production QA, domains, static asset paths, and rollback planning.
---

# Vercel Deployment Checklist

## Purpose
Check repository readiness for Vercel deployment without accidentally enabling unsafe auto-deploy behavior.

## Use this skill when
- Reviewing `vercel.json` or `tools/vercel/` docs.
- Preparing manual preview or production deployment.
- Checking static asset paths, routes, domains, analytics notes, or rollback steps.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/vercel/README.md`
- `tools/vercel/vercel-deploy-checklist.md`
- `tools/vercel/vercel-static-site-notes.md`
- `tools/vercel/vercel-production-rules.md`

## Process
1. Confirm `vercel.json` deployment posture.
2. Confirm intended deployment mode: static, Next.js, or hybrid.
3. Check CSS/JS paths for nested static pages.
4. Confirm canonical/OG URLs use the intended deployed origin.
5. Review rollback and preview QA notes.

## Guardrails
- Do not enable automatic deployments unless explicitly requested.
- Do not add private Vercel IDs or credentials.
- Do not change production routing without a rollback note.

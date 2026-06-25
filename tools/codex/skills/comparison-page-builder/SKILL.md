---
name: comparison-page-builder
description: Use when creating balanced SEO comparison pages under pages/seo/comparisons/ for SMB automation, AI agents, GPTs, workflow audits, or tool-selection decisions.
---

# Comparison Page Builder

## Purpose
Create balanced comparison pages that help users choose a workflow-planning path without attacking other tools or inventing claims.

## Use this skill when
- Building pages under `pages/seo/comparisons/`.
- Comparing AI agents, Custom GPTs, workflow audits, Zapier, Make, or automation builds.
- Creating decision tables, use-case guidance, and FAQs.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/seo-rules.md`
- `tools/jules/copy-rules.md`
- `tools/jules/qa-checklist.md`

## Path rules
- Pages in `pages/seo/comparisons/` use `../../../styles.css` and `../../../script.js`.
- Canonical URLs use `https://smb-ai-builder.vercel.app/pages/seo/comparisons/<filename>`.

## Guardrails
- Do not attack third-party tools.
- Do not invent pricing, integrations, benchmarks, ratings, or test results.
- Position the GPT as the planning/readiness layer before choosing the build path.

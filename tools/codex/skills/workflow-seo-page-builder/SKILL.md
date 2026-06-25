---
name: workflow-seo-page-builder
description: Use when creating workflow-specific SEO audit pages under pages/seo/workflows/ with readiness factors, safe pilot plans, human review checkpoints, FAQs, and disclaimers.
---

# Workflow SEO Page Builder

## Purpose
Create workflow-specific audit pages that explain automation risks, readiness factors, and safe AI pilot design.

## Use this skill when
- Building files under `pages/seo/workflows/`.
- Creating pages for lead follow-up, quote follow-up, document collection, finance summaries, invoice reminders, onboarding, or other SMB workflows.
- Reviewing workflow pages for required sections and safety language.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/seo-rules.md`
- `tools/jules/copy-rules.md`
- `tools/jules/qa-checklist.md`

## Path rules
- Workflow pages use `../../../styles.css` and `../../../script.js`.
- Canonicals use `https://smb-ai-builder.vercel.app/pages/seo/workflows/<filename>`.

## Required page ingredients
- Why this workflow is tempting to automate.
- What can go wrong.
- Readiness factors.
- Suggested safe pilot.
- Human review checkpoints.
- CTA and FAQ.

## Guardrails
- Do not promise automation outcomes.
- Include the full sensitive-workflow disclaimer where the workflow touches money, private data, customer communication, legal, HR, medical, lending, underwriting, accounting, tax, or compliance.

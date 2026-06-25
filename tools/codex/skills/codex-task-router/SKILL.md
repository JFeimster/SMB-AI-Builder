---
name: codex-task-router
description: Use when deciding which SMB AI Builder Codex skill should handle a task based on file paths, requested output, repo mode, and risk level.
---

# Codex Task Router

## Purpose
Help Codex choose the right skill before editing the repo.

## Use this skill when
- A task spans multiple areas such as SEO, embeds, schemas, Vercel docs, or static pages.
- The requested file path is ambiguous.
- The task might require a safety, claims, accessibility, or final QA pass.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/qa-checklist.md`

## Routing rules
- Static product/site pages: use `static-site-page-builder`.
- SEO guide pages: use `seo-page-builder`.
- Workflow SEO pages: use `workflow-seo-page-builder`.
- Comparison pages: use `comparison-page-builder`.
- Partner embeds: use `partner-embed-builder`.
- Schema/JSON-LD: use `schema-jsonld-builder`.
- Sitemap/robots/internal links: use `internal-linking-sitemap-builder`.
- Deployment docs: use `vercel-deployment-checklist`.
- Safety review: use `claims-safety-review`.
- Final pass: use `final-qa-runner`.

## Guardrails
- Do not invent a new architecture when an existing path rule applies.
- Do not mix static HTML and Next.js conventions unless explicitly requested.

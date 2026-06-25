---
name: nextjs-app-router-builder
description: Use when creating or reviewing Next.js App Router pages, layouts, route handlers, metadata, and component structure in a repo that explicitly uses Next.js.
---

# Next.js App Router Builder

## Purpose
Create or edit Next.js App Router files only when the task explicitly calls for a Next.js layer.

## Use this skill when
- Working in `app/`, `app/page.tsx`, `app/layout.tsx`, or route handlers.
- Adding Next.js metadata or dynamic routes.
- Reviewing hybrid static + Next.js repo behavior.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/vercel/vercel-nextjs-notes.md`
- `tools/vercel/vercel-routing-notes.md`

## Process
1. Confirm Next.js is expected for the task.
2. Preserve static pages unless migration is explicitly requested.
3. Use server/client boundaries intentionally.
4. Keep metadata aligned with deployed origin and page intent.

## Guardrails
- Do not convert a static HTML task into Next.js without explicit instruction.
- Do not add package dependencies unless requested.
- Do not invent live API integrations.

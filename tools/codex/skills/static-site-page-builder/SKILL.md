---
name: static-site-page-builder
description: Use when creating or editing static HTML product, site, resource, about, contact, agency, consultant, or builder pages using root styles.css and script.js.
---

# Static Site Page Builder

## Purpose
Create static HTML pages that follow the existing SMB AI Builder design system and path rules.

## Use this skill when
- Building files under `pages/site/`.
- Editing the root static site, product pages, or resource pages.
- Keeping the repo static-first with no build step.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/style-guide.md`
- `tools/jules/copy-rules.md`
- `tools/jules/accessibility-checklist.md`

## Path rules
- Pages in `pages/site/` use `../../styles.css` and `../../script.js`.
- Use semantic HTML, one H1, accessible navigation, and visible CTAs.

## Guardrails
- Do not add frameworks or dependencies.
- Do not invent fake proof, logos, reviews, or guarantees.
- Preserve anti-hype, operator-friendly copy.

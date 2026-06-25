---
name: seo-page-builder
description: Use when creating useful long-tail SEO guide pages under pages/seo/ with metadata, internal links, FAQs, JSON-LD, safe CTAs, and no fake proof.
---

# SEO Page Builder

## Purpose
Create search-intent-aligned SEO guide pages that are useful, non-thin, and safe.

## Use this skill when
- Building files under `pages/seo/`.
- Adding metadata, OG tags, Article schema, FAQPage schema, CTAs, and internal links.
- Reviewing SEO pages for depth, uniqueness, and claims risk.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/seo-rules.md`
- `tools/jules/copy-rules.md`
- `tools/jules/qa-checklist.md`

## Path rules
- Pages in `pages/seo/` use `../../styles.css` and `../../script.js`.
- Canonicals use `https://smb-ai-builder.vercel.app/pages/seo/<filename>`.

## Guardrails
- Do not create thin doorway pages.
- Do not use fake proof, fake ratings, fake reviews, or unsupported claims.
- Include required sensitive-workflow disclaimers where relevant.

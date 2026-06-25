---
name: internal-linking-sitemap-builder
description: Use when creating or auditing internal links, sitemap.xml, robots.txt, llms.txt, canonical URLs, crawl paths, and SEO support files.
---

# Internal Linking & Sitemap Builder

## Purpose
Manage internal links and crawler support files so deployed pages are discoverable and accurate.

## Use this skill when
- Editing `sitemap.xml`, `robots.txt`, `llms.txt`, or SEO support files.
- Adding page clusters that need internal links or sitemap entries.
- Checking canonical URLs and deployed origins.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/seo-rules.md`
- `tools/jules/qa-checklist.md`

## Process
1. Confirm which pages exist on the current branch.
2. Add only real deployed paths to sitemap files.
3. Ensure robots points to the actual root sitemap URL.
4. Use `https://smb-ai-builder.vercel.app` unless a configured custom domain is verified.
5. Check internal links by folder depth.

## Guardrails
- Do not list pages that do not exist in the branch.
- Do not use placeholder domains such as `example.com`.
- Do not use an unconfigured custom domain in canonical or OG metadata.

---
name: final-qa-runner
description: Use before merge or final delivery to run cross-file QA for scope, paths, metadata, CTAs, accessibility, safety disclaimers, schema, and unsupported claims.
---

# Final QA Runner

## Purpose
Run final cross-file QA before a task is called complete.

## Use this skill when
- Reviewing a PR before merge.
- Validating generated page clusters.
- Checking docs, embeds, schemas, sitemap, robots, or skills before closure.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/qa-checklist.md`
- `tools/jules/file-map.json`
- `tools/jules/copy-rules.md`
- `tools/jules/seo-rules.md`
- `tools/jules/accessibility-checklist.md`

## Process
1. Confirm the changed files match the requested scope.
2. Check paths, metadata, CTAs, schema, accessibility, and safety language.
3. Search for placeholder domains, fake proof, and unsupported claims.
4. Verify sitemap/robots alignment if crawler files changed.
5. Return merge recommendation: merge, patch, comment, close, or block.

## Guardrails
- Do not approve pages with placeholder canonicals or fake claims.
- Do not merge if required sensitive-workflow disclaimers are missing.

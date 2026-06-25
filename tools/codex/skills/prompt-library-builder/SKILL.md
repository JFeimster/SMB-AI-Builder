---
name: prompt-library-builder
description: Use when creating reusable prompt files for Jules, Codex, GPT builders, QA passes, page generation, embeds, schemas, or deployment workflows.
---

# Prompt Library Builder

## Purpose
Create reusable prompt files that are specific, scoped, and aligned with repo rules.

## Use this skill when
- Building prompts under `tools/jules/prompts/` or related prompt folders.
- Turning a manual workflow into a reusable builder prompt.
- Adding final QA requirements to generated prompts.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/copy-rules.md`
- `tools/jules/qa-checklist.md`
- `tools/jules/style-guide.md`

## Process
1. Define task purpose, allowed files, forbidden files, path rules, and QA checklist.
2. Include CTA, safety, copy, SEO, accessibility, and no-fake-proof rules where relevant.
3. Keep prompts copy/paste-ready for Jules or Codex.
4. Require a final summary of changed files and assumptions.

## Guardrails
- Do not write vague prompts that allow scope creep.
- Do not omit path-depth rules for nested pages.

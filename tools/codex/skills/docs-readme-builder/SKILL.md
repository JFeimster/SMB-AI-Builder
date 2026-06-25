---
name: docs-readme-builder
description: Use when creating or revising README files, documentation indexes, folder docs, usage guides, and repo operating instructions.
---

# Docs README Builder

## Purpose
Create clear repo documentation and README files that match the existing SMB AI Builder structure.

## Use this skill when
- Adding README files to new folders.
- Creating docs for prompts, tools, embeds, skills, schemas, or deployment layers.
- Explaining how to run, review, or use static repo assets.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/qa-checklist.md`

## Process
1. Identify the audience for the doc.
2. Explain purpose, files, usage, QA, and guardrails.
3. Link to adjacent repo docs using correct relative paths.
4. Keep docs implementation-grounded and free of fake capabilities.

## Guardrails
- Do not document features that do not exist.
- Do not include private credentials, fake IDs, or unsupported deployment claims.

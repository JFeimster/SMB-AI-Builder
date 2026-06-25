---
name: markdown-knowledge-file-builder
description: Use when creating clean Markdown knowledge files for the SMB AI Workflow & Agent Builder GPT, including operating rules, examples, workflows, and safety guidance.
---

# Markdown Knowledge File Builder

## Purpose
Create readable Markdown files intended for a Custom GPT knowledge base or repo docs.

## Use this skill when
- Building knowledge files, catalogs, operating rules, examples, or workflow guidance.
- Turning repo rules into GPT-ingestible Markdown.
- Creating local-only knowledge docs without web or API dependencies.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/copy-rules.md`
- `tools/jules/qa-checklist.md`

## Process
1. Define the reader and intended GPT behavior.
2. Use clear headings, short sections, and explicit rules.
3. Include safety boundaries and human-review language where relevant.
4. Avoid duplicate or contradictory instructions.

## Guardrails
- Do not include fake facts, unsupported claims, credentials, or private data.
- Do not present professional advice as the GPT's role.

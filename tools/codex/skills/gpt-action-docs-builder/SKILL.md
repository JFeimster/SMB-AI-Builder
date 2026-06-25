---
name: gpt-action-docs-builder
description: Use when documenting Custom GPT Actions, endpoint behavior, action limitations, review requirements, and user-facing action usage notes.
---

# GPT Action Docs Builder

## Purpose
Document GPT Action behavior in a clear, safe, implementation-grounded way.

## Use this skill when
- Creating docs for GPT Actions.
- Explaining action inputs, outputs, scopes, limitations, and review checkpoints.
- Writing action usage notes for builders or users.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/copy-rules.md`
- `tools/jules/qa-checklist.md`

## Process
1. Identify the action, intended user, input fields, output shape, and limits.
2. Document human-review requirements for sensitive workflows.
3. Link action docs to any OpenAPI schema or test fixture files that actually exist.
4. Note mock/demo-only behavior clearly.

## Guardrails
- Do not invent endpoints, integrations, auth flows, or data access.
- Do not imply the GPT performs regulated decisions or professional advice.

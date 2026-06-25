---
name: api-route-builder
description: Use when creating or reviewing deterministic API route logic for Next.js App Router or GPT Action endpoints, with safe inputs, stable outputs, and no invented integrations.
---

# API Route Builder

## Purpose
Create deterministic API route logic, usually for Next.js App Router or future GPT Action endpoints.

## Use this skill when
- Building or reviewing `/app/api/*` route handlers.
- Designing JSON request/response behavior.
- Connecting future OpenAPI schemas to route behavior.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/qa-checklist.md`
- `tools/jules/file-map.json`
- `tools/jules/copy-rules.md`

## Process
1. Confirm the repo actually uses or intends to use Next.js for the requested API work.
2. Define input fields, validation, response shape, and error states.
3. Keep route logic deterministic and testable.
4. Avoid external integrations unless explicitly configured in the repo.
5. Document any mock/demo-only behavior clearly.

## Guardrails
- Do not add secrets, tokens, org IDs, or private credentials.
- Do not claim real integrations unless implemented.
- Do not convert a static-only task into a server/API task without explicit instruction.

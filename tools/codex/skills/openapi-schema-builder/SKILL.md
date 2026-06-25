---
name: openapi-schema-builder
description: Use when creating or validating OpenAPI 3.1 schemas for GPT Actions, with deterministic request/response definitions and safe public examples.
---

# OpenAPI Schema Builder

## Purpose
Create and validate OpenAPI schemas for GPT Actions or future API documentation.

## Use this skill when
- Writing OpenAPI 3.1 specs.
- Validating schema paths, operations, request bodies, responses, and examples.
- Aligning GPT Action docs with actual endpoint behavior.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/qa-checklist.md`

## Process
1. Confirm the endpoint or action actually exists or is intentionally being scaffolded.
2. Define clear schemas, required fields, error states, and safe examples.
3. Avoid sensitive example data.
4. Validate that operation names and descriptions match the GPT's role.

## Guardrails
- Do not invent third-party integrations, auth flows, or live endpoints.
- Do not include private credentials or real customer data.

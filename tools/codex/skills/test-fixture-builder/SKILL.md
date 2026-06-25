---
name: test-fixture-builder
description: Use when creating safe JSON examples, test fixtures, sample payloads, mock inputs, and expected outputs for APIs, GPT Actions, schemas, or widgets.
---

# Test Fixture Builder

## Purpose
Create safe examples and fixtures for testing repo behavior.

## Use this skill when
- Building JSON payload examples.
- Creating expected response samples.
- Adding mock data for GPT Actions, APIs, widgets, or schema validation.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/qa-checklist.md`

## Process
1. Define the scenario being tested.
2. Use small, deterministic examples.
3. Keep sample data public-safe and obviously fictional.
4. Include expected output or validation notes when useful.

## Guardrails
- Do not use real customer data, private account data, or private identifiers.
- Do not create examples that imply real integrations or approvals.

---
name: conversion-copy-optimizer
description: Use when improving SMB AI Builder copy for clarity, conversion, directness, anti-hype positioning, CTA strength, and safety-aware operator language.
---

# Conversion Copy Optimizer

## Purpose
Improve copy while preserving the repo voice: direct, anti-hype, operator-friendly, practical, and safety-aware.

## Use this skill when
- Rewriting hero sections, CTA bands, page intros, FAQ answers, or embed copy.
- Removing generic SaaS language.
- Making copy more useful without adding unsupported claims.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/copy-rules.md`
- `tools/jules/style-guide.md`

## Process
1. Identify weak, vague, or hype-heavy copy.
2. Replace it with concrete workflow-planning language.
3. Keep CTAs action-oriented and tied to the GPT URL.
4. Preserve required disclaimers on sensitive pages.
5. Return changed snippets and any remaining risks.

## Guardrails
- Do not add fake urgency, fake social proof, guarantees, or revenue/compliance promises.
- Do not use banned phrases from `tools/jules/copy-rules.md`.

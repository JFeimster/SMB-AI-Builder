---
name: changelog-release-notes-builder
description: Use when creating changelogs, release notes, PR summaries, merge summaries, or deployment notes for SMB AI Workflow & Agent Builder changes.
---

# Changelog Release Notes Builder

## Purpose
Create clear, useful changelogs and release notes from repo changes.

## Use this skill when
- Summarizing merged PRs.
- Writing release notes for a deployment.
- Preparing a change summary for users, builders, or operators.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/qa-checklist.md`
- `tools/vercel/vercel-release-template.md`

## Process
1. Identify changed files and the purpose of the change.
2. Group changes by feature, fix, docs, safety, SEO, or deployment impact.
3. Mention user-visible impact before internal implementation details.
4. Flag manual QA, deployment notes, and rollback concerns where relevant.

## Guardrails
- Do not invent shipped features or integrations.
- Do not claim performance, revenue, compliance, or accessibility outcomes unless verified.
- Keep notes concise and operator-friendly.

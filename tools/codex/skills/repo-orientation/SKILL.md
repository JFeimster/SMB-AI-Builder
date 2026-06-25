---
name: repo-orientation
description: Use at the start of repo work to understand SMB AI Builder structure, static vs Next.js mode, source-of-truth files, allowed folders, and safety constraints.
---

# Repo Orientation

## Purpose
Help Codex understand the repository before making changes.

## Use this skill when
- Starting a new task in the repo.
- Determining whether work belongs in static HTML, Next.js, embeds, tools, schemas, prompts, or docs.
- Reviewing stale PRs or overlapping branches.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/qa-checklist.md`
- `tools/jules/style-guide.md`
- `tools/jules/copy-rules.md`

## Process
1. Identify the user's requested deliverable.
2. Read the source-of-truth files.
3. Map requested files to the correct folder.
4. Check whether an existing merged layer already satisfies the task.
5. Choose the most specific Codex skill for execution.

## Guardrails
- Do not assume root-level source-of-truth files exist.
- Do not duplicate a merged layer under alternate filenames.
- Do not change deployment posture unless explicitly asked.

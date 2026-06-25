---
name: file-structure-auditor
description: Use when auditing repo folders, file placement, path depth, naming, static asset references, and whether generated files match the project file map.
---

# File Structure Auditor

## Purpose
Audit expected folders and files against the repo architecture and file map.

## Use this skill when
- Reviewing PR scope.
- Checking whether files were added to the intended folder.
- Verifying static path depth for CSS, JS, sitemap, robots, embeds, skills, and support docs.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/qa-checklist.md`

## Process
1. List changed files.
2. Compare paths against the file map and task scope.
3. Check for duplicate, orphaned, or superseded files.
4. Verify relative paths by folder depth.
5. Recommend move, rename, close-as-superseded, or merge.

## Guardrails
- Do not restructure the repo unless explicitly asked.
- Do not create parallel duplicate folders when an established folder already exists.

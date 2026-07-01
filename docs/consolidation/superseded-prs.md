# Superseded PR Map

This branch replaces the stale/conflicted connector/tooling PR path with a clean branch from current `main`.

## Superseded PRs

| PR | Original Scope | Status in This Branch |
|---:|---|---|
| #64 | Public skills library page | Rebuilt as `pages/directories/skills-library.html` |
| #66 | Workflow connector maps | Rebuilt as index + selected workflow maps |
| #67 | Connector playbook docs | Rebuilt as connector docs index + selected playbooks |
| #68 | Connector prompt packs | Rebuilt as connector prompt indexes and packs |
| #70 | Connector skills | Rebuilt selected SKILL.md files with working links |
| #71 | Connector stack examples | Rebuilt as stack index + selected examples |
| #73 | Connector/tool ecosystem public pages | Rebuilt connector library page with clean sitemap entry |
| #74 | UI/layout refactor | Deferred; do separately after nav/copy-button fixes are confirmed |
| #75/#77 | Test improvements | Deferred until test runner/import path is confirmed |

## Why This Exists

The old PRs were stale, conflicted, or cross-linked to files created by other unmerged branches. This branch starts from current `main` and creates a smaller but mergeable foundation.

## What Not To Do

- Do not reopen the stale connector PR pile unless needed for reference.
- Do not stack new work on old branches.
- Do not add root-level `skills/`.
- Do not claim endpoints or connectors are live unless verified.

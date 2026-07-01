# Connector Tooling Core Consolidation

This branch is a smaller clean rebuild from current `main` after the stale connector/tooling PR pile was closed or superseded.

## Adds

- Connector docs index and risk rules
- Workflow connector map index
- Connector prompt index
- Public connector library page
- Public skills library page
- Sitemap entries for the new pages
- Two selected tool skills using the existing `tools/{tool}/skills/{skill}/SKILL.md` pattern

## Supersedes

This replaces the immediate need to merge stale/conflicted PRs #64, #66, #67, #68, #70, #71, #73, and #74.

## Deferred

Keep these as separate future batches:

- Full UI refactor
- OpenAPI/action schema repair
- Test runner repair
- Connector-specific docs expansion
- Workflow-specific map expansion

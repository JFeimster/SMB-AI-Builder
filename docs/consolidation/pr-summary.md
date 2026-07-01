# PR Summary Draft

## Summary

Consolidates the stale connector/tooling PR pile into one clean branch from current `main`.

## Adds

- Public connector library page
- Public skills library page
- Sitemap entries
- Connector docs and risk rules
- Workflow connector map docs
- Connector stack examples
- Connector prompt packs
- Selected per-tool skills under the existing `tools/{tool}/skills/{skill}/SKILL.md` pattern
- Consolidation docs explaining superseded PRs, review order, deferred work, and next batches

## Supersedes

- #64
- #66
- #67
- #68
- #70
- #71
- #73
- #74

## Safety Notes

- No fake live connector claims
- No fake endpoint claims
- No finance/accounting guarantees
- Sensitive workflows remain human-reviewed

## Deferred

- Full UI refactor
- OpenAPI/action schema repair
- Test runner repair

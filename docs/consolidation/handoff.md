# Consolidation Handoff

## Branch

`integration/connector-tooling-consolidation`

## Purpose

This branch is a direct cleanup/rebuild of the stale connector PR pile. It is not a full final version of the ecosystem. It creates the spine and gets the repo moving again.

## Review Focus

Check these before merge:

1. Public pages load with shared CSS/JS paths.
2. Sitemap XML remains valid.
3. Docs links point to files that exist.
4. No fake connector or endpoint claims.
5. Finance/accounting language avoids guarantees.
6. Skills use existing `tools/{tool}/skills/{skill}/SKILL.md` pattern.

## Post-Merge

After merge, close #79 as completed and open smaller follow-up issues for:

- Connector-specific docs expansion
- Workflow map expansion
- Prompt pack expansion
- UI/layout refactor
- OpenAPI/action schema repair
- Test runner repair

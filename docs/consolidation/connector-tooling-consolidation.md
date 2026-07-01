# Connector Tooling Consolidation

This branch is a direct consolidation pass created from current `main` to replace the stale connector/tooling PR pile.

## Landed Base

Already merged before this branch:

- #63 post-merge QA fixes
- #65 normalized Tool-Ops folder pattern
- #69 connector directory public pages
- #76 CTA parsing performance
- #78 social link parsing performance

## Consolidated Here

This branch adds a safe, mergeable spine for the connector/tooling ecosystem:

- `docs/connectors/README.md`
- `docs/connectors/connector-risk-rules.md`
- `docs/workflow-connector-maps/README.md`
- `docs/connector-stacks/README.md`
- `prompts/connectors/README.md`
- `pages/directories/connector-library.html`
- `pages/directories/skills-library.html`
- `sitemap.xml` entries for the new public pages

## Deferred Work

The following old PRs were stale/conflicted and should not be merged directly:

- #64 public skills library page
- #66 workflow connector maps
- #67 connector playbook docs
- #68 connector prompt packs
- #70 connector skills
- #71 connector stack examples
- #73 connector/tool ecosystem pages
- #74 UI/layout refactor

Their best ideas should be rebuilt incrementally on top of this clean branch if needed.

## Safety Rules Preserved

- No fake connector claims.
- No fake live endpoints.
- No finance/accounting accuracy guarantees.
- No legal, tax, HR, lending, underwriting, accounting, medical, or compliance advice claims.
- Sensitive workflows remain human-reviewed.

## Next Batches

1. Add connector-specific playbooks one connector at a time.
2. Add workflow-specific connector maps one workflow at a time.
3. Add per-tool SKILL.md files only after related docs/pages exist.
4. Rebuild UI/layout changes separately after mobile nav and copy-button bugs are fixed.
5. Rebuild OpenAPI/action work only after request schemas match real route validators.

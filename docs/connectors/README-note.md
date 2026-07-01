# Connector Docs Implementation Note

The connector documentation layer is intentionally index-first.

Do not dump 50 generated files at once unless the link graph and sitemap are ready. Add connector-specific files in small PRs that can be reviewed and merged cleanly.

## Current Pattern

- Use `docs/connectors/README.md` as the central index.
- Use `docs/connectors/connector-risk-rules.md` as the risk source of truth.
- Add specific connector playbooks only when they link to existing pages/docs.

## File Naming

Use:

`docs/connectors/{connector-or-stack}.workflow.md`

Examples:

- `google-workspace.workflow.md`
- `github-vercel.workflow.md`
- `notion-airtable.workflow.md`
- `hubspot-crm.workflow.md`

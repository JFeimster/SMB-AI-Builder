# Connector Risk Rules

This document outlines the strict rules and safety standards for all connectors in SMB workflows.

The workflow is the product. AI is just the amplifier. If the process is broken, automation makes it broken faster. Do not connect tools just because the demo looked shiny.

## Risk Levels

### Low-Risk Connectors
- Read-only integrations.
- Internal dashboard or status checks.
- Public data retrieval.
- No access to PII or financial data.

### Medium-Risk Connectors
- Internal-only writable data (e.g., Notion, Jira).
- Draft communications that don't auto-send.
- Analytics and reporting aggregation.
- Minimal blast radius upon failure.

### High-Risk Connectors
- Direct communication to clients (e.g., auto-sending emails).
- Core infrastructure and deployments.
- Bulk updates to CRMs or production databases.
- Requires strict rate limits and failure handling.

### Sensitive Workflows
Any workflow involving money, accounting, legal agreements, human resources, or sensitive customer data is strictly classified as Sensitive.

These workflows MUST NOT be fully automated.

## Operational Mandates

### Human Review Requirements
For sensitive or high-risk workflows, human review is non-negotiable.
- AI can prepare, format, and draft the work.
- A designated human operator must review and click 'approve' or 'send'.

### Draft-First Mode
Always default workflows to draft-first mode. Never auto-publish, auto-send, or auto-commit unless the workflow has survived extensive testing. AI creates the draft; humans deploy it.

### Test Data First
Never connect a new workflow to production data. Always use isolated test environments, sandbox accounts, or dummy data. Prove the logic works before letting it touch real client or operational databases.

### Audit Logs
All automated actions must leave a clear, undeniable trace.
- Log the time, action, inputs, and outputs.
- Make it trivial to determine exactly what the automation did and why.

### Rollback Plans
Assume the automation will break. Before turning on any connector, have a documented, tested rollback plan to revert to the manual process immediately.

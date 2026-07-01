# Next Batches After Consolidation

After this consolidation branch merges, build in smaller batches.

## Batch 1 — Connector-Specific Playbooks

Add one connector playbook per PR:

- Gmail
- Google Drive
- Google Calendar
- GitHub
- Vercel
- Notion
- Airtable
- HubSpot
- ClickUp
- QuickBooks
- Semrush

## Batch 2 — Workflow Maps

Add one workflow map per PR:

- Document collection
- Invoice reminders
- Weekly reporting
- Content production
- Support triage
- Meeting-to-tasks

## Batch 3 — Prompt Packs

Add prompt packs by connector category instead of giant dumps.

## Batch 4 — UI Refactor

Rebuild the UI/layout pass separately with these required fixes:

- Match nav-toggle breakpoint to hidden nav breakpoint.
- Make copy buttons read the closest prompt-card code element.
- Run page checks on prompt pages and nested public pages.

## Batch 5 — OpenAPI / Actions

Only rebuild OpenAPI once route validators and request schemas are aligned.

Do not use dummy request bodies for real operations.

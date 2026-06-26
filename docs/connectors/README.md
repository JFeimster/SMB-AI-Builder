# SMB AI Builder Connectors

These connector playbooks exist to help operators map out automation workflows safely. They serve as repo knowledge files for the GPT, Codex, Jules, and future contributors to reason about connector usage.

The workflow is the product. AI is just the amplifier. If the process is broken, automation makes it broken faster. Do not connect tools just because the demo looked shiny.

## How Connector Playbooks Work

Each playbook outlines exactly when to use a tool, when to avoid it, what inputs it needs, and what risks it introduces. They provide starter prompts and examples to build workflows properly before writing any code.

These are not live integrations. They are planning tools.

## The Minimum Connector Stack

Start with the absolute minimum connector stack required to prove the workflow. You should only introduce a new connector if the current process breaks without it. Too many tools too early creates fragile pipelines and unmanageable dependencies.

## Connector Risk Levels

Not all connectors are equal. We classify risks strictly:

- **Low:** Read-only data or low-stakes public tools.
- **Medium:** Standard tools that can write data but carry limited blast radius.
- **High:** Tools that touch core infrastructure or external communications.
- **Sensitive / human-review required:** Workflows involving money, legal, HR, or customer relationships. AI can draft; humans must approve.

## Table of Connector Playbooks

| Connector | Playbook Link |
| --- | --- |
| Google Drive | [google-drive.workflow.md](./google-drive.workflow.md) |
| Gmail | [gmail.workflow.md](./gmail.workflow.md) |
| Google Calendar | [google-calendar.workflow.md](./google-calendar.workflow.md) |
| GitHub | [github.workflow.md](./github.workflow.md) |
| Notion | [notion.workflow.md](./notion.workflow.md) |
| Airtable | [airtable.workflow.md](./airtable.workflow.md) |
| HubSpot | [hubspot.workflow.md](./hubspot.workflow.md) |
| ClickUp | [clickup.workflow.md](./clickup.workflow.md) |
| Vercel | [vercel.workflow.md](./vercel.workflow.md) |
| Supabase | [supabase.workflow.md](./supabase.workflow.md) |
| QuickBooks | [quickbooks.workflow.md](./quickbooks.workflow.md) |
| Semrush | [semrush.workflow.md](./semrush.workflow.md) |

For detailed risk rules, see [connector-risk-rules.md](./connector-risk-rules.md).

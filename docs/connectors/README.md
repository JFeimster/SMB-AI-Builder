# Connector Playbooks

Connector playbooks explain when a tool belongs in an SMB AI workflow, what it should touch, what should stay human, and what prompt to use before wiring anything together.

Use this layer before building automations. The workflow is the product. AI is just the amplifier.

## Operating Rule

Do not connect tools just because the demo looked shiny. Start with the minimum connector stack, test with safe/sample data, and keep sensitive decisions under human review.

## Connector Categories

| Category | Connectors | Best First Use |
|---|---|---|
| Google Workspace | Drive, Gmail, Calendar, Contacts | Document, email, scheduling, and meeting workflows |
| Ops / CRM | Notion, Airtable, HubSpot, ClickUp | Work queues, status tracking, CRM follow-up, tasks |
| Builder / Dev | GitHub, Vercel, Supabase | Static site, repo, deployment, and data workflows |
| Finance Ops | QuickBooks, Finances | Draft-only summaries, reconciliation support, reporting checklists |
| Content / SEO | Semrush, Canva, Drive, Notion | Content planning, optimization, asset routing |
| Automation Layer | Webhooks, OpenAPI, Zapier, Make, n8n | Controlled handoffs after the workflow is mapped |

## Risk Levels

| Risk | Meaning | Default Mode |
|---|---|---|
| Low | Public or non-sensitive workflow planning | Automate or draft safely |
| Medium | Internal docs, CRM notes, meeting summaries | Draft-first with review |
| High | Customer-impacting workflows, money movement, sensitive records | Human approval required |
| Sensitive | Legal, tax, HR, lending, underwriting, medical, compliance | Qualified human review only |

## Starter Prompt

```text
Audit this workflow and recommend the minimum connector stack. Identify what can be automated, what should remain human-reviewed, what data is required, and what the first safe pilot should be.
```

## Related Public Pages

- ../../pages/tools/connectors.html
- ../../pages/tools/connector-playbooks.html
- ../../pages/tools/connector-risk-map.html
- ../../pages/tools/integration-map.html
- ../../pages/directories/connector-library.html

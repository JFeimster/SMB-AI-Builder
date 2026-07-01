# Workflow Connector Maps

Workflow connector maps show the minimum useful connector stack for common SMB workflows.

The goal is not to connect everything. The goal is to identify the smallest stack that creates value without turning a messy process into a faster disaster.

## Workflow Map Table

| Workflow | Minimum Stack | Risk | First Safe Pilot |
|---|---|---|---|
| Lead follow-up | Gmail + Calendar + CRM + GPT | Medium | Draft follow-up messages for human send |
| Client onboarding | Form + Drive + Notion/Airtable + GPT | Medium | Generate onboarding checklist from intake |
| Document collection | Drive + Gmail + CRM + GPT | Medium | Draft missing-doc reminders |
| Invoice reminders | QuickBooks + Gmail + GPT | High | Draft reminders for review only |
| Weekly reporting | Airtable/Notion + Gmail + GPT | Medium | Summarize status changes for review |
| Content production | Drive + Notion + Semrush + GPT | Low/Medium | Generate content brief from existing notes |
| Sales pipeline | HubSpot/Airtable + Gmail + Calendar + GPT | Medium/High | Identify stale leads and draft next steps |
| Support triage | Gmail/Helpdesk + ClickUp/Notion + GPT | Medium | Categorize issues and draft task summaries |
| Meeting-to-tasks | Calendar + Gmail + ClickUp/Notion + GPT | Medium | Convert notes to tasks for human approval |
| Repo-to-deployment | GitHub + Vercel + GPT | Medium | Create deployment readiness checklist |

## Standard Map Format

Each workflow map should include:

- Workflow
- Common mess
- Best connectors
- Minimum stack
- Advanced stack
- What to automate
- What should stay human
- Risk level
- Draft-first rules
- Starter GPT prompt
- Expected output
- Related playbooks
- Related site pages

## Starter Prompt

```text
Map this workflow into a minimum connector stack. Show the common mess, best connectors, what to automate, what should stay human, risk level, draft-first rules, and a 30-day pilot plan.
```

## Related Pages

- ../../pages/tools/connectors.html
- ../../pages/tools/connector-risk-map.html
- ../../pages/directories/workflow-library.html
- ../../pages/tools/prompts.html

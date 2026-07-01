# Connector Stack Examples

These stack examples translate common SMB workflows into minimum viable connector stacks.

The goal is not to build a robot circus. The goal is to use the fewest tools required to create a safe, useful pilot.

## Stack Examples

| Stack | Minimum Tools | Primary Use | Review Level |
|---|---|---|---|
| Lead Follow-Up Stack | Gmail + Calendar + CRM + GPT | Draft follow-up and next steps | Human send/review |
| Client Onboarding Stack | Forms + Drive + Notion/Airtable + Calendar + GPT | Intake to checklist | Human review |
| Document Collection Stack | Drive + Gmail + CRM + GPT | Missing-doc tracking | Human approval before send |
| Sales Pipeline Stack | HubSpot/Airtable + Gmail + Calendar + GPT | Stale lead and pipeline cleanup | Human review |
| Content Engine Stack | Drive + Notion + Semrush + Canva + GPT | Briefs, outlines, asset routing | Human publish review |
| Repo Launch Stack | GitHub + Vercel + Codex/Jules + GPT | Static site deploy readiness | Human merge/deploy review |
| Ops Dashboard Stack | Airtable/Notion + Calendar + Gmail + GPT | Weekly status summaries | Human review |
| Finance Ops Stack | QuickBooks + Drive + Gmail + GPT | Draft summaries and checklists | Qualified review required |
| Meeting-to-Tasks Stack | Calendar + Gmail + ClickUp/Notion + GPT | Notes to tasks | Human assignment review |

## Safety Notes

No connector stack should make final legal, tax, HR, lending, underwriting, accounting, medical, or compliance decisions. AI can support planning and drafting. Sensitive decisions stay human-reviewed.

## Starter Prompt

```text
Design a minimum viable connector stack for this workflow. Show the data flow, what AI can draft, what AI should not decide, risk level, setup checklist, and success criteria for a 30-day pilot.
```

## Related Docs

- ../connectors/README.md
- ../workflow-connector-maps/README.md
- ../../pages/tools/connectors.html
- ../../pages/directories/connector-library.html

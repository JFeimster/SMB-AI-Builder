# Sales Pipeline Connector Map

## Workflow

Track leads and deals from first contact to next step, follow-up, proposal, or close.

## Common Mess

Stages are vague, owners are missing, follow-up is inconsistent, and stale deals rot in the CRM graveyard.

## Best Connectors

- HubSpot or Airtable
- Gmail
- Google Calendar
- GPT

## Minimum Stack

CRM + Gmail + Calendar + GPT.

## Advanced Stack

Add web forms, ClickUp, Slack, or webhooks after the pipeline rules are clear.

## What To Automate

- Stale record detection
- Follow-up draft creation
- Task draft creation
- Deal context summaries
- Stage hygiene reports

## What Should Stay Human

- Final customer messaging
- Pricing commitments
- Eligibility claims
- Lending, underwriting, legal, tax, accounting, HR, medical, or compliance conclusions

## Risk Level

Medium. High when financial or eligibility claims are involved.

## Draft-First Rules

AI may draft messages and summarize records. Humans approve sends and customer-impacting changes.

## Starter GPT Prompt

```text
Map this sales pipeline workflow into a connector stack. Identify stages, required fields, follow-up triggers, stale deal rules, human review gates, and a safe pilot.
```

## Related Playbooks

- ../connectors/hubspot-crm.workflow.md
- ../connectors/google-workspace.workflow.md

## Related Site Pages

- ../../pages/tools/connectors.html
- ../../pages/tools/connector-risk-map.html

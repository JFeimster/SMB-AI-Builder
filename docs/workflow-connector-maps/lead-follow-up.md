# Lead Follow-Up Connector Map

## Workflow

Lead follow-up after a form fill, call, quote request, or missed response.

## Common Mess

Leads arrive in one place, notes live somewhere else, follow-up timing is inconsistent, and nobody owns the next touch.

## Best Connectors

- Gmail
- Google Calendar
- HubSpot or Airtable
- GPT

## Minimum Stack

Gmail + Calendar + CRM + GPT.

## Advanced Stack

Add forms, Slack/ClickUp, or webhook routing only after the minimum stack works.

## What To Automate

- Draft first follow-up
- Draft no-response follow-up
- Summarize lead context
- Suggest next task
- Flag stale opportunities

## What Should Stay Human

- Final send
- Pricing or qualification claims
- Lending, underwriting, or approval language
- Sensitive customer decisions

## Risk Level

Medium. High if financial eligibility, credit, lending, or regulated claims are involved.

## Draft-First Rules

AI may draft and summarize. A human reviews before external messages are sent.

## Starter GPT Prompt

```text
Map this lead follow-up workflow into a minimum connector stack. Show triggers, data needed, follow-up drafts, human review points, and a 30-day pilot.
```

## Expected Output

- Trigger map
- Connector stack
- Message sequence
- Human review checkpoints
- Success criteria

## Related Playbooks

- ../connectors/README.md
- ../connectors/google-workspace.workflow.md

## Related Site Pages

- ../../pages/tools/connectors.html
- ../../pages/tools/follow-up-prompts.html
- ../../pages/tools/connector-risk-map.html

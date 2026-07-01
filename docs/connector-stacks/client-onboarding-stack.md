# Client Onboarding Stack

## What This Stack Is For

A controlled client onboarding flow that turns intake into folders, tasks, kickoff prep, and reviewable client communication.

## Minimum Stack

- Intake form
- Google Drive
- Notion or Airtable
- Google Calendar
- GPT

## Expanded Stack

- CRM
- ClickUp
- Gmail templates
- Webhook routing

## Data Flow

1. Client submits intake.
2. Drive stores documents.
3. Notion/Airtable tracks checklist and status.
4. Calendar schedules kickoff.
5. GPT drafts agenda, checklist, and missing-info requests.
6. Human reviews before sending or marking complete.

## What AI Can Draft

- Kickoff agenda
- Onboarding checklist
- Missing info request
- Internal handoff summary
- Task list

## What AI Should Not Decide

- Contract interpretation
- Final scope changes
- Pricing commitments
- Legal, financial, HR, or regulated conclusions

## Risk Level

Medium by default. High when onboarding touches sensitive records.

## Setup Checklist

- [ ] Define required intake fields.
- [ ] Define required documents.
- [ ] Define review owner.
- [ ] Define kickoff criteria.
- [ ] Test with sample client.

## Starter GPT Prompt

```text
Design a client onboarding stack using forms, Drive, Notion/Airtable, Calendar, and GPT. Include data flow, review gates, checklist, and safe pilot criteria.
```

## Related Docs

- ../workflow-connector-maps/client-onboarding.md
- ../connectors/notion-airtable.workflow.md

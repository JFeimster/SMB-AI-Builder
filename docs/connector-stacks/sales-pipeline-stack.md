# Sales Pipeline Stack

## What This Stack Is For

A practical CRM stack for turning lead activity into clear next steps without letting AI make customer-impacting decisions.

## Minimum Stack

- HubSpot or Airtable
- Gmail
- Google Calendar
- GPT

## Expanded Stack

- Forms
- ClickUp
- Slack
- Webhooks

## Data Flow

1. Lead enters CRM.
2. Required fields and stage are checked.
3. GPT drafts next step or follow-up.
4. Human reviews message and task.
5. CRM status is updated after review.

## What AI Can Draft

- Follow-up messages
- Stale lead summaries
- Task suggestions
- Pipeline cleanup notes
- Meeting prep briefs

## What AI Should Not Decide

- Customer eligibility
- Approval or qualification claims
- Pricing commitments
- Regulated decisions

## Risk Level

Medium by default. High when the workflow touches credit, lending, money, legal, HR, medical, or compliance issues.

## Setup Checklist

- [ ] Define stages.
- [ ] Define required fields.
- [ ] Define stale lead rules.
- [ ] Define message review owner.
- [ ] Test on sample records.

## Starter GPT Prompt

```text
Design a sales pipeline stack using CRM, Gmail, Calendar, and GPT. Include field checklist, follow-up drafts, human review gates, and success criteria.
```

## Related Docs

- ../workflow-connector-maps/sales-pipeline.md
- ../connectors/hubspot-crm.workflow.md

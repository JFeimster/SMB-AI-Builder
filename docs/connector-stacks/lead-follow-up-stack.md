# Lead Follow-Up Stack

## What This Stack Is For

A minimum viable stack for following up with leads without losing context or accidentally sending half-baked AI sludge to real humans.

## Minimum Stack

- Gmail
- Google Calendar
- HubSpot or Airtable
- GPT

## Expanded Stack

- Web forms
- ClickUp or Slack
- Webhooks
- SMS provider after compliance review

## Data Flow

1. Lead enters through a form, email, or call note.
2. CRM stores the lead and stage.
3. GPT drafts next-step messaging.
4. Human reviews and sends.
5. Calendar/task system tracks follow-up.

## What AI Can Draft

- First response
- No-response follow-up
- Missing-info request
- Call recap
- Next-step task

## What AI Should Not Decide

- Eligibility
- Approval chances
- Pricing promises
- Credit/lending decisions
- Legal or compliance conclusions

## Risk Level

Medium by default. High when money, lending, credit, legal, HR, medical, or regulated data is involved.

## Setup Checklist

- [ ] Define lead source.
- [ ] Define CRM fields.
- [ ] Define message templates.
- [ ] Add review step.
- [ ] Test with sample leads.
- [ ] Track response rate and manual corrections.

## Starter GPT Prompt

```text
Design a lead follow-up stack using Gmail, Calendar, CRM, and GPT. Keep messages draft-first, identify review gates, and create a 30-day pilot plan.
```

## Success Criteria

- Faster first response drafts
- Fewer stale leads
- Clear owner for every lead
- No external message sent without review during pilot

## Related Docs

- ../workflow-connector-maps/lead-follow-up.md
- ../connectors/google-workspace.workflow.md

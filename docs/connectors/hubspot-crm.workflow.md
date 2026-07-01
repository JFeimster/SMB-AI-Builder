# HubSpot / CRM Connector Playbook

## Connector

HubSpot or CRM-style pipeline system for contacts, deals, follow-up, and status tracking.

## Best For

- Lead follow-up
- Pipeline hygiene
- Stale deal detection
- Task routing
- Customer context summaries
- Drafting next-step messages

## Do Not Use For

- Final eligibility decisions
- Automatic customer-impacting decisions
- Lending, underwriting, credit, legal, HR, tax, accounting, medical, or compliance conclusions

## Required Inputs

- Pipeline stages
- Required fields
- Trigger events
- Owner roles
- Follow-up rules
- Review requirements

## Common SMB Workflows

- New lead routing
- Stale lead follow-up
- Missing information request
- Renewal reminders
- Sales task creation
- Pipeline cleanup

## Automation Opportunities

- Draft follow-up messages
- Flag stale records
- Summarize deal context
- Suggest next actions
- Generate task lists

## What Should Stay Human

- Final messages during pilot
- Customer commitments
- Pricing or qualification claims
- Sensitive decisions

## Privacy / Security Risks

CRM data often includes private customer context and business-sensitive notes. Keep workflows draft-first and permission-scoped.

## Risk Level

Medium by default. High when workflows affect money, lending, eligibility, or customer status.

## Starter Prompt

```text
Audit this CRM workflow. Identify pipeline stages, missing fields, stale records, follow-up drafts, human review gates, and a safe pilot plan.
```

## Related Pages

- ../../pages/tools/connectors.html
- ../../pages/tools/connector-risk-map.html
- ../../pages/directories/skills-library.html

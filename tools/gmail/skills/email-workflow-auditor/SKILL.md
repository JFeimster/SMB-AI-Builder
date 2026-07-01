# Skill: Email Workflow Auditor

## Purpose

Audit Gmail-based workflows for lead follow-up, client communication, document requests, internal routing, and draft-first automation opportunities.

## Use When

Use this skill when a workflow depends on inbox triage, follow-up, reminders, missing documents, approvals, renewals, or customer-facing messages.

## Inputs Needed

- Email workflow type
- Sender/recipient roles
- Trigger event
- Desired response or next step
- Sensitive data involved
- Human approval requirement

## Outputs

- Email workflow map
- Draft-safe automation opportunities
- Follow-up sequence outline
- Human review checkpoints
- Risk notes
- Starter prompt or message template

## Procedure

1. Identify the trigger.
2. Identify the intended recipient.
3. Identify the required context.
4. Classify sensitivity.
5. Decide draft-only vs send-ready.
6. Create the follow-up or routing plan.
7. Add approval gates where needed.

## Safety / Human Review

Customer-facing email automation should start draft-first. Do not automate final sends for sensitive, financial, legal, HR, lending, or complaint-related workflows without qualified review.

## Quality Checklist

- [ ] Trigger is clear.
- [ ] Audience is clear.
- [ ] Draft vs send mode is explicit.
- [ ] Sensitive data is flagged.
- [ ] Human review is included where needed.

## Example Prompt

```text
Audit this email workflow and create a draft-first follow-up plan. Identify the trigger, audience, data needed, message sequence, review points, and risks.
```

## Related Tool Docs

- ../../../../docs/connectors/README.md
- ../../../../prompts/connectors/README.md

## Related Site Pages

- ../../../../pages/tools/connectors.html
- ../../../../pages/tools/follow-up-prompts.html
- ../../../../pages/tools/connector-risk-map.html

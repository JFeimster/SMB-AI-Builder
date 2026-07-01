# Skill: Pipeline Workflow Auditor

## Purpose

Audit HubSpot or CRM-style pipeline workflows for lead routing, follow-up, stage hygiene, task creation, and draft-first automation planning.

## Use When

Use this skill when the workflow involves leads, deals, contacts, lifecycle stages, stale opportunities, CRM tasks, or follow-up automation.

## Inputs Needed

- Pipeline name
- Stages
- Lead/contact source
- Follow-up rules
- Required fields
- Current bottlenecks
- Sensitive decision points

## Outputs

- Pipeline audit
- Stage cleanup recommendations
- Follow-up triggers
- Draft-safe automation ideas
- Human approval gates
- CRM field checklist

## Procedure

1. Map stages.
2. Identify stale or ambiguous statuses.
3. Identify missing required fields.
4. Map follow-up triggers.
5. Decide what can be drafted.
6. Flag customer-impacting decisions.
7. Recommend a pilot workflow.

## Safety / Human Review

AI should not make final customer, credit, lending, underwriting, legal, or eligibility decisions. Use draft-first messaging for external communication.

## Quality Checklist

- [ ] Stages are clear.
- [ ] Required fields are identified.
- [ ] Follow-up triggers are mapped.
- [ ] Sensitive decisions are human-reviewed.
- [ ] Automation pilot is small and testable.

## Example Prompt

```text
Audit this CRM pipeline. Identify broken stages, missing fields, stale leads, safe follow-up drafts, human review points, and the smallest automation pilot.
```

## Related Tool Docs

- ../../../../docs/connectors/README.md
- ../../../../docs/workflow-connector-maps/README.md

## Related Site Pages

- ../../../../pages/tools/connectors.html
- ../../../../pages/tools/connector-risk-map.html
- ../../../../pages/directories/skills-library.html

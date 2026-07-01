# Skill: Airtable Base Planner

## Purpose

Plan Airtable bases for SMB workflows that need structured records, status tracking, routing, reporting, and automation-ready fields.

## Use When

Use this skill when a workflow needs tables, linked records, views, forms, statuses, ownership, and reporting beyond a simple document.

## Inputs Needed

- Workflow name
- Record types
- Required statuses
- Users/owners
- Intake fields
- Reporting needs
- Automation goals

## Outputs

- Base schema
- Tables and fields
- Views
- Status pipeline
- Automation candidates
- Risk notes

## Procedure

1. Identify core objects.
2. Convert objects into tables.
3. Define required fields.
4. Define statuses and views.
5. Add ownership and timestamps.
6. Identify safe automations.
7. Add human review gates.

## Safety / Human Review

Do not automate sensitive updates without review. Financial, HR, legal, lending, underwriting, medical, or compliance records require careful access and qualified review.

## Quality Checklist

- [ ] Tables match actual workflow objects.
- [ ] Statuses are actionable.
- [ ] Views support real users.
- [ ] Automations have clear triggers.
- [ ] Sensitive records are flagged.

## Example Prompt

```text
Design an Airtable base for this workflow. Define tables, fields, statuses, views, automations, human review points, and reporting outputs.
```

## Related Tool Docs

- ../../../../docs/connectors/README.md
- ../../../../docs/workflow-connector-maps/README.md

## Related Site Pages

- ../../../../pages/tools/connectors.html
- ../../../../pages/directories/skills-library.html

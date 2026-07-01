# Skill: No-Auth Action Planner

## Purpose

Plan safe no-auth GPT Actions for SMB workflow utilities without requiring private customer data, OAuth, or destructive write access.

## Use When

Use this skill when a workflow can be supported by public-safe inputs, examples, calculators, classifiers, checklists, or draft-only planning helpers.

## Inputs Needed

- Workflow name
- Intended user
- Required non-sensitive inputs
- Desired output
- Risk level
- Human review requirement
- Whether a matching API route already exists

## Outputs

- Action purpose
- Auth type
- Safe request schema
- Safe response schema
- Example request
- Example response
- Human review warning
- Unsupported uses

## Procedure

1. Define the workflow and user outcome.
2. Remove private, regulated, or unnecessary fields.
3. Classify risk.
4. Decide whether no-auth is appropriate.
5. Draft the request and response schema.
6. Add examples.
7. Add safety notes.
8. Confirm the schema does not claim live behavior unless a route exists.

## Safety / Human Review

Do not design no-auth actions that require private customer data, money movement, legal/tax/HR/lending/underwriting/accounting/medical/compliance decisions, or destructive write operations.

## Quality Checklist

- [ ] No sensitive data required.
- [ ] No fake live endpoint claims.
- [ ] Examples are realistic but not private.
- [ ] Human review is explicit where needed.
- [ ] Request schema matches any actual route if one exists.

## Example Prompt

```text
Design a no-auth GPT Action for this workflow. Keep inputs non-sensitive, define a safe request schema, response schema, examples, rate limits, and human-review warnings.
```

## Related Tool Docs

- ../../../README.md
- ../../../../docs/connectors/connector-risk-rules.md

## Related Site Pages

- ../../../../pages/tools/actions.html
- ../../../../pages/tools/no-auth-actions.html
- ../../../../pages/tools/openapi.html
- ../../../../pages/tools/connector-risk-map.html

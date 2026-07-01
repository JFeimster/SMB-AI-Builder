# Skill: Finance Workflow Risk Review

## Purpose

Review finance-adjacent workflows for safe AI assistance, draft-only outputs, and qualified human review requirements.

## Use When

Use this skill for invoice reminders, finance summaries, bookkeeping support, reconciliation checklists, payment status workflows, or cash-flow reporting drafts.

## Inputs Needed

- Workflow purpose
- Data source
- Output needed
- Users/reviewers
- Financial decision points
- Customer-facing impact

## Outputs

- Risk classification
- Draft-safe outputs
- Human review requirements
- Data handling notes
- Pilot checklist
- Unsafe automation warnings

## Procedure

1. Identify data touched.
2. Identify whether the workflow affects money, billing, accounting, lending, taxes, or customers.
3. Classify risk.
4. Keep outputs draft-first unless explicitly safe.
5. Add human review checkpoints.
6. Avoid accuracy guarantees.

## Safety / Human Review

This skill does not provide legal, tax, accounting, lending, underwriting, or financial advice. Finance workflows should be reviewed by qualified humans. Do not claim 100% accuracy.

## Quality Checklist

- [ ] No accuracy guarantees.
- [ ] No final accounting conclusions.
- [ ] No automated money movement.
- [ ] Human review is explicit.
- [ ] Draft outputs are clearly labeled.

## Example Prompt

```text
Review this finance workflow for AI automation risk. Identify what AI can draft, what must stay human-reviewed, what data is sensitive, and the safest pilot checklist.
```

## Related Tool Docs

- ../../../../docs/connectors/connector-risk-rules.md
- ../../../../docs/connector-stacks/README.md

## Related Site Pages

- ../../../../pages/tools/connector-risk-map.html
- ../../../../pages/directories/skills-library.html

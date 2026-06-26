# Skill: Pipeline Automation Planner

## Purpose
Plans HubSpot Workflows for automating deal pipelines and marketing follow-ups.

## Use When
When designing automated actions based on deal stage changes or contact behavior.

## Inputs Needed
- Target pipeline and stages
- Desired automated actions (tasks, emails, property updates)
- Criteria for enrollment

## Outputs
- A step-by-step HubSpot Workflow plan
- Enrollment triggers and re-enrollment logic
- Action sequences and delays

## Procedure
1. Define the goal of the automation (e.g., 'Nurture leads in the Decision stage').
2. Set specific, unambiguous enrollment criteria.
3. Map out the sequence of actions (e.g., Create Task, Delay 2 days, Send Email).
4. Define suppression lists or unenrollment criteria to prevent inappropriate actions.
5. Review against safety rules.

## Safety / Human Review
- Always emphasize testing workflows in draft mode.
- Ensure human review for sensitive communications.
- No fake live connector claims.

## Quality Checklist
- [ ] Enrollment criteria are specific?
- [ ] Unenrollment logic is included?
- [ ] Draft-first testing is recommended?

## Example Prompt
```
I want to create a HubSpot workflow that automatically creates a follow-up task for the sales rep and sends a check-in email if a deal sits in the 'Proposal Sent' stage for more than 5 days. How should I build this?
```

## Related Tool Docs
- [HubSpot Tool Docs](../../README.md)

## Related Site Pages
- [HubSpot Pages](../../../../pages/tools/hubspot)

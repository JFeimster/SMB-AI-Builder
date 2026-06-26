# Skill: Ops Database Mapper

## Purpose
Maps operational workflows to Airtable structures and automations.

## Use When
When integrating Airtable into broader business operations and planning automations.

## Inputs Needed
- Existing operational workflows
- Tools currently used
- Data inputs and outputs

## Outputs
- A workflow diagram connecting Airtable to other tools
- Defined Airtable Automations (Triggers and Actions)
- Data validation recommendations

## Procedure
1. Analyze the operational workflow.
2. Determine how data enters Airtable (Forms, Integrations, Manual).
3. Plan Airtable Automations (e.g., 'When record matches conditions -> Send Slack message').
4. Outline how data leaves Airtable or updates other systems.
5. Review against safety rules.

## Safety / Human Review
- Warn against automations that trigger massive data changes without a review step.
- Mention draft-first mode for sensitive notifications.

## Quality Checklist
- [ ] Data entry methods are clear?
- [ ] Automations have specific triggers?
- [ ] Safety limits on bulk actions are noted?

## Example Prompt
```
We use Airtable to track our manufacturing orders. When an order status changes to 'Shipped', I want to automatically email the customer and update our accounting software. Can you map out this workflow and the Airtable automations needed?
```

## Related Tool Docs
- [Airtable Tool Docs](../../README.md)

## Related Site Pages
- [Airtable Pages](../../../../pages/tools/airtable)

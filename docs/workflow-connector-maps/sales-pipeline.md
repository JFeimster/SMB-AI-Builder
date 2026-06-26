# Sales Pipeline Connector Map

## Workflow
Tracking deals from prospect to closed-won or closed-lost.

## Common Mess
Reps failing to update the CRM, causing inaccurate forecasts and dropped follow-ups. If the process is broken, automation makes it broken faster.

## Best Connectors
- **Triggers:** Email activity, Calendar events, Proposal views
- **Data:** HubSpot, Salesforce, Pipedrive
- **Comms:** Slack, Email

## Minimum Stack
Email → CRM

## Advanced Stack
Email/Calendar → CRM → Proposal Software (PandaDoc) → Slack (Deal Won Alerts)

## What To Automate
- Logging emails and meetings to the contact record.
- Advancing deal stages based on signed proposals.
- Creating follow-up tasks if a deal sits in a stage too long.

## What Should Stay Human
- The actual sales calls and negotiations.
- Deciding to disqualify a major prospect.
- Customizing final proposals.

## Risk Level
Medium

## Draft-First Rules
AI should only summarize call transcripts to draft CRM notes or suggest next steps for the rep.

## Starter GPT Prompt
```text
Review the transcript of this sales call: [Transcript]
Extract the BANT (Budget, Authority, Need, Timeline) information and draft a summary note for the CRM.
```

## Expected Output
A structured summary of the call ready to be pasted into the CRM.

## Related Playbooks
- [CRM Connectors](../connectors/crm.md)
- [Sales Connectors](../connectors/sales.md)

## Related Site Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)
- [../../pages/tools/prompts.html](../../pages/tools/prompts.html)

# Lead Follow-Up Connector Map

## Workflow
Automating initial responses, triage, and data entry when a new lead enters the system.

## Common Mess
Leads get lost in email inboxes, responses are delayed, and context is lost between initial contact and the first meeting. If the process is broken, automation makes it broken faster.

## Best Connectors
- **Triggers:** Webflow Forms, Typeform, Calendly
- **Data:** HubSpot, Pipedrive, Salesforce
- **Comms:** Gmail, Outlook, Slack

## Minimum Stack
Webform → CRM → Email

## Advanced Stack
Webform → Data Enrichment (Clearbit) → CRM → Slack Alert → Email Sequence

## What To Automate
- Creating contact records in the CRM.
- Sending a boilerplate acknowledgment email.
- Alerting the sales team in Slack.

## What Should Stay Human
- Tailoring the actual pitch.
- Disqualifying complex leads.
- Pricing discussions.

## Risk Level
Medium

## Draft-First Rules
AI should only draft the initial personalized email to the lead and save it as a draft in the email client or CRM, pending human review and send.

## Starter GPT Prompt
```text
Act as a sales development representative.
Analyze this new lead submission: [Lead Data]
Draft a short, professional email acknowledging their interest and asking 1-2 clarifying questions based on their submission.
Do not make up facts about our product.
```

## Expected Output
A concise email draft directly addressing the lead's inquiry, ready for review.

## Related Playbooks
- [CRM Connectors](../connectors/crm.md)
- [Email Connectors](../connectors/email.md)

## Related Site Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)
- [../../pages/tools/prompts.html](../../pages/tools/prompts.html)

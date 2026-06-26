# Support Triage Connector Map

## Workflow
Routing incoming customer support requests to the right team or individual.

## Common Mess
Tickets sitting unassigned, important customers getting ignored, and repetitive questions answered manually. If the process is broken, automation makes it broken faster.

## Best Connectors
- **Triggers:** Zendesk, Intercom, Help Scout, Email
- **Data:** CRM, Internal Knowledge Base
- **Comms:** Slack, Teams

## Minimum Stack
Helpdesk → Project Mgmt / Chat

## Advanced Stack
Helpdesk → AI Classification API → Helpdesk Routing Rules → Slack Escalations

## What To Automate
- Tagging tickets based on keywords (e.g., "billing", "bug").
- Routing tickets to specific agents based on tags.
- Sending auto-replies with links to relevant knowledge base articles.

## What Should Stay Human
- Handling angry or sensitive customer escalations.
- Troubleshooting complex technical bugs.
- Issuing refunds.

## Risk Level
Medium

## Draft-First Rules
AI should only draft responses for the agent to review, or classify the ticket. It should not auto-reply to complex issues.

## Starter GPT Prompt
```text
Review this customer support ticket: [Ticket Text]
Identify the core issue and suggest the 3 most relevant articles from our knowledge base to solve it. Draft a polite response to the customer.
```

## Expected Output
A categorized issue and a drafted response containing knowledge base links.

## Related Playbooks
- [Support Connectors](../connectors/support.md)
- [Chat Connectors](../connectors/chat.md)

## Related Site Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)
- [../../pages/tools/prompts.html](../../pages/tools/prompts.html)

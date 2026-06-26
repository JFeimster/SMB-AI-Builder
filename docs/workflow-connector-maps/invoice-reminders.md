# Invoice Reminders Connector Map

## Workflow
Sending standardized follow-ups for outstanding payments.

## Common Mess
Manual tracking in spreadsheets, inconsistent reminder schedules, and forgotten invoices. If the process is broken, automation makes it broken faster.

## Best Connectors
- **Triggers:** QuickBooks, Xero, Stripe
- **Data:** Accounting Software
- **Comms:** Email

## Minimum Stack
Accounting Tool → Email

## Advanced Stack
Accounting Tool → CRM Update → Email Sequence → Slack Alert for Sales

## What To Automate
- 7-day, 14-day, and 30-day overdue notices.
- Updating status flags in the CRM.

## What Should Stay Human
- Collections calls.
- Negotiating payment plans.
- Pausing services for non-payment.

## Risk Level
High

## Draft-First Rules
AI should only draft customized responses to client replies about invoices. Automated initial reminders should use fixed templates, not AI-generated text.

## Starter GPT Prompt
```text
The client replied to an invoice reminder with this message: [Message]
Draft a polite but firm response acknowledging their message and reiterating the payment terms: [Terms].
```

## Expected Output
A professional email draft responding to the client's payment query.

## Related Playbooks
- [Finance Connectors](../connectors/finance.md)
- [Email Connectors](../connectors/email.md)

## Related Site Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)
- [../../pages/tools/prompts.html](../../pages/tools/prompts.html)

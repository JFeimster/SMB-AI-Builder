# Gmail Workflow Playbook

## Connector
Gmail

## Best For
Inbound lead routing, standard customer support replies, internal alerts, and report distribution.

## Do Not Use For
Mass marketing blasts, cold outreach campaigns (use specialized tools instead), sending raw financial data, or finalizing legal agreements without human approval.

## Required Inputs
- Sender/Recipient Addresses
- Subject Line
- Email Body (Text/HTML)
- Attachments (optional)
- Thread IDs (for replies)

## Common SMB Workflows
1. Drafting responses to common customer support queries.
2. Routing inbound sales leads to the correct team member.
3. Sending daily operational summary emails.
4. Triaging and categorizing vendor invoices.
5. Setting up auto-responses for out-of-office or SLA expectations.

## Automation Opportunities
- Reading and labeling incoming emails based on intent.
- Extracting structured data (like invoice amounts) from email bodies.
- Drafting replies and saving them to the Drafts folder.
- Forwarding specific alert types to Slack or SMS.

## What Should Stay Human
- Clicking "Send" on customer-facing emails.
- Handling escalated or sensitive customer complaints.
- Discussing pricing, negotiations, or custom quotes.
- Firing or reprimanding personnel.

## Privacy / Security Risks
Reading emails exposes PII, confidential communications, and proprietary data to the automation layer. Auto-sending carries a high risk of embarrassing mistakes, sending the wrong data to the wrong client, or triggering spam filters if misconfigured.

## Risk Level
- High (if auto-sending)
- Medium (if draft-only)

## Starter Prompt
```text
I want to use AI to read my customer support inbox in Gmail. I get the same 5 questions every day. Map out a workflow where an automation reads incoming emails, categorizes the question type, and creates a draft reply in Gmail using my standard templates. I will review and send the drafts manually.
```

## Example Output
```json
{
  "workflow_step": "Draft Support Reply",
  "connector": "Gmail",
  "action": "Create Draft",
  "parameters": {
    "to": "customer@example.com",
    "subject": "Re: Password Reset Request",
    "body": "Hi there, here are the instructions to reset your password..."
  }
}
```

## Related Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/tools/integration-map.html](../../pages/tools/integration-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)

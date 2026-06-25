# Tool Stack Patterns for SMBs

## Purpose
A vendor-neutral guide mapping common SMB tool stacks to automation patterns. Plan the workflow before choosing the tool.

## What Data Lives Where
Understanding where your source of truth lives is the first step to clean automation.
- **Communications:** Gmail, Outlook, Slack, Teams.
- **Customer Data (Source of Truth):** HubSpot, Pipedrive, Salesforce, GoHighLevel.
- **Financial Data (Source of Truth):** QuickBooks, Xero, Stripe.
- **Operations/Tracking:** Google Sheets, Airtable, Notion, Trello, Asana.
- **Connectors:** Zapier, Make, n8n.

## Common SMB Patterns

### Pattern 1: The "Lead to CRM" Flow
- **Tools:** Form Builder (Typeform/Jotform) -> Connector (Zapier) -> CRM (HubSpot).
- **Workflow:** User fills form. Data creates a CRM record.
- **Safe Pilot Idea:** Use Zapier to send a Slack notification to the team with the lead details.

### Pattern 2: The "Draft Assist" Flow
- **Tools:** Email (Gmail) -> Connector (Make) -> AI (OpenAI API) -> Email (Gmail Drafts).
- **Workflow:** Inbound email arrives. AI reads it, writes a reply, and saves it as a draft.
- **Human Review:** Owner opens drafts and clicks send.

### Pattern 3: The "Document Collector" Flow
- **Tools:** CRM -> Connector -> Storage (Google Drive/Dropbox) -> Email.
- **Workflow:** Deal closes in CRM. Folder is automatically created. Email is sent requesting documents to be uploaded to that folder.
- **Common Failure Point:** Client emails the document instead of using the folder. (Process exception).

### Pattern 4: The "Status Board" Flow
- **Tools:** Operations Tool (Airtable/Trello) -> Connector -> Communications (Slack).
- **Workflow:** When a project status changes to "Review", a message is sent to the team channel.
- **Human Review:** Team sees the message and knows to take action.

### Pattern 5: The "Invoicing Reminder" Flow
- **Tools:** Accounting (QuickBooks) -> Connector -> Email.
- **Workflow:** Find invoices 5 days overdue. Send polite reminder email.
- **Permission Boundaries:** Connector should only have 'Read' access to invoices, not write access to alter ledger entries.

## Common Failure Points in SMB Stacks
1. **Broken Connections:** API keys expire or Zapier connections break.
2. **Messy Data:** Duplicate CRM records cause automations to misfire.
3. **Over-complexity:** Building a 15-step automation for a task that happens once a month.
4. **Tool Sprawl:** Paying for 5 overlapping tools instead of utilizing one properly.

## Permission Boundaries
- **Rule of Least Privilege:** Only give automation tools the access they strictly need.
- If a tool only needs to read data to summarize it, do not give it write/delete access.

## Cleanup Checklist Before Connecting Tools
- [ ] Are we using consistent naming conventions?
- [ ] Is the data in the source tool currently accurate?
- [ ] Do we have API access on our current pricing tier?
- [ ] Have we removed duplicate records?

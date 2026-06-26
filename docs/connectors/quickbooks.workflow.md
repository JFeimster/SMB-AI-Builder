# QuickBooks Workflow Playbook

## Connector
QuickBooks

## Best For
Accounting, invoicing, expense tracking, payroll processing, and financial reporting.

## Do Not Use For
General CRM tasks, project management, or storing non-financial customer interaction histories.

## Required Inputs
- Customer IDs
- Invoice Details (Line items, amounts, tax codes)
- Vendor IDs
- Expense Accounts
- Payment Statuses

## Common SMB Workflows
1. Generating draft invoices from CRM 'Closed Won' deals.
2. Syncing customer contact info between sales tools and accounting.
3. Creating vendor records from onboarding forms.
4. Exporting monthly financial summaries.
5. Logging billable hours from time-tracking apps.

## Automation Opportunities
- Creating *draft* invoices or estimates.
- Syncing customer metadata.
- Categorizing standard recurring expenses (with review).
- Sending automated payment reminders for overdue invoices.

## What Should Stay Human
- Final approval and sending of invoices.
- Reconciling bank accounts.
- Processing payroll.
- Making tax categorizations or audit-related decisions.

## Privacy / Security Risks
QuickBooks holds the financial lifeblood of the business. Automated write access carries severe risk. Incorrectly automated invoices can damage client relationships. Incorrect tax codes can cause legal and financial liabilities.

## Risk Level
- Sensitive / human-review required (for any write actions)

## Starter Prompt
```text
I want to speed up my invoicing. When a project is marked 'Complete' in my project management tool, I want to automatically create a *draft* invoice in QuickBooks using the client's information and standard line items, but I want to review and send it manually. Help me map this out.
```

## Example Output
```json
{
  "workflow_step": "Create Draft Invoice",
  "connector": "QuickBooks",
  "action": "Create Invoice",
  "parameters": {
    "customer_ref": "123",
    "line_items": [
      {
        "description": "Web Design Services",
        "amount": 2500.00
      }
    ],
    "email_status": "NotSet"
  }
}
```

## Related Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/tools/integration-map.html](../../pages/tools/integration-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)

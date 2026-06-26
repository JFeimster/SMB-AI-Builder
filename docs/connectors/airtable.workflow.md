# Airtable Workflow Playbook

## Connector
Airtable

## Best For
Relational data tracking, lightweight CRM, content calendars, inventory tracking, and structured data collection.

## Do Not Use For
Highly sensitive financial ledgers, HIPAA-compliant medical records (unless explicitly configured on enterprise plans), or high-frequency trading data.

## Required Inputs
- Base ID
- Table Name
- Record IDs
- Field Values (matching column types)

## Common SMB Workflows
1. Tracking sales pipeline stages.
2. Managing a social media content calendar.
3. Tracking applicant tracking systems (ATS) for hiring.
4. Logging inventory check-ins and check-outs.
5. Collecting and categorizing customer feedback forms.

## Automation Opportunities
- Creating new records from webhook payloads or form submissions.
- Updating record statuses based on external events.
- Triggering notifications when specific fields change.
- Linking records across multiple tables automatically.

## What Should Stay Human
- Defining the database schema and table relationships.
- Approving major data migrations or bulk deletions.
- Handling complex data resolution conflicts.

## Privacy / Security Risks
Airtable views can easily be made public. An automation that moves sensitive data into a public view will cause a data leak. API keys often have broad access.

## Risk Level
- Medium

## Starter Prompt
```text
I want to use Airtable as a lightweight CRM. When a new lead submits a Webflow form, I want to create a new record in the 'Leads' table in Airtable, populate their contact info, and set their status to 'New'. Map out this workflow.
```

## Example Output
```json
{
  "workflow_step": "Log New Lead",
  "connector": "Airtable",
  "action": "Create Record",
  "parameters": {
    "base_id": "appBase12345",
    "table": "Leads",
    "fields": {
      "Name": "Jane Doe",
      "Email": "jane@example.com",
      "Status": "New"
    }
  }
}
```

## Related Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/tools/integration-map.html](../../pages/tools/integration-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)

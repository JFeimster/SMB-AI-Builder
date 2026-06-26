# Notion Workflow Playbook

## Connector
Notion

## Best For
Internal knowledge bases, SOP documentation, meeting notes, lightweight project tracking, and company wikis.

## Do Not Use For
High-volume transactional databases, complex relational financial tracking, or external customer portals without strict permission checks.

## Required Inputs
- Database/Page IDs
- Properties (Keys/Values)
- Block Content (Markdown/JSON)

## Common SMB Workflows
1. Logging daily team meeting notes automatically.
2. Creating an internal project page when a new deal closes.
3. Syncing customer support FAQs with an external helpdesk.
4. Tracking onboarding progress for new hires.
5. Aggregating weekly reports from multiple departments.

## Automation Opportunities
- Creating structured database rows from form inputs.
- Appending new blocks to existing pages.
- Updating status properties based on external triggers.
- Generating daily summary pages.

## What Should Stay Human
- Defining the high-level workspace structure and permissions.
- Final approval on company-wide policy documents.
- Handling sensitive HR reviews.

## Privacy / Security Risks
Notion permissions can be complex. Automations might inadvertently expose internal pages to external guests or write sensitive data into publicly shared pages.

## Risk Level
- Medium

## Starter Prompt
```text
I need a workflow to standardize our meeting notes. When a Google Calendar event ends, I want to create a new page in our Notion "Meeting Notes" database, linked to the client name, with a template containing sections for 'Attendees', 'Discussion', and 'Action Items'. Help me map this out.
```

## Example Output
```json
{
  "workflow_step": "Create Meeting Notes Page",
  "connector": "Notion",
  "action": "Create Page",
  "parameters": {
    "parent_database_id": "db_notes_789",
    "properties": {
      "Name": {"title": [{"text": {"content": "Sync: Acme Corp"}}]},
      "Date": {"date": {"start": "2024-05-14"}}
    }
  }
}
```

## Related Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/tools/integration-map.html](../../pages/tools/integration-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)

# HubSpot Workflow Playbook

## Connector
HubSpot

## Best For
CRM management, marketing automation, sales pipelines, lead scoring, and customer communication tracking.

## Do Not Use For
Detailed project management execution, complex inventory management, or storing highly sensitive unencrypted PII outside of standard contact fields.

## Required Inputs
- Contact/Company IDs
- Deal Stages
- Custom Property Keys/Values
- Owner IDs

## Common SMB Workflows
1. Creating new contacts from external lead forms.
2. Updating deal stages when a contract is signed.
3. Logging meeting notes or call summaries to contact timelines.
4. Triggering internal notifications for high-value leads.
5. Syncing contact data with accounting software.

## Automation Opportunities
- Automatic lead assignment based on territory or round-robin.
- Updating custom properties based on user engagement.
- Moving deals between pipeline stages.
- Creating tasks for sales reps to follow up.

## What Should Stay Human
- Closing high-value enterprise deals.
- Crafting highly personalized outreach for key accounts.
- Resolving data duplication or merging complex company records.

## Privacy / Security Risks
Automations that alter marketing consent or subscription statuses risk violating GDPR/CAN-SPAM laws. Accidental mass updates to deal stages can ruin revenue forecasting.

## Risk Level
- High (for marketing emails and pipeline stages)
- Medium (for contact creation)

## Starter Prompt
```text
I need to automate deal tracking in HubSpot. When a contract is signed in our esignature tool, I want to update the corresponding deal in HubSpot to 'Closed Won' and add a note to the contact's timeline with the contract link. Help me map this out.
```

## Example Output
```json
{
  "workflow_step": "Update Deal Stage",
  "connector": "HubSpot",
  "action": "Update Deal",
  "parameters": {
    "deal_id": "987654321",
    "properties": {
      "dealstage": "closedwon",
      "amount": "5000.00"
    }
  }
}
```

## Related Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/tools/integration-map.html](../../pages/tools/integration-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)

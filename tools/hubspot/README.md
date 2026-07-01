# Hubspot Tool-Ops Layer

## Purpose
Defines the workflows and best practices for interacting with the HubSpot API for marketing, sales, and CRM automation.

## Best Used For
- Creating and updating contacts
- Logging sales activities (calls, emails)
- Managing deals and pipelines
- Syncing lead information
- Retrieving company data

## Not For
- Bulk data extraction bypassing standard reporting
- Modifying core CRM property definitions
- Sending unauthorized marketing emails

## Common Tasks
- Create a new contact from a form submission
- Update a deal stage
- Log a meeting on a contact timeline

## Inputs Needed
- Contact details (email, name)
- Deal properties
- Activity metadata

## Outputs
- Contact IDs
- Deal IDs
- JSON representations of CRM objects

## Skills
List related skills in `tools/hubspot/skills/`. Note: Subfolders are created only when needed since Git does not preserve empty directories.

## Prompts
Point to `tools/hubspot/prompts/` if present.

## Risk Notes
Handle OAuth or Private App tokens securely. Be cautious with bulk updates to avoid unintended overwrites of CRM data.

## Related Site Pages
- Relevant documentation or capability pages will be linked here.

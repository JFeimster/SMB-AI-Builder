# Airtable Tool-Ops Layer

## Purpose
Guides AI operations for creating, reading, and updating records in Airtable bases to manage structured relational data.

## Best Used For
- Managing CRM data
- Tracking inventory or assets
- Handling form submissions
- Syncing data with external applications
- Generating automated reports from views

## Not For
- Storing unstructured text documents
- Complex nested hierarchical data structures
- High-volume transactional systems

## Common Tasks
- Create a new CRM record
- Fetch records from a specific view
- Update the status of an existing record

## Inputs Needed
- Base ID
- Table name
- Record fields (JSON)

## Outputs
- Record IDs
- Retrieved row data
- Update confirmations

## Skills
List related skills in `tools/airtable/skills/`. Note: Subfolders are created only when needed since Git does not preserve empty directories.

## Prompts
Point to `tools/airtable/prompts/` if present.

## Risk Notes
Respect Airtable's API rate limits (5 requests per second). Ensure field types match the schema to avoid validation errors.

## Related Site Pages
- Relevant documentation or capability pages will be linked here.

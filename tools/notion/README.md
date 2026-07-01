# Notion Tool-Ops Layer

## Purpose
Provides documentation and instructions for integrating with Notion to manage knowledge bases, databases, and project tracking.

## Best Used For
- Creating dynamic database entries
- Updating project tasks
- Generating documentation pages
- Syncing notes from other platforms
- Building internal wikis

## Not For
- Real-time high-frequency data processing
- Storing large binary files (use Drive instead)
- Complex relational database queries not supported by Notion API

## Common Tasks
- Add a new row to a project database
- Create a new page with structured content
- Update a task's status property

## Inputs Needed
- Database IDs
- Page properties (JSON)
- Block content arrays

## Outputs
- Created page URLs
- Database query results
- Success confirmations

## Skills
List related skills in `tools/notion/skills/`. Note: Subfolders are created only when needed since Git does not preserve empty directories.

## Prompts
Point to `tools/notion/prompts/` if present.

## Risk Notes
Notion API rate limits apply. Ensure proper parent page/database IDs are used. Handle block limitations carefully.

## Related Site Pages
- Relevant documentation or capability pages will be linked here.

# Google Drive Tool-Ops Layer

## Purpose
Provides rules and guidelines for interacting with Google Drive to store, organize, and retrieve files for SMB AI workflows.

## Best Used For
- Storing generated reports
- Retrieving template documents
- Organizing shared assets
- Backing up structured data exports
- Managing folder hierarchies for client assets

## Not For
- Storing highly sensitive credentials
- Real-time database operations
- Hosting public-facing static sites

## Common Tasks
- Create a folder structure for a new project
- Upload a generated PDF report
- Search for a specific document by name

## Inputs Needed
- File metadata (name, mimeType)
- Parent folder IDs
- Search queries

## Outputs
- File links
- Folder IDs
- Upload confirmation logs

## Skills
List related skills in `tools/google-drive/skills/`. Note: Subfolders are created only when needed since Git does not preserve empty directories.

## Prompts
Point to `tools/google-drive/prompts/` if present.

## Risk Notes
Handle OAuth tokens securely. Do not change global sharing permissions unintentionally. Be cautious of storage quotas.

## Related Site Pages
- Relevant documentation or capability pages will be linked here.

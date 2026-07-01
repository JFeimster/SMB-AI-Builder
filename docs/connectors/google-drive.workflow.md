# Google Drive Workflow Playbook

## Connector
Google Drive

## Best For
File organization, document templating, shared storage access, client onboarding folders, and asset management for SMB workflows.

## Do Not Use For
Storing unencrypted highly sensitive personal data (e.g., SSNs, medical records), acting as a high-performance database, or unstructured data dumping without naming conventions.

## Required Inputs
- Folder IDs or Paths
- Document Templates (Docs/Sheets)
- Target File Names
- Required Permissions/Roles

## Common SMB Workflows
1. Generating standard contract drafts from templates.
2. Creating client-specific onboarding folders automatically.
3. Archiving and sorting daily operational reports.
4. Exporting data to Google Sheets for weekly dashboards.
5. Managing intake forms and organizing attachments.

## Automation Opportunities
- Folder creation and nested structure setup.
- Copying and renaming document templates based on variables.
- Consolidating scattered attachments into unified client folders.
- Generating draft PDFs from Google Docs templates.

## What Should Stay Human
- Defining access control for external clients.
- Final review of sensitive contracts before sharing.
- Approving permanent deletion of archived data.
- Establishing initial folder taxonomy and naming conventions.

## Privacy / Security Risks
Misconfigured sharing settings can expose internal business data to the public or unauthorized clients. If an automation over-shares a root folder, the blast radius is massive.

## Risk Level
- Medium

## Starter Prompt
```text
I need to automate my client onboarding folder structure in Google Drive. When a new client is signed, I want to create a main folder named "[Client Name] - [Year]", with subfolders for "Contracts", "Assets", and "Deliverables". I also want to copy our standard welcome doc template into the Contracts folder. Help me map out this workflow, including the necessary Google Drive steps and variable names.
```

## Example Output
```json
{
  "workflow_step": "Create Client Folder",
  "connector": "Google Drive",
  "action": "Create Folder",
  "parameters": {
    "parent_folder_id": "root_clients_folder_123",
    "folder_name": "Acme Corp - 2024"
  }
}
```

## Related Pages
- [../../pages/tools/integration-map.html](../../pages/tools/integration-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)

# Client Onboarding Connector Map

## Workflow
Gathering information, signing agreements, and setting up initial resources for a newly signed client.

## Common Mess
Endless email threads asking for the same files, disjointed kick-off calls, and disorganized folder structures. If the process is broken, automation makes it broken faster.

## Best Connectors
- **Triggers:** eSignature (DocuSign, PandaDoc), CRM (HubSpot, Salesforce)
- **Data:** Google Drive, Dropbox, Monday.com, Asana
- **Comms:** Email, Slack

## Minimum Stack
CRM → Form → Cloud Storage

## Advanced Stack
CRM (Closed Won) → eSignature → Form → Cloud Storage Folder Creation → Project Management Template Creation

## What To Automate
- Triggering the welcome email sequence.
- Creating the client's shared cloud folder.
- Deploying a standardized project management board/template.

## What Should Stay Human
- The kick-off meeting.
- Customizing the statement of work.
- Reviewing sensitive documents.

## Risk Level
Medium

## Draft-First Rules
AI should only summarize the onboarding questionnaire answers into a brief client profile draft to be reviewed before the kick-off meeting.

## Starter GPT Prompt
```text
Review the answers from this client onboarding form: [Form Data]
Summarize their main goals, technical requirements, and any immediate blockers in a 3-bullet list for the account manager to review before the kickoff call.
```

## Expected Output
A short summary of the client's current state and goals based on their form submission.

## Related Playbooks
- [CRM Connectors](../connectors/crm.md)
- [Storage Connectors](../connectors/storage.md)

## Related Site Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)
- [../../pages/tools/prompts.html](../../pages/tools/prompts.html)

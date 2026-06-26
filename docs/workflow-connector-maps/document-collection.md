# Document Collection Connector Map

## Workflow
Chasing down required files, forms, and signatures from clients or employees.

## Common Mess
Files sent via unsecured email, wrong file formats, and forgotten attachments causing delays. If the process is broken, automation makes it broken faster.

## Best Connectors
- **Triggers:** Forms (Typeform, Jotform), Portals
- **Data:** Google Drive, Dropbox, Box
- **Comms:** Email

## Minimum Stack
Email/Portal → Cloud Storage

## Advanced Stack
Portal → Cloud Storage → OCR/Data Extraction → Database/CRM

## What To Automate
- Storing attachments in standard folder structures.
- Naming conventions for incoming files.
- Reminders for missing files.

## What Should Stay Human
- Reviewing compliance or legal documents.
- Verifying the accuracy of the contents within the documents.

## Risk Level
Medium

## Draft-First Rules
AI should only check for missing information and draft follow-up reminder emails, never send them automatically.

## Starter GPT Prompt
```text
Here is a list of required documents: [List]
Here is a list of submitted documents: [List]
Draft an email to the client thanking them for what they sent and listing exactly what is still missing.
```

## Expected Output
A polite follow-up email draft noting missing documents.

## Related Playbooks
- [Storage Connectors](../connectors/storage.md)
- [Form Connectors](../connectors/forms.md)

## Related Site Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)
- [../../pages/tools/prompts.html](../../pages/tools/prompts.html)

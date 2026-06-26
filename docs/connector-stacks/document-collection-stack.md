# Document Collection Stack

## What This Stack Is For
This stack manages the frustrating, highly manual process of requesting, tracking, and following up on required documents (e.g., tax forms, IDs, financial statements, or project assets) from clients.

## Minimum Stack
- **Drive (Google Drive/Dropbox)**: For secure storage of the received documents.
- **Gmail**: For sending requests and receiving attachments.
- **CRM / Spreadsheet**: To track which documents have been received and which are pending.
- **Reminders (Task Manager/Calendar)**: To trigger follow-up actions when documents are late.
- **GPT**: To draft polite but firm follow-up emails for missing documents.

## Expanded Stack
*(Add these only after the minimum stack is working reliably)*
- **FileInvite / Content Snare**: Dedicated document collection portals to replace email attachments.
- **Zapier/Make**: To auto-save Gmail attachments directly to specific Drive folders.
- **GPT Vision**: To perform basic checks (e.g., "Does this image look like a driver's license?").

## Data Flow
1. A document request list is logged in the **CRM / Spreadsheet**.
2. An initial request email is sent via **Gmail**.
3. A deadline is set in **Reminders**.
4. When the client replies, the attachments are saved to the correct **Drive** folder.
5. The **CRM / Spreadsheet** is updated to mark the documents as received.
6. If the deadline passes, **GPT** drafts a follow-up email noting exactly what is still missing.

## What AI Can Draft
- The initial clear, formatted list of required documents.
- Polite nudge emails for overdue items.
- Summaries of what has been received vs. what is outstanding.

## What AI Should Not Decide
- Verifying the legal validity or accuracy of sensitive documents (e.g., confirming a tax return is correct).
- Automatically deleting or rejecting submitted files.
- Communicating sensitive PII (Personally Identifiable Information) via unencrypted channels.

## Risk Level
**Sensitive**. Handling client documents often involves PII, financial data, or legal records. AI should only handle the *communication* about the documents, not process the sensitive contents of the documents themselves without strict compliance review.

## Setup Checklist
- [ ] Create a standard folder structure in Drive (e.g., `ClientName/01_Intake_Docs`).
- [ ] Create a tracking sheet or CRM pipeline stage for "Awaiting Documents".
- [ ] Write a GPT prompt to generate follow-up emails based on missing items.
- [ ] Establish a clear policy for handling sensitive data (e.g., "Upload securely to this link" vs "Email it").

## Starter GPT Prompt
```text
I need to follow up with a client who hasn't sent all their documents.
Client Name: [Name]
Documents Received: [List]
Documents Still Missing: [List]
Deadline was: [Date]

Draft a polite, professional, but firm email reminding them that we cannot proceed with their project until the missing documents are provided. Tell them to upload the files securely using the link provided in the previous email.
```

## Success Criteria
- The time spent chasing clients for documents decreases.
- No files are lost in the inbox; everything is safely stored in Drive.
- The business owner has a clear dashboard showing whose documents are pending.

## Related Docs
- [Connectors Directory](../connectors/README.md)
- [Workflow Connector Maps](../workflow-connector-maps/README.md)
- [Tools: Connectors](../../pages/tools/connectors.html)

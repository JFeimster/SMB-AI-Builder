# Document Collection Workflows

## Purpose
A guide for automating document collection workflows for service businesses, agencies, lenders, accountants, and consultants.

*Disclaimer: This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.*

## Why Document Collection Gets Messy
- Clients ignore checklists.
- Documents are sent via email, text, and WhatsApp.
- Naming conventions are terrible (e.g., "scan1.pdf").
- Tracking what is missing requires opening 10 folders.

## The Safe Pilot Pattern
Do not attempt to have an AI automatically ingest, read, and approve sensitive financial documents on day one. Instead, automate the *tracking* and *reminding*.

### Example Workflow Map: The "Nag Bot"
1. **Trigger:** Client onboarding starts.
2. **Action 1:** Automation creates a unique Google Drive/Dropbox folder for the client.
3. **Action 2:** Automation creates a row in a "Document Tracker" Airtable/Sheet with checkboxes for required docs (W2, ID, Bank Statement).
4. **Action 3:** Weekly, automation checks the tracker.
5. **Human Review Point:** Owner reviews the tracker to check off what arrived.
6. **Action 4:** Automation drafts an email listing exactly what checkboxes are still empty. Owner clicks send.

## Document Collection SOP
**Purpose:** Standardize how we request and store client files.
**Owner:** Account Manager
**Steps:**
1. Never accept sensitive documents via text message.
2. If a client emails a document, immediately move it to their secure folder and delete the email attachment.
3. Update the tracking sheet immediately.
4. Run the reminder automation every Tuesday morning.

## Privacy Handling & Sensitive Document Rules
- **Access Boundaries:** AI tools should NOT have read-access to folders containing PII (Personal Identifiable Information) unless explicitly configured with strict enterprise security.
- **Escalation Rules:** If a client refuses to use the secure portal, escalate to a phone call.
- **Legal/Tax/Medical Note:** Use compliant storage systems. Do not use generic, non-compliant tools for medical records.

## Intake Forms vs. Email Attachments
Always prefer intake forms over email attachments. Forms can enforce required fields, standardize file names, and route files directly to the right folder securely.

## Readiness Checklist
- [ ] Required document list is standardized.
- [ ] Secure storage folder structure is defined.
- [ ] Tracking mechanism (spreadsheet/database) is set up.
- [ ] Staff is trained to NOT store sensitive files on their local desktops.

# Sample Blueprint: Client Onboarding

## Purpose
Illustrates an automation blueprint handling document collection and human handoffs.

## Fictional scenario
"Stellar Consulting Agency" (Fictional) signs 5 new clients a month. Onboarding requires collecting 3 signed forms, setting up a shared folder, and sending a welcome kit.

## Workflow summary
Contract signed -> Create Google Drive folder -> Send checklist email -> Wait for documents -> Notify Account Manager.

## Current-state process
Highly manual. The Account Manager does all folder creation and chases clients for documents over a 2-week period.

## Pain points
- Delays in starting work because documents are missing.
- Inconsistent folder naming conventions.

## Readiness considerations
- Trigger is clear (Contract signed in e-signature tool).
- APIs are available for drive and email.

## Human review points
- Account Manager must verify the *quality* of the uploaded documents before officially kicking off the project.

## Recommended automation mode
**Human approval before action** (for the final kickoff step).

## Suggested pilot
Automate folder creation and the initial welcome email immediately upon contract signature. Provide the client with a secure upload link.

## Risks and disclaimers
*Disclaimer: This is a fictional example. Ensure your document collection tools comply with relevant data privacy regulations for your industry.*

## Sample output
(Automated Email): "Welcome aboard! Here is your secure link to upload the initial strategy documents. Our team will review them within 24 hours of submission."

## Next step
Draft the specific email copy and define the exact folder structure required.

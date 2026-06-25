# Sample Workflow: Invoice Reminder

## Purpose
Demonstrates how to handle finance-adjacent workflows safely without fully automating sensitive actions.

## Fictional scenario
"Creative Design Co" (Fictional) often has 10-15 unpaid invoices past 30 days.

## Workflow summary
Check aging report -> Draft reminder email -> Send to client.

## Current-state process
The owner checks the accounting software bi-weekly and sends manual emails.

## Pain points
- Cash flow is delayed.
- The owner hates asking for money and procrastinates.

## Readiness considerations
- Accounting software has a robust API.
- Formatting an email is easy for AI.

## Human review points
- **Critical:** A human MUST review the reminder before sending. The client may have paid by physical check yesterday, or they may be a VIP client requiring a softer touch.

## Recommended automation mode
**Draft-only AI assist**

## Suggested pilot
An automation runs weekly, finds overdue invoices, and drafts personalized reminder emails in the owner's outbox. The owner clicks "Send" on the ones that are accurate.

## Risks and disclaimers
*Disclaimer: This is a fictional example. Do not use AI to fully automate collections, legal threats, or financial penalties. Always maintain a human-in-the-loop for money-related communications.*

## Sample output
(Draft Email): "Hi [Client], just a gentle reminder that invoice #1234 for $X is currently 30 days past due. Please let us know if you need another copy of the invoice."

## Next step
Set up the query to accurately pull the "Days Overdue" metric from the accounting system.

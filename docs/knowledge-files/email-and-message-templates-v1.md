# Email and Message Templates for SMB Automation

## Purpose
A collection of communication templates designed to be populated by AI or standard automation.

**Default safety rule:** Customer-facing, billing-related, document-related, private-data, or decision-sensitive messages should be treated as draft-first unless a qualified human has approved the exact workflow, trigger, data source, recipient logic, and send conditions.

---

## 1. Lead Response
**Use case:** Acknowledging a new inquiry from a website form.
**Personalization fields:** [Lead Name], [Service Requested]
**Draft template:**
Hi [Lead Name],
Thanks for reaching out about [Service Requested]. We'd love to help.
Do you have 10 minutes on Tuesday or Thursday this week for a quick call to discuss the details?
Best,
[Owner Name]
**Human review note:** Draft-first for new leads. A human should approve send conditions and confirm personalization accuracy before any automated sending is enabled.

## 2. Quote Follow-up
**Use case:** Checking in after a quote was sent.
**Personalization fields:** [Client Name], [Quote Link], [Date]
**Draft template:**
Hi [Client Name],
I wanted to float this to the top of your inbox. Did you have any questions about the quote I sent over on [Date]?
Here is the link again for easy reference: [Quote Link]
Let me know if you want to proceed.
**Human review note:** Draft-first. A human should review custom pricing, quote links, deadlines, and terms before sending.

## 3. Appointment Reminder
**Use case:** Reminder before a scheduled meeting.
**Personalization fields:** [Client Name], [Time], [Location or Meeting Link]
**Draft template:**
Hi [Client Name],
Looking forward to our meeting tomorrow at [Time].
We will meet at [Location or Meeting Link]. Let me know if you need to reschedule.
**Human review note:** May be automated only after a human approves the calendar source, message copy, reschedule rules, and recipient logic.

## 4. Client Onboarding Welcome
**Use case:** Sent after a new client is ready for onboarding.
**Personalization fields:** [Client Name], [Folder Link]
**Draft template:**
Welcome aboard, [Client Name].
We are excited to start working with you. To kick things off, please upload your intake items to this secure folder: [Folder Link].
Let me know if you have any trouble accessing it.
**Human review note:** Draft-first when folder links, agreements, payment status, or sensitive intake items are involved.

## 5. Document Request
**Use case:** Initial request for required files.
**Personalization fields:** [Client Name], [Missing Items List], [Upload Link]
**Draft template:**
Hi [Client Name],
We are preparing to start your project. We still need the following items from you:
[Missing Items List]
Please upload them securely here: [Upload Link].
**Human review note:** Draft-first. A human should review the requested item list, upload link, and recipient before sending.

## 6. Missing Document Reminder
**Use case:** Follow-up when requested files are still missing.
**Personalization fields:** [Client Name], [Missing Items List]
**Draft template:**
Hi [Client Name],
Just a friendly reminder that we are still waiting on:
[Missing Items List]
Please let me know if you need help.
**Human review note:** Draft-first. Verify the item is still missing before sending.

## 7. Invoice Reminder
**Use case:** Past-due invoice reminder.
**Personalization fields:** [Client Name], [Amount], [Invoice Link], [Invoice Number]
**Draft template:**
Hi [Client Name],
This is a gentle reminder that invoice #[Invoice Number] for [Amount] is currently past due.
You can view the invoice here: [Invoice Link].
If payment was already sent, please disregard this note.
**Human review note:** Draft-first unless the billing system, status field, link, and recipient rules have been approved and tested by a human.

## 8. Payment Follow-up
**Use case:** Later follow-up for an unpaid invoice.
**Personalization fields:** [Client Name], [Amount], [Invoice Link]
**Draft template:**
Hi [Client Name],
Our records show that your account has a past-due balance of [Amount]. You can view the invoice here: [Invoice Link], or contact us if you need to discuss it.
**Human review note:** Draft-first only. Requires human review before sending.

## 9. Internal Status Update
**Use case:** End-of-day internal summary.
**Personalization fields:** [Project Name], [Tasks Completed], [Blockers]
**Draft template:**
Project Update: [Project Name]
Tasks completed today:
[Tasks Completed]
Blockers: [Blockers]
**Human review note:** Internal automation may be acceptable after the source data and channel are approved. Use draft or review when private client details are included.

## 10. Customer Support Escalation
**Use case:** AI cannot answer and hands off to a human.
**Personalization fields:** [Customer Name], [Manager Name]
**Draft template:**
Hi [Customer Name],
I want to make sure you get the right answer for this, so I am escalating it to [Manager Name]. They will follow up directly.
**Human review note:** Draft-first unless the escalation copy, routing logic, and recipient rules are approved by a human.

## 11. FAQ Response Draft
**Use case:** Answering common questions.
**Personalization fields:** [Customer Name], [FAQ Answer]
**Draft template:**
Hi [Customer Name],
Thanks for asking. [FAQ Answer]
Let me know if you need anything else.
**Human review note:** Draft-first. Agent prepares the draft; a human reviews and sends.

## 12. Proposal Follow-up
**Use case:** Follow-up after proposal delivery.
**Personalization fields:** [Client Name]
**Draft template:**
Hi [Client Name],
Just checking in to see if you had a chance to review the proposal I sent. Happy to jump on a quick call to walk through it if that is easier.
**Human review note:** Draft-first.

## 13. Review Request
**Use case:** Requesting a review after project completion.
**Personalization fields:** [Client Name], [Review Link]
**Draft template:**
Hi [Client Name],
It was a pleasure working with you. If you were happy with our service, it would mean a lot if you left a quick review here: [Review Link].
**Human review note:** Draft-first until a human approves the completion trigger, review-policy fit, and recipient logic.

## 14. Project Update
**Use case:** Weekly check-in for long projects.
**Personalization fields:** [Client Name], [Current Phase]
**Draft template:**
Hi [Client Name],
Just a quick weekly update. We are currently working on [Current Phase]. We will reach out when we need your review.
**Human review note:** Draft-first to ensure accuracy.

## 15. Handoff Note
**Use case:** Passing a client from Sales to Ops internally.
**Personalization fields:** [Client Name], [Notes]
**Draft template:**
Team, [Client Name] just signed.
Sales Notes: [Notes]
Please begin the onboarding sequence.
**Human review note:** Internal automation may be acceptable after field mapping is approved. Use human review when notes include sensitive client details, pricing terms, or private documents.

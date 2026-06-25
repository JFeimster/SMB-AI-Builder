# Email and Message Templates for SMB Automation

## Purpose
A collection of communication templates designed to be populated by AI or standard automation.
*Note: Mark customer-facing and money-related messages as draft-first unless approved.*

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
**Human review note:** Safe for automated sending if data is clean.

## 2. Quote Follow-up
**Use case:** Checking in 3 days after a quote was sent.
**Personalization fields:** [Client Name], [Quote Link]
**Draft template:**
Hi [Client Name],
I wanted to float this to the top of your inbox. Did you have any questions about the quote I sent over on [Date]?
Here is the link again for easy reference: [Quote Link]
Let me know if you want to proceed!
**Human review note:** Use safer draft-only version if pricing is highly custom.

## 3. Appointment Reminder
**Use case:** 24 hours before a scheduled meeting.
**Personalization fields:** [Client Name], [Time], [Location/Zoom Link]
**Draft template:**
Hi [Client Name],
Looking forward to our meeting tomorrow at [Time].
We will meet at [Location/Zoom Link]. Let me know if you need to reschedule!
**Human review note:** Safe for fully automated sending.

## 4. Client Onboarding Welcome
**Use case:** Sent immediately after contract is signed.
**Personalization fields:** [Client Name], [Folder Link]
**Draft template:**
Welcome aboard, [Client Name]!
We are thrilled to start working with you. To kick things off, please upload your intake documents to this secure folder: [Folder Link].
Let me know if you have any trouble accessing it.
**Human review note:** Safe for automated sending.

## 5. Document Request
**Use case:** Initial request for required files.
**Personalization fields:** [Client Name], [Missing Items List], [Upload Link]
**Draft template:**
Hi [Client Name],
We are preparing to start your project. We still need the following items from you:
[Missing Items List]
Please upload them securely here: [Upload Link].
**Human review note:** Safer draft-only version recommended if requesting sensitive financial/medical documents.

## 6. Missing Document Reminder
**Use case:** Follow-up when documents aren't uploaded after 1 week.
**Personalization fields:** [Client Name], [Missing Items List]
**Draft template:**
Hi [Client Name],
Just a friendly reminder that we are still waiting on:
[Missing Items List]
We cannot proceed to the next step until we have these. Please let me know if you need help!
**Human review note:** Review before sending to ensure they didn't just email it to you an hour ago.

## 7. Invoice Reminder
**Use case:** 5 days past due invoice.
**Personalization fields:** [Client Name], [Amount], [Invoice Link]
**Draft template:**
Hi [Client Name],
This is a gentle reminder that invoice #[Invoice Number] for [Amount] is currently past due.
You can view and pay the invoice online here: [Invoice Link].
If you have already sent payment, please disregard this note.
**Human review note:** Draft-first unless integrated perfectly with accounting software.

## 8. Payment Follow-up (Overdue)
**Use case:** 14 days past due.
**Personalization fields:** [Client Name], [Amount]
**Draft template:**
Hi [Client Name],
Our records show that your account has a past due balance of [Amount]. Please arrange payment immediately via this link: [Invoice Link] or contact us to discuss.
**Human review note:** Draft-first ONLY. Requires human review before sending.

## 9. Internal Status Update
**Use case:** End of day summary to Slack.
**Personalization fields:** [Project Name], [Tasks Completed]
**Draft template:**
Project Update: [Project Name]
Tasks completed today:
[Tasks Completed]
Blockers: [Blockers]
**Human review note:** Safe for automated sending internally.

## 10. Customer Support Escalation
**Use case:** AI cannot answer, hands off to human.
**Personalization fields:** [Customer Name]
**Draft template:**
Hi [Customer Name],
I want to make sure you get the best possible answer for this, so I am escalating this to our manager, [Manager Name]. They will reply to you directly within 24 hours.
**Human review note:** Safe for automated sending during handoff.

## 11. FAQ Response Draft
**Use case:** Answering common questions.
**Personalization fields:** [Customer Name], [FAQ Answer]
**Draft template:**
Hi [Customer Name],
Thanks for asking! [FAQ Answer]
Let me know if you need anything else.
**Human review note:** Draft-first. Agent prepares draft in helpdesk, human clicks send.

## 12. Proposal Follow-up
**Use case:** 1 week after proposal sent.
**Personalization fields:** [Client Name]
**Draft template:**
Hi [Client Name],
Just checking in to see if you had a chance to review the proposal I sent last week. Happy to jump on a quick call to walk through it if that's easier!
**Human review note:** Draft-first.

## 13. Review Request
**Use case:** Sent 3 days after project completion.
**Personalization fields:** [Client Name], [Review Link]
**Draft template:**
Hi [Client Name],
It was a pleasure working with you! If you were happy with our service, it would mean the world to us if you left a quick review here: [Review Link].
**Human review note:** Safe for automated sending if triggered only on successful project completion.

## 14. Project Update
**Use case:** Weekly check-in for long projects.
**Personalization fields:** [Client Name], [Current Phase]
**Draft template:**
Hi [Client Name],
Just a quick weekly update! We are currently working on [Current Phase]. Everything is on schedule. We'll reach out when we need your review.
**Human review note:** Draft-first to ensure accuracy.

## 15. Handoff Note
**Use case:** Passing a client from Sales to Ops internally.
**Personalization fields:** [Client Name], [Notes]
**Draft template:**
Team, [Client Name] just signed!
Sales Notes: [Notes]
Please begin the onboarding sequence.
**Human review note:** Safe for automated internal sending.

# SOP Template Library

## Purpose
Standard Operating Procedures (SOPs) support automation readiness. If a human can't follow written instructions to do a task consistently, an AI agent will fail. Clean up first.

## SOP Template Structure

**Purpose:** Why do we do this?
**Owner:** Who is responsible?
**Trigger:** When do we do this?
**Inputs:** What do we need to start?
**Tools:** What software is used?
**Steps:** Numbered actions.
**Handoffs:** Who gets it next?
**Quality Checks:** How do we know it's right?
**Exceptions:** What if something is weird?
**Escalation:** Who do we call if it breaks?
**Review Cadence:** How often do we update this SOP?
**Automation Readiness Notes:** Is this ready for AI?

---

## 1. Lead Response SOP

**Purpose:** Respond to new inquiries within 1 hour.
**Owner:** Sales Admin
**Trigger:** Notification of new form submission.
**Inputs:** Lead Name, Email, Service Needed.
**Tools:** Gmail, Pricing PDF.
**Steps:**
1. Open new lead email.
2. Verify service requested is one we offer.
3. Open standard templates document.
4. Copy template for corresponding service.
5. Personalize first name.
6. Send email.
**Handoffs:** If qualified, create CRM Deal and assign to Sales Rep.
**Quality Checks:** Check that the name is spelled correctly.
**Exceptions:** If they ask for a service we don't offer, use the "Referral" template.
**Escalation:** If lead is a massive enterprise, alert the CEO immediately.
**Review Cadence:** Quarterly.
**Automation Readiness Notes:** This is highly structured and ready for a Draft-Only AI pilot.

## 2. Quote Follow-up SOP

**Purpose:** Ensure no quote goes stale.
**Owner:** Sales Rep
**Trigger:** Deal has been in "Quoted" stage for > 3 days.
**Inputs:** CRM Deal Record, Quote Date, Client Name.
**Tools:** CRM, Email.
**Steps:**
1. Filter CRM for Deals in "Quoted" stage > 3 days old.
2. Open the Deal record.
3. Check email history to ensure they haven't replied already.
4. Use "Follow-up Template 1".
5. Send email.
6. Log a new task to follow up in 4 more days.
**Handoffs:** N/A.
**Quality Checks:** Verify they actually haven't replied.
**Exceptions:** If the client said they are on vacation, delay follow-up.
**Escalation:** If quote is > $50k, call them instead of emailing.
**Review Cadence:** Bi-annually.
**Automation Readiness Notes:** Process is clear. Ready for Draft-only email automation.

## 3. Client Onboarding SOP

**Purpose:** Set up new clients consistently.
**Owner:** Account Manager
**Trigger:** Contract signed.
**Inputs:** Signed contract, Client info.
**Tools:** CRM, Google Drive.
**Steps:**
1. Mark deal Closed-Won in CRM.
2. Create new folder in Drive named "Client Name".
3. Copy standard Intake Form into folder.
4. Send "Welcome" email template with folder link.
**Handoffs:** Alert Project Manager that onboarding has started.
**Quality Checks:** Ensure folder permissions are set to "Anyone with link can edit".
**Exceptions:** High-tier clients get a physical gift sent (Manual step).
**Escalation:** If client hasn't filled out intake form in 5 days, alert Sales.
**Review Cadence:** Quarterly.
**Automation Readiness Notes:** Folder creation is ripe for Zapier/Make automation.

## 4. Document Collection SOP

**Purpose:** Get all necessary forms before project kick-off.
**Owner:** Project Manager
**Trigger:** Weekly check of missing items tracker.
**Inputs:** Missing items list, Client Name.
**Tools:** Airtable, Secure File Portal, Email.
**Steps:**
1. Review Airtable for clients marked "Missing Docs".
2. Double-check the Secure Portal to ensure they didn't just upload it.
3. Draft reminder email listing exactly what is missing.
4. Send email.
5. Note the reminder date in Airtable.
**Handoffs:** Once all docs are collected, move project to "In Progress".
**Quality Checks:** DO NOT ask for a document they already sent.
**Exceptions:** If they struggle with technology, call them to walk through it.
**Escalation:** If 3 reminders are ignored, pause the project.
**Review Cadence:** Quarterly.
**Automation Readiness Notes:** Tracking is manual. Automate the drafting of the reminder list.

## 5. Invoice Reminder SOP

**Purpose:** Collect accounts receivable quickly.
**Owner:** Accountant
**Trigger:** Weekly AR Aging Report run.
**Inputs:** Overdue invoice list.
**Tools:** QuickBooks, Email.
**Steps:**
1. Run AR Aging report in QuickBooks every Monday.
2. Filter for > 5 days overdue.
3. Check bank feed to ensure a check isn't sitting uncleared.
4. Send "Friendly Reminder" template for 5-14 days overdue.
5. Send "Urgent Reminder" template for >15 days overdue.
**Handoffs:** None.
**Quality Checks:** Ensure payments are fully reconciled before sending.
**Exceptions:** If the client has an agreed-upon payment plan, do not send.
**Escalation:** >30 days overdue goes to Owner for a phone call.
**Review Cadence:** Annually.
**Automation Readiness Notes:** High risk if data is wrong. Use native QuickBooks reminders first.

## 6. Customer Support Triage SOP

**Purpose:** Route emails faster so clients get answers.
**Owner:** Support Admin
**Trigger:** New email in support@ inbox.
**Inputs:** Email content.
**Tools:** Helpdesk.
**Steps:**
1. Read the email.
2. If it's about a bill, apply "Billing" tag and assign to Accounting.
3. If it's a technical issue, apply "Tech" tag and assign to Tier 1 Tech.
4. If it's a new lead, apply "Sales" tag and assign to Sales.
**Handoffs:** The assignee takes over entirely.
**Quality Checks:** Ensure no email sits untagged for > 2 hours.
**Exceptions:** Angry customers get assigned to Manager immediately.
**Escalation:** See exceptions.
**Review Cadence:** Bi-annually.
**Automation Readiness Notes:** AI is very good at tagging. Ready for pilot.

## 7. Weekly Reporting SOP

**Purpose:** Provide owner with weekly financial snapshot.
**Owner:** Office Manager
**Trigger:** Friday at 3:00 PM.
**Inputs:** QuickBooks data, CRM sales data.
**Tools:** QuickBooks, HubSpot, Google Sheets.
**Steps:**
1. Export "Weekly Cash Flow" from QB.
2. Export "Deals Closed" from HubSpot.
3. Paste into Master Dashboard Sheet.
4. Post screenshot of Dashboard to Slack.
**Handoffs:** Owner reviews.
**Quality Checks:** Ensure numbers actually match the source systems.
**Exceptions:** If Friday is a holiday, do it Thursday.
**Escalation:** If cash is dangerously low, alert Owner privately before Slack.
**Review Cadence:** Annually.
**Automation Readiness Notes:** Can be automated using Zapier/Make to push data to a central dashboard.

## 8. CRM Update SOP

**Purpose:** Keep data clean for accurate reporting.
**Owner:** Entire team
**Trigger:** Any client interaction (call, meeting, email).
**Inputs:** Notes from interaction.
**Tools:** CRM.
**Steps:**
1. Log into CRM immediately after call.
2. Open contact record.
3. Log Activity as "Call" or "Meeting".
4. Type brief summary of what was discussed and next steps.
5. Create a follow-up task if needed.
**Handoffs:** N/A.
**Quality Checks:** Manager reviews pipeline weekly for missing notes.
**Exceptions:** If driving, use voice memo and transcribe later.
**Escalation:** Repeated failure to log results in management review.
**Review Cadence:** Annually.
**Automation Readiness Notes:** High priority for AI meeting summary tools (e.g., Fireflies/Fathom) to automate.

## 9. Proposal Drafting SOP

**Purpose:** Standardize pricing output and save time.
**Owner:** Estimator
**Trigger:** Request for proposal from Sales.
**Inputs:** Sales notes, Scope of Work.
**Tools:** Word/Docs, Pricing Matrix.
**Steps:**
1. Open Master Proposal Template.
2. Fill in Client Name and Date.
3. Insert standard Scope of Work blocks based on Sales notes.
4. Use Pricing Matrix to calculate total.
5. Save as PDF.
6. Send back to Sales Rep for delivery.
**Handoffs:** Hand off to Sales Rep.
**Quality Checks:** Verify math on total price.
**Exceptions:** Custom services require CEO sign-off on pricing.
**Escalation:** If scope is unclear, kick back to Sales immediately.
**Review Cadence:** Quarterly.
**Automation Readiness Notes:** Template population is easily automated with document generation tools.

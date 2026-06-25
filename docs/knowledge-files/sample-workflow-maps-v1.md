# Sample Workflow Maps

## Purpose
Visualizing current vs. future states using simple arrow-style maps. These non-technical maps help SMB owners understand what is actually happening.

---

## 1. Lead Intake & Follow-up

**Current-State Map:**
Website form filled → Owner gets email → Email sits in inbox for 6 hours → Owner reads email → Owner types manual reply → Hits send.
**Pain points:** Slow response time. Competitors answer faster.
**Future-State Map:**
Website form filled (Trigger) → Zapier catches data → AI drafts reply based on service type → Draft saved in Gmail → Owner reviews draft on phone (Human Review) → Hits send.
**Safe pilot version:** Send leads to Slack with a suggested reply for the owner to copy/paste.
**Readiness risks:** Form needs structured fields (Service requested, Timeline).

## 2. Client Onboarding

**Current-State Map:**
Deal won in CRM → Owner remembers 2 days later → Searches for welcome template → Attaches PDF → Sends email.
**Pain points:** Inconsistent timing, sometimes forgotten entirely.
**Future-State Map:**
Deal won in CRM (Trigger) → Automation creates Google Drive folder → Drafts Welcome Email with folder link → Human approves (Optional) → Email sent.
**Safe pilot version:** Automate folder creation only, owner sends email.

## 3. Document Collection

**Current-State Map:**
Owner emails client asking for W2 → Client forgets → Owner searches inbox 2 weeks later → Sends manual reminder.
**Pain points:** Wasted time tracking who sent what.
**Future-State Map:**
Client added to Airtable tracker (Trigger) → Weekly check finds 'Missing' status → Automation drafts reminder email → Owner reviews list of drafts (Human Review) → Emails sent.
**Readiness risks:** Airtable tracker must be kept perfectly up-to-date, otherwise clients get reminded for documents they already sent.

## 4. Invoice Reminders

**Current-State Map:**
Owner logs into QuickBooks on the 1st of month → Checks for unpaid invoices → Types manual emails.
**Pain points:** Uncomfortable conversations, delayed cash flow.
**Future-State Map:**
QuickBooks flags invoice 5 days overdue → Automation drafts polite reminder → Owner reviews (Human Review) → Sends.
**Safe pilot version:** Set up native QuickBooks automated reminders first before building custom tools.

## 5. Customer Support Triage

**Current-State Map:**
Emails arrive in support@ inbox → Everyone reads them → Nobody claims them → Double replies occur.
**Pain points:** Confusion, lost tickets.
**Future-State Map:**
Email arrives (Trigger) → AI reads email and tags category (Billing, Tech, Sales) → Routed to specific person's folder.
**Readiness risks:** AI must not delete emails or auto-reply to angry customers without human review.

## 6. Quote Follow-up
**Current-State Map:**
Quote sent → Forget about it → Remember 2 weeks later → Send manual email.
**Future-State Map:**
Quote sent (Trigger) → 3 days pass → Draft follow-up email → Owner reviews (Human Review) → Sends.

## 7. Weekly Reporting
**Current-State Map:**
Friday 4PM → Download 3 CSVs → Copy paste to master sheet.
**Future-State Map:**
Friday 4PM (Trigger) → Automation pulls API data from 3 tools → Populates master sheet → Sends Slack message.

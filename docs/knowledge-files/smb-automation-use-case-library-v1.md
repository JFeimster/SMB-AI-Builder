# SMB Automation Use Case Library

## Purpose
A library of practical, low-risk, high-value SMB automation use cases. Pick the safest pilot. Know what to automate, what to clean up, and what should stay human.

*Disclaimer: This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.*

---

## 1. Lead Response
- **Workflow:** Lead qualification and initial contact.
- **Situation:** Leads come in via website forms, but the owner is on job sites and responds hours later.
- **Trigger:** New form submission.
- **Inputs:** Lead name, email, service requested.
- **AI Task:** Draft a personalized response acknowledging the specific service requested and proposing next steps.
- **Tools commonly involved:** Website form, Zapier/Make, ChatGPT/OpenAI API, Gmail/Outlook.
- **Human review point:** Owner opens email drafts folder, reviews the draft, and clicks send.
- **Outputs:** An email draft.
- **Risk level:** Low (because it's Draft-only).
- **Safe pilot idea:** Route leads to a Slack channel where AI suggests the reply.
- **What to clean up first:** Ensure the lead form asks for the right specific information.
- **Example prompt:** "Draft a friendly, professional email to [Name] thanking them for inquiring about [Service]. Ask them if they are available for a 10-minute call on Tuesday or Thursday."

## 2. Quote Follow-up
- **Workflow:** Sales follow-up.
- **Situation:** Quotes are sent but rarely followed up on consistently.
- **Trigger:** Quote marked as "Sent" in CRM, 3 days pass.
- **Inputs:** Customer name, quote amount, service.
- **AI Task:** Draft a check-in email.
- **Tools commonly involved:** CRM (HubSpot/Pipedrive), Email.
- **Human review point:** Review before sending (Draft-only mode).
- **Outputs:** Follow-up email.
- **Risk level:** Medium (touches sales/money).
- **Safe pilot idea:** Just automate creating a Task in the CRM for the owner to follow up.
- **What to clean up first:** Ensure quotes are accurately tracked in a single system.
- **Example prompt:** "Draft a polite follow-up email to [Name] asking if they had any questions about the quote for [Service]."

## 3. Appointment Reminders
- **Workflow:** Scheduling.
- **Situation:** Clients forget appointments, causing lost revenue.
- **Trigger:** 24 hours before calendar event.
- **Inputs:** Client name, time, location/link.
- **AI Task:** Non-AI standard automation. Send SMS/Email reminder.
- **Tools commonly involved:** Calendly, CRM, SMS tool.
- **Human review point:** None usually required.
- **Outputs:** Reminder message.
- **Risk level:** Low.
- **Safe pilot idea:** Use native scheduling tool reminders before building custom automations.
- **What to clean up first:** Ensure all appointments are in one centralized calendar.
- **Example prompt:** N/A (Standard logic).

## 4. Client Onboarding
- **Workflow:** Post-sale setup.
- **Situation:** New clients need welcome info and next steps, but it's done manually.
- **Trigger:** Deal marked "Won" in CRM.
- **Inputs:** Client details, project type.
- **AI Task:** Generate a customized onboarding checklist or welcome packet.
- **Tools commonly involved:** CRM, Google Docs/Notion, Email.
- **Human review point:** Owner reviews the welcome packet before sending.
- **Outputs:** Welcome email + document link.
- **Risk level:** Low.
- **Safe pilot idea:** Automate the folder creation only, let a human write the email.
- **What to clean up first:** Create standard welcome templates.
- **Example prompt:** "Draft a welcome email for [Name] for the [Project Type] project. Include a link to this folder: [Link]."

## 5. Document Collection
- **Workflow:** Intake.
- **Situation:** Spending hours chasing clients for W2s, intake forms, or design assets.
- **Trigger:** Weekly check of missing items in a tracker.
- **Inputs:** Client name, missing item list.
- **AI Task:** Draft a polite, firm reminder listing exactly what is missing.
- **Tools commonly involved:** Airtable/Sheets, Email.
- **Human review point:** Review the missing list to ensure the client didn't actually send it yesterday.
- **Outputs:** Reminder email draft.
- **Risk level:** Medium (Ensure sensitive documents aren't handled insecurely).
- **Safe pilot idea:** Automate creating the weekly missing list in Slack, instead of emailing the client.
- **What to clean up first:** Standardize document storage so everyone knows where to look.
- **Example prompt:** "Draft a polite email to [Name] reminding them we still need [Missing Items] to start the project."

## 6. Invoice Reminders
- **Workflow:** Accounts Receivable.
- **Situation:** Tired of chasing checks and logging into the accounting system manually.
- **Trigger:** Invoice 5 days past due in accounting software.
- **Inputs:** Client name, amount due, invoice link.
- **AI Task:** Draft a polite reminder.
- **Tools commonly involved:** QuickBooks/Xero, Email.
- **Human review point:** Accountant reviews draft before sending.
- **Outputs:** Email draft.
- **Risk level:** Medium (Touches money).
- **Safe pilot idea:** Use native accounting reminders first.
- **What to clean up first:** Ensure payments are reconciled daily.
- **Example prompt:** "Draft a friendly reminder to [Name] that their invoice for [Amount] is past due. Include this link: [Link]."

## 7. CRM Task Creation
- **Workflow:** Sales process adherence.
- **Situation:** Deals change stages but reps forget to manually create the next follow-up task.
- **Trigger:** Deal stage updated to "Contacted".
- **Inputs:** Deal owner, client name.
- **AI Task:** Extract action items from any notes and summarize them in a task.
- **Tools commonly involved:** CRM (HubSpot/Pipedrive).
- **Human review point:** Rep reviews task lists daily.
- **Outputs:** CRM Tasks created automatically.
- **Risk level:** Low.
- **Safe pilot idea:** Just create a simple standard task (e.g., "Follow up in 3 days") without AI extraction first.
- **What to clean up first:** Ensure pipeline stages are actually used correctly.
- **Example prompt:** "Extract the action items from these call notes: [Notes]."

## 8. Internal Status Updates
- **Workflow:** Team communication.
- **Situation:** Team doesn't know what got done today and meetings are too long.
- **Trigger:** 4:00 PM daily.
- **Inputs:** Tasks completed in project management tool today.
- **AI Task:** Summarize the completed tasks into a brief paragraph.
- **Tools commonly involved:** Asana/Trello, ChatGPT API, Slack.
- **Human review point:** Post to a channel for review before sending to client (if external). Internal is safe.
- **Outputs:** Slack message summary.
- **Risk level:** Low.
- **Safe pilot idea:** Send the summary to a private channel for the manager only.
- **What to clean up first:** Enforce teams actually checking off tasks in the tool.
- **Example prompt:** "Summarize these completed tasks into a 3-bullet update: [Tasks]."

## 9. Weekly Finance Summaries
- **Workflow:** Executive reporting.
- **Situation:** Owner never knows cash position on Friday without asking the accountant.
- **Trigger:** Friday at 3:00 PM.
- **Inputs:** Cash in, cash out from accounting software.
- **AI Task:** Generate a plain-English summary of the week's cash flow.
- **Tools commonly involved:** QuickBooks, Zapier, Slack.
- **Human review point:** Accountant reviews before the owner sees it to catch sync errors.
- **Outputs:** Slack summary of cash in/out.
- **Risk level:** Medium (Internal data, but high importance).
- **Safe pilot idea:** Automatically pull the numbers into a Google Sheet and let the accountant write the summary.
- **What to clean up first:** Ensure bank feeds are synced.
- **Example prompt:** "Write a 2-sentence summary of this financial data: [Data]."

## 10. FAQ Response Drafting
- **Workflow:** Customer support.
- **Situation:** Getting the same 5 questions over and over in the support inbox.
- **Trigger:** Inbound email matching common keywords.
- **Inputs:** Customer email, internal SOP/FAQ doc.
- **AI Task:** Draft a reply based ONLY on the FAQ doc.
- **Tools commonly involved:** Helpdesk (Zendesk/Front), AI.
- **Human review point:** Support rep reviews draft and hits send.
- **Outputs:** Draft reply in helpdesk.
- **Risk level:** Medium (Draft-only minimizes risk of hallucination).
- **Safe pilot idea:** Only use AI to suggest internal tags, not write the reply.
- **What to clean up first:** Build an actual FAQ document.
- **Example prompt:** "Using only this FAQ doc [Doc], draft a reply to this customer email: [Email]."

## 11. Intake Form Summarization
- **Workflow:** Meeting prep.
- **Situation:** Long, wordy client intake forms take too long to read before a meeting.
- **Trigger:** Form submitted.
- **Inputs:** Full form answers.
- **AI Task:** Extract the top 3 priorities, the budget, and any red flags into bullet points.
- **Tools commonly involved:** Form builder, AI, Slack/CRM.
- **Human review point:** Internal use only, so low risk.
- **Outputs:** Brief summary note in CRM or Slack.
- **Risk level:** Low.
- **Safe pilot idea:** Have the summary sent via email to the owner.
- **What to clean up first:** Make form questions clearer.
- **Example prompt:** "Summarize this client intake form into 3 bullet points highlighting their main goal and budget: [Form Data]."

## 12. Proposal Drafting
- **Workflow:** Sales quoting.
- **Situation:** Takes 2 hours to write a proposal from scratch.
- **Trigger:** Deal moved to "Proposal" stage.
- **Inputs:** Client needs, standard pricing sheet.
- **AI Task:** Draft the executive summary and scope of work section.
- **Tools commonly involved:** CRM, Google Docs, AI.
- **Human review point:** Manager MUST review pricing and terms before sending.
- **Outputs:** Google Doc draft.
- **Risk level:** Medium (Draft-only).
- **Safe pilot idea:** Only automate the cover letter drafting.
- **What to clean up first:** Create a standard pricing and services matrix.
- **Example prompt:** "Draft an executive summary for a proposal for [Name] for [Service] based on our standard methodology."

## 13. Email Drafting
- **Workflow:** General administration.
- **Situation:** Repetitive vendor inquiries or standard replies.
- **Trigger:** Email label applied (e.g., "Vendor Request").
- **Inputs:** Incoming email.
- **AI Task:** Draft standard refusal or request for more info.
- **Tools commonly involved:** Gmail, AI.
- **Human review point:** Review draft before sending.
- **Outputs:** Gmail drafts.
- **Risk level:** Low (Draft-only).
- **Safe pilot idea:** Use Gmail templates natively first.
- **What to clean up first:** Organize inbox labels.
- **Example prompt:** "Draft a polite reply saying we are not accepting new vendors at this time."

## 14. Customer Support Triage
- **Workflow:** Inbox management.
- **Situation:** Inboxes are messy and nobody knows what to answer first.
- **Trigger:** New email arrives.
- **Inputs:** Email content.
- **AI Task:** Read email and tag it as "Billing", "Tech Support", or "Sales".
- **Tools commonly involved:** Helpdesk, AI.
- **Human review point:** Agents monitor the queues to ensure correct tagging.
- **Outputs:** Emails tagged and sorted into folders.
- **Risk level:** Low.
- **Safe pilot idea:** Tag emails but leave them in the main inbox for a week to verify accuracy.
- **What to clean up first:** Define clear categories.
- **Example prompt:** "Categorize this email as Billing, Tech, or Sales: [Email]."

## 15. Review Request Follow-up
- **Workflow:** Marketing.
- **Situation:** Happy customers forget to leave reviews.
- **Trigger:** Project marked complete.
- **Inputs:** Client name, Review link.
- **AI Task:** Send a personalized thank you and ask for a review.
- **Tools commonly involved:** CRM, Email.
- **Human review point:** Do not automate if the project was a disaster. Require a manual "Ready for review request" checkbox.
- **Outputs:** Email with review link.
- **Risk level:** Low.
- **Safe pilot idea:** Owner manually checks a box to trigger the email.
- **What to clean up first:** Ensure project statuses are updated promptly.
- **Example prompt:** "Draft a short, friendly email asking [Name] to leave a Google review here: [Link]."

## 16. Job Status Updates
- **Workflow:** Client communication.
- **Situation:** Clients constantly calling to ask "is it done yet?"
- **Trigger:** Technician marks job "In Progress" or "Complete" on mobile app.
- **Inputs:** Job status, Client phone number.
- **AI Task:** Send an SMS update.
- **Tools commonly involved:** Field service software, SMS tool.
- **Human review point:** Technician must accurately click the status.
- **Outputs:** SMS or Email update.
- **Risk level:** Low.
- **Safe pilot idea:** Start with email updates before moving to SMS.
- **What to clean up first:** Train staff to use the app in real-time.
- **Example prompt:** N/A (Standard rule-based automation).

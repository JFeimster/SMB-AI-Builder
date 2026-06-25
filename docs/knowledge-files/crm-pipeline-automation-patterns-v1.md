# CRM Pipeline Automation Patterns

## Purpose
A vendor-neutral guide to CRM automation patterns for SMBs. Learn how to map out pipeline automations before building them in HubSpot, Pipedrive, Airtable, Notion, or Sheets.

## CRM Automation Readiness
Before automating your CRM, check:
- Are there clear stages? (e.g., Lead -> Contacted -> Quoted -> Closed).
- Does the team actually move deals through the stages?
- Is the data clean? (No duplicate contacts).
If the answer is no, **clean up first**.

---

## 1. Lead Capture
- **Trigger:** Form submitted on website.
- **Action:** Create new Contact and new Deal in the "New Lead" stage.
- **Risk:** Low.
- **Safe Pilot Idea:** Map 3 basic fields (Name, Email, Service) to ensure it works before asking for 20 fields.

## 2. Lead Qualification
- **Trigger:** Deal created in "New Lead".
- **Action:** AI reads the "Budget" field. If Budget < $500, move to "Unqualified" stage.
- **Human Review Rules:** Have human review the "Unqualified" list weekly to ensure AI isn't tossing good leads.

## 3. Task Creation
- **Trigger:** Deal moved to "Quoted" stage.
- **Action:** Create a Task for the Deal Owner: "Follow up on quote in 3 days."
- **Risk:** Low. Very safe starting point.

## 4. Follow-up Reminders
- **Trigger:** Task "Follow up on quote" is due today.
- **Action:** Send a Slack/Email reminder to the Deal Owner.
- **Pattern:** Draft-only pattern for the actual client email.

## 5. Stage Changes
- **Trigger:** Contract signed via e-signature tool.
- **Action:** Automatically move deal from "Quoted" to "Closed Won".
- **Risk Flag:** Ensure the trigger is robust (e.g., webhook from DocuSign) and not easily falsified.

## 6. Stale Deal Alerts
- **Trigger:** Deal has been in "Contacted" stage for > 14 days.
- **Action:** Send alert to manager: "[Deal Name] is stalling."
- **Data Hygiene Benefit:** Forces the team to either close it as lost or follow up.

## 7. Handoff Notes
- **Trigger:** Deal moved to "Closed Won".
- **Action:** AI summarizes the Sales Notes and posts them to the Operations Slack channel.
- **Risk:** Low.

## 8. Pipeline Reporting Summaries
- **Trigger:** Friday at 4 PM.
- **Action:** Summarize all deals moved to "Closed Won" this week and email the owner.
- **Risk:** Low.

## 9. Lost Deal Review
- **Trigger:** Deal moved to "Closed Lost".
- **Action:** Send an internal form to the rep asking "Why did we lose this?"
- **Human Review:** Management reviews answers monthly.

## 10. Re-engagement Reminders
- **Trigger:** Deal has been "Closed Lost" for 6 months.
- **Action:** Create a task to "Check back in" with the prospect.
- **Safe Pilot Idea:** Do not auto-email lost leads; just create the task for a human.

## CRM Automation Checklist
- [ ] Pipeline stages are clearly defined.
- [ ] Triggers are based on reliable data (not manual typing if possible).
- [ ] No customer-facing emails are sent automatically without human approval during the pilot phase.

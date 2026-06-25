# Automation Blueprint Template

## Purpose
This template outlines a clear, step-by-step automation plan. Plan the workflow before choosing the tool.

## When to use this template
Use this when you are ready to map out how an automation will actually run, step-by-step, including both AI and non-AI tasks.

## Blank Template

**Automation Goal:** [What are we trying to achieve?]
**Current Workflow Summary:** [Briefly describe the messy manual process]
**Future Workflow Summary:** [Briefly describe the automated version]

**Trigger:** [Exact event that starts this]
**Inputs:** [Data needed]
**Systems/Tools:** [List of tools involved]

**Workflow Steps:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**AI Tasks:**
[Which specific steps use AI?]

**Non-AI Automation Tasks:**
[Which steps are just moving data (e.g., Zapier/Make)?]

**Human Review Points:**
[Where does a human step in?]

**Outputs:**
[What is the final result?]

**Exceptions:**
[What if data is missing?]

**Escalation Rules:**
[Who is notified if it breaks?]

**Success Metrics:**
[How do we know it worked?]

**Failure Criteria:**
[What constitutes a failed pilot?]

**Rollback Plan:**
[How do we go back to manual if needed?]

**Pilot Plan:**
[How are we testing this safely?]

**Implementation Checklist:**
- [ ] Connect tools
- [ ] Test trigger
- [ ] Test AI task

**Post-launch Monitoring Checklist:**
- [ ] Review first 10 runs manually

---

## Completed Example: Client Onboarding

**Automation Goal:** Automatically send welcome materials when a deal is closed.
**Current Workflow Summary:** Owner manually copies templates and emails the client 2 days later.
**Future Workflow Summary:** CRM trigger automatically creates a Google Drive folder and drafts a welcome email.

**Trigger:** Deal stage changed to "Closed Won" in Pipedrive.
**Inputs:** Client Name, Email, Service Tier.
**Systems/Tools:** Pipedrive, Google Drive, Gmail, Zapier.

**Workflow Steps:**
1. Zapier catches the trigger from Pipedrive.
2. Zapier creates a new folder in Google Drive named "[Client Name] - Onboarding".
3. Zapier copies standard intake forms into the folder.
4. AI drafts a customized welcome email including the folder link.
5. Email is saved as a Draft in Gmail.

**AI Tasks:**
Drafting the customized welcome email based on the specific Service Tier.

**Non-AI Automation Tasks:**
Creating folders, copying files, moving data between apps.

**Human Review Points:**
Owner reviews the email draft in Gmail and clicks Send.

**Outputs:**
Drive folder created, Welcome email sent.

**Exceptions:**
If email is missing in CRM, send a Slack alert to the owner.

**Escalation Rules:**
Owner is notified via Slack if Zapier hits an error.

**Success Metrics:**
Welcome packet sent within 1 hour of deal closing.

**Rollback Plan:**
Owner goes back to doing it manually. Keep the old SOP document active.

**Pilot Plan:**
Run this on the next 3 real clients while monitoring closely.

## Safety Review Checklist
- [ ] Does this touch sensitive financial data? (If yes, require human review).
- [ ] Does this send emails automatically to customers? (If yes, switch to draft-only for the pilot).

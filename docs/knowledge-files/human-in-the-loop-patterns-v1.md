# Human-in-the-Loop (HITL) Patterns

## Purpose
A guide to keeping humans involved in automated workflows. Use AI where it helps, keep people in the loop where it matters.

## Why Humans Stay in the Loop
AI is fast but unpredictable. Humans are slow but have judgment, empathy, and accountability.

## Core Patterns

### 1. Draft-Only Pattern
- **Trigger:** AI generates content based on an event.
- **AI Role:** Drafts the email, document, or code.
- **Human Role:** Reviews, edits, and hits send/publish.
- **Best for:** Email replies, proposal drafting, content creation.
- **Not for:** Instant real-time chat.
- **Failure mode:** Draft is wrong; human deletes it and writes their own.
- **Example:** AI drafts a quote follow-up in Gmail.

### 2. Approval Queue Pattern
- **Trigger:** A system generates a batch of tasks.
- **AI Role:** Categorizes or scores the tasks.
- **Human Role:** Clicks "Approve" or "Reject" on a list.
- **Best for:** Expense approvals, social media scheduling, invoice approvals.
- **Not for:** High-urgency single tasks.
- **Example:** Weekly expense reports are summarized and sent to Slack for the manager to approve with a button.

### 3. Exception Review Pattern
- **Trigger:** A standardized process runs hundreds of times.
- **AI Role:** Handles the 80% of normal cases automatically. Flags the weird 20%.
- **Human Role:** Only looks at the flagged exceptions.
- **Best for:** Data entry, basic categorizations.
- **Example:** AI categorizes support tickets. If it is unsure, it puts it in a "Manual Review" folder.

### 4. Confidence Threshold Pattern
- **Trigger:** AI attempts a task and scores its own confidence.
- **AI Role:** Executes if confidence > 90%.
- **Human Role:** Reviews if confidence < 90%.
- **Best for:** Document data extraction (OCR).

### 5. Two-Step Verification Pattern
- **Trigger:** Sensitive action requested.
- **AI Role:** Prepares the action.
- **Human Role:** Authenticates and confirms.
- **Best for:** Financial transactions.

### 6. Escalation Path Pattern
- **Trigger:** Customer is interacting with a chatbot.
- **AI Role:** Tries to solve the problem.
- **Human Role:** Takes over when the customer asks for a human or gets angry.
- **Best for:** Customer support.

### 7. Audit Trail Pattern
- **Trigger:** Fully automated action occurs.
- **AI Role:** Executes action and logs exactly what it did and why.
- **Human Role:** Reviews the logs weekly to ensure quality.
- **Best for:** Low-risk, high-volume tasks.

### 8. Sensitive Workflow Review Pattern
- **Trigger:** Action touching finance, legal, HR, medical.
- **Human Role:** Mandatory qualified human review before any final state change.
- **AI Role:** Preparation and data gathering only.

## Pattern Selection Table

| Goal | Risk Level | Recommended Pattern |
| --- | --- | --- |
| Save time writing emails | Low/Med | Draft-Only |
| Approve 50 invoices | High | Approval Queue |
| Sort 1000 daily tickets | Low | Exception Review |
| Handle angry customer | High | Escalation Path |
| Process financial data | High | Sensitive Workflow Review |

## Implementation Checklist
- [ ] Define the human's exact responsibility.
- [ ] Ensure the human UI is easy (e.g., Slack button vs logging into 3 systems).
- [ ] Define what happens if the human is on vacation.

# AI Agent Blueprint Template

## Purpose
This template helps you design a safe, scoped AI agent concept for SMB workflows. Build an AI agent plan your business can survive. Use this before writing code or spending money on platforms.

## When to use this template
Use this after auditing a workflow and deciding that an AI agent is the right solution (as opposed to standard rules-based automation).

## Blank Template

**Agent Name:** [e.g., Lead Qualifier Bot]
**Agent Role:** [e.g., You are a friendly customer service assistant...]
**Target User:** [Who interacts with this agent?]
**Primary Job-to-be-Done:** [What is its one main goal?]

**Workflow Context:** [Where does this agent live? e.g., On the website, in an internal Slack channel]

**Inputs Needed:** [What data must it receive to do its job?]
**Outputs Produced:** [What exactly does it generate?]

**Data Sources:** [What knowledge base or documents does it read from?]
**Tool Access:** [What tools can it interact with? Keep this limited.]

**Agent Instructions (System Prompt):**
[Write the core rules. e.g., "Always ask these 3 questions. Never quote pricing."]

**Guardrails:**
[What must it NEVER do?]

**Permission Boundaries:**
[What systems does it have read/write access to?]

**Human Handoff Rules:**
[When does it stop and get a human?]

**Escalation Rules:**
[Who does it contact if a customer is angry or asks a sensitive question?]

**Failure Modes:**
[What happens if the API goes down or the agent hallucinates?]

**Test Scenarios:**
[List 3-5 things to test before launch]

**Example User Prompts:**
1. [Prompt 1]
2. [Prompt 2]

**Pilot Launch Checklist:**
- [ ] Test data verified.
- [ ] Human handoff tested.
- [ ] Guardrails verified.

**Post-pilot Review:**
- [ ] Did it save time?
- [ ] Did it hallucinate?

---

## Completed Example: Lead Follow-up Drafting Agent

**Agent Name:** Quote Drafter Assistant
**Agent Role:** You are a helpful assistant for a landscaping company owner.
**Target User:** Internal use only (The business owner).
**Primary Job-to-be-Done:** Read new inbound lead emails and draft a polite, relevant reply based on our standard pricing sheet.

**Workflow Context:** Runs in the background via Zapier and saves drafts in Gmail.

**Inputs Needed:** New lead email content.
**Outputs Produced:** An email draft in Gmail.

**Data Sources:** standard-services-and-pricing.pdf
**Tool Access:** Gmail (Draft access only).

**Agent Instructions (System Prompt):**
Review the inbound email. Identify the requested service. Look up the standard response in the pricing PDF. Draft a friendly reply. End with "Does next Tuesday work for a quick call?" Do not invent services we do not offer.

**Guardrails:**
Never offer discounts. Never guarantee a final price without a site visit.

**Permission Boundaries:**
Cannot send emails. Can only create drafts.

**Human Handoff Rules:**
If the request is for commercial services (not residential), draft a note saying "I will pass this to our commercial manager" and tag the owner.

**Escalation Rules:**
N/A (Internal draft only).

**Failure Modes:**
If the PDF cannot be read, draft a generic "Thank you for reaching out, I will review this and get back to you shortly."

**Test Scenarios:**
1. Request for a standard service (Mowing).
2. Request for a service we don't offer (Pool cleaning).
3. Angry customer complaint.

**Pilot Launch Checklist:**
- [x] Test data verified.
- [x] Human handoff tested.

*Safety Note: For customer-facing or sensitive workflows, always use draft-only mode or require human approval before action.*

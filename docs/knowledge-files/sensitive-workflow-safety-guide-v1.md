# Sensitive Workflow Safety Guide

## Purpose
This guide helps you identify and safely handle workflows that involve high risk. Stop automating broken workflows. Build a pilot plan your business can actually survive.

*Disclaimer: This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.*

## What Counts as a Sensitive Workflow?
A workflow is sensitive if an error could result in lost money, legal trouble, compliance breaches, or severe damage to customer trust.

### Risk Categories

- **Customer-facing risk:** An AI hallucinating a crazy price to a customer.
- **Financial risk:** Moving money, issuing refunds, changing invoice totals.
- **Legal/compliance risk:** Drafting contracts, agreeing to terms.
- **Tax/accounting risk:** Categorizing expenses incorrectly.
- **HR/employment risk:** Reviewing resumes, sending offer letters, disciplinary actions.
- **Medical/health risk:** Handling PHI, giving health advice.
- **Lending/underwriting risk:** Approving or denying credit or loans.
- **Sensitive personal data risk:** Exposing PII (Personal Identifiable Information).
- **Private business data risk:** Exposing internal margins or trade secrets to external users.

## Safer Automation Patterns

If a workflow touches any of the above, do NOT fully automate it. Use these patterns instead:

- **Draft-only mode:** AI creates the work, but saves it as a draft (e.g., in Gmail, or as a pending invoice). A human must click the final button.
- **Human approval before action:** The system pauses and waits for a human to click "Approve" in a Slack channel or approval queue.
- **Exception review:** Normal cases are automated, but anything outside strict bounds is flagged for a human.
- **Limited permissions:** Give the AI a "Read-Only" API key. It can read the data to suggest answers, but cannot alter the database.
- **Audit logs:** Ensure every action taken by the automation is logged so you know exactly what happened.
- **Test data first:** Never pilot on real customer data. Use a dummy account.
- **Escalation rules:** If the AI is unsure (confidence score is low), route immediately to a human.
- **Rollback plans:** Always know exactly how to go back to the manual process in 5 minutes if things break.

## Workflows That Should Not Be Fully Automated
- Firing an employee.
- Finalizing tax returns.
- Approving a loan.
- Sending a final legal contract without review.
- Issuing large financial refunds.

## Red Flags
- "Set it and forget it" mentality for customer support.
- Giving an AI agent full write-access to your production database.
- Connecting an LLM directly to your stripe account to issue refunds based on customer chat.

## Safety Checklist
- [ ] Has the risk category been identified?
- [ ] Is human review enforced for sensitive steps?
- [ ] Are permissions limited to the minimum necessary?
- [ ] Is there an audit trail?
- [ ] Do we have a rollback plan?

## Disclaimer Language
Always include this disclaimer on sensitive internal SOPs:
*This automation is an assist tool. Final decisions regarding [finance/legal/HR/etc.] must be reviewed by a qualified human professional.*

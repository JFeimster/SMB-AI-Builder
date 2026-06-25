# Sample Workflow Audit: Lead Follow-up

## Purpose
Demonstrates a typical audit for a customer-facing workflow, resulting in a draft-first automation recommendation.

## Fictional scenario
"Acme Plumbing Services" (Fictional) receives 20-30 web inquiries per week. The owner currently tries to reply to them at the end of the day via email.

## Workflow summary
Web form submission -> Email to Owner -> Manual review -> Manual reply with pricing estimate.

## Current-state process
1. Customer fills out form on website.
2. Email notification sent to owner's inbox.
3. Owner reads email (often 12+ hours later).
4. Owner types a custom reply with rough pricing.

## Pain points
- Leads go cold because response time is too slow.
- Owner spends an hour every evening doing data entry.

## Readiness considerations
- **Data:** Web form is structured (Good).
- **Tools:** Website form provider has a Zapier integration (Good).
- **Risk:** High risk if AI sends incorrect pricing directly to customer (Bad).

## Human review points
- All AI-drafted replies must be reviewed by the owner before sending.

## Recommended automation mode
**Draft-only AI assist**

## Suggested pilot
Connect web form to a Zap that triggers an AI prompt. The AI drafts a friendly reply based on the required service and saves it in a "Drafts" folder or a Slack channel for the owner to approve with one click.

## Risks and disclaimers
*Disclaimer: This is a fictional example for planning purposes. Always review AI-generated customer communications before sending to protect brand reputation.*

## Sample output
(Simulated AI Draft): "Hi [Name], thanks for reaching out to Acme Plumbing. Based on your description, a standard pipe repair usually costs between $X and $Y. Can we schedule a time to look at it tomorrow?"

## Next step
Map the exact data fields from the web form to ensure the AI prompt has enough context.

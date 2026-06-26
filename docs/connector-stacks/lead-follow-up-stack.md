# Lead Follow-Up Stack

## What This Stack Is For
This stack helps business owners capture inbound leads, organize their contact information, and ensure timely, personalized follow-ups without letting anyone fall through the cracks.

## Minimum Stack
- **Gmail**: For receiving and sending lead communications.
- **Calendar**: For scheduling discovery or follow-up calls.
- **CRM (e.g., HubSpot or Pipedrive)**: For storing lead data and tracking status.
- **GPT**: For drafting personalized follow-up emails based on lead context.

## Expanded Stack
*(Add these only after the minimum stack is working reliably)*
- **Zapier/Make**: To automatically send Gmail inquiries to the CRM.
- **Calendly**: To allow leads to self-schedule directly onto your Calendar.
- **Twilio**: For SMS follow-up alerts.

## Data Flow
1. A new lead inquiry arrives via **Gmail**.
2. The lead's contact information and inquiry details are manually (or via Zapier) entered into the **CRM**.
3. **GPT** reads the inquiry context and drafts a personalized follow-up email.
4. A human reviews, edits, and sends the email via **Gmail**, including a **Calendar** link for a meeting.
5. If the lead books, the **Calendar** event is created and the **CRM** status is updated.

## What AI Can Draft
- Initial response emails acknowledging the inquiry.
- Follow-up check-in emails if the lead goes quiet.
- Meeting agenda drafts based on the lead's initial request.
- Summary notes of the lead's needs to be pasted into the CRM.

## What AI Should Not Decide
- Whether a lead is "qualified" or "disqualified" (requires human judgment based on nuances).
- The final pricing or discount offered to the lead.
- Hitting "send" on the final email without human review.

## Risk Level
**Medium**. A bad email can cost a sale, but it typically won't cause critical business failure. Human review of outbound communication keeps the risk manageable.

## Setup Checklist
- [ ] Connect CRM email tracking to your Gmail account.
- [ ] Set up a dedicated "Lead Intake" view or pipeline in your CRM.
- [ ] Create a standard prompt template for GPT to use when drafting follow-ups.
- [ ] Test the email draft process with a dummy lead.
- [ ] Ensure calendar booking links are active and configured with the correct time zones.

## Starter GPT Prompt
```text
I just received an inquiry from a new lead.
Lead Name: [Name]
Inquiry Details: [Paste inquiry here]

Please draft a short, friendly follow-up email.
The goal is to acknowledge their specific problem and invite them to a 15-minute discovery call using this link: [Insert Calendar Link].
Keep the tone professional but approachable. Do not make any promises about pricing.
```

## Success Criteria
- Time spent drafting initial responses is reduced by at least 50%.
- Leads receive a personalized response within 24 hours.
- No leads are lost or forgotten in the inbox; all are logged in the CRM.

## Related Docs
- [Connectors Directory](../connectors/README.md)
- [Workflow Connector Maps](../workflow-connector-maps/README.md)
- [Tools: Connectors](../../pages/tools/connectors.html)

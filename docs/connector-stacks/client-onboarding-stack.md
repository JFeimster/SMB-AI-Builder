# Client Onboarding Stack

## What This Stack Is For
This stack automates the friction-heavy process of gathering initial client information, setting up their project folders, establishing an internal tracker, and scheduling the kickoff meeting.

## Minimum Stack
- **Forms (Google Forms/Typeform)**: For collecting structured intake data from the client.
- **Drive (Google Drive)**: For generating and storing a shared folder for client assets.
- **Notion/Airtable**: For tracking the client's progress through the onboarding phases.
- **Calendar**: For scheduling the kickoff meeting.
- **GPT**: For drafting customized welcome packets and synthesizing form data into a project brief.

## Expanded Stack
*(Add these only after the minimum stack is working reliably)*
- **Zapier/Make**: To auto-create Drive folders and Notion/Airtable records upon form submission.
- **DocuSign/PandaDoc**: For legally binding contract execution during onboarding.
- **Stripe/QuickBooks**: For automated initial invoice generation.

## Data Flow
1. Client signs the contract and is sent a link to the intake **Form**.
2. Client submits the **Form**.
3. A new folder is created in **Drive** for the client's project assets.
4. The client's details and onboarding status are added to **Notion/Airtable**.
5. **GPT** uses the form data to draft a personalized Welcome Email and an internal Project Brief.
6. A human reviews the email, attaches the **Calendar** link for the kickoff, and sends it.

## What AI Can Draft
- The Welcome Email outlining next steps.
- Internal project briefs summarizing the client's form submission.
- Agendas for the kickoff meeting based on stated client goals.

## What AI Should Not Decide
- Approving incomplete or nonsensical form submissions.
- Altering the scope of work based on form answers.
- Sending the final Welcome Email without human verification of the tone and details.

## Risk Level
**Medium**. Onboarding sets the tone for the client relationship. Errors here look unprofessional, but structured forms mitigate data collection risks.

## Setup Checklist
- [ ] Create the intake Form and ensure all required fields are marked.
- [ ] Set up a template folder in Drive that can be duplicated for new clients.
- [ ] Build a Kanban board in Notion/Airtable to track "Onboarding Status".
- [ ] Write a GPT prompt to synthesize form answers into a readable brief.
- [ ] Do a full test run by filling out the form yourself.

## Starter GPT Prompt
```text
My new client just submitted their intake form.
Here are their answers:
[Paste Form Data Here]

Please do two things:
1. Draft a short, warm Welcome Email confirming we received their info, and ask them to book a kickoff call here: [Insert Link].
2. Create a bulleted "Internal Project Brief" summarizing their main goals and any potential red flags or missing information I should ask about on the kickoff call.
```

## Success Criteria
- Clients complete the intake process without needing to be chased for information.
- Internal folders and tracking records are created consistently for every client.
- The business owner feels prepared for the kickoff call having read the synthesized brief.

## Related Docs
- [Connectors Directory](../connectors/README.md)
- [Workflow Connector Maps](../workflow-connector-maps/README.md)
- [Tools: Connectors](../../pages/tools/connectors.html)

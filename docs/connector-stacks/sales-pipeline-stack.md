# Sales Pipeline Stack

## What This Stack Is For
This stack helps manage active deals, update sales stages, prepare for sales calls, and ensure that no opportunity goes cold due to a lack of follow-up.

## Minimum Stack
- **HubSpot / Airtable**: The core database for tracking deals, stages, and deal values.
- **Gmail**: For outbound sales communication and proposals.
- **Calendar**: For scheduling demos, negotiations, and closing calls.
- **GPT**: To summarize deal history and draft proposal emails or follow-ups.

## Expanded Stack
*(Add these only after the minimum stack is working reliably)*
- **Gong / Fireflies**: To record and transcribe sales calls automatically.
- **Zapier/Make**: To auto-update Airtable statuses based on Calendar events.
- **DocuSign/PandaDoc**: For generating and sending sales contracts.

## Data Flow
1. A deal is created in **HubSpot / Airtable**.
2. Sales calls are scheduled via **Calendar** and held.
3. Call notes are logged back into **HubSpot / Airtable**.
4. **GPT** uses the notes to draft a recap email and outline a proposal.
5. A human reviews the draft, attaches any pricing docs, and sends it via **Gmail**.
6. Deal stages are manually updated as the conversation progresses.

## What AI Can Draft
- Pre-call research summaries (based on pasted notes).
- Post-call recap emails summarizing agreed-upon next steps.
- The structural outline of a sales proposal.

## What AI Should Not Decide
- Final pricing, discounts, or contract terms.
- Moving a deal to "Closed Won" without human verification.
- Deciding which deals to abandon or mark as "Lost" without review.

## Risk Level
**Medium to High**. Sales pipelines directly impact revenue. Poorly drafted emails or incorrect pricing can lose a deal, meaning human review of outgoing proposals is strictly required.

## Setup Checklist
- [ ] Define your specific pipeline stages (e.g., Discovery, Proposal, Negotiation, Closed).
- [ ] Set up the database (HubSpot or Airtable) to reflect these stages.
- [ ] Create a standard format for taking sales call notes.
- [ ] Write a GPT prompt to turn those standard notes into a client-facing recap.
- [ ] Ensure all calendar links are synced with your availability.

## Starter GPT Prompt
```text
I just finished a sales discovery call. Here are my raw notes:
[Paste Notes Here]

Please write a brief, professional post-call recap email to the prospect.
Thank them for their time, summarize their 2-3 main pain points we discussed, and clearly state the next step (which is me sending a formal proposal by Friday). Do not include any pricing.
```

## Success Criteria
- Pipeline visibility is clear; you know exactly where every deal stands.
- Post-call recaps are sent within hours of the meeting, rather than days.
- Deal velocity increases because follow-ups are consistent.

## Related Docs
- [Connectors Directory](../connectors/README.md)
- [Workflow Connector Maps](../workflow-connector-maps/README.md)
- [Tools: Connectors](../../pages/tools/connectors.html)

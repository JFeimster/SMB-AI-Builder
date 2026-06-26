# Ops Dashboard Stack

## What This Stack Is For
This stack aggregates daily operations data (tasks, meetings, critical emails, and project statuses) into a single, clear overview, helping business owners start their day with focus rather than chaos.

## Minimum Stack
- **Airtable / Notion**: The central hub/dashboard for tracking daily tasks and metrics.
- **Calendar**: The source of truth for the day's schedule and commitments.
- **Gmail**: For monitoring critical communications and converting emails into tasks.
- **GPT**: To summarize daily priorities and draft end-of-day reports.

## Expanded Stack
*(Add these only after the minimum stack is working reliably)*
- **Zapier/Make**: To automatically route starred Gmails or new Calendar events to the dashboard.
- **Slack/Discord**: For team-wide broadcast of the daily summary.
- **Geckoboard/Klipfolio**: For a visual, read-only dashboard display on a monitor.

## Data Flow
1. Throughout the day, new tasks, emails requiring action, and appointments arrive via **Gmail** and **Calendar**.
2. These items are logged (manually or via Zapier) into the central **Airtable / Notion** dashboard.
3. At the end of the day (or beginning of the next), **GPT** is fed the day's dashboard data.
4. **GPT** generates a brief summary of what was accomplished and flags the top 3 priorities for the next day.
5. The human reviews the summary and adjusts the priorities in **Airtable / Notion** accordingly.

## What AI Can Draft
- Daily or weekly operational summaries based on completed tasks.
- Prioritization suggestions based on upcoming deadlines.
- "End of Day" update emails for team members or partners.

## What AI Should Not Decide
- Deleting or archiving tasks without human confirmation.
- Rescheduling meetings automatically without checking human preferences.
- Deciding the overarching strategic goals of the business.

## Risk Level
**Low**. This is an internal visibility tool. If the AI hallucinates a priority, the business owner will catch it during their daily review.

## Setup Checklist
- [ ] Create a "Daily Dashboard" view in Airtable or Notion.
- [ ] Connect your Calendar to your dashboard (or build a habit of manual daily review).
- [ ] Set up a system (e.g., a specific label) for turning critical Gmails into dashboard tasks.
- [ ] Write a GPT prompt to synthesize raw task lists into a readable summary.

## Starter GPT Prompt
```text
Here is my raw list of completed tasks and meetings from today, as well as my pending tasks for tomorrow:
[Paste Dashboard Data Here]

Please write a short "End of Day" summary.
Group the completed items logically, and clearly highlight the top 3 priorities I need to focus on first thing tomorrow morning based on the pending list. Keep it concise.
```

## Success Criteria
- The business owner no longer feels overwhelmed when opening their laptop in the morning.
- Important tasks stop falling through the cracks.
- Time spent figuring out "what to do next" is drastically reduced.

## Related Docs
- [Connectors Directory](../connectors/README.md)
- [Workflow Connector Maps](../workflow-connector-maps/README.md)
- [Tools: Connectors](../../pages/tools/connectors.html)

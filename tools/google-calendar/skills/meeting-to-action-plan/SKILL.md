# Skill: Meeting to Action Plan Planner

## Purpose
Plans workflows that turn calendar events or meeting notes into actionable tasks.

## Use When
When setting up automations that trigger post-meeting (e.g., generating action items, sending summaries).

## Inputs Needed
- Meeting types and typical outcomes
- Task management tool used (e.g., Notion, Asana)
- Required information flow (e.g., Attendees -> CRM)

## Outputs
- A workflow mapping meeting completion to task creation
- Recommended integration steps
- Template for meeting summaries

## Procedure
1. Identify the trigger (e.g., Event Ends, Notes Added).
2. Map the flow of data from the calendar/notes to the task manager or CRM.
3. Draft a standardized meeting notes template that facilitates automation.
4. Define the actions (e.g., Create Task, Send Follow-up Email).
5. Review against safety rules.

## Safety / Human Review
- Do not claim to automatically interpret voice notes or complex unstructured data perfectly.
- Ensure the workflow includes a human review step before sending external summaries.

## Quality Checklist
- [ ] Workflow connects calendar to task manager?
- [ ] Data flow is clear?
- [ ] Human review step is included for external comms?

## Example Prompt
```
After my weekly team meetings, I want a workflow that takes the meeting notes document linked in the calendar event and automatically creates tasks in our project management tool. How should I set this up?
```

## Related Tool Docs
- [Google Calendar Tool Docs](../../README.md)

## Related Site Pages
- [Google Calendar Pages](../../../../pages/tools/google-calendar)

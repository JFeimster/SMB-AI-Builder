# Google Calendar Workflow Playbook

## Connector
Google Calendar

## Best For
Meeting scheduling, team availability checks, time-blocking, resource allocation, and automated reminders.

## Do Not Use For
Detailed project management, CRM tracking, or storing highly confidential meeting notes in the public description field.

## Required Inputs
- Calendar ID
- Event Title
- Start/End Date and Time
- Attendees (Emails)
- Event Description / Location

## Common SMB Workflows
1. Scheduling client consultation calls automatically.
2. Time-blocking for deep work based on task loads.
3. Checking team availability before assigning a rush project.
4. Sending pre-meeting prep reminders to internal staff.
5. Logging field service appointments.

## Automation Opportunities
- Finding the next available slot across multiple team calendars.
- Creating standard events from form submissions.
- Updating event descriptions with links to newly created meeting docs.
- Automatically canceling and notifying if prerequisite tasks fail.

## What Should Stay Human
- Resolving complex scheduling conflicts involving VIP clients.
- Deciding on mandatory vs. optional attendance for sensitive meetings.
- Approving aggressive overtime or weekend blocks.

## Privacy / Security Risks
Exposing detailed calendar data can reveal business strategy, client lists, and employee habits. Creating excessive automated events can break schedules, trigger massive alert storms, and cause missed meetings.

## Risk Level
- Medium

## Starter Prompt
```text
I need a workflow to handle my initial sales calls. When a lead fills out my intake form, I want to check my Google Calendar for the next available 30-minute slot on a Tuesday or Thursday, schedule the event, and add the Zoom link. Help me map out this logic.
```

## Example Output
```json
{
  "workflow_step": "Schedule Sales Call",
  "connector": "Google Calendar",
  "action": "Create Event",
  "parameters": {
    "summary": "Intro Call: New Lead",
    "start_time": "2024-05-14T10:00:00Z",
    "end_time": "2024-05-14T10:30:00Z",
    "attendees": ["lead@example.com"]
  }
}
```

## Related Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/tools/integration-map.html](../../pages/tools/integration-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)

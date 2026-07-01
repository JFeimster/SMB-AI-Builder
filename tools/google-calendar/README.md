# Google Calendar Tool-Ops Layer

## Purpose
Manages calendar operations for scheduling, reading events, and coordinating timelines via the Google Calendar API.

## Best Used For
- Scheduling client meetings
- Checking team availability
- Creating recurring events
- Sending calendar invitations
- Generating daily agenda summaries

## Not For
- Deleting events created by other users without permission
- Managing complex resource booking (like conference rooms) without proper setup
- Overriding user-defined working hours

## Common Tasks
- Create a new calendar event
- Find a free time slot
- Update an event's description

## Inputs Needed
- Event start/end times
- Attendees list
- Event summary and description

## Outputs
- Event IDs
- Calendar links
- Availability status

## Skills
List related skills in `tools/google-calendar/skills/`. Note: Subfolders are created only when needed since Git does not preserve empty directories.

## Prompts
Point to `tools/google-calendar/prompts/` if present.

## Risk Notes
Ensure proper timezone handling. Be careful when sending updates to all attendees to avoid spamming.

## Related Site Pages
- Relevant documentation or capability pages will be linked here.

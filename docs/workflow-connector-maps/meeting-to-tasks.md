# Meeting to Tasks Connector Map

## Workflow
Turning meeting notes and action items into trackable tasks.

## Common Mess
Action items stay in personal notebooks or Slack DMs and are never completed. If the process is broken, automation makes it broken faster.

## Best Connectors
- **Triggers:** Note-taking apps (Notion, Evernote), Meeting Recorders (Otter, Fireflies)
- **Data:** Project Management (Asana, ClickUp, Jira)
- **Comms:** Slack

## Minimum Stack
Calendar → Meeting Tool → Task Tracker

## Advanced Stack
Meeting Recorder → AI Summary API → Project Management Task Creation → Slack Notification to Assignee

## What To Automate
- Transcribing the meeting.
- Extracting explicit action items (e.g., "John will do X by Friday").
- Creating a draft task in the project management tool.

## What Should Stay Human
- Reviewing the action items for accuracy before assigning them.
- Adding specific context or dependencies to the tasks.

## Risk Level
Low

## Draft-First Rules
AI should only create "draft" or "unassigned" tasks. A human project manager must review and officially assign them to ensure the AI didn't misinterpret the conversation.

## Starter GPT Prompt
```text
Review this meeting transcript: [Transcript]
Extract all action items. For each item, list the task description, the assigned person (if mentioned), and the deadline (if mentioned). Format as a bulleted list.
```

## Expected Output
A clear list of action items ready to be converted into tasks.

## Related Playbooks
- [Productivity Connectors](../connectors/productivity.md)
- [Project Management Connectors](../connectors/project-management.md)

## Related Site Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)
- [../../pages/tools/prompts.html](../../pages/tools/prompts.html)

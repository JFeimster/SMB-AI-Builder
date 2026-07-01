# ClickUp Workflow Playbook

## Connector
ClickUp

## Best For
Task management, sprint planning, SOP execution, time tracking, and team collaboration.

## Do Not Use For
Customer-facing communications, acting as a primary CRM, or financial ledgering.

## Required Inputs
- Space/Folder/List IDs
- Task Names and Descriptions
- Assignee IDs
- Statuses
- Custom Fields

## Common SMB Workflows
1. Creating standard task templates for new client onboarding.
2. Generating recurring weekly operational tasks.
3. Moving tasks between statuses based on GitHub PR merges.
4. Logging time entries from external tools.
5. Creating subtasks from checklist items.

## Automation Opportunities
- Auto-assigning tasks based on workload or role.
- Updating custom fields from form submissions.
- Changing task statuses when dependencies are met.
- Generating reporting summaries of overdue tasks.

## What Should Stay Human
- Prioritizing the overall sprint backlog.
- Approving complex deliverable completions.
- Handling team performance reviews.

## Privacy / Security Risks
ClickUp permissions can be granular. Misconfigured automations might expose internal strategic tasks to guest users (like clients or contractors) or overwrite critical project details.

## Risk Level
- Medium

## Starter Prompt
```text
I want to standardize our onboarding process. When a deal is marked 'Closed Won' in our CRM, I want to create a new task in ClickUp from our 'Client Onboarding' template, assign it to the Account Manager, and set the due date to 5 days from today. Help me map out the steps.
```

## Example Output
```json
{
  "workflow_step": "Create Onboarding Task",
  "connector": "ClickUp",
  "action": "Create Task",
  "parameters": {
    "list_id": "900100200",
    "name": "Onboard New Client",
    "assignees": ["user_123"],
    "due_date": "1715731200000"
  }
}
```

## Related Pages
- [../../pages/tools/integration-map.html](../../pages/tools/integration-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)

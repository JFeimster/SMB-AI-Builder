# Clickup Tool-Ops Layer

## Purpose
Instructions and guidelines for managing tasks, lists, and spaces in ClickUp to support project management workflows.

## Best Used For
- Creating automated tasks
- Updating task statuses
- Adding comments to tasks
- Managing custom fields
- Organizing sprint work items

## Not For
- Managing overarching workspace configurations
- Handling sensitive HR tasks without restricted access
- Extensive document storage

## Common Tasks
- Create a task in a specific list
- Update a custom field on a task
- Change a task's assignee

## Inputs Needed
- List IDs
- Task details (name, description, assignees)
- Status updates

## Outputs
- Task IDs
- Task URLs
- Updated task JSON

## Skills
List related skills in `tools/clickup/skills/`. Note: Subfolders are created only when needed since Git does not preserve empty directories.

## Prompts
Point to `tools/clickup/prompts/` if present.

## Risk Notes
Ensure proper hierarchy traversal (Workspace -> Space -> Folder -> List). Be mindful of API rate limits.

## Related Site Pages
- Relevant documentation or capability pages will be linked here.

# Skill: Database Build Planner

## Purpose
Plans the properties, relations, and views for complex Notion databases.

## Use When
When a user needs to build a CRM, project tracker, or content calendar in Notion.

## Inputs Needed
- Purpose of the database
- Required data points
- Workflows connecting to this data

## Outputs
- A schema of database properties (types and names)
- Required relations to other databases
- Recommended database views (Board, Table, Calendar)

## Procedure
1. Define the core entity of the database (e.g., 'Task', 'Contact').
2. List necessary properties and their Notion types (Select, Date, Relation, Rollup).
3. Plan relations to other databases (e.g., linking 'Tasks' to 'Projects').
4. Design the views needed for different workflows.
5. Review against safety and complexity rules.

## Safety / Human Review
- Keep the schema as simple as possible; avoid over-engineering relations.
- Remind users that complex formulas may need human testing.

## Quality Checklist
- [ ] Properties match the use case?
- [ ] Relations are logical?
- [ ] Useful views are proposed?

## Example Prompt
```
I want to build a content calendar in Notion that tracks blog posts, social media updates, and newsletters. It needs to show the status, assignee, and publish date. Can you plan the database properties and views I'll need?
```

## Related Tool Docs
- [Notion Tool Docs](../../README.md)

## Related Site Pages
- [Notion Pages](../../../../pages/tools/notion)

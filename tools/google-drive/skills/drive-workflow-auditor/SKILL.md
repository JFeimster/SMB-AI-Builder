# Skill: Drive Workflow Auditor

## Purpose
Audits and plans Google Drive folder structures and workflows for SMBs.

## Use When
When a user needs to organize their Google Drive or plan an automation workflow involving Drive.

## Inputs Needed
- Current folder structure (if any)
- Business goals for Drive organization
- Key document types and sharing requirements

## Outputs
- A recommended folder structure map
- A list of potential automation triggers and actions
- Access control recommendations

## Procedure
1. Analyze the user's business context and current Drive usage.
2. Draft a proposed folder hierarchy (e.g., by department, project, or client).
3. Identify opportunities for automation (e.g., auto-creating folders for new clients).
4. Define sharing and permission guidelines.
5. Review against safety rules.

## Safety / Human Review
- Do not perform destructive actions (e.g., deleting files/folders).
- Include explicit human review language for any automation that moves or deletes files.
- Remind users that this is a draft/plan and they must implement it in their actual Drive.

## Quality Checklist
- [ ] Folder structure is logical and scalable?
- [ ] Access controls are clearly defined?
- [ ] No destructive automations proposed without warnings?

## Example Prompt
```
I need to organize my Google Drive for my small marketing agency. We have 5 clients and currently, everything is in one big folder. Can you suggest a structure and some ways we could automate folder creation when we sign a new client?
```

## Related Tool Docs
- [Google Drive Tool Docs](../../README.md)

## Related Site Pages
- [Google Drive Pages](../../../../pages/tools/google-drive)

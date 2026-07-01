# Skill: Drive Workflow Auditor

## Purpose

Audit Google Drive based workflows for file organization, document intake, handoff clarity, and safe AI-assisted drafting.

## Use When

Use this skill when a workflow depends on folders, docs, attachments, intake files, contracts, templates, or internal knowledge assets.

## Inputs Needed

- Workflow name
- Folder/file types involved
- Who creates files
- Who reviews files
- Where files go next
- Sensitive data concerns

## Outputs

- Drive workflow map
- Folder risk notes
- Document checklist
- Automation candidates
- Human review points
- Safer naming/routing recommendations

## Procedure

1. Map where files enter the workflow.
2. Identify required file types.
3. Identify missing, duplicate, or stale files.
4. Identify who reviews each file.
5. Recommend the minimum automation support.
6. Flag sensitive files that should not be processed casually.

## Safety / Human Review

Do not treat Drive access as permission to expose, summarize, or reuse private data. Sensitive client documents, IDs, legal files, finance files, and HR files require explicit review and careful handling.

## Quality Checklist

- [ ] Folder/file flow is clear.
- [ ] Sensitive files are flagged.
- [ ] Automation is draft-first where needed.
- [ ] Human review points are explicit.
- [ ] Output is practical enough to implement.

## Example Prompt

```text
Audit this Drive-based workflow. Identify where files enter, who reviews them, what is missing, what can be drafted or summarized, and what should remain human-reviewed.
```

## Related Tool Docs

- ../../../../docs/connectors/README.md
- ../../../../docs/connectors/connector-risk-rules.md

## Related Site Pages

- ../../../../pages/tools/connectors.html
- ../../../../pages/tools/connector-risk-map.html
- ../../../../pages/directories/connector-library.html

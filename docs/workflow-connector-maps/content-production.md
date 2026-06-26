# Content Production Connector Map

## Workflow
Moving content from ideation to drafting, review, and publishing.

## Common Mess
Drafts lost in Google Docs, unclear approval statuses, and missed publishing deadlines. If the process is broken, automation makes it broken faster.

## Best Connectors
- **Triggers:** Status changes in Project Management
- **Data:** Notion, Asana, Monday, Google Docs
- **Output:** WordPress, Webflow, Social Media Schedulers

## Minimum Stack
Project Mgmt → CMS

## Advanced Stack
Project Mgmt → Content Generation API (Drafting) → CMS (Draft Status) → Slack Alert for Review

## What To Automate
- Changing project status when a draft is submitted.
- Moving approved text from a doc to the CMS draft folder.
- Alerting reviewers when a draft is ready.

## What Should Stay Human
- Final editorial review and approval.
- Defining the content strategy.
- Ensuring brand voice consistency.

## Risk Level
Low

## Draft-First Rules
AI should only generate outlines or rough drafts. It should never publish content directly to a live site or social feed without human approval.

## Starter GPT Prompt
```text
Act as a content marketer. Review this brief: [Brief]
Create a detailed outline for a blog post, including suggested H2s, H3s, and bullet points for the main arguments in each section.
```

## Expected Output
A structured outline ready for a writer to expand upon.

## Related Playbooks
- [Project Management Connectors](../connectors/project-management.md)
- [CMS Connectors](../connectors/cms.md)

## Related Site Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)
- [../../pages/tools/prompts.html](../../pages/tools/prompts.html)

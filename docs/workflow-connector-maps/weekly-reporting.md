# Weekly Reporting Connector Map

## Workflow
Aggregating metrics across different tools to build a weekly summary for management.

## Common Mess
Hours spent copying and pasting numbers into spreadsheets, resulting in outdated or incorrect data by the time the meeting starts. If the process is broken, automation makes it broken faster.

## Best Connectors
- **Triggers:** Schedule (e.g., Every Friday at 3 PM)
- **Data:** CRM, Marketing Analytics, Financials
- **Output:** Google Sheets, Notion, Slack

## Minimum Stack
CRM/Sales → Spreadsheet/Doc

## Advanced Stack
Multiple Data Sources → Data Warehouse/BI Tool → Auto-generated PDF → Email to Stakeholders

## What To Automate
- Extracting raw numbers from platforms.
- Populating standard tables/charts.
- Delivering the report to a specific channel or inbox.

## What Should Stay Human
- The executive summary.
- Explaining the "why" behind the numbers.
- Strategic recommendations based on the data.

## Risk Level
Low

## Draft-First Rules
AI should only draft a bulleted summary of trends based on the raw data. A human must review and refine the narrative before distribution.

## Starter GPT Prompt
```text
Review this week's KPI data: [Data]
Draft a 3-bullet summary highlighting the biggest positive change and the biggest negative change compared to last week.
```

## Expected Output
A factual summary of data trends for the human to review and contextualize.

## Related Playbooks
- [Data Connectors](../connectors/data.md)
- [Reporting Connectors](../connectors/reporting.md)

## Related Site Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)
- [../../pages/tools/prompts.html](../../pages/tools/prompts.html)

# Semrush Workflow Playbook

## Connector
Semrush

## Best For
SEO research, keyword tracking, competitor analysis, backlink auditing, and content planning.

## Do Not Use For
Replacing actual on-page optimization, managing website hosting, or direct CRM integration.

## Required Inputs
- Domain Names
- Keywords
- Project IDs
- Target Geographies

## Common SMB Workflows
1. Generating weekly domain ranking reports.
2. Pulling search volume for proposed blog topics.
3. Auditing new competitor domains for backlink opportunities.
4. Tracking position changes for core business keywords.
5. Identifying toxic backlinks for disavowal.

## Automation Opportunities
- Pulling keyword data into Google Sheets for content planning.
- Triggering alerts when a competitor outranks a core page.
- Generating automated site health summaries.
- Formatting raw SEO data into client-facing reports.

## What Should Stay Human
- Formulating the actual SEO strategy.
- Deciding which keywords represent true business intent.
- Writing the final optimized content.
- Submitting disavow files to Google.

## Privacy / Security Risks
Semrush data is generally public market intelligence. The main risk is high API costs from poorly configured automated queries pulling massive datasets unnecessarily.

## Risk Level
- Low

## Starter Prompt
```text
I want to automate my SEO reporting for clients. At the end of every month, I want to pull the top 10 ranking keywords for a client's domain from Semrush, format the data into a clean table, and save it to a Google Doc in their folder. Map out this data extraction process.
```

## Example Output
```json
{
  "workflow_step": "Extract Keyword Rankings",
  "connector": "Semrush",
  "action": "Domain Organic Search Keywords",
  "parameters": {
    "domain": "clientwebsite.com",
    "database": "us",
    "limit": 10,
    "sort": "po_asc"
  }
}
```

## Related Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/tools/integration-map.html](../../pages/tools/integration-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)

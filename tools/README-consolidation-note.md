# Tools Consolidation Note

This repo uses the existing root `tools/` folder for tool-ops assets.

Do not create:

- `tools/tools/`
- root-level `skills/`

Use this pattern instead:

```txt
tools/{tool-name}/README.md
tools/{tool-name}/prompts/
tools/{tool-name}/docs/
tools/{tool-name}/examples/
tools/{tool-name}/skills/{skill-name}/SKILL.md
```

Git does not preserve empty directories, so optional subfolders should be created only when they contain files.

## Current Consolidation Adds

Selected skill files under existing tool folders:

- GitHub
- Google Drive
- Gmail
- Google Calendar
- Notion
- Airtable
- HubSpot
- ClickUp
- Vercel
- QuickBooks
- Semrush
- OpenAPI

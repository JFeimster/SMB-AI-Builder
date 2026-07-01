# Semrush Tool-Ops Layer

## Purpose
Provides instructions for utilizing the Semrush API to gather SEO data, keyword research, and domain analytics.

## Best Used For
- Conducting keyword research
- Analyzing domain authority
- Tracking backlink profiles
- Generating SEO audit reports
- Monitoring competitor rankings

## Not For
- Automating link building outreach
- Making automated changes to website content without review
- Exceeding API call limits unintentionally

## Common Tasks
- Retrieve search volume for a list of keywords
- Get domain overview metrics
- Find related keywords

## Inputs Needed
- Target keywords
- Domain names
- Database/location (e.g., 'us')

## Outputs
- Keyword metrics (volume, KD)
- Domain analytics (traffic, backlinks)
- Formatted SEO reports

## Skills
List related skills in `tools/semrush/skills/`. Note: Subfolders are created only when needed since Git does not preserve empty directories.

## Prompts
Point to `tools/semrush/prompts/` if present.

## Risk Notes
Semrush API calls cost API units; optimize requests to minimize costs. Cache results where possible. Do not expose API keys.

## Related Site Pages
- Relevant documentation or capability pages will be linked here.

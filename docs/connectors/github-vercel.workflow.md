# GitHub + Vercel Connector Playbook

## Connector

GitHub for repository work and Vercel for static/app deployment readiness.

## Best For

- Static site improvements
- PR review and merge planning
- Sitemap and route checks
- Deployment readiness audits
- OpenAPI/schema asset organization
- Tool-ops documentation

## Do Not Use For

- Blind merging of conflicted branches
- Production deployment claims without verification
- Secret handling without explicit controls
- Security-sensitive changes without review

## Required Inputs

- Repository URL
- Target branch
- Changed files
- Deployment target
- Known blockers

## Common SMB Workflows

- Landing page updates
- GPT support site expansion
- OpenAPI schema library setup
- Prompt/tool directory cleanup
- Vercel readiness checks
- PR queue consolidation

## Automation Opportunities

- Draft PR summaries
- Create QA checklists
- Identify missing sitemap entries
- Flag stale branches
- Generate repo structure recommendations

## What Should Stay Human

- Final merge decisions for risky code
- Production deployment toggles
- Security and private network URL logic
- Secrets and environment settings

## Privacy / Security Risks

Repo automation can alter public sites, deploy broken pages, expose links, or weaken security guards. Treat deployment and action-layer code as higher risk.

## Risk Level

Medium for docs/static pages. High for deployment, security, API, auth, or action-layer logic.

## Starter Prompt

```text
Audit this GitHub/Vercel workflow. Identify changed files, route or sitemap gaps, deployment risks, test needs, and whether this PR should merge, be patched, or be consolidated.
```

## Related Pages

- ../../pages/tools/connectors.html
- ../../pages/directories/connector-library.html
- ../../pages/directories/skills-library.html

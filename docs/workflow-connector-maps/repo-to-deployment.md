# Repo-to-Deployment Connector Map

## Workflow

Move a static site or lightweight app change from repo work to deployment readiness.

## Common Mess

Generated PRs pile up, old branches drift from `main`, sitemap entries are missed, public pages have broken relative paths, and deployment claims are made before anything is verified.

## Best Connectors

- GitHub
- Vercel
- GPT
- Codex/Jules where available

## Minimum Stack

GitHub + GPT + Vercel dashboard/review.

## Advanced Stack

Add Codex, Jules, CI checks, link checkers, and preview deployment validation after the repo structure is stable.

## What To Automate

- PR summary drafts
- File/path checks
- Sitemap checklist generation
- Deployment readiness checklist
- Stale branch triage

## What Should Stay Human

- Final merge
- Production deployment decision
- Security-sensitive code review
- Environment variables and secrets

## Risk Level

Medium for static docs/pages. High for API routes, auth, security, private-network checks, or production deploy behavior.

## Draft-First Rules

AI may recommend and draft. A human reviews before merge and deployment.

## Starter GPT Prompt

```text
Map this repo-to-deployment workflow. Identify merge blockers, sitemap issues, route risks, build artifacts, test needs, and whether this PR is safe to merge.
```

## Expected Output

- PR status table
- Merge blockers
- Deployment readiness checklist
- Recommended merge order
- Follow-up issues

## Related Playbooks

- ../connectors/github-vercel.workflow.md

## Related Site Pages

- ../../pages/directories/connector-library.html
- ../../pages/directories/skills-library.html

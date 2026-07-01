# Repo Launch Stack

## What This Stack Is For

A practical stack for turning repo work into a deployable static site or GPT support site without merging chaos.

## Minimum Stack

- GitHub
- Vercel
- GPT

## Expanded Stack

- Jules
- Codex
- CI checks
- Link checker
- Sitemap validator

## Data Flow

1. Work starts in a branch or PR.
2. GPT/Jules/Codex generates or reviews changes.
3. GitHub holds review and merge history.
4. Vercel previews or deploys when enabled.
5. Human reviews output before production.

## What AI Can Draft

- PR summaries
- QA checklists
- Sitemap changes
- Route checks
- File/folder structure recommendations
- Issue comments

## What AI Should Not Decide

- Security-sensitive merges
- Production deployment toggles
- Secrets/env settings
- Final release approval

## Risk Level

Medium for docs/static pages. High for API/security/deployment logic.

## Setup Checklist

- [ ] Confirm branch is current with `main`.
- [ ] Check public pages and relative paths.
- [ ] Update sitemap.
- [ ] Avoid build artifacts.
- [ ] Verify deployment behavior before claiming success.

## Starter GPT Prompt

```text
Audit this repo launch stack. Identify stale branches, merge blockers, sitemap gaps, relative-link issues, deployment risks, and the cleanest next PR.
```

## Success Criteria

- One clean PR instead of many stale branches
- Public pages discoverable in sitemap
- No fake deployment claims
- No build artifacts committed

## Related Docs

- ../workflow-connector-maps/repo-to-deployment.md
- ../connectors/github-vercel.workflow.md

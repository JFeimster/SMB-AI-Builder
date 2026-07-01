# Skill: Deployment Readiness Auditor

## Purpose

Audit static sites and lightweight app repos for deployment readiness before merging or pushing to Vercel.

## Use When

Use this skill before merging UI/site PRs, changing routes, updating sitemap files, adding public pages, or adjusting Vercel deployment settings.

## Inputs Needed

- Repo URL
- Target branch
- Changed files
- Public URL
- Route/page list
- Sitemap file
- Build/deploy settings if known

## Outputs

- Deployment readiness checklist
- Broken route risks
- Sitemap/nav gaps
- Static asset concerns
- Preview/production deployment cautions
- Recommended merge decision

## Procedure

1. List public page changes.
2. Check relative CSS/JS paths.
3. Check navigation and footer links.
4. Check sitemap entries.
5. Check static assets.
6. Check for build artifacts like `tsconfig.tsbuildinfo`.
7. Flag deployment blockers.

## Safety / Human Review

Do not claim deployment success unless it was actually verified. Do not enable production deployment automatically unless requested.

## Quality Checklist

- [ ] Pages have working relative assets.
- [ ] Sitemap is updated.
- [ ] No obvious broken links.
- [ ] No generated build artifacts are committed.
- [ ] No unsupported production claims are made.

## Example Prompt

```text
Audit this static site PR for Vercel deployment readiness. Check routes, sitemap, relative links, CSS/JS paths, build artifacts, and merge blockers.
```

## Related Tool Docs

- ../../../../docs/consolidation/connector-tooling-consolidation.md

## Related Site Pages

- ../../../../pages/directories/connector-library.html
- ../../../../pages/directories/skills-library.html

# Vercel Deployment Checklist

## Purpose

Check the repository's readiness for Vercel deployment.

## When to use this skill

- Before merging major changes.
- Before launching.

## When not to use this skill

- For executing code changes directly (this is an audit/checklist skill).

## Inputs Codex should collect

- Target branch.

## Files and folders this skill may touch

- `package.json`
- `next.config.ts`
- `vercel.json`

## Source-of-truth files to read first

- JULES.md
- jules.json
- qa-checklist.md
- style-guide.md
- tools/jules/file-map.json
- tools/jules/copy-rules.md
- tools/jules/seo-rules.md
- tools/jules/accessibility-checklist.md

## Process

1. Verify `package.json` scripts.
2. Check `next.config.ts` for build constraints.
3. Audit `vercel.json` (ensure `"git": {"deploymentEnabled": false}` for manual posture).
4. Check environment variable requirements.
5. Verify static assets, API routes, OpenAPI endpoints, privacy/terms pages, robots, and sitemap.
6. Document build verification steps and common Vercel failure modes.

## Output requirements

A comprehensive Vercel deployment audit report.

## Safety and claims rules
- **No fake proof:** Do not invent fake testimonials, reviews, ratings, logos, case studies, user counts, revenue numbers, guarantees, compliance claims, partner relationships, certifications, benchmarks, integrations, or unsupported competitor claims.
- **Sensitive workflows:** For workflows involving customer-facing communication, money, finance, tax, accounting, legal, HR, medical, lending, underwriting, compliance, private data, or sensitive personal data, recommend:
  - Draft-only mode
  - Human approval before action
  - Limited permissions
  - Test data first
  - Audit logs
  - Escalation rules
  - Rollback plan
  - Qualified human review
- **Safety stance:** Include the exact disclaimer visibly near the relevant safety/CTA section when handling sensitive workflows:
  > This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Never commit real environment variables or secrets.

## QA checklist

- [ ] `vercel.json` has correct deployment posture.
- [ ] Robots and sitemap exist in root.
- [ ] Build scripts are intact.

## Common mistakes to avoid

- Leaving automatic git deployments enabled when manual is required.
- Committing `.env` files.

## Final response format

Output a Pass/Fail deployment report with required actions.

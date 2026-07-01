# Consolidation QA Checklist

Use this checklist before merging the connector/tooling consolidation PR.

## Public Pages

- [ ] `pages/directories/connector-library.html` loads with `../../styles.css` and `../../script.js`.
- [ ] `pages/directories/skills-library.html` loads with `../../styles.css` and `../../script.js`.
- [ ] Each page has one H1.
- [ ] Each page has a canonical URL.
- [ ] Each page links to at least three related internal pages.

## Sitemap

- [ ] `sitemap.xml` includes connector library.
- [ ] `sitemap.xml` includes skills library.
- [ ] Sitemap XML formatting remains readable.
- [ ] No duplicate malformed inline URL blocks.

## Docs

- [ ] Connector docs link only to existing public pages or docs added in this branch.
- [ ] Workflow maps link to existing connector docs.
- [ ] Stack docs do not include accuracy guarantees.
- [ ] Prompt docs do not ask users to paste private data casually.

## Skills

- [ ] Skills live under `tools/{tool}/skills/{skill}/SKILL.md`.
- [ ] Skills do not require a root-level `skills/` folder.
- [ ] Related links resolve to files created in this branch or existing pages.

## Safety

- [ ] No fake connector claims.
- [ ] No fake live endpoint claims.
- [ ] No legal, tax, HR, lending, underwriting, accounting, medical, or compliance advice claims.
- [ ] Sensitive decisions remain human-reviewed.

## Merge Decision

Merge only if the branch is current with `main`, has no conflicts, and the public pages/docs are internally consistent.

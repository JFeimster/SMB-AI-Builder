# Codex Task Router

## Purpose

Help Codex choose the correct skill for a specific task based on project constraints and directory structures.

## When to use this skill

- When breaking down a user's request into actionable steps.
- To decide which specific builder skill to invoke.

## When not to use this skill

- For actually creating or editing the files.

## Inputs Codex should collect

- Goal of the task.
- Target outputs.

## Files and folders this skill may touch

- None (Planning only)

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

1. Analyze the user request.
2. Match the request against the routing table.
3. Plan out the sequence of skills to use.
4. Review the target paths against `tools/jules/file-map.json`.

## Output requirements

An execution plan listing the skills to invoke in order.

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
- Ensure sensitive workflow audits use the `workflow-seo-page-builder` and claims safety reviews are scheduled for new copy.

## QA checklist

- [ ] Skill matched to correct routing rule.
- [ ] QA skill included at the end of the plan.

## Common mistakes to avoid

- Routing static pages to the Next.js builder.
- Forgetting to run final QA.

## Final response format

List the chosen skills and the order of execution.

### Routing Table
| Task Type | Target Skill |
| --- | --- |
| Static product/site pages | `static-site-page-builder` |
| General SEO pages | `seo-page-builder` |
| Workflow specific SEO pages | `workflow-seo-page-builder` |
| Comparison guides | `comparison-page-builder` |
| Affiliate/partner embeds | `partner-embed-builder` |
| GPT Action documentation | `gpt-action-docs-builder` |
| OpenAPI 3.1 schemas | `openapi-schema-builder` |
| Next.js API logic | `api-route-builder` |
| Markdown knowledge/SOPs | `markdown-knowledge-file-builder` |
| Jules/Codex/System Prompts | `prompt-library-builder` |
| Accessibility review | `accessibility-audit` |
| Copy and conversion | `conversion-copy-optimizer` |
| Safety & proof checking | `claims-safety-review` |
| Privacy/terms | `privacy-terms-page-builder` |
| JSON test fixtures | `test-fixture-builder` |
| README and docs | `docs-readme-builder` |
| Changelog and release notes | `changelog-release-notes-builder` |
| End of task validation | `final-qa-runner` |
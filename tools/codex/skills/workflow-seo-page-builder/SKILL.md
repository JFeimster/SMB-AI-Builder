# Workflow SEO Page Builder

## Purpose

Create workflow-specific audit pages that warn users about automation risks, score readiness, and suggest safe pilot plans.

## When to use this skill

- When writing SEO pages targeting a specific business workflow (e.g., 'Automate Invoice Processing').

## When not to use this skill

- For general site pages or guides.

## Inputs Codex should collect

- Specific workflow name.
- Known risks of automating this workflow.

## Files and folders this skill may touch

- `pages/seo/workflows/*.html`

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

1. Format H1 exactly as: `Audit Your [Workflow] Before Automating It With AI`.
2. Draft section: Why this workflow is tempting to automate.
3. Draft section: What can go wrong.
4. Draft section: What the GPT checks.
5. Draft section: Readiness factors.
6. Draft section: Suggested safe pilot (as cards).
7. Draft section: Human review checkpoints (as cards).
8. Add CTA and FAQ (3-5 questions).
9. Add sensitive disclaimers if applicable.

## Output requirements

A workflow audit HTML page following the exact section structure.

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
- Include sensitive disclaimers for money/customer/private-data workflows.

## QA checklist

- [ ] H1 matches required pattern.
- [ ] All required sections are present.
- [ ] Human review checkpoints included.
- [ ] Sensitive disclaimers added if relevant.

## Common mistakes to avoid

- Missing the exact H1 format.
- Encouraging reckless automation instead of auditing.
- Omitting human review steps.

## Final response format

Confirm page creation and list the workflow risks covered.

# Comparison Page Builder

## Purpose

Create balanced comparison pages that act as decision guides, positioning the GPT as a readiness/planning layer rather than a direct replacement.

## When to use this skill

- When building 'Tool A vs Tool B' pages.
- When comparing automation approaches.

## When not to use this skill

- For attacking competitors.

## Inputs Codex should collect

- Tools/approaches to compare.

## Files and folders this skill may touch

- `pages/seo/comparisons/*.html`

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

1. Draft balanced definitions of each option.
2. Create 'Use this when...' and 'Audit first when...' sections.
3. Design a comparison table or card grid.
4. Position our GPT as the planning/readiness layer before building.
5. Add a CTA band and FAQ (4-6 questions).
6. Do not claim integrations unless confirmed.

## Output requirements

A balanced, objective comparison HTML page.

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
- Be balanced. Do not attack competitors. Do not claim product replaces tools.

## QA checklist

- [ ] Tone is objective and not an attack.
- [ ] Comparison table/grid included.
- [ ] GPT positioned as planning layer.
- [ ] 'Use this when' sections included.

## Common mistakes to avoid

- Claiming our GPT does the automation directly.
- Inventing fake benchmarks.
- Trashing competitors.

## Final response format

Confirm page creation and summarize the comparison logic.

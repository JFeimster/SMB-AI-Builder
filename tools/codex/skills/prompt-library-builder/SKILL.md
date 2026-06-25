# Prompt Library Builder

## Purpose

Create reusable prompt files for Jules, Codex, GPT Builders, and QA processes.

## When to use this skill

- When adding new system prompts or task instructions to the repository.

## When not to use this skill

- For general documentation.

## Inputs Codex should collect

- Prompt goal.
- Constraints.

## Files and folders this skill may touch

- `prompts/jules/*.md`
- `prompts/codex/*.md`
- `docs/prompts/*.md`

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

1. Write the prompt clearly and concisely.
2. Keep prompts single-block and copy-pasteable.
3. Include source-of-truth references within the prompt.
4. Categorize as a Jules, Codex, GPT Builder, QA, SEO, or Page generation prompt.
5. Run a final QA on the prompt language.

## Output requirements

A reusable prompt file in Markdown.

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

## QA checklist

- [ ] Prompt is copy-pasteable.
- [ ] Constraints are clearly defined.
- [ ] Variables/placeholders are obvious.

## Common mistakes to avoid

- Making the prompt too complex or multi-part without need.
- Omitting context or role definitions.

## Final response format

Confirm prompt creation and provide a brief preview of its capabilities.

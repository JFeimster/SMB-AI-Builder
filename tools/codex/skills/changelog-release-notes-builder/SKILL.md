# Changelog Release Notes Builder

## Purpose

Create clear, formatted changelogs and release notes.

## When to use this skill

- When preparing for a release or after completing a large task.

## When not to use this skill

- For tracking individual minor commits.

## Inputs Codex should collect

- Git history.
- Task summaries.

## Files and folders this skill may touch

- `CHANGELOG.md`

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

1. Use Added/Changed/Fixed format.
2. Handle dates correctly.
3. Write implementation summaries.
4. Include migration notes if applicable.
5. Document known limitations.
6. Do not include fake version claims.

## Output requirements

An updated changelog file.

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
- No fake version claims.

## QA checklist

- [ ] Format is consistent.
- [ ] Dates are correct.
- [ ] Migration notes included if needed.

## Common mistakes to avoid

- Over-exaggerating bug fixes.
- Using inconsistent date formats.

## Final response format

Provide the drafted release notes.

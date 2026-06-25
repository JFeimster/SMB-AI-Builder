# Docs README Builder

## Purpose

Create comprehensive repository documentation and READMEs.

## When to use this skill

- When initializing the repo.
- When adding major new features that require setup.

## When not to use this skill

- For end-user marketing copy.

## Inputs Codex should collect

- Repo status.
- Setup instructions.

## Files and folders this skill may touch

- `README.md`
- `docs/*.md`

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

1. Document repo overview and setup.
2. Include the folder map.
3. Add local development and deployment instructions.
4. Document GPT Action setup.
5. Add prompt usage guidelines.
6. Include safety notes and contribution notes.
7. Avoid fake status claims.

## Output requirements

A clear, accurate README.md file.

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
- No fake version or status claims.

## QA checklist

- [ ] Setup instructions are accurate.
- [ ] Folder map is included.
- [ ] Safety notes highlighted.

## Common mistakes to avoid

- Documenting features that don't exist yet.
- Missing deployment instructions.

## Final response format

Confirm documentation updates.

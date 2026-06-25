# Test Fixture Builder

## Purpose

Create JSON examples and test fixtures for GPT Actions and APIs.

## When to use this skill

- When documenting APIs.
- When building tests.

## When not to use this skill

- For actual production databases.

## Inputs Codex should collect

- OpenAPI schema or expected shapes.

## Files and folders this skill may touch

- `examples/*.json`

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

1. Create valid request examples.
2. Create invalid request examples (for error handling docs).
3. Create sensitive workflow examples.
4. Create expected response examples.
5. Validate JSON syntax.
6. Keep fixtures realistic but avoid using private real user data.

## Output requirements

Valid JSON test fixtures.

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
- No sensitive personal data. Do not use real customer PII.

## QA checklist

- [ ] JSON is valid.
- [ ] No real PII included.
- [ ] Edge cases represented.

## Common mistakes to avoid

- Copying real production data into fixtures.
- Creating invalid JSON.

## Final response format

List the created fixtures and confirm JSON validity.

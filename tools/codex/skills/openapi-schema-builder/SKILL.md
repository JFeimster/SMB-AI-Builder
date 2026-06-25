# OpenAPI Schema Builder

## Purpose

Create and validate OpenAPI 3.1 schemas for GPT Actions.

## When to use this skill

- When defining endpoints for the Custom GPT.

## When not to use this skill

- For internal-only APIs that the GPT won't call.

## Inputs Codex should collect

- API routes.
- Expected payload shapes.

## Files and folders this skill may touch

- `openapi/*.json`
- `openapi/*.yaml`

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

1. Create an OpenAPI 3.1 compliant schema.
2. Ensure stable `operationId` values.
3. Define clear `requestBody` and `responses` with JSON schema validation.
4. Include no auth unless required.
5. Use placeholders for production domains if unknown (do not use fake server URLs).
6. Validate compatibility for GPT Actions.

## Output requirements

A valid OpenAPI JSON/YAML file.

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
- No fake server URLs if production domain is unknown. Use placeholders.

## QA checklist

- [ ] Valid OpenAPI 3.1 syntax.
- [ ] `operationId` is defined and unique.
- [ ] GPT compatibility verified.

## Common mistakes to avoid

- Using OpenAPI 2.0/Swagger syntax.
- Missing server URLs.

## Final response format

Output validation results and confirm file updates.

# API Route Builder

## Purpose

Create deterministic API route logic, typically for Next.js App Router.

## When to use this skill

- When creating endpoints for GPT Actions or frontend data fetching.

## When not to use this skill

- For purely static features.

## Inputs Codex should collect

- Endpoint requirements.
- Input parameters.

## Files and folders this skill may touch

- `app/api/**/route.ts`

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

1. Scaffold Next.js App Router `route.ts`.
2. Add robust input validation.
3. Return consistent JSON responses.
4. Implement error handling.
5. Adhere to safe public fetch rules.
6. Create unit/example fixture guidance.
7. Ensure no persistent storage is used unless explicitly requested.

## Output requirements

A secure, robust API route file.

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
- No sensitive logging. No API keys in code.

## QA checklist

- [ ] Input validation exists.
- [ ] Proper JSON error responses.
- [ ] No secrets hardcoded.

## Common mistakes to avoid

- Forgetting to handle CORS/OPTIONS.
- Missing validation for required fields.

## Final response format

Confirm the route logic and provide an example curl command to test.

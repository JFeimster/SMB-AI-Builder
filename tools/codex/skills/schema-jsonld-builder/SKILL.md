# Schema JSON-LD Builder

## Purpose

Create schema files and inline JSON-LD for SEO enhancements.

## When to use this skill

- When adding structured data to static or Next.js pages.

## When not to use this skill

- For internal non-public pages.

## Inputs Codex should collect

- Page metadata.
- Entity information.

## Files and folders this skill may touch

- `pages/seo/*.html`
- `pages/seo/workflows/*.html`
- `pages/site/*.html`

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

1. Determine the schema type (SoftwareApplication, WebApplication, Article, FAQPage, BreadcrumbList).
2. Draft valid JSON.
3. Use Organization schema only if real data exists.
4. Use placeholder rules for production domains if necessary.
5. Inject the schema into the target HTML or React component.

## Output requirements

Valid inline JSON-LD script blocks.

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
- No fake aggregateRating. No fake reviews.

## QA checklist

- [ ] JSON is valid.
- [ ] Schema type matches content.
- [ ] No fake review/rating data included.

## Common mistakes to avoid

- Syntax errors in JSON block.
- Including aggregateRating without real data.

## Final response format

Provide the generated JSON-LD for review and confirm injection.

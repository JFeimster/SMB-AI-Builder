# SEO Page Builder

## Purpose

Create useful, search-intent-aligned SEO guide pages that provide genuine value and adhere to schema standards.

## When to use this skill

- When building general SEO content.
- When creating resource guides.

## When not to use this skill

- For workflow-specific audit pages (use `workflow-seo-page-builder`).
- For comparison pages.

## Inputs Codex should collect

- Target keyword.
- User intent.
- Page topic.

## Files and folders this skill may touch

- `pages/seo/*.html`

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

1. Align content with search intent to create a helpful guide.
2. Draft unique title and meta description.
3. Ensure exactly one H1 and descriptive H2s.
4. Add a practical FAQ section (4-6 questions).
5. Include Article JSON-LD and FAQPage JSON-LD where useful.
6. Add internal links.
7. Include a CTA band near the end.

## Output requirements

A helpful SEO HTML page with valid JSON-LD schema.

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
- No thin doorway pages. No keyword stuffing.

## QA checklist

- [ ] Intent is helpful and not just fluff.
- [ ] JSON-LD is valid.
- [ ] FAQ section included.
- [ ] No keyword stuffing.

## Common mistakes to avoid

- Creating a boilerplate "thin" page.
- Adding fake review schema.
- Forgetting internal links.

## Final response format

Confirm page creation and summarize the SEO metadata implemented.

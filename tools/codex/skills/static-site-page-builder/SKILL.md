# Static Site Page Builder

## Purpose

Create and edit static HTML product and site pages, adhering strictly to neobrutalist design and semantic HTML constraints without external frameworks.

## When to use this skill

- When building landing pages.
- When creating public tools pages.

## When not to use this skill

- For React/Next.js components.
- For SEO guide pages (use `seo-page-builder`).

## Inputs Codex should collect

- Page content and intent.
- Target file path.

## Files and folders this skill may touch

- `pages/site/*.html`
- `pages/tools/*.html`
- `styles.css`
- `script.js`

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

1. Draft semantic HTML with one H1 and proper landmarks (header, main, footer).
2. Include unique metadata.
3. Use mobile-first neobrutalist design logic.
4. Include a CTA band.
5. Maintain header/nav/footer consistency with existing static pages.
6. Verify relative CSS/JS paths.
7. Do not use external frameworks unless already present.

## Output requirements

A complete, valid static HTML file.

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
- No fake proof claims on the product page.

## QA checklist

- [ ] Exactly one H1.
- [ ] Relative paths to CSS/JS are accurate.
- [ ] No external frameworks added.
- [ ] CTA band is present.

## Common mistakes to avoid

- Adding Tailwind or Bootstrap.
- Breaking relative asset links.
- Forgetting the mobile-first layout.

## Final response format

Confirm the page creation and provide a link/path to the file.

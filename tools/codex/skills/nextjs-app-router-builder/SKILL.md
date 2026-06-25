# Next.js App Router Builder

## Purpose

Create or edit dynamic routes and pages in the Next.js App Router.

## When to use this skill

- When building dynamic UI, server components, or advanced interactions.

## When not to use this skill

- For static marketing pages.
- For duplicating existing plain HTML static pages.

## Inputs Codex should collect

- Route structure.
- Component functionality.

## Files and folders this skill may touch

- `app/layout.tsx`
- `app/page.tsx`
- `app/**/page.tsx`
- `app/globals.css`
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

1. Scaffold the Next.js page or layout.
2. Use simple components and avoid unnecessary dependencies.
3. Keep server/client boundaries clear (e.g., `'use client'`).
4. Do not duplicate static HTML pages unless requested.
5. Maintain the neobrutalist design system via CSS/Tailwind if configured.

## Output requirements

Valid, clean Next.js App Router files.

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

- [ ] Server/client boundaries respected.
- [ ] No duplicate static pages.
- [ ] No unnecessary dependencies.

## Common mistakes to avoid

- Mixing client hooks in server components.
- Over-engineering simple pages.

## Final response format

List created routes and confirm component architecture.

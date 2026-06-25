# Accessibility Audit

## Purpose

Run an accessibility QA pass over pages to ensure basic standard compliance.

## When to use this skill

- Before deploying new static or Next.js pages.

## When not to use this skill

- For API routes.

## Inputs Codex should collect

- Target HTML/TSX files.

## Files and folders this skill may touch

- Read-only across UI files, minor edits if requested.

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

1. Check for semantic landmarks (header, main, footer).
2. Verify exactly one H1 per page and proper heading order.
3. Check links, buttons, and form labels.
4. Ensure visible focus states and keyboard navigation support.
5. Verify color contrast and alt text for images.
6. Check that FAQ/accordions expose their state properly.
7. Generate final accessibility report.

## Output requirements

An accessibility report and an action plan for fixes.

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

- [ ] One H1 checked.
- [ ] Alt text verified.
- [ ] Focus states present.
- [ ] Accordion ARIA states correct.

## Common mistakes to avoid

- Skipping focus state checks.
- Using divs for buttons without keyboard event handlers.

## Final response format

Output a Pass/Fail report with necessary remediations.

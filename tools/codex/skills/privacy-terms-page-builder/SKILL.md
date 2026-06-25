# Privacy Terms Page Builder

## Purpose

Create accurate privacy and terms pages reflecting the actual data handling practices of the application.

## When to use this skill

- When drafting legal/privacy pages for the website or GPT.

## When not to use this skill

- For giving actual legal advice.

## Inputs Codex should collect

- App functionality details.
- Data storage mechanisms.

## Files and folders this skill may touch

- `pages/site/privacy.html`
- `pages/site/terms.html`

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

1. Detail no-auth Action data handling.
2. Clearly state no persistent storage is used unless implemented.
3. Add public website fetch disclaimers.
4. Explain user-submitted workflow data handling.
5. Add sensitive data warnings.
6. Include 'Not legal advice' disclaimer.
7. Use placeholders for owner/contact/domain where needed.

## Output requirements

Drafted privacy and terms HTML pages.

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
- These pages are drafts and do not constitute legal advice.

## QA checklist

- [ ] No-auth handling explained.
- [ ] No persistent storage verified.
- [ ] Placeholders inserted for legal contacts.

## Common mistakes to avoid

- Claiming GDPR compliance without legal backing.
- Leaving out the non-legal advice disclaimer.

## Final response format

Confirm page creation and list the placeholders requiring user input.

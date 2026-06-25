# Partner Embed Builder

## Purpose

Create embeddable widgets for partners/affiliates to use on their sites.

## When to use this skill

- When building an iframe or script embed for a partner.

## When not to use this skill

- For standard site pages.

## Inputs Codex should collect

- Partner configuration.
- Referral parameters.

## Files and folders this skill may touch

- `embeds/*.html`
- `embeds/*.css`
- `embeds/*.js`
- `embeds/*.json`
- `embeds/EMBED-README.md`

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

1. Design for full embed max: 940px wide by 1200px tall.
2. Provide compact embed guidance if needed.
3. Implement iframe embed and script embed patterns.
4. Handle partner config and referral parameters cleanly.
5. Add safety disclaimer.
6. Do not duplicate the whole landing page.

## Output requirements

Embed-safe HTML/CSS/JS and documentation.

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
- Do not imply official partner relationships unless configured. No fake affiliate claims.

## QA checklist

- [ ] Max dimensions respected.
- [ ] Referral parameters handled safely.
- [ ] Safety disclaimer included.

## Common mistakes to avoid

- Making the embed too large.
- Including heavy site-wide scripts in the embed.

## Final response format

Provide instructions on how partners can implement the embed.

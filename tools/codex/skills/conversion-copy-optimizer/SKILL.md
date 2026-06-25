# Conversion Copy Optimizer

## Purpose

Improve copy for clarity, trust, and conversion, ensuring adherence to the project's direct, anti-hype voice.

## When to use this skill

- When refining landing pages or tools.
- When reviewing drafted content.

## When not to use this skill

- For technical documentation.

## Inputs Codex should collect

- Existing copy.
- Target audience.

## Files and folders this skill may touch

- `pages/site/*.html`
- `pages/seo/**/*.html`

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

1. Remove generic AI/SaaS language and banned phrases.
2. Improve hero clarity and CTA specificity.
3. Add safety stances and disclaimers where relevant.
4. Strengthen operator-friendly tone.
5. Preserve factual accuracy without inventing proof.
6. Provide a before/after rewrite pattern for review.

## Output requirements

Optimized copy applied to the files.

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
- Do not invent proof. Maintain factual accuracy.

## QA checklist

- [ ] Banned phrases removed.
- [ ] Tone is direct and no-BS.
- [ ] Safety stance included.

## Common mistakes to avoid

- Over-promising automation results.
- Using hype words like 'revolutionize' or 'seamless'.

## Final response format

Provide the before/after copy changes.

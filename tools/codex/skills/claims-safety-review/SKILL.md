# Claims Safety Review

## Purpose

Review copy and pages for overreach, fake proof, and sensitive workflow compliance.

## When to use this skill

- As a final check before publishing pages that mention automation outcomes or sensitive business areas.

## When not to use this skill

- For reviewing CSS/styling.

## Inputs Codex should collect

- Content to review.

## Files and folders this skill may touch

- Read-only across content files.

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

1. Scan for fake proof (testimonials, metrics, logos).
2. Identify unsupported claims or competitor attacks.
3. Check for compliance/legal/financial overreach.
4. Ensure sensitive workflow rules are followed (human review checkpoints).
5. Verify missing disclaimers.
6. Generate final risk report.

## Output requirements

A risk report detailing any violations.

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

- [ ] Fake proof detection complete.
- [ ] Sensitive disclaimers verified.
- [ ] Competitor claims are fair.

## Common mistakes to avoid

- Missing implicit guarantees in the copy.
- Failing to flag workflows touching money or medical data.

## Final response format

Output the risk report and suggest safe rewrites.

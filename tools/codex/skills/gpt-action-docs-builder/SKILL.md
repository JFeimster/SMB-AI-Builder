# GPT Action Docs Builder

## Purpose

Document custom GPT Actions for users and developers to understand how to integrate with the endpoints.

## When to use this skill

- When a new API route is created for a GPT Action.
- To update documentation for existing actions.

## When not to use this skill

- For building the actual API route.

## Inputs Codex should collect

- OpenAPI schema.
- API route logic.

## Files and folders this skill may touch

- `docs/actions/*.md`
- `openapi/*.json`
- `examples/*.json`

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

1. Document the Action name, route, method, and authentication.
2. Document request/response shapes.
3. Reference the OpenAPI schema location.
4. List GPT Builder setup steps.
5. Add privacy/safety notes and no-auth limitations.
6. Include example requests and JSON fixtures.

## Output requirements

A complete markdown documentation file for the action.

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
- Clearly state data handling and privacy limitations for no-auth endpoints.

## QA checklist

- [ ] Request and response schemas match OpenAPI.
- [ ] Setup steps are clear.
- [ ] Privacy notes are included.

## Common mistakes to avoid

- Providing incorrect JSON examples.
- Omitting authentication requirements.

## Final response format

Confirm docs creation and provide a summary of the action capabilities.

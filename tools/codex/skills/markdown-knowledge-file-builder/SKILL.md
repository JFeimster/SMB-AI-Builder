# Markdown Knowledge File Builder

## Purpose

Create clean, readable Markdown files intended for the Custom GPT's knowledge base.

## When to use this skill

- When creating playbooks, templates, checklists, scorecards, or SOPs for the GPT to reference.

## When not to use this skill

- For source code or internal technical docs.

## Inputs Codex should collect

- Domain knowledge.
- Desired format (checklist, playbook).

## Files and folders this skill may touch

- `docs/knowledge-files/*.md`
- `docs/knowledge-files/*.json`

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

1. Structure the document with clear, hierarchical headings.
2. Format as a playbook, template, checklist, scorecard, safety guide, or prompt library.
3. Keep content source-of-truth friendly and factual.
4. Remove any fluff; keep it dense and readable by an LLM.
5. Avoid fake claims or hallucinated facts.

## Output requirements

A dense, well-structured Markdown knowledge file.

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

- [ ] Headings are clear.
- [ ] No fake claims included.
- [ ] Formatted for easy LLM parsing.

## Common mistakes to avoid

- Writing long narrative paragraphs instead of bullet points.
- Including dynamic references that the GPT cannot resolve.

## Final response format

Confirm file creation and summarize the knowledge added.

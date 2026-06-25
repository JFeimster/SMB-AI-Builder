# Repo Orientation

## Purpose

Help Codex understand the repo structure before making changes. It ensures you know whether you are working in the static HTML structure or Next.js App Router structure before making assumptions.

## When to use this skill

- Before starting a new task.
- When task scope is ambiguous.
- To verify the location of global assets.

## When not to use this skill

- For executing file edits.
- If the target file path is already explicitly known and isolated.

## Inputs Codex should collect

- User task description.

## Files and folders this skill may touch

- None (Read-only tool)

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

1. Read source-of-truth files first (`JULES.md`, `jules.json`).
2. Identify static vs Next.js structure.
3. Identify locations for docs, prompts, tools, actions, examples, openapi, embeds, and SEO folders.
4. Detect whether root `styles.css` and `script.js` exist before referencing them.
5. Summarize repo assumptions before editing.

## Output requirements

A brief summary of the repo layout and the verified paths.

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
- Do not restructure the repo without explicit instruction.

## QA checklist

- [ ] Source-of-truth files read.
- [ ] Static vs Next.js boundary identified.
- [ ] Root CSS/JS verified.

## Common mistakes to avoid

- Restructuring the repo without asking.
- Assuming a Next.js environment when the task is for a static page.

## Final response format

Summarize findings and state the next planned skill/action.

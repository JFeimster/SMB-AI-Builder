# tool-docs-generation

## Purpose
Create documentation for tool layers.

## When to use this skill
- When expanding `tools/` with new directories or modifying existing ones (e.g., creating a new agent layer or skill).

## When not to use this skill
- When creating user-facing site content or standard README updates for the main repo (unless specifically instructed).

## Inputs Jules should collect
- Name of the tool/layer.
- Purpose of the tool/layer.
- Required file structures (e.g., skill files, README, implementation guides).

## Files and folders this skill may touch
- `tools/*/README.md`
- `tools/*/SKILL.md`
- `tools/*/implementation-guides/`
- `tools/*/qa-docs/`

## Source-of-truth files to read first
- JULES.md
- jules.json
- jules.qa.md
- jules.style.md
- tools/jules/*

## Process
1. Determine the structure needed for the tool documentation.
2. Draft a clear, descriptive README file outlining purpose, usage, and structure.
3. If documenting a skill, generate a `SKILL.md` using the standard structure (Purpose, Inputs, Process, Output, etc.).
4. Draft any necessary implementation guides or QA checklists requested.
5. Save the generated files to the designated tool directory.

## Output requirements
- Professionally formatted Markdown files detailing the tool's usage and rules.

## Safety and claims rules
- This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Do not invent fake testimonials, fake reviews, fake ratings, fake logos, fake case studies, fake user counts, fake revenue numbers, fake guarantees, fake compliance claims, fake partner relationships, fake integrations, or unsupported competitor claims.

## QA checklist
- [ ] README file created/updated.
- [ ] SKILL file follows standard structure (if applicable).
- [ ] Guides and QA docs are practical and actionable.

## Common mistakes to avoid
- Failing to use the mandated `SKILL.md` structure when documenting new skills.
- Creating overly verbose documentation that is hard for an agent to parse.

## Final response format
Provide a summary of the documentation files created, including their paths and the primary focus of each.

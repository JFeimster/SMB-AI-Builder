# Research Synthesis

## Purpose
Summarize user-provided or repo-provided material without inventing facts.

## When to use this skill
Use when analyzing multiple knowledge files, audit results, or user inputs to create a cohesive summary.

## When not to use this skill
Do not use to generate novel claims or external research not provided in the inputs.

## Inputs Claude should collect
- Raw notes, audit logs, or source documents.

## Files and folders this skill may touch
- `docs/knowledge-files/` (or strictly returning output to the user).

## Source-of-truth files to read first
- `JULES.md`

## Process
1. Read all provided materials carefully.
2. Extract key themes, data points, and actionable insights.
3. Synthesize the findings into a structured summary (e.g., bullet points, tables).
4. Strictly avoid adding any outside information or assumed facts.

## Output requirements
- A concise, accurate summary.
- Clear distinction between provided facts and suggested next steps.

## Safety and claims rules
This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
Do not invent fake data, partners, or proof.

## QA checklist
- Is every point directly traceable to the source material?
- Is the tone objective and anti-hype?

## Common mistakes to avoid
- Hallucinating statistics or 'best practices' not present in the source material.
- Over-promising the results of the synthesized findings.

## Final response format
A structured markdown summary.

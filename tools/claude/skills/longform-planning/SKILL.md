# Longform Planning

## Purpose
Create strategy docs, implementation plans, task breakdowns, and phased roadmaps.

## When to use this skill
Use when a user requests a comprehensive plan, roadmap, or task breakdown for a workflow or automation project.

## When not to use this skill
Do not use for generating final code or short copy snippets.

## Inputs Claude should collect
- User's business objective.
- Current workflow state.
- Target automation state.

## Files and folders this skill may touch
- `docs/knowledge-files/` (for creating markdown playbooks or plans).

## Source-of-truth files to read first
- `README.md`
- `tools/jules/jules-copy-rules.md`

## Process
1. Analyze the objective.
2. Break the objective into logical phases (e.g., Audit, Clean Up, Pilot, Rollout).
3. Detail specific, actionable tasks for each phase.
4. Apply safety and risk assessments to sensitive steps.

## Output requirements
- Structured markdown with clear headings.
- Phased timelines or logical sequences.
- Direct, actionable steps (no fluff).

## Safety and claims rules
This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
Never guarantee automation success or specific ROI.

## QA checklist
- Is the plan practical and operator-friendly?
- Are safety boundaries clearly marked for sensitive steps?
- Is the tone anti-hype?

## Common mistakes to avoid
- Recommending full automation for broken workflows instead of a cleanup phase first.
- Using buzzwords like 'revolutionize' or 'seamless'.

## Final response format
A markdown document containing the strategy, phased roadmap, and task breakdown.

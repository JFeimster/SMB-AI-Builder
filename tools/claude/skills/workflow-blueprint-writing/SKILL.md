# Workflow Blueprint Writing

## Purpose
Write audit outputs, readiness scorecards, workflow maps, automation plans, and agent blueprints.

## When to use this skill
Use when converting a user's raw process into a structured, executable blueprint or plan.

## When not to use this skill
Do not use for general content writing or vague brainstorming.

## Inputs Claude should collect
- User's current process steps.
- Identified pain points.
- Desired outcome.

## Files and folders this skill may touch
- `docs/knowledge-files/` (or direct output to user).

## Source-of-truth files to read first
- `README.md`
- `JULES.md`

## Process
1. Analyze the workflow for automation readiness.
2. Map the 'As-Is' and 'To-Be' states.
3. Detail the exact triggers, actions, and human-in-the-loop checkpoints.
4. Assign a readiness score and risk classification.

## Output requirements
- Highly structured markdown (tables, step-by-step lists).
- Explicit definitions of human review steps.

## Safety and claims rules
This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
Never automate high-risk decisions without a qualified human review checkpoint.

## QA checklist
- Are the human-in-the-loop checkpoints clearly defined?
- Is the blueprint practical and ready for a pilot?

## Common mistakes to avoid
- Recommending full end-to-end automation without testing.
- Overlooking exceptions and edge cases in the workflow map.

## Final response format
A comprehensive markdown blueprint document.

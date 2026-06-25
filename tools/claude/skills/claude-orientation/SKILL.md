# Claude Orientation

## Purpose
Explain how Claude should read repository context before writing any content or code.

## When to use this skill
Use this skill at the beginning of any new task to ensure full alignment with project rules and existing context.

## When not to use this skill
Do not use this if the task requires immediate output without needing repository context (which is rare).

## Inputs Claude should collect
- The specific task or user request.
- Any provided constraints or constraints from previous turns.

## Files and folders this skill may touch
- None (Read-only skill).

## Source-of-truth files to read first
- `JULES.md`
- `jules.json`
- `tools/jules/jules-copy-rules.md`
- `tools/jules/jules-seo-rules.md`
- `README.md`

## Process
1. Identify the requested task.
2. Locate and read the relevant source-of-truth files.
3. Analyze the constraints, voice, and rules applicable to the task.
4. Formulate an execution plan based on the gathered context.

## Output requirements
- A clear acknowledgment of the rules read.
- A brief summary of constraints applying to the task.

## Safety and claims rules
This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
Do not invent fake proof, fake customer stories, fake ratings, fake testimonials, fake revenue claims, fake partners, fake guarantees, or fake compliance claims.

## QA checklist
- Did you read `JULES.md`?
- Did you read `jules.json`?
- Are you aware of the forbidden claims and safety rules?

## Common mistakes to avoid
- Skipping context reading and assuming standard AI answers.
- Ignoring the neobrutalist, anti-hype tone constraints.

## Final response format
A short markdown confirmation listing the rules absorbed and readiness to proceed.

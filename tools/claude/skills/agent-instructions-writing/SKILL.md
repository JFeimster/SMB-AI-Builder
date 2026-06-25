# Agent Instructions Writing

## Purpose
Write GPT/agent instructions, guardrails, output formats, and test prompts.

## When to use this skill
Use when defining the behavior and rules for a new custom GPT or AI agent.

## When not to use this skill
Do not use for standard operating procedures intended only for humans.

## Inputs Claude should collect
- The agent's purpose.
- Required guardrails and safety constraints.
- Desired output formats.

## Files and folders this skill may touch
- `docs/knowledge-files/`

## Source-of-truth files to read first
- `README.md`
- `JULES.md`

## Process
1. Define the agent's core persona and goal.
2. List strict guardrails (what the agent must never do).
3. Define the step-by-step process the agent should follow.
4. Provide examples of required output formats.

## Output requirements
- Comprehensive system prompt or instructions document.
- Clear, testable guardrails.

## Safety and claims rules
This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
Instructions must explicitly forbid the agent from generating fake proof or providing certified professional advice.

## QA checklist
- Are the guardrails comprehensive?
- Is the sensitive workflow disclaimer included in the agent's rules?

## Common mistakes to avoid
- Allowing the agent too much creative freedom.
- Failing to specify fallback behaviors when the agent encounters out-of-scope requests.

## Final response format
A markdown document containing the complete agent instructions.

# Prompt Engineering

## Purpose
Create single-block prompts for Jules, Codex, Cursor, Copilot, Claude, Vercel, SEO, and embeds.

## When to use this skill
Use when creating or updating prompt libraries or generating specific instructions for other AI agents.

## When not to use this skill
Do not use for general content writing or user-facing copy.

## Inputs Claude should collect
- The target agent/tool.
- The specific task the prompt must accomplish.

## Files and folders this skill may touch
- `prompts/jules/`
- `docs/knowledge-files/`

## Source-of-truth files to read first
- `JULES.md`
- `jules.json`

## Process
1. Identify the target tool's strengths and limitations.
2. Draft a clear, single-block prompt with explicit constraints and goals.
3. Incorporate the required voice, tone, and safety rules into the prompt instructions.

## Output requirements
- A well-structured, precise prompt block.
- Clear input and output expectations within the prompt.

## Safety and claims rules
This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
The prompt must instruct the agent to avoid fake claims.

## QA checklist
- Is the prompt clear and unambiguous?
- Does it enforce the anti-hype and safety rules?

## Common mistakes to avoid
- Writing vague or overly complex prompts.
- Forgetting to include the safety disclaimer requirement in the prompt.

## Final response format
A markdown file or block containing the prompt text.

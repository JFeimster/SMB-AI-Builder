# prompt-generation

## Purpose
Create reusable copy/paste prompts for Jules, Codex, Cursor, Claude, Copilot, Vercel, PowerShell, SEO, and embeds.

## When to use this skill
- When the user needs a new prompt added to `prompts/jules/` or another tools directory.
- When generating system prompts or agent instructions.

## When not to use this skill
- When writing standard documentation (use `tool-docs-generation`).
- When writing site copy.

## Inputs Jules should collect
- The target tool or agent (e.g., Cursor, Codex).
- The task the prompt is designed to accomplish.

## Files and folders this skill may touch
- `prompts/jules/`
- Relevant `.md` files in `tools/`

## Source-of-truth files to read first
- JULES.md
- jules.json
- jules.qa.md
- jules.style.md
- tools/jules/*

## Process
1. Determine the goal of the prompt.
2. Format the prompt as a single, cohesive block (avoid broken canvas or inline fragmentation).
3. Include references to relevant source-of-truth files within the prompt (e.g., "Refer to `JULES.md` for voice").
4. Include final QA steps within the prompt instruction itself so the receiving agent verifies its work.
5. Save the prompt to the correct directory.

## Output requirements
- A cleanly formatted, single-block prompt saved as an `.md` or `.txt` file.

## Safety and claims rules
- This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Do not invent fake testimonials, fake reviews, fake ratings, fake logos, fake case studies, fake user counts, fake revenue numbers, fake guarantees, fake compliance claims, fake partner relationships, fake integrations, or unsupported competitor claims.

## QA checklist
- [ ] Prompt is a single, unbroken block.
- [ ] Prompt includes source-of-truth file references.
- [ ] Prompt includes QA steps for the receiving agent.

## Common mistakes to avoid
- Fragmenting prompts into multiple disjointed sections that agents struggle to copy.
- Omitting references to standard rules like `JULES.md` or `copy-rules.md`.

## Final response format
Output the path where the prompt was saved and provide a brief preview of its contents.

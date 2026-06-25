# prompt-file-editing

## Purpose
Safely edit AI system prompts, builder instructions, and skill definitions.

## When to use this skill
When modifying files in the `prompts/` directory or skill definitions in `tools/**/skills/**`.

## When not to use this skill
When writing general project documentation or codebase logic.

## Inputs Cursor should collect
- Target prompt file.
- Current constraints and variables defined in the prompt.
- Desired behavioral change.

## Files and folders this skill may touch
- `prompts/**`
- `tools/**/skills/**`

## Source-of-truth files to read first
- `README.md`
- `JULES.md`
- `tools/jules/jules.json`

## Process
1. Analyze the existing prompt structure and variables.
2. Draft the modification maintaining single-block prompt formatting where required.
3. Ensure the prompt modification adheres to the anti-hype, operator-friendly voice.
4. Verify safety constraints (e.g., sensitive workflow disclaimers) are preserved.
5. Apply the edits cleanly.

## Output requirements
A precisely edited prompt file that maintains structural integrity and behavioral constraints.

## Safety and claims rules
- Prompts must explicitly instruct the AI not to invent fake proof, ratings, or claims.
- Prompts must maintain the direct, safety-aware voice.

## QA checklist
- [ ] Single-block prompt formatting preserved.
- [ ] No regression in safety instructions.
- [ ] Variables correctly formatted and escaped.

## Common mistakes to avoid
- Breaking Markdown formatting inside prompt blocks.
- Removing safety guardrails when shortening prompts.

## Final response format
"Prompt file successfully updated and safety constraints verified."

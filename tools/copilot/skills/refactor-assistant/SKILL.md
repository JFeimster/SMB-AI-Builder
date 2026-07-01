# refactor-assistant

## Purpose
To assist in safe, targeted refactoring of existing code to improve readability, performance, or typing, without executing broad rewrites that alter fundamental behavior.

## When to use this skill
- When breaking down large functions into smaller, testable units.
- When improving TypeScript typings.
- When cleaning up complex logic or removing redundant code.

## When not to use this skill
- When requested to rewrite entire directories or architectural patterns.
- When changing the deterministic output of core scoring logic.

## Inputs Copilot should collect
- The specific code block or file to be refactored.
- The goal of the refactor (e.g., "improve readability", "add strict types", "reduce cyclomatic complexity").
- Existing tests to ensure behavior remains consistent.

## Files and folders this skill may touch
- Any source file being refactored (primarily `lib/`, `app/`, `scripts/`).

## Source-of-truth files to read first
- `README.md` (to align with architectural constraints).
- Associated `.test.ts` files.

## Process
1. Analyze the existing code and its inputs/outputs.
2. Identify areas for improvement based on the stated goal.
3. Propose isolated, incremental changes rather than sweeping rewrites.
4. Ensure the refactored code maintains strict typing and deterministic behavior.
5. Provide a brief explanation of why the refactor improves the code.

## Output requirements
- Refactored code block.
- Maintained or improved TypeScript definitions.
- Preservation of original functionality.

## Security and safety rules
- Do not introduce new external dependencies during a refactor.
- Ensure error handling and input validation are preserved or strengthened, never removed.

## QA checklist
- [ ] Is the scope of the refactor limited and targeted?
- [ ] Does the code remain deterministic?
- [ ] Are typings strict?
- [ ] Are existing error handling mechanisms intact?

## Common mistakes to avoid
- Changing the public API (function signature) of a utility without updating its callers.
- Inadvertently altering the scoring logic of an audit or ranker function.

## Final response format
A code block showing the refactored logic, followed by a concise summary of the changes made.

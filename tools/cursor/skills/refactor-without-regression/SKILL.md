# refactor-without-regression

## Purpose
Safely refactor existing code while preserving original behavior and preventing regressions.

## When to use this skill
When cleaning up code, renaming variables, extracting functions, or improving performance without changing functional outcomes.

## When not to use this skill
When implementing new features or changing the expected output of a function.

## Inputs Cursor should collect
- Code block to be refactored.
- Current behavior expectations.
- All references and imports to the refactored code.

## Files and folders this skill may touch
- Any file in the repository slated for refactoring.

## Source-of-truth files to read first
- `README.md`
- `JULES.md`

## Process
1. Understand the current behavior and logic of the target code.
2. Formulate a refactoring plan that avoids broad destructive changes.
3. Verify imports and usage across the repository to ensure references are updated correctly.
4. Apply the refactor, strictly avoiding unnecessary rewrites of stable code.
5. Review the diff to confirm behavior is preserved.

## Output requirements
Cleaned up code that passes all existing functionality checks with zero regressions.

## Safety and claims rules
- Ensure business logic constraints are maintained.
- Do not introduce new functional claims during a purely structural refactor.

## QA checklist
- [ ] Behavior is preserved exactly.
- [ ] No unnecessary rewrites were made.
- [ ] Imports are verified.
- [ ] No broad destructive changes.

## Common mistakes to avoid
- Rewriting working code just for style preferences, introducing hidden bugs.
- Forgetting to update imports when moving or renaming a function.

## Final response format
"Refactoring complete. Verified imports and preserved behavior."

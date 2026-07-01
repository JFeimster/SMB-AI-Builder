# code-completion-guidance

## Purpose
To provide rules and boundaries for GitHub Copilot when suggesting inline code completions, ensuring safe, minimal, and secure code generation that aligns with project standards.

## When to use this skill
- During active typing or inline code suggestion requests.
- When auto-completing functions, logic blocks, or configuration objects.

## When not to use this skill
- When scaffolding entire new projects or directories.
- During broad structural refactors.

## Inputs Copilot should collect
- Current file context.
- Surrounding code block logic.
- Type definitions or imported schemas.

## Files and folders this skill may touch
All files open or actively being edited by the user, across the entire repository.

## Source-of-truth files to read first
- `tsconfig.json`
- `package.json`
- `.eslintrc` (if applicable)

## Process
1. Analyze the current file and the characters/lines preceding the cursor.
2. Determine the expected logical completion (e.g., closing a tag, completing a type, finishing a function).
3. Draft a suggestion that is as minimal as possible to achieve the immediate goal.
4. Verify the suggestion against security and safety rules.
5. Present the completion.

## Output requirements
- Concise, syntactically correct code completions.
- Adherence to the existing style, naming conventions, and indentation of the file.

## Security and safety rules
- NEVER suggest or autocomplete real secrets, API keys, passwords, or tokens.
- NEVER invent or suggest fake dependencies that do not exist in `package.json`.
- Do not add fake tracking IDs or personal identifying information (PII) to examples.

## QA checklist
- [ ] Is the suggestion minimal and focused?
- [ ] Are all variables and functions used actually defined or imported?
- [ ] Are there zero hardcoded credentials or mock secrets?

## Common mistakes to avoid
- Over-generating massive blocks of code when a single line is sufficient.
- Hallucinating imports from libraries not installed.
- Adding API keys like `sk-12345...` in placeholder code.

## Final response format
Inline code suggestion (standard Copilot UI).

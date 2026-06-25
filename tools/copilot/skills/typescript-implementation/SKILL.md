# typescript-implementation

## Purpose
To assist in writing, validating, and refactoring TypeScript utility functions, types, and scripts within the SMB AI Workflow & Agent Builder repository.

## When to use this skill
- When implementing core logic in `lib/*.ts`.
- When creating automation scripts in `scripts/*.ts`.
- When defining shared types or Zod schemas in `types/`.
- When building reusable functional logic.

## When not to use this skill
- When building React components (use `nextjs-component-builder`).
- When writing raw Next.js API route boilerplate (use `api-route-implementation`).

## Inputs Copilot should collect
- The intended logic or business requirement (e.g., "calculate ROI", "validate workflow score").
- Associated interfaces or schemas.
- Relevant source-of-truth files for deterministic logic constraints.

## Files and folders this skill may touch
- `lib/**/*.ts`
- `scripts/**/*.ts`
- `types/**/*.ts`

## Source-of-truth files to read first
- `tsconfig.json`
- `README.md` (for deterministic scoring rules)

## Process
1. Review the requirement and identify necessary types or interfaces.
2. Implement strict TypeScript definitions (no `any` unless absolutely necessary).
3. Write pure, deterministic functions whenever possible.
4. Implement robust input validation (e.g., checking bounds for readiness scores).
5. Ensure the code aligns with project formatting and structure.

## Output requirements
- Strongly typed TypeScript code.
- Exported functions and types that are easy to import.
- JSDoc comments for complex logic.

## Security and safety rules
- Do not implement stateful logic or database connections.
- Avoid external API calls within core utilities unless explicitly instructed; keep them pure.
- Do not log sensitive user data or PII in utility functions.

## QA checklist
- [ ] Are all types strictly defined?
- [ ] Is input validation present for core functions?
- [ ] Are there no unauthorized external dependencies?
- [ ] Is the logic deterministic?

## Common mistakes to avoid
- Defaulting to `any` types.
- Coupling core logic directly to framework-specific request/response objects (keep logic separated in `lib/`).
- Introducing side effects in otherwise pure calculation functions.

## Final response format
TypeScript code block with necessary imports, types, and the implemented function, optionally followed by a brief explanation.

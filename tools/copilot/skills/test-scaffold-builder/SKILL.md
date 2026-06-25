# test-scaffold-builder

## Purpose
To assist in generating robust test files and structures for API routes and core logic, ensuring code reliability without inventing fake environments.

## When to use this skill
- When creating tests in `tests/**`.
- When testing core utility logic from `lib/`.
- When setting up API route tests.

## When not to use this skill
- When generating the actual implementation code being tested.
- When creating documentation examples.

## Inputs Copilot should collect
- The target function or file to be tested.
- Edge cases and known limitations of the logic.
- Associated fixture files (if they exist).

## Files and folders this skill may touch
- `tests/**/*.test.ts`
- Associated testing configuration files.

## Source-of-truth files to read first
- `package.json` (to determine testing framework, e.g., Jest, Vitest).
- `tsconfig.json`.

## Process
1. Identify the core logic or API route to test.
2. Scaffold a basic test suite structure (`describe`, `it`/`test`).
3. Include setup and teardown logic if required.
4. Generate assertions for the "happy path" (basic validation).
5. Generate assertions for edge cases, missing inputs, and invalid formats.
6. Import and use appropriate example fixtures from `tests/fixtures/` or `examples/`.

## Output requirements
- Valid test file compatible with the project's testing framework.
- Clear, descriptive test names.
- Coverage of basic validation and edge cases.

## Security and safety rules
- Do not include real credentials or API keys in test files; use mock values strictly.
- Ensure tests do not accidentally execute side effects against external production services.

## QA checklist
- [ ] Are test names descriptive of the behavior being tested?
- [ ] Are edge cases and invalid inputs covered?
- [ ] Is there zero usage of real secrets?
- [ ] Do the tests utilize externalized fixtures where appropriate?

## Common mistakes to avoid
- Writing tests that only cover the happy path.
- Hardcoding complex mock data inside the test file instead of using fixtures.
- Testing implementation details instead of outputs.

## Final response format
A complete test file block with imports, structure, and individual test cases.

# Test Layer Deferral

The stale test PRs are not merged directly.

## Reason

The test PRs improve coverage but must land only after the test runner, imports, and action module names are stable.

## Deferred PRs

- #75 — validateAgentRequest tests
- #77 — Agent Blueprint Validator tests

## Required Before Rebuild

- Confirm package scripts for tests.
- Confirm test runner dependency.
- Confirm import paths.
- Confirm exported function names match route/OpenAPI docs.
- Confirm tests do not require generated artifacts.

## Next Safe Batch

Create one test PR after action modules are stable:

`Add action validator test suite`

Scope:

- tests for input validation
- tests for blueprint scoring
- tests for human-review flags
- npm script if needed
- no unrelated docs/site changes

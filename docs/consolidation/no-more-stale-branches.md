# No More Stale Branches

When multiple generated PRs depend on each other and drift from `main`, consolidate from current `main` instead of trying to merge the pile one by one.

## Policy

- Merge clean, small PRs quickly.
- Close stale/conflicted generated branches.
- Rebuild useful work in one clean consolidation branch.
- Split risky work into later focused PRs.

This branch follows that policy.

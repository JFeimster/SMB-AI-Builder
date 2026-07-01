# Branch Created By ChatGPT

This branch was created directly from current `main` using GitHub connector actions to avoid waiting on stale/conflicted PRs.

## Branch

`integration/connector-tooling-consolidation`

## Source Issue

#79 — Jules consolidation: connector/tooling PR cleanup from current main

## Notes

This branch does not attempt to preserve every line from the old PRs. It recreates a stable final-state foundation:

- public pages that should exist now
- docs that other files can link to safely
- prompt indexes that users can actually copy
- skill files using the existing `tools/{tool}/skills/{skill}/SKILL.md` pattern
- clean sitemap entries
- deferral docs for risky future batches

This is meant to be merged, then expanded in smaller follow-up PRs.

# Skill: Repo Structure Auditor

## Purpose

Audit a repo structure for static site, GPT support, connector docs, OpenAPI assets, tool-ops docs, and deployment readiness.

## Use When

Use this skill before adding large batches of generated files, merging stale PRs, or routing a repo to Jules/Codex for cleanup.

## Inputs Needed

- Repository URL
- Target branch
- Current file/folder tree
- Intended site architecture
- Open PR list when available
- Known deployment target

## Outputs

- Structure summary
- Missing folders/files
- Duplicate or stale paths
- Merge risk notes
- Recommended cleanup sequence
- Next PR plan

## Procedure

1. Identify root site assets and public page folders.
2. Identify tool-ops folders under `tools/`.
3. Identify docs, prompts, OpenAPI, and skills paths.
4. Check for duplicated concepts across folders.
5. Check whether public pages are in sitemap/navigation.
6. Flag stale branches and cross-linked PR dependencies.
7. Recommend a merge or consolidation sequence.

## Safety / Human Review

Do not delete files without a clear supersession path. Do not merge generated PRs that contain unresolved conflicts, broken links, fake live endpoint claims, or unsupported guarantees.

## Quality Checklist

- [ ] Public pages and internal tool docs are separated.
- [ ] Sitemap entries exist for public HTML pages.
- [ ] Skills live under `tools/{tool}/skills/{skill}/SKILL.md`.
- [ ] OpenAPI docs do not claim unsupported endpoints.
- [ ] Stale PRs are consolidated instead of stacked.

## Example Prompt

```text
Audit this repo structure and recommend what should be merged, rebuilt, closed, or moved. Prioritize static site utility, GPT support files, OpenAPI action readiness, and deployment safety.
```

## Related Tool Docs

- ../../../README.md
- ../../../../docs/consolidation/connector-tooling-consolidation.md

## Related Site Pages

- ../../../../pages/directories/connector-library.html
- ../../../../pages/directories/skills-library.html
- ../../../../pages/tools/connectors.html

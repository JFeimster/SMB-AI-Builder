# seo-orientation

## Purpose
To orient agents and users to the SEO folder structure, source-of-truth files, and project boundaries before executing SEO tasks for the SMB AI Workflow & Agent Builder.

## When to use this skill
- At the start of any SEO project.
- Before generating new SEO content, keyword maps, or metadata.
- When an agent needs to understand where to find or save SEO-related files.

## When not to use this skill
- When actively writing code or non-SEO copy.

## Inputs SEO should collect
- The current user request or task description.

## Files and folders this skill may touch
- None directly (read-only orientation).

## Source-of-truth files to read first
- `JULES.md`
- `jules.json`
- `jules.qa.md`
- `jules.style.md`
- `tools/jules/jules-seo-rules.md`
- `pages/seo-support/seo-keyword-map.md`
- `pages/seo-support/sitemap.xml`
- `pages/seo-support/robots.txt`
- `pages/seo-support/llms.txt`

## Process
1. Read the source-of-truth files to understand the project voice (Helpful, practical, anti-hype, search-intent aligned, operator-friendly).
2. Review the folder structure:
   - `pages/seo/`: Foundational SEO articles.
   - `pages/seo/workflows/`: Workflow audit SEO pages.
   - `pages/seo/comparisons/`: Balanced comparison pages.
   - `pages/seo-support/`: SEO keyword maps, JSON-LD, llms.txt.
   - Root: `sitemap.xml`, `robots.txt`.
3. Acknowledge forbidden SEO tactics (no thin doorway pages, keyword stuffing, fake review schema, etc.).

## Output requirements
- A clear summary of the SEO environment and constraints.

## SEO safety rules
- Do not modify source-of-truth files without explicit instructions.
- Adhere strictly to the anti-hype, operator-friendly voice.

## QA checklist
- [ ] Have all source-of-truth files been read?
- [ ] Are the folder structures understood?
- [ ] Are the forbidden SEO tactics acknowledged?

## Common mistakes to avoid
- Skipping the source-of-truth reading phase.
- Assuming standard SEO tactics (like fake reviews) apply here.

## Final response format
A brief confirmation that orientation is complete and the agent is ready to proceed with SEO tasks.

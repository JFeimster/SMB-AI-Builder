# jules-orientation

## Purpose
Teach Jules how to understand the repo before editing.

## When to use this skill
- When starting any new task within the repository.
- When evaluating the scope of requested changes.

## When not to use this skill
- When actively making code edits or writing content (use generation skills instead).

## Inputs Jules should collect
- Task description and scope.
- Requested paths.

## Files and folders this skill may touch
- `README.md`
- `tools/jules/`
- `.codex/`
- `.github/`

## Source-of-truth files to read first
- JULES.md
- jules.json
- jules.qa.md
- jules.style.md
- tools/jules/*

## Process
1. Read JULES.md and jules.json first to understand the overarching rules.
2. Detect whether the project uses static HTML or Next.js structure.
3. Identify relevant pages, prompts, docs, embeds, SEO docs, OpenAPI specs, tools, and examples.
4. Note existing dependencies and conventions without making any changes.
5. Do not restructure without explicit instruction from the user.

## Output requirements
- A clear understanding of the requested task and scope mapped against repository constraints.

## Safety and claims rules
- This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Do not invent fake testimonials, fake reviews, fake ratings, fake logos, fake case studies, fake user counts, fake revenue numbers, fake guarantees, fake compliance claims, fake partner relationships, fake integrations, or unsupported competitor claims.

## QA checklist
- [ ] Confirmed project structure (HTML vs Next.js).
- [ ] Read all necessary source-of-truth files.
- [ ] Mapped task to required folders/files.
- [ ] Verified no unauthorized restructuring is planned.

## Common mistakes to avoid
- Jumping into edits before reading source-of-truth files.
- Modifying repository structure without explicit permission.

## Final response format
Summarize files read, key rules acknowledged, structure detected, and readiness to proceed with task generation.

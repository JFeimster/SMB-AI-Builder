# jules-task-router

## Purpose
Route tasks to the right Jules skill.

## When to use this skill
- After reading the initial user request and confirming repository rules.
- When determining which skills are required to execute a specific task.

## When not to use this skill
- When you are already in the middle of executing a specific task and need technical guidance.

## Inputs Jules should collect
- The user's prompt/request.
- Relevant constraints.

## Files and folders this skill may touch
- None explicitly. Used for internal routing.

## Source-of-truth files to read first
- JULES.md
- jules.json
- jules.qa.md
- jules.style.md
- tools/jules/*

## Process
1. Analyze the user request.
2. Route Site pages to `page-generation` or `conversion-copy-pass`.
3. Route SEO pages, Workflow pages, and Comparison pages to `seo-generation`.
4. Route Embeds to `embed-generation`.
5. Route Prompt files to `prompt-generation`.
6. Route Tool docs to `tool-docs-generation`.
7. Route Accessibility tasks to `accessibility-pass`.
8. Route Conversion copy tasks to `conversion-copy-pass`.
9. Route Claims safety tasks to `claims-safety-pass`.
10. Always end task chains with `final-jules-qa`.

## Output requirements
- Selection of the correct sequential skills needed to complete the user's request.

## Safety and claims rules
- This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Do not invent fake testimonials, fake reviews, fake ratings, fake logos, fake case studies, fake user counts, fake revenue numbers, fake guarantees, fake compliance claims, fake partner relationships, fake integrations, or unsupported competitor claims.

## QA checklist
- [ ] Task accurately categorized.
- [ ] Relevant target skills selected.
- [ ] QA sequence (e.g. final-jules-qa) included.

## Common mistakes to avoid
- Skipping task routing and relying solely on general knowledge.
- Forgetting to queue up the `final-jules-qa` skill at the end of the routing plan.

## Final response format
State the identified routing path (e.g., "Routing task to `seo-generation` followed by `claims-safety-pass` and `final-jules-qa`.")

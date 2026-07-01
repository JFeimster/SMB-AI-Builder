# nextjs-editing

## Purpose
Edit Next.js App Router files following project conventions without introducing unnecessary complexity.

## When to use this skill
When modifying pages, layouts, styles, or components within the Next.js `app/` directory.

## When not to use this skill
When modifying static HTML pages or API routes.

## Inputs Cursor should collect
- Next.js App Router conventions.
- Current imports and dependencies in the target file.
- Style instructions from `app/globals.css`.

## Files and folders this skill may touch
- `app/page.tsx`
- `app/layout.tsx`
- `app/**/page.tsx`
- `app/globals.css`
- `components/**` (if present)

## Source-of-truth files to read first
- `README.md`
- `JULES.md`
- `tools/jules/jules.json`

## Process
1. Locate the correct `page.tsx` or `layout.tsx`.
2. Apply changes following App Router conventions (Server Components by default, Client Components only when hooks are needed).
3. Keep components simple.
4. Avoid introducing unnecessary external dependencies.
5. Style using existing conventions in `app/globals.css`.

## Output requirements
Clean, functional Next.js code following the App Router paradigm.

## Safety and claims rules
- Do not invent fake proof, fake integrations, fake deployment success, fake customers, fake ratings, fake reviews, or fake revenue claims.
- Voice must be direct, operator-friendly, anti-hype, and safety-aware.

## QA checklist
- [ ] No mixing of static HTML paths with App Router paths unless intentional.
- [ ] App Router conventions followed properly (e.g., proper use of `"use client"`).

## Common mistakes to avoid
- Overcomplicating components with unnecessary state.
- Adding heavy client-side libraries where server components would suffice.

## Final response format
"Next.js file edits completed successfully."

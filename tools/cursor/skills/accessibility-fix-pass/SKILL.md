# accessibility-fix-pass

## Purpose
Run a targeted pass over frontend files to ensure compliance with web accessibility standards.

## When to use this skill
When finalizing new pages, components, or UI elements, or when explicitly requested to fix accessibility issues.

## When not to use this skill
When modifying backend logic, APIs, or configuration files without UI output.

## Inputs Cursor should collect
- Target HTML or Next.js files.
- Current accessibility rules from `tools/jules/jules.json` and `tools/jules/style-guide.md`.

## Files and folders this skill may touch
- `pages/**/*.html`
- `app/**/*.tsx`
- `components/**/*.tsx`
- `styles.css` / `app/globals.css`

## Source-of-truth files to read first
- `README.md`
- `JULES.md`
- `tools/jules/style-guide.md`
- `tools/jules/qa-checklist.md`

## Process
1. Inspect the target file for semantic HTML structure.
2. Verify heading order (only one H1 per page, sequential H2s, H3s).
3. Ensure all meaningful images have descriptive `alt` text.
4. Ensure form inputs have associated `label`s.
5. Verify button labels are accessible and focus states are visible.
6. Apply necessary ARIA attributes only where native HTML falls short.

## Output requirements
Frontend code that passes fundamental accessibility checks without breaking layout.

## Safety and claims rules
- Do not invent fake proof, fake integrations, fake deployment success, fake customers, fake ratings, fake reviews, or fake revenue claims.
- Maintain operator-friendly voice in `alt` text and ARIA labels.

## QA checklist
- [ ] Visible focus states confirmed.
- [ ] Semantic HTML used appropriately.
- [ ] Labels exist for inputs.
- [ ] Alt text present for meaningful images.
- [ ] Heading order is logical.

## Common mistakes to avoid
- Overusing ARIA attributes instead of native semantic elements like `<nav>`, `<main>`, or `<button>`.
- Adding `alt` text to purely decorative images (they should use empty `alt=""`).

## Final response format
"Accessibility fix pass completed successfully."

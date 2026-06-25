# static-html-editing

## Purpose
Safely edit static HTML, CSS, and JS files while maintaining consistent layout, design, and styling logic.

## When to use this skill
When modifying the plain static site components (e.g., `index.html`, `pages/**/*.html`, `styles.css`, `script.js`).

## When not to use this skill
When working inside the Next.js `app/` directory or interacting with API routes.

## Inputs Cursor should collect
- Target HTML file and its depth relative to the root.
- Existing `styles.css` and `script.js` content.
- Design tokens from `tools/jules/style-guide.md`.

## Files and folders this skill may touch
- `index.html`
- `pages/**/*.html`
- `styles.css`
- `script.js`

## Source-of-truth files to read first
- `README.md`
- `JULES.md`
- `tools/jules/jules.json`
- `tools/jules/file-map.json`
- `tools/jules/style-guide.md`

## Process
1. Verify the depth of the HTML file to calculate correct relative paths to `styles.css` and `script.js`.
2. Apply changes using plain semantic HTML.
3. If styling is needed, use existing CSS classes from `styles.css` rather than adding inline styles or external frameworks.
4. Ensure exactly one H1 per page, accessible CTA links, visible focus states, and mobile-first layouts.

## Output requirements
Valid semantic HTML that references the root `styles.css` and `script.js` properly, adhering to the neobrutalist styling.

## Safety and claims rules
- Do not invent fake proof, fake integrations, fake deployment success, fake customers, fake ratings, fake reviews, or fake revenue claims.
- Voice must be direct, operator-friendly, anti-hype, and safety-aware.

## QA checklist
- [ ] Relative paths to CSS and JS are correct.
- [ ] Exactly one H1 present.
- [ ] No external styling frameworks added.
- [ ] Semantic HTML is used.

## Common mistakes to avoid
- Using incorrect relative paths for deeper nested pages in `pages/seo/workflows/`.
- Adding Tailwind or Bootstrap to files when `styles.css` is the standard.

## Final response format
"Static HTML edits completed and relative paths verified."

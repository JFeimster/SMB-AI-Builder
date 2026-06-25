# static-html-helper

## Purpose
To assist in editing, generating, and maintaining static HTML pages within the repository, ensuring semantic markup, accessibility, and correct relative pathing.

## When to use this skill
- When modifying legacy or pure static HTML pages (e.g., in `public/demo/` or `pages/`).
- When generating static workflow audit documentation.

## When not to use this skill
- When working within the Next.js `app/` directory (use `nextjs-component-builder`).

## Inputs Copilot should collect
- The target HTML file path.
- The content or structure to be added/modified.
- The depth of the file relative to the project root (crucial for linking).

## Files and folders this skill may touch
- `*.html` files throughout the repository (excluding Next.js build artifacts).

## Source-of-truth files to read first
- `styles/styles.css` (for class names).
- Repository guidelines on relative pathing and asset locations.

## Process
1. Write plain, semantic HTML5.
2. Calculate and preserve correct relative paths for stylesheets, scripts, and internal links based on the file's location.
3. Apply existing CSS classes; do not introduce external CSS frameworks.
4. Ensure exactly one `<h1>` tag exists per page.
5. Add appropriate accessibility attributes (ARIA, alt text).

## Output requirements
- Valid HTML5 markup.
- Correct relative links to assets.
- Accessible structure.

## Security and safety rules
- Do not include external tracking scripts or unsupported analytics.
- Ensure static pages do not expose private directory structures.

## QA checklist
- [ ] Is the HTML semantic and valid?
- [ ] Are all relative paths (`href`, `src`) correct based on file depth?
- [ ] Is there only one `<h1>`?
- [ ] Are accessibility standards met?

## Common mistakes to avoid
- Breaking relative paths when moving or creating nested files (e.g., using `/assets/` instead of `../../assets/`).
- Adding React/JSX syntax (`className`, self-closing div tags) in static `.html` files.

## Final response format
HTML code block, correctly indented and structured.

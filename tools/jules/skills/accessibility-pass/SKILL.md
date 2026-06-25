# accessibility-pass

## Purpose
Run accessibility QA.

## When to use this skill
- When reviewing a completed page before final submission.
- When an explicit accessibility audit is requested.

## When not to use this skill
- When generating the initial draft of a page (though accessibility should be kept in mind).

## Inputs Jules should collect
- The HTML or component file to review.
- The `accessibility-checklist.md` rules.

## Files and folders this skill may touch
- Any HTML file in `pages/`
- `styles.css`
- `script.js`

## Source-of-truth files to read first
- JULES.md
- jules.json
- jules.qa.md
- jules.style.md
- tools/jules/*

## Process
1. Scan the HTML for semantic landmarks (`<main>`, `<nav>`, `<footer>`, etc.).
2. Ensure there is exactly one `<h1>` tag and that heading order is logical.
3. Check that focus states are visible for all interactive elements (verifying CSS if needed).
4. Review color contrast to ensure legibility.
5. Verify keyboard navigation functionality conceptually (or via simulated DOM traversal if capable).
6. Ensure images have meaningful `alt` text and decorative images are hidden.

## Output requirements
- Corrections to HTML/CSS to fix accessibility issues, or a report of issues found.

## Safety and claims rules
- This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Do not invent fake testimonials, fake reviews, fake ratings, fake logos, fake case studies, fake user counts, fake revenue numbers, fake guarantees, fake compliance claims, fake partner relationships, fake integrations, or unsupported competitor claims.

## QA checklist
- [ ] Landmarks present.
- [ ] Focus states visible.
- [ ] Contrast meets guidelines.
- [ ] Keyboard navigation is logical.
- [ ] H1 exists and heading order is correct.

## Common mistakes to avoid
- Relying entirely on ARIA attributes instead of native semantic HTML.
- Trapping text in images.

## Final response format
Output a list of accessibility fixes applied or any warnings about issues that require manual intervention.

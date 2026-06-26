# Skill: Static Site Deploy Checker

## Purpose
Ensure a pure static HTML/CSS/JS site is correctly structured, linked, and configured for a Vercel deployment.

## Use When
- When preparing to deploy a plain static HTML project to Vercel.
- When validating relative paths, asset links, and structural integrity of static files.
- When troubleshooting 404s or missing assets on a deployed static site.

## Inputs Needed
- Any recent structural changes or new pages added.
- The root directory configuration if not standard.

## Outputs
- A validation report confirming all static assets are linked correctly and pages are formatted properly.
- A list of any broken links or incorrect paths fixed during the process.

## Procedure
1. Verify `index.html` exists in the root directory.
2. Check standard metadata, titles, and structural integrity of `index.html`.
3. Audit `pages/**/*.html` to ensure nested HTML pages are correctly formatted and have exactly one H1 per page.
4. Validate that all CSS, JS, and image references use correct relative paths based on directory depth.
5. Ensure all referenced public assets exist in their respective directories.
6. Confirm no absolute paths referencing local development environments.
7. Check that canonical links and open graph URLs use the correct, production absolute paths.

## Safety / Human Review
- Ensure no sensitive files (like `.git/` or `.env` backups) are accidentally included in the static deployment directory.
- Do not invent fake metrics or claims in static page content.
- Ensure all changes are strictly client-side with no server-side logic.

## Quality Checklist
- [ ] Is `index.html` present at the root?
- [ ] Are all relative paths for CSS, JS, and images correct across all nesting levels?
- [ ] Do all HTML pages have appropriate metadata and a single H1?
- [ ] Are canonical URLs using the correct production domain?

## Example Prompt
```
I have a static site that I want to deploy to Vercel. Can you check my index.html, relative paths for styles and assets, and make sure everything is ready for a static deployment?
```

## Related Tool Docs
- [Vercel Tool Docs](../../README.md)

## Related Site Pages
- [Vercel Pages](../../../../pages/tools/vercel)

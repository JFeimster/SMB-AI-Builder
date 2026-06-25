# Static Site Deploy

## Purpose
Ensure a pure static HTML/CSS/JS site is correctly structured, linked, and configured for a Vercel deployment.

## When to use this skill
- When preparing to deploy a plain static HTML project to Vercel.
- When validating relative paths, asset links, and structural integrity of static files.
- When troubleshooting 404s or missing assets on a deployed static site.

## When not to use this skill
- When deploying a Next.js or other framework-based application.
- When handling server-side logic or API routes.

## Inputs Jules should collect
- Any recent structural changes or new pages added.
- The root directory configuration if not standard.

## Files and folders this skill may touch
- `index.html`
- `pages/**/*.html`
- `styles.css`
- `script.js`
- Public assets (images, fonts)

## Source-of-truth files to read first
- `JULES.md`
- `vercel.json` (to verify static routing or rewrites)

## Process
1. **Audit `index.html`:**
   - Verify it exists in the root directory.
   - Check standard metadata, titles, and structural integrity.
2. **Audit `pages/**/*.html`:**
   - Ensure nested HTML pages are correctly formatted.
   - Verify that there is exactly one H1 per page.
3. **Check Relative Paths:**
   - Validate that all CSS (`styles.css`), JS (`script.js`), and image references use correct relative paths based on directory depth.
   - Example: From `pages/seo/index.html`, root CSS should be `../../styles.css`.
4. **Audit Assets:**
   - Ensure all referenced public assets exist in their respective directories.
   - Confirm no absolute paths referencing local development environments (e.g., `C:/` or `file:///`).
5. **Verify Canonical Links:**
   - Check that canonical links and open graph URLs use the correct, production absolute paths (e.g., `https://smb-ai-builder.vercel.app/...`).

## Output requirements
- A validation report confirming all static assets are linked correctly and pages are formatted properly.
- A list of any broken links or incorrect paths fixed during the process.

## Security and privacy rules
- Ensure no sensitive files (like `.git/` or `.env` backups) are accidentally included in the static deployment directory.
- Do not invent fake metrics or claims in static page content.

## QA checklist
- [ ] Is `index.html` present at the root?
- [ ] Are all relative paths for CSS, JS, and images correct across all nesting levels?
- [ ] Do all HTML pages have appropriate metadata and a single H1?
- [ ] Are canonical URLs using the correct production domain?

## Common mistakes to avoid
- Breaking nested page styles by using incorrect relative paths (e.g., `../styles.css` instead of `../../styles.css`).
- Leaving local absolute paths in `src` or `href` attributes.
- Missing `index.html` at the root, causing Vercel to fail to serve the site.

## Final response format
Provide a concise summary of the static file structure verification, highlighting any path corrections made to ensure seamless deployment.

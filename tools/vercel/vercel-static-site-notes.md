# Static Site Deployment Notes

If you are deploying the plain static HTML/CSS/JS version of this project on Vercel, adhere to these guidelines.

## Expected Files
A typical static deployment relies on these files existing relative to the root directory:
- `index.html`
- `styles.css`
- `script.js`
- `pages/`
- `embeds/`

## Build Settings
- **No Build Command Required:** For plain static hosting, Vercel generally does not need a build command (like `npm run build`). It serves the files directly.
- **Framework Preset:** If Vercel requires a framework preset, select "Other" or leave it blank to ensure it serves static assets properly.

## QA Requirements Post-Deployment
- Check that relative links work accurately after deployment.
- Check that nested pages (e.g., `pages/seo/workflows/...`) load root-level CSS and JS correctly by correctly pathing `../../`.
- Check that iframe pages located in `embeds/` are standalone and do not throw console errors missing parent page elements.
- Ensure absolutely no server-only features (e.g., server-side rendering, API routes) are assumed or called in the static files.
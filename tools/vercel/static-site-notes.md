# Static Site Deployment Notes

Notes and cautions for deploying the plain static HTML version of this project on Vercel.

## Expected Files
A static deployment usually involves these root files and folders:
- `index.html`
- `styles.css`
- `script.js`
- `pages/`
- `embeds/`

## Build Command
No build command is typically needed for plain static hosting. Vercel detects static files automatically. If Vercel requires settings, select the "Other" or default framework preset carefully to avoid expecting a build output directory.

## Deployment Checks
After deployment, explicitly check:
- That relative links work across all directory depths.
- That nested pages (`pages/seo/workflows/...`) load CSS and JS correctly.
- That iframe pages in `embeds/` render standalone correctly.
- That no server-only features (like Next.js API routes) are accidentally assumed to work in the plain static files.
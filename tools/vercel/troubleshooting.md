# Troubleshooting Guide

Common issues encountered when deploying on Vercel and how to fix them.

## Issue: CSS/JS not loading on nested pages
- **Symptom:** Page renders as plain HTML or interactions fail.
- **Likely Cause:** Relative paths in `<link>` or `<script>` tags are resolving incorrectly based on directory depth.
- **What to check:** Check the Network tab in DevTools for 404s on `.css` or `.js` files.
- **Fix:** Adjust relative paths (e.g., `../../../styles.css`) or use root-relative paths (`/styles.css`) if the site is always hosted at the domain root.

## Issue: iframe height too short
- **Symptom:** Partner embeds have scrollbars or content is cut off.
- **Likely Cause:** The embed container doesn't accommodate the required 940x1200 full embed constraint.
- **What to check:** Inspect the iframe attributes and parent container CSS.
- **Fix:** Ensure the provided iframe snippet sets `height="1200"` or uses responsive resizing logic.

## Issue: Embed CTA missing partner ref
- **Symptom:** Analytics show direct traffic instead of partner attribution.
- **Likely Cause:** UTMs or `ref` parameters were stripped or not included in the embed snippet.
- **What to check:** Check the CTA link URL inside the iframe.
- **Fix:** Update the partner's embed code to include the parameters documented in `analytics-notes.md`.

## Issue: 404 on static pages
- **Symptom:** Navigating to an `.html` file returns Vercel's 404 page.
- **Likely Cause:** File wasn't deployed, path typo, or cleanUrls routing mismatch.
- **What to check:** Ensure the file exists in the repo and paths are spelled correctly.
- **Fix:** Correct the link path.

## Issue: Wrong build preset
- **Symptom:** Build fails looking for a `package.json` that doesn't exist, or static files aren't served.
- **Likely Cause:** Vercel auto-detected the wrong framework.
- **What to check:** Project settings in Vercel > Build & Development Settings.
- **Fix:** Override the Framework Preset to "Other" for static sites.

## Issue: Next build fails
- **Symptom:** Vercel build log shows errors during `npm run build`.
- **Likely Cause:** TypeScript errors, missing dependencies, or syntax errors.
- **What to check:** Review the Vercel build logs.
- **Fix:** Fix the code locally, push, and redeploy.

## Issue: Metadata not updating / Open Graph image not showing
- **Symptom:** Sharing links on social media shows old data or no image.
- **Likely Cause:** Caching, missing tags, or relative image paths.
- **What to check:** Ensure `<meta property="og:image">` uses an absolute URL (e.g., `https://smb-ai-builder.../image.png`).
- **Fix:** Update tags to use absolute paths and use a social sharing debugger to scrape the latest version.

## Issue: Sitemap still using example.com
- **Symptom:** Search console errors or invalid URLs in `sitemap.xml`.
- **Likely Cause:** Placeholders weren't updated before production deploy.
- **What to check:** Open `/sitemap.xml`.
- **Fix:** Replace placeholders with the production domain and redeploy.

## Issue: Automatic deployments unexpectedly disabled
- **Symptom:** Pushing to main doesn't update the site.
- **Likely Cause:** `vercel.json` has `"deploymentEnabled": false`.
- **What to check:** Check the root `vercel.json` file.
- **Fix:** If intentional, trigger manually. If ready for auto-deploys, change to `true`.

## Issue: Automatic deployments unexpectedly enabled
- **Symptom:** Draft code is deploying automatically.
- **Likely Cause:** `vercel.json` is missing the `git.deploymentEnabled` setting or it is set to `true`.
- **What to check:** Check the root `vercel.json` file.
- **Fix:** Set `"deploymentEnabled": false`.
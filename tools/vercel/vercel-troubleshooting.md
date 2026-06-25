# Troubleshooting Vercel Deployments

Review this guide if you encounter issues during preview or production deployments.

## Common Issues

### 1. CSS not loading on nested pages
- **Symptom:** The homepage looks fine, but `/pages/seo/workflows/audit.html` is unstyled text.
- **Likely cause:** Relative path to `styles.css` is incorrect.
- **What to check:** Check the `<link>` tag in the `<head>` of the broken page.
- **Fix:** Adjust the relative path `../../../styles.css` based on the file's exact depth from root.

### 2. JS not loading on nested pages
- **Symptom:** Interactive elements (accordions, calculators) do not work on inner pages.
- **Likely cause:** Relative path to `script.js` is incorrect.
- **What to check:** Check the `<script src="...">` tag at the bottom of the body.
- **Fix:** Adjust the relative path `../../../script.js` matching the exact directory depth.

### 3. iframe height too short
- **Symptom:** The partner embed cuts off content with a scrollbar.
- **Likely cause:** The parent site is not respecting the requested height, or the iframe script isn't firing.
- **What to check:** Ensure the partner site has allowed `height="1200"` in their embed code.
- **Fix:** Ensure the 940x1200 full embed constraints are documented properly in partner instructions.

### 4. Embed CTA missing partner ref
- **Symptom:** Clicks from partner sites aren't tracked correctly in analytics or the GPT.
- **Likely cause:** The partner didn't append `?ref=partner_name` to the iframe src.
- **What to check:** Inspect the iframe network request on the partner's site.
- **Fix:** Ask the partner to update their iframe code using the provided template.

### 5. 404 on static pages
- **Symptom:** Visiting a URL returns Vercel's default 404 page.
- **Likely cause:** Missing `.html` extension in the URL, or incorrect path capitalization.
- **What to check:** Check exact file path in GitHub vs the browser URL.
- **Fix:** Add `.html` to the URL for static hosting, or configure Vercel `cleanUrls` in `vercel.json`.

### 6. Wrong build preset
- **Symptom:** Vercel tries to run `npm run build` and fails, but it's just a static site.
- **Likely cause:** Vercel auto-detected a package.json and assumed it was a framework.
- **What to check:** Vercel Dashboard > Settings > General > Framework Preset.
- **Fix:** Change Framework Preset to "Other" and clear the Build Command.

### 7. Next build fails
- **Symptom:** Deployment fails during the build phase with errors in the Vercel logs.
- **Likely cause:** TypeScript errors, invalid syntax, or missing dependencies.
- **What to check:** Expand the "Build Logs" section in Vercel to read the specific error.
- **Fix:** Run `npm run build` locally to reproduce and fix the error before pushing again.

### 8. Metadata not updating
- **Symptom:** Social sharing links still show the old title or description.
- **Likely cause:** Social networks cache metadata aggressively.
- **What to check:** Check the actual page source via browser dev tools.
- **Fix:** Use the specific social platform's debugger tool (e.g., LinkedIn Post Inspector, Twitter Card Validator) to force a cache clear.

### 9. Open Graph image not showing
- **Symptom:** Preview card in iMessage/Slack is missing the image.
- **Likely cause:** Relative URL used for `og:image` instead of an absolute URL.
- **What to check:** View page source `<meta property="og:image" content="...">`.
- **Fix:** Change the `og:image` content to an absolute URL: `https://smb-ai-builder.vercel.app/images/og.png`.

### 10. Sitemap still using example.com
- **Symptom:** Google Search Console flags invalid URLs in the sitemap.
- **Likely cause:** Hardcoded placeholder was not updated before production launch.
- **What to check:** Open `https://yourdomain.com/sitemap.xml`.
- **Fix:** Do a global search and replace for `example.com` in `sitemap.xml` and commit.

### 11. Automatic deployments unexpectedly disabled
- **Symptom:** You push to `main` but nothing happens in Vercel.
- **Likely cause:** Root `vercel.json` contains `"deploymentEnabled": false`.
- **What to check:** Check the contents of `vercel.json`.
- **Fix:** If you are ready for automatic deployments, change it to `true` and commit.

### 12. Automatic deployments unexpectedly enabled
- **Symptom:** Work-in-progress code goes live to production automatically.
- **Likely cause:** `"deploymentEnabled"` was set to `true` prematurely, or `vercel.json` is missing.
- **What to check:** Check Vercel project settings and the root `vercel.json`.
- **Fix:** Immediately rollback production via Vercel dashboard. Then commit `"deploymentEnabled": false` to `vercel.json`.
# Performance Checklist

## Purpose
Ensure the application is optimized for speed, efficient asset loading, and minimal footprint before a Vercel deployment.

## When to use this skill
- Before finalizing a production deployment.
- When auditing the site for Core Web Vitals or general speed improvements.
- After adding significant media assets or third-party scripts.

## When not to use this skill
- When making minor text edits that do not affect page load structure.

## Inputs Jules should collect
- Recent changes involving images, scripts, or stylesheets.
- Target performance metrics (if any specific constraints exist).

## Files and folders this skill may touch
- `package.json`
- HTML files (`index.html`, `pages/**/*.html`) or Next.js components
- `public/` directory (for asset inspection)
- `styles.css` / `script.js`

## Source-of-truth files to read first
- `JULES.md`
- `next.config.ts` (if applicable for image optimization settings)

## Process
1. **Image Sizes and Optimization:**
   - Verify that images are appropriately sized and compressed.
   - For HTML: Ensure `loading="lazy"` is used for below-the-fold images.
   - For Next.js: Ensure the `next/image` component is used effectively where appropriate.
2. **Script Loading:**
   - Audit `script.js` or external scripts.
   - Ensure non-critical scripts use `defer` or `async` attributes in HTML.
3. **CSS Loading:**
   - Verify that critical CSS is loaded early.
   - Ensure unused CSS is minimized (e.g., standard Tailwind build processes).
4. **Static Asset Paths:**
   - Confirm assets are served correctly from the `public/` directory or appropriately referenced to allow for edge caching.
5. **Dependency Audit:**
   - Check `package.json` for unnecessary or bloated dependencies that could affect build times or client bundles.

## Output requirements
- A performance audit report detailing identified bottlenecks and the steps taken to resolve them.

## Security and privacy rules
- Do not add unverified third-party performance analytics scripts.
- Ensure optimizations do not bypass necessary security headers or content security policies.

## QA checklist
- [ ] Are large images optimized and using lazy loading where appropriate?
- [ ] Are blocking scripts deferred or asynchronous?
- [ ] Are unnecessary dependencies removed?
- [ ] Is CSS optimized for load time?

## Common mistakes to avoid
- Lazy-loading the LCP (Largest Contentful Paint) image above the fold.
- Including massive, uncompressed original images in the `public/` folder.
- Adding tracking scripts under the guise of "performance monitoring" without explicit instruction.

## Final response format
Provide a structured checklist of performance items reviewed, explicitly noting any file size reductions or script loading improvements implemented.

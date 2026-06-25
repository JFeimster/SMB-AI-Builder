# Vercel Orientation

## Purpose
Teach Jules how to evaluate the current repository structure to determine if it is a pure static HTML site, a Next.js App Router application, or a hybrid setup, enabling proper deployment configuration on Vercel.

## When to use this skill
- Before creating or updating deployment configurations.
- When analyzing a new project or significant refactor to determine the deployment model.
- When planning an expansion from a static site to Next.js or vice versa.

## When not to use this skill
- When you are already certain of the architecture and just need to deploy.
- When the task is strictly about content editing without deployment implications.

## Inputs Jules should collect
- Current user requests regarding deployment.
- Historical context or memory about the project setup.

## Files and folders this skill may touch
- None (This is an inspection/orientation skill).

## Source-of-truth files to read first
- `JULES.md`
- `jules.json`
- `package.json`
- `next.config.ts`
- `vercel.json`

## Process
1. **Check for Next.js App Router:**
   - Look for `package.json` with `next` as a dependency.
   - Look for `next.config.ts` or `next.config.js`.
   - Check if an `app/` directory exists with `layout.tsx` and `page.tsx`.
   - If these exist, the app uses the Next.js App Router.
2. **Check for Static Site:**
   - Look for the absence of Next.js configurations.
   - Check for `index.html` at the root.
   - Check for a `pages/` directory containing static `.html` files.
   - Check for pure `styles.css` and `script.js` without a build step.
   - If these exist without Next.js, it's a static site.
3. **Check for Hybrid:**
   - If there is a Next.js setup but also a significant number of plain `.html` files outside the `public/` directory intended for deployment, it might be a hybrid. Determine how the static files are being served (e.g., via Next.js `public/` or custom server logic).

## Output requirements
- A clear assessment of the repository type: Static HTML, Next.js App Router, or Hybrid.
- Explanation of the evidence found to support the assessment.

## Security and privacy rules
- Do not make assumptions about production URLs based on local files.
- Never add secrets or fake deployment claims.

## QA checklist
- [ ] Did I check for `package.json` and `next.config.ts`?
- [ ] Did I check for the `app/` directory?
- [ ] Did I check for an `index.html` at the root?
- [ ] Did I confirm the primary framework or lack thereof?

## Common mistakes to avoid
- Assuming a static site because there is an `index.html` in the `public/` directory of a Next.js app.
- Assuming Next.js just because `package.json` exists without checking dependencies.

## Final response format
Provide a concise summary detailing the architecture type, the key files confirming this type, and recommendations for the subsequent deployment steps.

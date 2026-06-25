# Deployment Checklist

Use this checklist to ensure every deployment is fully verified, functional, and safe.

## Before Connecting Vercel
- [ ] Ensure `vercel.json` exists at the root and contains `"git": { "deploymentEnabled": false }` unless explicitly approved otherwise.
- [ ] Verify you have a designated custom domain ready (if applicable).
- [ ] Confirm whether you are deploying a Static Site or a Next.js App Router project to ensure correct build settings.

## Before First Preview
- [ ] Check that `vercel.json` has been reviewed.
- [ ] Verify `automatic deployments` intentionally set to `false`.
- [ ] Confirm no fake testimonials, fake ratings, fake reviews, fake logos, or unsupported claims exist in the project content.

## Before Production
- [ ] Validate that all links work correctly (especially relative paths).
- [ ] If using environment variables, confirm placeholders in `vercel-env-rules.md` have been safely set as real values in the Vercel dashboard.
- [ ] Validate no `example.com` or `localhost` strings are visible in final content.
- [ ] Ensure automatic deployments setting is appropriately flipped to `true` (if ready to allow automated production updates).

## After Production
- [ ] Perform a full end-to-end smoke test on the live production domain.
- [ ] Check that redirects or rewrites (if any) perform as expected.

## Link Checks
- [ ] Notion URL works: `https://feimster.notion.site/smb-ai-builder`
- [ ] GitHub URL works: `https://github.com/JFeimster/SMB-AI-Builder`

## CTA Checks
- [ ] Primary GPT CTA URL works: `https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`
- [ ] Verify core CTA language is accurate (e.g., "Audit My First Workflow", "Score My Automation Readiness").

## SEO Checks
- [ ] `sitemap.xml` and `robots.txt` reviewed (if present) and point to the production domain.
- [ ] Check unique titles, meta descriptions, and valid JSON-LD schemas.
- [ ] Confirm one `<H1>` per page.

## Embed Checks
- [ ] Partner embeds tested at 940x1200 full embed constraint.
- [ ] Partner embeds tested at compact size.

## Accessibility Checks
- [ ] Ensure accessible CTA links.
- [ ] Verify visible focus states.
- [ ] Validate semantic HTML structure.

## Performance Checks
- [ ] No console errors on load.
- [ ] Assets load without major blocking warnings in browser network tools.

## Mobile Checks
- [ ] Mobile-first layouts render appropriately.
- [ ] Navigation components work on mobile views.

## Sensitive Workflow Disclaimer Checks
- [ ] Ensure sensitive pages explicitly state the content is not legal, financial, tax, HR, lending, accounting, collections, or compliance advice.

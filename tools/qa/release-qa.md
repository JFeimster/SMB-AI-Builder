# Release QA Checklist

Run this checklist prior to deploying a major update or new batch of pages to production.

## 1. Pre-Deployment Checks
- [ ] Run the `master-qa-checklist.md` on a representative sample of modified pages.
- [ ] Verify `content-claims-checklist.md` strictly passes on all new content.
- [ ] Check Vercel Preview deployment for build errors or warnings.

## 2. Environment Checks
- [ ] Verify no secrets, API keys, or private tokens are exposed in the codebase or frontend output.
- [ ] Ensure automatic Git deployments in `vercel.json` are disabled (`"git": {"deploymentEnabled": false}`) if the current posture requires manual deployment approval.

## 3. Post-Deployment Checks (Smoke Test)
- [ ] Load the production URL (`https://smb-ai-builder.vercel.app`).
- [ ] Verify primary CTA links resolve to the correct GPT URL.
- [ ] Test one key user flow (e.g., navigating from Home -> SEO Page -> CTA).
- [ ] Confirm `sitemap.xml` and `robots.txt` are accessible at the root.

## 4. Rollback Plan
- [ ] Confirm access to Vercel dashboard to revert to the previous deployment if critical issues are found post-launch.

# Rollback Plan

Use this document as a guide if a production deployment causes critical issues.

## When to Rollback

If a production deployment breaks the site (e.g., blank screens, broken CSS, missing pages, failing embeds), initiate a rollback.

## How to Rollback using Vercel

1. Log into the Vercel dashboard.
2. Navigate to the **Deployments** tab for the project.
3. Locate the previous, known-good production deployment.
4. Click the options menu (three dots) and select **Promote to Production** or **Assign Custom Domain** (depending on UI updates) to revert the active site to that build.

## Emergency Checklist (After Rollback)

Verify the following immediately after rolling back:
- [ ] Homepage loads correctly.
- [ ] Primary CTA links work.
- [ ] Embeds load and function.
- [ ] SEO pages (`/pages/seo/`) load.
- [ ] `robots.txt` and `sitemap.xml` are accessible and not broken.
- [ ] No broken CSS or JS.

## What to Check Before Rolling Forward Again

- Test the fix on a Preview deployment thoroughly.
- Review the Vercel Build Logs for errors.
- Confirm all files (especially nested relative assets) are correct.

## Rollback Communication Template

If coordinating with a team, use this template:

**Issue:** [Brief description of what broke]
**Action Taken:** Rolled back to deployment [ID or Date]
**Current Status:** Site is stable. Investigating root cause on preview deployment.
# Rollback Plan

If a production deploy breaks the site, follow this emergency procedure.

## Using Vercel Deployment History

Vercel keeps a history of all successful deployments. This history allows you to instantly revert the live site to a previous working state without needing to rewrite or push code.

1. Navigate to the **Deployments** tab in your Vercel dashboard.
2. Locate the most recent deployment labeled **Production** that was known to be working.
3. Click the ellipsis (three dots) next to that deployment and select **Promote to Production** (or **Revert** depending on the UI state).
4. Vercel will instantly switch the traffic routing to the old, working build.

## Emergency Checklist

Immediately after issuing the rollback, verify the following:

- [ ] Homepage loads correctly.
- [ ] Primary CTA links function and point to the correct URL.
- [ ] Embeds load properly on partner sites.
- [ ] Key SEO pages render.
- [ ] `robots.txt` and `sitemap.xml` are accessible and not broken.
- [ ] No broken CSS/JS indicating an incomplete rollback state.

## Before Rolling Forward

After stabilizing the site via a rollback, do not push directly to `main` until the root cause is addressed.
- Diagnose the failure locally or on an isolated preview branch.
- Push the fix to a preview environment.
- Complete the full [Preview Approval Checklist](./vercel-preview-rules.md).

## Rollback Communication Template

If you have users, stakeholders, or partners who might have observed the outage, communicate the status concisely:

```text
**Status Update: Rollback Initiated**

We detected an issue in the latest release that affected [feature/site area].
We have successfully rolled back to the previous stable version.
All core functions, including partner embeds and workflows, are operating normally.
We are investigating the root cause and will redeploy once validated.
```
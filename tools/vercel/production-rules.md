# Production Deployment Rules

Follow these rules when deploying to production.

## Production Affirmations

Before promoting a release to production, confirm the following:

- [ ] Confirm automatic deployment setting (`"deploymentEnabled"`) in `vercel.json`.
- [ ] Confirm the custom domain is correctly configured.
- [ ] Confirm canonical URLs point to the actual production domain.
- [ ] Confirm Open Graph image paths use absolute URLs to the production domain.
- [ ] Confirm `robots.txt` and `sitemap.xml` are accurate and deployed to the root.
- [ ] Confirm metadata (titles, descriptions) is correct.
- [ ] Confirm partner embeds use the production domain.
- [ ] Confirm no `example.com` placeholders remain in the codebase.
- [ ] Confirm no unsupported proof claims, fake testimonials, or fake metrics exist.
- [ ] Confirm the sensitive workflow disclaimer is present where needed.
- [ ] Confirm the rollback plan exists and is understood.

## ⚠️ Warning

**Do not switch `"deploymentEnabled": true`** in `vercel.json` until you are fully ready for automatic Git deployments to production. Keep it disabled (`false`) for manual control during early phases.
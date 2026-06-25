# Production Deployment Rules

Follow these rules directly before and immediately after shipping to the production environment.

> **WARNING:** Do not switch `"deploymentEnabled"` to `true` in your `vercel.json` until you are fully ready for automatic Git deployments to production.

## Rules for Production

- **Deployment Posture:** Confirm the automatic deployment setting before launch. Ensure it reflects your team's readiness.
- **Domain Verification:** Confirm the custom domain is correctly routed and active.
- **SEO & Linking:**
  - Confirm canonical URLs reflect the true production domain.
  - Confirm Open Graph image paths point to live accessible assets.
  - Confirm `robots.txt` and `sitemap.xml` are accessible and correctly structured.
  - Confirm metadata is accurate for all main landing and secondary pages.
- **Partner & Asset Checks:**
  - Confirm partner embeds use the specific production domain.
  - Confirm no `example.com` placeholders remain anywhere in text, code, or metadata.
- **Trust & Compliance:**
  - Confirm no unsupported proof claims (e.g., fake metrics or testimonials).
  - Confirm sensitive workflow disclaimers are present (noting the tool does not provide legal, financial, tax, HR, etc., advice).
- **Safety Net:**
  - Confirm a rollback plan exists and the team knows how to access the Vercel dashboard to revert immediately.

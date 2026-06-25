# Preview Deployment Rules

Use preview deployments exclusively for QA and testing.

## Rules
- **Do not share preview URLs** as final production links with customers or partners.
- Use preview URLs to perform thorough checks before promoting to production.

## Preview Approval Checklist

Review the following on the preview URL:

- [ ] **Check page paths:** Ensure static HTML and Next.js routes load without 404s.
- [ ] **Check relative asset paths:** Ensure CSS, JS, and images load correctly across all depths.
- [ ] **Check iframe embeds:** Ensure partner embeds display correctly.
- [ ] **Check mobile nav:** Verify mobile navigation is functional.
- [ ] **Check FAQ accordion:** Verify interactivity in FAQ sections.
- [ ] **Check static SEO pages:** Verify SEO pages (`pages/seo/*`) load properly.
- [ ] **Check Next routes:** Verify `app/` routes if using App Router.
- [ ] **Placeholder Check:** Confirm no placeholder production domains (e.g., `example.com`) remain in visible pages.
- [ ] **Privacy Check:** Confirm no private notes, internal prompts, or secrets are publicly exposed unless explicitly intended.
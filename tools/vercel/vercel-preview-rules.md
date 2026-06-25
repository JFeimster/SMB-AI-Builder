# Preview Deployment Rules

Vercel preview deployments should be treated strictly as staging and QA environments.

## Rules for Previews

- **QA Only:** Use preview deployments exclusively for internal testing, QA, and review.
- **Do Not Share:** Do not share preview URLs as final production links to customers or partners.
- **Paths & Assets:**
  - Check all page paths to ensure routing correctly reflects the environment.
  - Check relative asset paths (CSS, JS, images) load without 404 errors.
- **Content & Functionality Check:**
  - Check iframe embeds function correctly.
  - Check mobile nav operates cleanly.
  - Check FAQ accordions expand/collapse correctly.
  - Check static SEO pages for correct rendering.
  - Check Next routes if using App Router.
- **Data & Safety:**
  - Confirm no placeholder production domains (`example.com`, `localhost`) remain in visible pages.
  - Confirm no private notes or internal prompts are publicly exposed unless expressly intended.

---

## Preview Approval Checklist

Before moving a preview build into consideration for production, complete the following validation:

- [ ] Page paths correct
- [ ] Relative assets (CSS/JS) loaded
- [ ] iframe embeds working
- [ ] Mobile nav working
- [ ] FAQ accordions toggle correctly
- [ ] Static SEO pages render cleanly
- [ ] Next routes (if App Router used) render efficiently
- [ ] No placeholder domains remaining
- [ ] No private notes / prompts exposed
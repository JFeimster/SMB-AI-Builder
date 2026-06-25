# Deployment Checklist

Follow this checklist before, during, and after deployments.

## Before Connecting Vercel
- [ ] Ensure `vercel.json` has `"git": { "deploymentEnabled": false }` to prevent accidental auto-deploys.
- [ ] Confirm no secrets, API keys, or private tokens are committed to the repo.

## Before First Preview
- [ ] Validate relative paths in static pages (HTML/CSS/JS).
- [ ] Confirm no `example.com` or `localhost` placeholders remain in production links.
- [ ] Verify that partner embeds use the correct styles and test URLs.

## Before Production
- [ ] Verify the primary GPT CTA URL works: [SMB AI Workflow & Agent Builder](https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder).
- [ ] Verify Notion URL works: [SMB AI Builder Notion](https://feimster.notion.site/smb-ai-builder).
- [ ] Verify GitHub URL works: [SMB AI Builder GitHub](https://github.com/JFeimster/SMB-AI-Builder).
- [ ] Review `vercel.json` - ensure automatic deployments are intentionally set to `false` or `true`.
- [ ] Review `sitemap.xml` and `robots.txt` if present.

## After Production
- [ ] Verify the site loads on the custom domain.
- [ ] Verify the sensitive workflow disclaimer is visible on relevant pages.
- [ ] Ensure canonical URLs point to the production domain.

## Detailed Checks

### Link Checks
- [ ] All internal links resolve correctly.
- [ ] External links open in a new tab where appropriate.

### CTA Checks
- [ ] All 'Audit My First Workflow', 'Score My Automation Readiness', etc. CTAs point to the primary GPT URL.

### SEO Checks
- [ ] Page titles and meta descriptions are unique and present.
- [ ] Open Graph tags and JSON-LD schema (Article/FAQPage) are correctly implemented.

### Embed Checks
- [ ] Partner embeds are tested at 940x1200 and compact sizes.

### Accessibility Checks
- [ ] Visible focus states on buttons and links.
- [ ] Contrast ratios meet minimum requirements.

### Performance Checks
- [ ] Images are optimized.
- [ ] No large, blocking scripts.

### Mobile Checks
- [ ] Mobile navigation and layouts are usable.
- [ ] Content is readable without zooming.

### Trust & Safety Checks
- [ ] No fake testimonials, ratings, reviews, logos, or unsupported claims are present.
- [ ] Sensitive workflow disclaimer is visibly placed.
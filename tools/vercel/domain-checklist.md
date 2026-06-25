# Custom Domain Setup Checklist

When moving from a `vercel.app` subdomain to your final production domain, complete these steps to ensure traffic, SEO, and configurations behave as expected.

## Domain Connection
- [ ] Choose production domain.
- [ ] Connect domain in the Vercel dashboard under the project's Settings > Domains.
- [ ] Confirm DNS records (A/CNAME) propagate correctly.
- [ ] Confirm HTTPS certificate is successfully provisioned by Vercel.
- [ ] Confirm preference between `www` vs non-`www` and set Vercel to automatically redirect accordingly.
- [ ] Confirm the new domain is set as the canonical production domain.

## Project File Updates
Once the domain is verified, update hardcoded URLs in the repository:

- [ ] Update `sitemap.xml`.
- [ ] Update `robots.txt`.
- [ ] Update all canonical URL `<link rel="canonical" ... />` tags across all HTML pages.
- [ ] Update Open Graph URLs (`og:url`, `og:image`).
- [ ] Update embed snippets and documentation (e.g., `EMBED-README.md`).
- [ ] Update `llms.txt`.
- [ ] Update root `README.md`.

## Find and Replace Placeholders
Search the repository for any temporary testing domains and update them to the final domain:
- [ ] Search for `YOURDOMAIN.com`
- [ ] Search for `example.com`
- [ ] Search for `localhost`
- [ ] Search for `127.0.0.1`

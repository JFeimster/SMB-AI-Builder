# Domain Setup Checklist

Follow these steps when setting up the production domain for the project.

## Vercel Setup
- [ ] Choose the production domain (e.g., `smb-ai-builder.vercel.app` or a custom domain).
- [ ] Connect the domain in the Vercel dashboard under project Settings > Domains.
- [ ] Confirm DNS records are verified and propagating.
- [ ] Confirm HTTPS/SSL certificate is issued and active.
- [ ] Confirm your www vs non-www preference (usually set one to redirect to the other).
- [ ] Set the primary canonical domain in Vercel.

## Codebase Updates
Once the domain is set, update the following files to replace placeholders or old domains with the absolute production URL:
- [ ] `sitemap.xml`
- [ ] `robots.txt`
- [ ] Canonical URLs in all HTML `<head>` sections.
- [ ] Open Graph URLs (`og:url`, `og:image`).
- [ ] Embed snippets provided to partners.
- [ ] `EMBED-README.md` (if it exists).
- [ ] `llms.txt` (if applicable).
- [ ] `README.md`.

## Search for Placeholders
Run a repository search to ensure none of these placeholders remain in user-facing code or configurations:
- [ ] `YOURDOMAIN.com`
- [ ] `example.com`
- [ ] `localhost`
- [ ] `127.0.0.1`
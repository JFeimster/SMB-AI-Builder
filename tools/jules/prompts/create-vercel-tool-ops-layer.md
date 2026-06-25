You are working inside the `smb-ai-builder` repo.

Create a dedicated Vercel tool-ops layer for this project.

Create the following files:

tools/vercel/
├── README.md
├── vercel-deploy-checklist.md
├── vercel-preview-rules.md
├── vercel-production-rules.md
├── vercel-env-rules.md
├── vercel-routing-notes.md
├── vercel-rollback-plan.md
├── vercel-domain-checklist.md
├── vercel-static-site-notes.md
├── vercel-nextjs-notes.md
├── vercel-analytics-notes.md
├── vercel-security-notes.md
├── vercel-build-settings.md
├── vercel-troubleshooting.md
└── vercel-release-template.md

Also check for a root `vercel.json`.

If `vercel.json` does not exist, create it at the repo root with this safe default:

{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": false
  }
}

If `vercel.json` already exists, do not overwrite it blindly. Instead:
- Preserve existing valid settings.
- Ensure it documents or includes `"git": { "deploymentEnabled": false }` unless the project owner has explicitly set it to true.
- Add notes in `tools/vercel/vercel-build-settings.md` explaining how to change deploymentEnabled back to true.

Project:
SMB AI Workflow & Agent Builder

Product summary:
SMB AI Workflow & Agent Builder helps small business owners, operators, freelancers, agencies, consultants, and automation builders audit workflows, score automation readiness, identify automation opportunities, design AI-powered workflows, and build safer AI agent pilot plans before buying tools, hiring developers, or automating broken processes.

Primary CTA URL:
https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder

Notion resource:
https://feimster.notion.site/smb-ai-builder

GitHub resource:
https://github.com/JFeimster/SMB-AI-Builder

Purpose of the Vercel tool-ops layer:
Create durable deployment documentation and QA checklists for running this repo on Vercel as either:
1. A plain static HTML/CSS/JS site
2. A Next.js App Router site
3. A hybrid repo containing both static pages and Next app files

Important deployment posture:
This project should default to safe/manual deployment behavior.
Automatic Vercel deployments from Git should be disabled by default using:

{
  "git": {
    "deploymentEnabled": false
  }
}

The owner can change this back to true when they are ready to allow automatic preview/production deployments.

Do not add secrets, API keys, private tokens, org IDs, team IDs, project IDs, or real environment values.

General writing style:
- Practical
- Direct
- Operator-friendly
- No fluffy deployment theory
- Useful for a solo builder or small team
- Include checklists and examples
- Use placeholders where needed
- Make production-risk warnings obvious

Repository assumptions:
- Root static files may include `index.html`, `styles.css`, `script.js`, `README.md`
- Static subpages may live under:
  - pages/site/
  - pages/seo/
  - pages/seo/comparisons/
  - pages/seo/workflows/
  - pages/seo-support/
  - embeds/
- Next App Router files may live under:
  - app/page.tsx
  - app/layout.tsx
  - app/globals.css
  - app/tools/*/page.tsx

File-specific requirements:

1. tools/vercel/README.md
Create an overview of the Vercel tool-ops layer.

Include:
- What this folder is for
- Supported deployment modes:
  - Static site
  - Next.js App Router
  - Hybrid repo
- Recommended default: keep automatic Git deployments disabled until the site is QA’d
- Link/reference all files in this folder
- Quick-start checklist
- Production launch checklist summary
- Rollback summary
- Note that this folder does not contain secrets or deployment credentials

2. tools/vercel/vercel-deploy-checklist.md
Create a detailed deployment checklist.

Include sections:
- Before connecting Vercel
- Before first preview
- Before production
- After production
- Link checks
- CTA checks
- SEO checks
- Embed checks
- Accessibility checks
- Performance checks
- Mobile checks
- Sensitive workflow disclaimer checks

Include required checks:
- GPT CTA URL works
- Notion URL works
- GitHub URL works
- `vercel.json` reviewed
- automatic deployments intentionally set to false or true
- sitemap and robots reviewed if present
- no fake testimonials, fake ratings, fake reviews, fake logos, or unsupported claims
- partner embeds tested at 940x1200 and compact size

3. tools/vercel/vercel-preview-rules.md
Create preview deployment rules.

Include:
- Use preview deployments for QA only
- Do not share preview URLs as final production links
- Check page paths
- Check relative asset paths
- Check iframe embeds
- Check mobile nav
- Check FAQ accordion
- Check static SEO pages
- Check Next routes if using App Router
- Confirm no placeholder production domains remain in visible pages
- Confirm no private notes or internal prompts are publicly exposed unless intended

Also include a “Preview approval checklist” with pass/fail boxes.

4. tools/vercel/vercel-production-rules.md
Create production deployment rules.

Include:
- Confirm automatic deployment setting before launch
- Confirm custom domain
- Confirm canonical URLs
- Confirm Open Graph image paths
- Confirm robots/sitemap
- Confirm metadata
- Confirm partner embeds use production domain
- Confirm no `example.com` placeholders remain
- Confirm no unsupported proof claims
- Confirm sensitive workflow disclaimers
- Confirm rollback plan exists

Add warning:
Do not switch `"deploymentEnabled"` to true until you are ready for automatic Git deployments.

5. tools/vercel/vercel-env-rules.md
Create environment variable rules.

Include:
- Do not commit `.env`
- Do not commit API keys
- Do not ask agents to create real secrets
- Use Vercel dashboard for environment values
- Use placeholder examples only
- For this mostly static project, environment variables may not be needed
- If analytics or forms are added later, document required environment variables here

Include example placeholder table:
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_GPT_URL
- NEXT_PUBLIC_NOTION_URL
- NEXT_PUBLIC_GITHUB_URL
- NEXT_PUBLIC_ANALYTICS_ID

Make clear these are placeholders, not required unless the project is converted to use them.

6. tools/vercel/vercel-routing-notes.md
Create routing documentation.

Include:
- Static HTML routing notes
- Next.js App Router routing notes
- Hybrid repo cautions
- Relative path cautions
- Recommended URL paths for:
  - /
  - /pages/site/workflow-audit.html
  - /pages/seo/best-gpt-for-smb-workflow-automation.html
  - /pages/seo/comparisons/ai-agent-vs-automation-workflow.html
  - /pages/seo/workflows/lead-follow-up-workflow-audit.html
  - /embeds/iframe.html
  - /embeds/iframe-compact.html
- Notes about canonical URLs
- Notes about redirects if moving static pages to clean routes later

Include optional redirect examples in markdown, but do not force them into vercel.json unless requested.

7. tools/vercel/vercel-rollback-plan.md
Create rollback documentation.

Include:
- What to do if a production deploy breaks the site
- How to use Vercel deployment history conceptually
- What to check before rolling forward
- What to check after rollback
- Emergency checklist:
  - CTA links
  - homepage loads
  - embeds load
  - SEO pages load
  - robots/sitemap not broken
  - no broken CSS/JS
- Rollback communication template

Do not include fictional account-specific steps.

8. tools/vercel/vercel-domain-checklist.md
Create domain setup checklist.

Include:
- Choose production domain
- Connect domain in Vercel
- Confirm DNS
- Confirm HTTPS
- Confirm www vs non-www preference
- Confirm canonical domain
- Update:
  - sitemap.xml
  - robots.txt
  - canonical URLs
  - Open Graph URLs
  - embed snippets
  - EMBED-README.md
  - llms.txt
  - README.md
- Search for placeholders:
  - YOURDOMAIN.com
  - example.com
  - localhost
  - 127.0.0.1

9. tools/vercel/vercel-static-site-notes.md
Create notes for deploying the plain static version.

Include:
- Expected files:
  - index.html
  - styles.css
  - script.js
  - pages/
  - embeds/
- No build command may be needed for plain static hosting
- If Vercel requires settings, use framework preset carefully
- Check that relative links work after deployment
- Check nested pages load CSS and JS correctly
- Check iframe pages are standalone
- Check no server-only features are assumed

10. tools/vercel/vercel-nextjs-notes.md
Create notes for deploying the Next.js App Router version.

Include:
- Expected files:
  - app/page.tsx
  - app/layout.tsx
  - app/globals.css
  - package.json
  - next.config.js or next.config.mjs if used
- Build command usually:
  - npm run build
- Output:
  - .next
- Static export note only if relevant
- App Router routing notes
- Metadata notes
- Client component notes if interactive FAQ/menus are used
- Do not mix static pages and Next routes without clear routing expectations

11. tools/vercel/vercel-analytics-notes.md
Create analytics notes.

Include:
- Keep analytics optional
- Do not add tracking scripts without owner approval
- Suggested events:
  - primary_cta_click
  - secondary_resource_click
  - github_resource_click
  - partner_embed_cta_click
  - readiness_picker_completed
  - faq_opened
- Suggested UTM parameters for partner embeds:
  - utm_source=partner
  - utm_medium=embed
  - utm_campaign=smb_ai_builder
  - utm_content=[partner-id]
  - ref=[partner-id]
- Privacy note:
  Do not collect sensitive workflow contents through analytics.

12. tools/vercel/vercel-security-notes.md
Create security and safety notes.

Include:
- Static partner config is not access control
- Do not expose secrets in frontend code
- Do not commit private API keys
- Do not collect sensitive customer data through static forms without proper backend/privacy review
- Do not frame GPT output as legal, financial, tax, HR, lending, accounting, or compliance advice
- Partner-only embeds require hosting-level protection, auth, signed URLs, or backend enforcement if truly restricted
- Validate external links
- Use rel attributes for external links where appropriate

13. tools/vercel/vercel-build-settings.md
Create build settings documentation.

Include:
- Current recommended safe `vercel.json`:

{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": false
  }
}

- Explain:
  - false means automatic Git deployments are disabled
  - true means automatic Git deployments are enabled
  - owner can change it when ready

Include sections:
- Static site settings
- Next.js settings
- Hybrid repo notes
- Manual deploy notes
- Production deploy caution

14. tools/vercel/vercel-troubleshooting.md
Create troubleshooting guide.

Include common issues:
- CSS not loading on nested pages
- JS not loading on nested pages
- iframe height too short
- embed CTA missing partner ref
- 404 on static pages
- wrong build preset
- Next build fails
- metadata not updating
- Open Graph image not showing
- sitemap still using example.com
- automatic deployments unexpectedly disabled
- automatic deployments unexpectedly enabled

For each issue include:
- Symptom
- Likely cause
- What to check
- Fix

15. tools/vercel/vercel-release-template.md
Create a release note template.

Include:
- Release name
- Date
- Deployment type:
  - Preview
  - Production
  - Rollback
- Changed files
- New pages
- SEO changes
- Embed changes
- CTA/link changes
- Known risks
- QA completed
- Rollback target
- Approval notes

Root vercel.json requirement:
At the repo root, ensure a valid `vercel.json` exists.

Preferred default:

{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": false
  }
}

Do not add fake functions, rewrites, redirects, headers, or environment settings unless the repo already needs them.

Final QA:
- Confirm `tools/vercel/` exists.
- Confirm all 15 markdown files exist.
- Confirm root `vercel.json` exists and is valid JSON.
- Confirm `vercel.json` defaults automatic Git deployments to false unless the owner already chose otherwise.
- Confirm no secrets, tokens, project IDs, team IDs, or private credentials were added.
- Confirm docs mention both static and Next.js deployment paths.
- Confirm partner embed deployment notes mention 940x1200 full embed constraint.
- Confirm docs warn that static partner config is not real access control.
- Confirm no unsupported Vercel feature claims are made.

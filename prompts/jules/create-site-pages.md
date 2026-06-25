# Prompt: Create Site Pages

**Purpose:** Prompt for creating core static site pages.

## Pre-requisites
Read `JULES.md` and `jules.json` as source-of-truth files before starting.

## Context
**Project:** SMB AI Workflow & Agent Builder
**Product Description:** SMB AI Workflow & Agent Builder helps small business owners, operators, freelancers, agencies, consultants, and automation builders audit workflows, score automation readiness, identify automation opportunities, design AI-powered workflows, and build safe AI agent pilot plans.
**Primary CTA URL:** https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder
**Notion Resource:** https://feimster.notion.site/smb-ai-builder
**GitHub Resource:** https://github.com/JFeimster/SMB-AI-Builder

## Target Files and Required H1s
Create or update the following files exactly as named:
- `pages/site/workflow-audit.html` (H1: Workflow Audit for SMB AI Automation)
- `pages/site/readiness-scorecard.html` (H1: AI Automation Readiness Scorecard)
- `pages/site/ai-agent-blueprint.html` (H1: AI Agent Blueprint for Small Business Workflows)
- `pages/site/automation-opportunity-matrix.html` (H1: Automation Opportunity Matrix for SMB Workflows)
- `pages/site/use-cases.html` (H1: SMB AI Workflow Use Cases)
- `pages/site/agencies.html` (H1: AI Automation Discovery for Agencies)
- `pages/site/consultants.html` (H1: Workflow Automation Planning for Consultants)
- `pages/site/automation-builders.html` (H1: Pre-Build Discovery for AI Automation Builders)
- `pages/site/resources.html` (H1: SMB AI Workflow Builder Resources)
- `pages/site/about.html` (H1: About SMB AI Workflow & Agent Builder)
- `pages/site/contact.html` (H1: Contact and Partner Access)

## File Path Rules
- From `pages/site/*.html`, link CSS as `../../styles.css`.
- From `pages/site/*.html`, link JS as `../../script.js` with `defer`.

## Static HTML & Style Rules
- Use plain semantic HTML and mobile-first layouts.
- Use a consistent header, nav, CTA band, and footer.
- Include practical page-specific sections.
- Use semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`).
- Style: Neobrutalist, futurist fintech, cyberpunk aesthetic (high contrast, thick borders, hard offset shadows, ink black backgrounds, vivid accent colors).

## SEO & Accessibility Rules
- Add a unique `<title>`, `<meta name="description">`, canonical placeholder, Open Graph title, and Open Graph description to every page.
- Exactly one H1 per page, matching the required list above.

## Anti-Hype & Content Rules
- Tone: Direct, no-BS, operator-friendly, anti-hype, practical, safety-aware.
- **Approved language examples:** "Stop automating broken workflows.", "Audit the mess first.", "Score the workflow before AI touches it.", "Build a pilot plan your business can actually survive."
- **Banned language:** "unlock your potential", "revolutionize your workflow", "seamless experience", "game-changing", "cutting-edge", "transform your business", "leverage AI", "AI-powered magic", "effortless automation", "fully autonomous business".
- **No fake proof:** Do not invent or imply fake testimonials, reviews, ratings, logos, case studies, user counts, revenue numbers, guarantees, compliance claims, partner relationships, certifications, benchmarks, integrations, or unsupported competitor claims.

## Safety Disclaimer Rule
Where relevant, include the following safety disclaimer:
> This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.

## Final QA Checklist
- [ ] Have you read `JULES.md` and `jules.json`?
- [ ] Have all listed HTML files been created?
- [ ] Does every page have exactly one H1 matching the required list?
- [ ] Are CSS linked as `../../styles.css` and JS as `../../script.js` with `defer`?
- [ ] Is the primary CTA URL correct? (https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder)
- [ ] Are all unique title, meta, canonical, and OG tags present?
- [ ] Are all semantic landmarks used?
- [ ] Is the content free of fake proof, unsupported claims, and hype words?
- [ ] Has the sensitive-workflow disclaimer been included where relevant?

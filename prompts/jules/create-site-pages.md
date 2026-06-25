# Prompt: Create Site Pages

## Purpose
Create the core static site pages for SMB AI Workflow & Agent Builder.

## Source-of-Truth Requirement
Before starting, read these root files if they exist:

- `JULES.md`
- `jules.json`
- `jules.tasks.md`
- `jules.qa.md`
- `jules.style.md`

Use `JULES.md` as the human-readable source of truth. Use `jules.json` as the machine-readable source of truth.

## Project Context
- **Project:** SMB AI Workflow & Agent Builder
- **Product description:** SMB AI Workflow & Agent Builder helps small business owners, operators, freelancers, agencies, consultants, and automation builders audit workflows, score automation readiness, identify automation opportunities, design AI-powered workflows, and build safe AI agent pilot plans.
- **Primary CTA URL:** https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder
- **Notion resource:** https://feimster.notion.site/smb-ai-builder
- **GitHub resource:** https://github.com/JFeimster/SMB-AI-Builder
- **Core positioning:** Stop automating broken workflows. Audit the mess first. Score readiness. Pick the safest pilot. Build an AI agent plan your business can survive.

## Target Files and Required H1s
Create or update only these files:

- `pages/site/workflow-audit.html` — H1: `Workflow Audit for SMB AI Automation`
- `pages/site/readiness-scorecard.html` — H1: `AI Automation Readiness Scorecard`
- `pages/site/ai-agent-blueprint.html` — H1: `AI Agent Blueprint for Small Business Workflows`
- `pages/site/automation-opportunity-matrix.html` — H1: `Automation Opportunity Matrix for SMB Workflows`
- `pages/site/use-cases.html` — H1: `SMB AI Workflow Use Cases`
- `pages/site/agencies.html` — H1: `AI Automation Discovery for Agencies`
- `pages/site/consultants.html` — H1: `Workflow Automation Planning for Consultants`
- `pages/site/automation-builders.html` — H1: `Pre-Build Discovery for AI Automation Builders`
- `pages/site/resources.html` — H1: `SMB AI Workflow Builder Resources`
- `pages/site/about.html` — H1: `About SMB AI Workflow & Agent Builder`
- `pages/site/contact.html` — H1: `Contact and Partner Access`

Do not create SEO pages, comparison pages, workflow pages, embed files, OpenAPI docs, or tool docs in this task.

## File Path Rules
- From `pages/site/*.html`, link CSS as `../../styles.css`.
- From `pages/site/*.html`, link JS as `../../script.js` with `defer`.
- Use root assets only when paths are correct from `pages/site/`.
- Use consistent internal links between related site pages.
- Do not hardcode broken local paths.

## Static HTML Rules
- Use plain static HTML.
- No external frameworks unless already used by the repo.
- Reuse root `styles.css` and `script.js`.
- Use semantic HTML.
- Use one H1 per page.
- Use mobile-first layouts.
- Include accessible CTA links.
- Do not bury CTA links.
- Include visible focus states.

## Shared Layout Requirements
Every page should include a consistent:

- Header
- Navigation
- Main landmark
- Page-specific content blocks
- CTA band
- Footer

Use practical page-specific sections. Avoid copy-paste boilerplate that makes pages feel cloned.

## Metadata Requirements
Every page needs:

- Unique `<title>`
- Unique `<meta name="description">`
- Canonical placeholder URL
- Open Graph title
- Open Graph description

Do not add fake review, rating, testimonial, or product schema.

## Style Rules
Use the repo style direction:

- Neobrutalist blocks
- Futurist fintech/cyberpunk accents
- Ink black background
- Off-white cards/content blocks
- Acid lime, cyber pink, electric cyan, signal orange, and violet accents
- Thick borders
- Hard offset shadows
- Oversized headings
- Monospace labels
- Dashboard panels
- Scorecard motifs
- Terminal-style snippets
- High contrast
- Practical builder aesthetic

## Copy Rules
Tone: direct, no-BS, operator-friendly, anti-hype, practical, safety-aware, clear, concise.

Use approved language where natural:

- Stop automating broken workflows.
- Audit the mess before you wire it into your business.
- Score the workflow before AI touches it.
- Know what to automate, what to clean up, and what should stay human.
- Build a pilot plan your business can actually survive.
- Plan the workflow before choosing the tool.

Remove or avoid banned language:

- unlock your potential
- revolutionize your workflow
- seamless experience
- game-changing
- cutting-edge
- transform your business
- leverage AI
- AI-powered magic
- effortless automation
- fully autonomous business

## No-Fake-Proof Rules
Do not invent or imply:

- Fake testimonials
- Fake reviews
- Fake ratings
- Fake logos
- Fake case studies
- Fake user counts
- Fake revenue numbers
- Fake guarantees
- Fake compliance claims
- Fake partner relationships
- Fake certifications
- Fake benchmarks
- Fake integrations
- Unsupported competitor claims

## Safety Disclaimer Rules
Include the disclaimer where the page discusses sensitive workflows, decisions, or AI handling business-critical processes:

> This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.

For customer-facing communication, money, finance, tax, accounting, legal, HR, medical, lending, underwriting, compliance, private data, or sensitive personal data, recommend:

- Draft-only mode
- Human approval before action
- Limited permissions
- Test data first
- Audit logs
- Escalation rules
- Rollback plan
- Qualified human review

## CTA Rules
- Use the primary CTA URL exactly: `https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`.
- Use clear CTA text such as `Audit My First Workflow`, `Score My Automation Readiness`, `Build My AI Agent Pilot Plan`, or `Find What To Automate First`.
- Keep CTAs visible in the hero or early page body and again near the end.

## Final QA Checklist
Before completing, verify:

- [ ] `JULES.md` and `jules.json` were read.
- [ ] Only the listed `pages/site/*.html` files were created or updated.
- [ ] CSS paths are `../../styles.css`.
- [ ] JS paths are `../../script.js` with `defer`.
- [ ] Every page has exactly one H1 matching the required H1 list.
- [ ] Every page has unique title, meta description, canonical placeholder, OG title, and OG description.
- [ ] Header, nav, CTA band, and footer are consistent.
- [ ] Semantic landmarks are present.
- [ ] CTA links use the correct GPT URL.
- [ ] Internal links work.
- [ ] No fake proof, guarantees, ratings, testimonials, logos, or unsupported claims were added.
- [ ] Banned hype language was avoided.
- [ ] Sensitive-workflow disclaimers are included where relevant.
- [ ] Pages are mobile-friendly and keyboard-accessible.
- [ ] Focus states are visible.
- [ ] Final response summarizes files created, assumptions, and anything that could not be verified.

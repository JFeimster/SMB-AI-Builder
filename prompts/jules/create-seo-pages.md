# Prompt: Create SEO Pages

## Purpose
Create the main SEO content cluster for SMB AI Workflow & Agent Builder.

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

- `pages/seo/best-gpt-for-smb-workflow-automation.html` — H1: `Best GPT for SMB Workflow Automation: Audit Before You Automate`
- `pages/seo/ai-automation-readiness-scorecard.html` — H1: `AI Automation Readiness Scorecard for Small Businesses`
- `pages/seo/how-to-audit-a-workflow-before-automation.html` — H1: `How To Audit a Workflow Before Automating It With AI`
- `pages/seo/ai-agent-pilot-plan-for-small-business.html` — H1: `How To Build a Safe AI Agent Pilot Plan for a Small Business`
- `pages/seo/what-to-automate-first-in-a-small-business.html` — H1: `What Should You Automate First in a Small Business?`
- `pages/seo/human-in-the-loop-ai-workflow.html` — H1: `Human-in-the-Loop AI Workflows for Small Business Automation`
- `pages/seo/ai-agent-blueprint-template.html` — H1: `AI Agent Blueprint Template for SMB Workflow Automation`
- `pages/seo/smb-process-automation-checklist.html` — H1: `SMB Process Automation Checklist: Clean Up Before You Automate`
- `pages/seo/client-onboarding-ai-automation.html` — H1: `Client Onboarding AI Automation: Audit the Workflow First`
- `pages/seo/lead-follow-up-ai-agent.html` — H1: `Lead Follow-Up AI Agent: Plan the Workflow Before You Automate`
- `pages/seo/quote-follow-up-automation.html` — H1: `Quote Follow-Up Automation for SMBs: What To Check First`
- `pages/seo/document-collection-workflow-automation.html` — H1: `Document Collection Workflow Automation: Build a Safer Process First`
- `pages/seo/ai-automation-for-agencies.html` — H1: `AI Automation for Agencies: Use Workflow Discovery Before the Build`
- `pages/seo/ai-automation-discovery-template.html` — H1: `AI Automation Discovery Template for Client and Internal Workflows`
- `pages/seo/custom-gpt-for-business-process-automation.html` — H1: `Custom GPT for Business Process Automation Planning`

Do not create site pages, comparison pages, workflow-specific pages, embed files, OpenAPI docs, or tool docs in this task.

## File Path Rules
- From `pages/seo/*.html`, link CSS as `../../styles.css`.
- From `pages/seo/*.html`, link JS as `../../script.js` with `defer`.
- Use relative internal links that work from `pages/seo/`.
- Update sitemap/index references only if the repo already has a relevant sitemap/index pattern.

## Search Intent Rules
For every page:

- Match the intent behind the query, not just the keyword.
- Make the page useful enough to stand alone.
- Avoid thin doorway pages.
- Avoid copied boilerplate across pages.
- Use concrete workflow planning guidance, checklists, examples, and decision criteria.
- Do not make claims that require evidence unless evidence is present in the repo or source-of-truth files.

## SEO Requirements
Every SEO page needs:

- Unique title
- Unique meta description
- One H1 matching the required H1 list
- Descriptive H2s
- Internal links
- CTA band near the end
- 4 to 6 FAQs
- Article JSON-LD where appropriate
- FAQPage JSON-LD where appropriate

Do not use fake review schema, fake ratings, fake review snippets, or fake aggregateRating data.

## Style Rules
Use the repo style direction:

- Neobrutalist blocks
- Futurist fintech/cyberpunk accents
- Ink black background
- Off-white cards/content blocks
- Acid lime, cyber pink, electric cyan, signal orange, and violet accents
- Thick borders
- Hard offset shadows
- Monospace labels
- Dashboard panels
- Scorecard motifs
- Terminal-style snippets
- High contrast

## Copy Rules
Tone: direct, no-BS, operator-friendly, anti-hype, practical, safety-aware, clear, concise.

Use approved language where natural:

- Stop automating broken workflows.
- Audit the mess before you wire it into your business.
- Score the workflow before AI touches it.
- Know what to automate, what to clean up, and what should stay human.
- Build a pilot plan your business can actually survive.
- Plan the workflow before choosing the tool.

Avoid banned language:

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

## Sensitive-Workflow Disclaimer Rules
Include the disclaimer where the page discusses customer communication, money, finance, tax, accounting, legal, HR, medical, lending, underwriting, compliance, private data, sensitive personal data, document collection, or other business-critical decisions:

> This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.

When sensitive workflows appear, recommend human-in-the-loop design, draft-only mode, limited permissions, test data first, audit logs, escalation rules, rollback plans, and qualified human review.

## CTA Rules
- Use the primary CTA URL exactly: `https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`.
- Use direct CTA text such as `Audit My First Workflow`, `Score My Automation Readiness`, `Build My AI Agent Pilot Plan`, or `Find What To Automate First`.

## Final QA Checklist
Before completing, verify:

- [ ] `JULES.md` and `jules.json` were read.
- [ ] Only the listed `pages/seo/*.html` files were created or updated.
- [ ] CSS paths are `../../styles.css`.
- [ ] JS paths are `../../script.js` with `defer`.
- [ ] Every page has exactly one H1 matching the required H1 list.
- [ ] Every page has unique title and meta description.
- [ ] Each page has useful, intent-aligned content and is not a thin doorway page.
- [ ] Each page includes internal links.
- [ ] Each page includes 4 to 6 FAQs.
- [ ] Article JSON-LD and FAQPage JSON-LD are valid where used.
- [ ] CTA band appears near the end and uses the correct GPT URL.
- [ ] No fake proof, fake ratings, fake reviews, fake schema, guarantees, or unsupported claims were added.
- [ ] Sensitive-workflow disclaimers are included where relevant.
- [ ] Pages are mobile-friendly and accessible.
- [ ] Final response summarizes files created, assumptions, and anything that could not be verified.

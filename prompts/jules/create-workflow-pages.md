# Prompt: Create Workflow Pages

## Purpose
Create workflow-specific SEO pages that help SMBs audit a workflow before automating it with AI.

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

## Target Files
Create or update only these files:

- `pages/seo/workflows/lead-follow-up-workflow-audit.html`
- `pages/seo/workflows/quote-follow-up-workflow-audit.html`
- `pages/seo/workflows/client-onboarding-workflow-audit.html`
- `pages/seo/workflows/document-collection-workflow-audit.html`
- `pages/seo/workflows/invoice-reminder-workflow-audit.html`
- `pages/seo/workflows/crm-task-creation-workflow-audit.html`
- `pages/seo/workflows/faq-response-drafting-workflow-audit.html`
- `pages/seo/workflows/weekly-finance-summary-workflow-audit.html`
- `pages/seo/workflows/proposal-drafting-workflow-audit.html`
- `pages/seo/workflows/internal-status-reporting-workflow-audit.html`

Do not create core site pages, main SEO pages, comparison pages, embed files, OpenAPI docs, or tool docs in this task.

## Required H1 Pattern
Every page must use this H1 pattern:

`Audit Your [Workflow] Before Automating It With AI`

Replace `[Workflow]` with the specific workflow name. Example:

`Audit Your Lead Follow-Up Workflow Before Automating It With AI`

## File Path Rules
- From `pages/seo/workflows/*.html`, link CSS as `../../../styles.css`.
- From `pages/seo/workflows/*.html`, link JS as `../../../script.js` with `defer`.
- Use relative internal links that work from `pages/seo/workflows/`.
- Update sitemap/index references only if the repo already has a relevant sitemap/index pattern.

## Required Sections on Every Workflow Page
Every workflow page must include:

1. Why this workflow is tempting to automate
2. What can go wrong
3. What the GPT checks
4. Readiness factors
5. Small readiness checklist
6. Suggested safe pilot
7. Suggested pilot card
8. Human review checkpoints
9. Human review card
10. CTA
11. FAQ

## SEO Requirements
Every page needs:

- Unique title
- Unique meta description
- One H1 following the required pattern
- Descriptive H2s
- Internal links
- 3 to 5 FAQs
- Article JSON-LD where appropriate
- FAQPage JSON-LD where appropriate

Do not use fake review schema, fake ratings, fake review snippets, or fake aggregateRating data.

## Workflow Safety Requirements
Include sensitive disclaimers for invoice reminders, weekly finance summaries, document collection, customer communication, proposal drafting, and other sensitive workflows.

Use this disclaimer where relevant:

> This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.

For sensitive workflows, recommend:

- Draft-only mode
- Human approval before action
- Limited permissions
- Test data first
- Audit logs
- Escalation rules
- Rollback plan
- Qualified human review

## Style Rules
Use neobrutalist, futurist fintech, cyberpunk-inspired design patterns from `jules.style.md`: thick borders, hard offset shadows, high contrast, dashboard/card panels, scorecard motifs, strong CTA contrast, and monospace labels.

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

## CTA Rules
- Use the primary CTA URL exactly: `https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`.
- Use direct CTA text such as `Audit This Workflow`, `Score My Automation Readiness`, or `Build My AI Agent Pilot Plan`.

## Final QA Checklist
Before completing, verify:

- [ ] `JULES.md` and `jules.json` were read.
- [ ] Only the listed workflow files were created or updated.
- [ ] CSS paths are `../../../styles.css`.
- [ ] JS paths are `../../../script.js` with `defer`.
- [ ] Every page follows the exact H1 pattern.
- [ ] Every page has unique title and meta description.
- [ ] Required sections are present on every page.
- [ ] A small readiness checklist is included.
- [ ] A suggested pilot card is included.
- [ ] A human review card is included.
- [ ] Each page has 3 to 5 FAQs.
- [ ] Article JSON-LD and FAQPage JSON-LD are valid where used.
- [ ] CTA band uses the correct GPT URL.
- [ ] No fake proof, guarantees, fake ratings, fake reviews, fake schema, or unsupported claims were added.
- [ ] Sensitive-workflow disclaimers are included for relevant workflows.
- [ ] Pages are mobile-friendly and accessible.
- [ ] Final response summarizes files created, assumptions, and anything that could not be verified.

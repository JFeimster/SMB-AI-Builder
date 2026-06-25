# Prompt: Create Workflow Pages

**Purpose:** Prompt for workflow-specific SEO pages.

## Pre-requisites
Read `JULES.md` and `jules.json` as source-of-truth files before starting.

## Context
**Project:** SMB AI Workflow & Agent Builder
**Product Description:** SMB AI Workflow & Agent Builder helps small business owners, operators, freelancers, agencies, consultants, and automation builders audit workflows, score automation readiness, identify automation opportunities, design AI-powered workflows, and build safe AI agent pilot plans.
**Primary CTA URL:** https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder

## Target Files and Required H1 Pattern
Create or update the following files exactly as named:
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

**H1 Pattern:** Every page must use this exactly:
`Audit Your [Workflow] Before Automating It With AI`
*(Replace [Workflow] with the specific workflow name, e.g., Lead Follow-Up Workflow)*

## File Path Rules
- From `pages/seo/workflows/*.html`, link CSS as `../../../styles.css`.
- From `pages/seo/workflows/*.html`, link JS as `../../../script.js` with `defer`.

## Required Sections
Every workflow page must include:
1. **Why this workflow is tempting to automate**
2. **What can go wrong**
3. **What the GPT checks**
4. **Readiness factors** (Include a small readiness checklist)
5. **Suggested safe pilot** (Include a suggested pilot card)
6. **Human review checkpoints** (Include a human review card)
7. **CTA**
8. **FAQ** (Include 3 to 5 FAQs)

## Content & SEO Rules
- Include Article JSON-LD and FAQPage JSON-LD where appropriate.
- Include 3 to 5 FAQs per page.
- Tone: Direct, no-BS, operator-friendly, anti-hype, practical, safety-aware.
- **Banned language:** "unlock your potential", "revolutionize your workflow", "seamless experience", "game-changing", "cutting-edge", "transform your business", "leverage AI", "AI-powered magic", "effortless automation", "fully autonomous business".
- **No fake proof / No guarantees:** Do not invent or imply fake testimonials, reviews, case studies, or guarantees.

## Safety Disclaimer Rule
For invoice reminders, weekly finance summaries, document collection, customer communication, proposal drafting, and other sensitive workflows, include the following safety disclaimer:
> This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.

## Final QA Checklist
- [ ] Have you read `JULES.md` and `jules.json`?
- [ ] Have all listed HTML files been created?
- [ ] Does every page follow the exact H1 pattern?
- [ ] Are CSS linked as `../../../styles.css` and JS as `../../../script.js` with `defer`?
- [ ] Is the primary CTA URL correct? (https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder)
- [ ] Are all required sections present (Why tempting, What can go wrong, What GPT checks, Readiness factors, Safe pilot, Human review, CTA, FAQ)?
- [ ] Are Article and FAQPage JSON-LD included where appropriate?
- [ ] Are there 3 to 5 FAQs?
- [ ] Is the content free of fake proof, guarantees, and hype language?
- [ ] Has the sensitive-workflow disclaimer been included for sensitive workflows?
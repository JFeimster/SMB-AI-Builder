# Prompt: Create Comparison Pages

**Purpose:** Prompt for creating balanced comparison pages.

## Pre-requisites
Read `JULES.md` and `jules.json` as source-of-truth files before starting.

## Context
**Project:** SMB AI Workflow & Agent Builder
**Product Description:** SMB AI Workflow & Agent Builder helps small business owners, operators, freelancers, agencies, consultants, and automation builders audit workflows, score automation readiness, identify automation opportunities, design AI-powered workflows, and build safe AI agent pilot plans.
**Primary CTA URL:** https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder

## Target Files and Required H1s
Create or update the following files exactly as named:
- `pages/seo/comparisons/ai-agent-vs-automation-workflow.html` (H1: AI Agent vs Automation Workflow: What Should an SMB Build First?)
- `pages/seo/comparisons/zapier-vs-ai-agent-for-small-business.html` (H1: Zapier vs AI Agent for Small Business: Choose After the Workflow Audit)
- `pages/seo/comparisons/make-vs-ai-agent-workflows.html` (H1: Make vs AI Agent Workflows: Map the Process Before You Build)
- `pages/seo/comparisons/custom-gpt-vs-ai-agent-for-smb.html` (H1: Custom GPT vs AI Agent for SMB Workflows)
- `pages/seo/comparisons/workflow-audit-vs-automation-build.html` (H1: Workflow Audit vs Automation Build: What Comes First?)

## File Path Rules
- From `pages/seo/comparisons/*.html`, link CSS as `../../../styles.css`.
- From `pages/seo/comparisons/*.html`, link JS as `../../../script.js` with `defer`.

## Content & Layout Rules
- **Be balanced:** Do not attack Zapier, Make, Custom GPTs, AI agents, or automation builders.
- **Positioning:** Position this GPT as the planning and readiness layer *before* choosing a build path. Do not claim this product replaces automation tools.
- **Visuals:** Use comparison tables or card grids.
- **Sections:**
  - Include "Use this when..." sections.
  - Include "Audit first when..." sections.
  - Include 4 to 6 FAQs per page.
  - Include a CTA band.

## Anti-Hype & Content Rules
- Tone: Direct, no-BS, operator-friendly, anti-hype, practical, safety-aware.
- **Approved language examples:** "Stop automating broken workflows.", "Audit the mess first.", "Score the workflow before AI touches it.", "Build a pilot plan your business can actually survive."
- **Banned language:** "unlock your potential", "revolutionize your workflow", "seamless experience", "game-changing", "cutting-edge", "transform your business", "leverage AI", "AI-powered magic", "effortless automation", "fully autonomous business".
- **No fake proof:** Do not invent benchmarks, tests, customer results, ratings, feature claims, or direct integrations (unless already natively present in the tool). Do not invent or imply fake testimonials, case studies, partner relationships, etc.

## Safety Disclaimer Rule
Where relevant, include the following safety disclaimer:
> This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.

## Final QA Checklist
- [ ] Have you read `JULES.md` and `jules.json`?
- [ ] Have all listed HTML files been created?
- [ ] Does every page have exactly one H1 matching the required list?
- [ ] Are CSS linked as `../../../styles.css` and JS as `../../../script.js` with `defer`?
- [ ] Is the primary CTA URL correct? (https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder)
- [ ] Are comparison tables or card grids used?
- [ ] Are "Use this when..." and "Audit first when..." sections present?
- [ ] Are there 4 to 6 FAQs and a CTA band?
- [ ] Is the tone balanced, without attacking other tools or claiming the GPT replaces them?
- [ ] Is the content free of fake benchmarks, feature claims, and unsupported integration claims?

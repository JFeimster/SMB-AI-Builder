# Prompt: Create Comparison Pages

## Purpose
Create balanced comparison pages that position SMB AI Workflow & Agent Builder as the planning and readiness layer before a build path is chosen.

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

- `pages/seo/comparisons/ai-agent-vs-automation-workflow.html` — H1: `AI Agent vs Automation Workflow: What Should an SMB Build First?`
- `pages/seo/comparisons/zapier-vs-ai-agent-for-small-business.html` — H1: `Zapier vs AI Agent for Small Business: Choose After the Workflow Audit`
- `pages/seo/comparisons/make-vs-ai-agent-workflows.html` — H1: `Make vs AI Agent Workflows: Map the Process Before You Build`
- `pages/seo/comparisons/custom-gpt-vs-ai-agent-for-smb.html` — H1: `Custom GPT vs AI Agent for SMB Workflows`
- `pages/seo/comparisons/workflow-audit-vs-automation-build.html` — H1: `Workflow Audit vs Automation Build: What Comes First?`

Do not create site pages, main SEO pages, workflow-specific pages, embed files, OpenAPI docs, or tool docs in this task.

## File Path Rules
- From `pages/seo/comparisons/*.html`, link CSS as `../../../styles.css`.
- From `pages/seo/comparisons/*.html`, link JS as `../../../script.js` with `defer`.
- Use relative internal links that work from `pages/seo/comparisons/`.
- Update sitemap/index references only if the repo already has a relevant sitemap/index pattern.

## Comparison Positioning Rules
- Be balanced.
- Do not attack Zapier, Make, Custom GPTs, AI agents, automation builders, no-code tools, or agencies.
- Do not claim direct integrations unless they already exist in the repo or source-of-truth files.
- Do not claim this product replaces automation tools.
- Position this GPT as the planning, audit, scoring, and readiness layer before choosing a build path.
- Do not invent benchmarks, tests, customer results, ratings, feature claims, pricing claims, or integration claims.
- If facts about third-party tools are uncertain, write generally and avoid unsupported specifics.

## Required Page Structure
Every comparison page should include:

- Hero with the required H1
- Short explanation of the decision problem
- Balanced comparison table or card grid
- `Use this when...` sections
- `Audit first when...` sections
- Practical decision checklist
- CTA band
- 4 to 6 FAQs
- Safety disclaimer where relevant

## Metadata and SEO Requirements
Every page needs:

- Unique title
- Unique meta description
- One H1 matching the required H1 list
- Descriptive H2s
- Internal links
- 4 to 6 FAQs
- Article JSON-LD where appropriate
- FAQPage JSON-LD where appropriate

Do not use fake review schema, fake ratings, fake review snippets, or fake aggregateRating data.

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

## Sensitive-Workflow Disclaimer Rules
Include the disclaimer where the comparison touches sensitive workflows, private data, customer communication, finance, legal, HR, medical, lending, underwriting, tax, accounting, or compliance:

> This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.

## CTA Rules
- Use the primary CTA URL exactly: `https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`.
- Use direct CTA text such as `Audit My First Workflow`, `Score My Automation Readiness`, or `Build My AI Agent Pilot Plan`.

## Final QA Checklist
Before completing, verify:

- [ ] `JULES.md` and `jules.json` were read.
- [ ] Only the listed comparison files were created or updated.
- [ ] CSS paths are `../../../styles.css`.
- [ ] JS paths are `../../../script.js` with `defer`.
- [ ] Every page has exactly one H1 matching the required H1 list.
- [ ] Every page has unique title and meta description.
- [ ] Comparison tone is balanced and does not attack other tools.
- [ ] The GPT is positioned as a planning/readiness layer, not a replacement for automation tools.
- [ ] Tables or card grids are included.
- [ ] `Use this when...` and `Audit first when...` sections are included.
- [ ] Each page has 4 to 6 FAQs.
- [ ] CTA band uses the correct GPT URL.
- [ ] No fake proof, fake ratings, fake reviews, fake schema, fake benchmarks, guarantees, or unsupported integration claims were added.
- [ ] Sensitive-workflow disclaimers are included where relevant.
- [ ] Pages are mobile-friendly and accessible.
- [ ] Final response summarizes files created, assumptions, and anything that could not be verified.

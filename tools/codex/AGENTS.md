# AGENTS.md — Codex Repo Instructions

## Project
This repo is for **SMB AI Workflow & Agent Builder**, a Custom GPT launch site and SEO/partner distribution system.

The product helps SMB owners, operators, freelancers, agencies, consultants, and automation builders audit workflows, score automation readiness, identify automation opportunities, design AI-powered workflows, and build practical AI agent pilot plans before wasting money on tools, developers, or overbuilt automation systems.

Primary CTA URL: https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder
Notion resource: https://feimster.notion.site/smb-ai-builder
GitHub resource: https://github.com/JFeimster/SMB-AI-Builder

## Core Positioning
Stop automating broken workflows. Audit the mess first. Score readiness. Pick the safest automation candidate. Build an AI agent pilot plan the business can actually survive.

## Audience
Primary: micro-SMB owners, agency owners, and AI automation builders.
Secondary: freelancers, consultants, creator-operators, lean teams, productized service providers, and operators building internal AI workflows.

## Repo Layout
```txt
/
├── index.html
├── styles.css
├── script.js
├── README.md
├── app/
├── pages/
│   ├── site/
│   ├── seo/
│   │   ├── comparisons/
│   │   └── workflows/
│   ├── seo-support/
│   └── tools/
├── prompts/
│   └── codex/
├── tools/
│   └── codex/
├── embeds/
└── .codex/
```

## Style System
Use the existing neobrutalist + futurist fintech + cyberpunk launch style.

Visual rules:
- Ink black background.
- Off-white content blocks.
- Acid lime, cyber pink, electric cyan, signal orange, and violet accents.
- Thick borders and hard offset shadows.
- Oversized typography and monospace utility labels.
- Dashboard panels, scorecard motifs, and terminal snippets.

Avoid soft corporate SaaS, muted pastel UI, generic AI orb visuals, thin gray cards, and vague enterprise language.

## Copy Rules
Write like a practical, no-BS automation strategist talking to a busy SMB owner.

Use lines like:
- Stop automating broken workflows.
- Audit the mess before you wire it into your business.
- Score the workflow before AI touches it.
- Know what to automate, what to clean up, and what should stay human.
- Build an agent plan your business can actually survive.
- No hype. No tool shopping spiral. Just the next smart workflow.

Avoid:
- unlock your potential
- revolutionize your workflow
- seamless experience
- cutting-edge
- game-changing
- transform your business
- leverage AI

## Claims and Safety Rules
Never invent testimonials, logos, user counts, revenue claims, case studies, guarantees, compliance claims, partner relationships, ratings, or reviews.

For money, lending, legal, tax, HR, accounting, compliance, or sensitive customer-facing workflows, include:

> This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, or compliance advice. Sensitive decisions should stay under qualified human review.

AI should not make final sensitive decisions. Customer-facing workflows should start draft-first with human review.

## Static HTML Requirements
- Use plain HTML, CSS, and vanilla JavaScript.
- No external frameworks unless explicitly requested.
- Use semantic HTML, accessible labels, landmarks, and visible focus states.
- Maintain mobile-first responsive layout.
- Reuse `styles.css` and `script.js`.

Relative paths:
- From `pages/site/*.html`: `../../styles.css`, `../../script.js`
- From `pages/seo/*.html`: `../../styles.css`, `../../script.js`
- From `pages/seo/comparisons/*.html`: `../../../styles.css`, `../../../script.js`
- From `pages/seo/workflows/*.html`: `../../../styles.css`, `../../../script.js`
- From `pages/tools/*.html`: `../../styles.css`, `../../script.js`

## Next.js App Router Requirements
- Use `app/page.tsx`, `app/layout.tsx`, and `app/globals.css` conventions.
- Use accessible JSX.
- Avoid unnecessary client components.
- Use `"use client"` only when interactivity requires it.
- Keep metadata in `layout.tsx` or page-level `metadata` exports.
- Do not add heavy dependencies unless requested.

## SEO Requirements
Every SEO page should include unique title, unique meta description, one H1, useful H2 hierarchy, internal links, CTA band, FAQ section, JSON-LD where useful, and no fake review/rating schema.

## Workflow SEO Page Format
```txt
H1: Audit Your [Workflow] Before Automating It With AI

Sections:
- Why this workflow is tempting to automate
- What can go wrong
- What the GPT checks
- Readiness factors
- Suggested safe pilot
- Human review checkpoints
- CTA
```

## Done Means
Before finishing a task, verify:
- Requested files exist.
- Links and relative paths are correct.
- The primary CTA uses the GPT launch URL.
- Copy is specific and anti-hype.
- No unsupported claims were introduced.
- Sensitive workflows include review/disclaimer language.
- HTML is semantic and mobile-friendly.
- JSON/XML is valid when added.

## Codex Operating Guidance
For complex changes:
1. Read this file first.
2. Inspect relevant existing files before editing.
3. Make a short plan.
4. Implement the smallest useful change.
5. Run available checks or perform a manual QA pass.
6. Summarize changed files and unresolved risks.

Do not rewrite the entire project unless explicitly asked.

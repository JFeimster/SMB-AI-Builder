You are working inside the `smb-ai-builder` repo.

Create a dedicated ChatGPT tool-ops layer.

Create these files:

tools/chatgpt/
├── README.md
├── chatgpt-agent-profile.md
├── chatgpt-project-context.md
├── chatgpt-prompt-library.md
├── chatgpt-custom-gpt-notes.md
├── chatgpt-copy-rules.md
├── chatgpt-seo-rules.md
├── chatgpt-page-generation-rules.md
├── chatgpt-embed-generation-rules.md
├── chatgpt-qa-checklist.md
├── chatgpt-conversation-starters.md
├── chatgpt-output-formats.md
└── chatgpt-changelog.md

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

Purpose:
Create a durable tool-ops layer for using ChatGPT to generate, revise, QA, and expand the SMB AI Builder static site, SEO pages, partner embeds, prompt libraries, and documentation.

General rules:
- Do not invent testimonials, logos, ratings, user counts, revenue claims, compliance claims, case studies, or guarantees.
- Do not claim the GPT gives legal, financial, tax, HR, lending, accounting, or compliance advice.
- Use practical, direct, operator-friendly language.
- Avoid vague AI phrases like “unlock your potential,” “revolutionize,” “seamless,” “cutting-edge,” “game-changing,” and “transform your business.”
- Keep CTAs obvious and linked to the primary GPT URL.
- Use the neobrutalist + futurist fintech + cyberpunk brand direction.

File requirements:

1. tools/chatgpt/README.md
Explain what the ChatGPT layer is for, how to use it, and which files to reference before prompting ChatGPT.

2. tools/chatgpt/chatgpt-agent-profile.md
Describe the desired ChatGPT behavior:
- Landing page strategist
- Static site builder
- SEO page generator
- Partner embed planner
- QA reviewer
- Anti-hype copy editor

3. tools/chatgpt/chatgpt-project-context.md
Create reusable product context, audience, offer, CTA links, tone, safety stance, and visual style.

4. tools/chatgpt/chatgpt-prompt-library.md
Create prompt templates for:
- Landing page revision
- SEO page generation
- Workflow page generation
- Comparison page generation
- Embed package generation
- README generation
- QA pass
- Copy tightening
- Accessibility pass
- Schema review

5. tools/chatgpt/chatgpt-custom-gpt-notes.md
Document notes specific to the Custom GPT:
- What it does
- What inputs it accepts
- What outputs it produces
- What it should not overclaim
- Sensitive workflow disclaimer language

6. tools/chatgpt/chatgpt-copy-rules.md
Create copywriting rules:
- Direct
- Punchy
- SMB-friendly
- Anti-hype
- Outcome-focused
- Workflow-first
- Safety-aware

7. tools/chatgpt/chatgpt-seo-rules.md
Create SEO generation rules:
- Unique H1
- Unique title/meta
- Useful content
- Internal links
- FAQ section
- Schema when appropriate
- No fake review schema

8. tools/chatgpt/chatgpt-page-generation-rules.md
Document page generation standards for static HTML and Next.js App Router.

9. tools/chatgpt/chatgpt-embed-generation-rules.md
Document rules for partner embeds:
- 940px max width
- 1200px max height
- Partner attribution
- Static config is not real access control
- CTA tracking with ref/UTM params

10. tools/chatgpt/chatgpt-qa-checklist.md
Create a QA checklist for copy, links, SEO, accessibility, mobile layout, embeds, and disclaimers.

11. tools/chatgpt/chatgpt-conversation-starters.md
Create useful starter prompts for the project owner.

12. tools/chatgpt/chatgpt-output-formats.md
Define preferred output formats:
- Strategy brief
- Wireframe
- Copy deck
- Static files
- SEO package
- Embed package
- QA report

13. tools/chatgpt/chatgpt-changelog.md
Create a simple changelog template.

Final QA:
- Confirm all files exist in `tools/chatgpt/`.
- Confirm no unsupported proof claims were added.
- Confirm GPT, Notion, and GitHub URLs are included where useful.
- Confirm the layer is practical for ongoing ChatGPT-assisted site expansion.

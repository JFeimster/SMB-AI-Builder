# GitHub Copilot Instructions for SMB AI Builder

Note: `tools/copilot/` files are extended reference docs, but the enforceable auto-loaded instructions are in `.github/copilot-instructions.md`.

## Project Purpose
The SMB AI Workflow & Agent Builder helps users audit business workflows, score readiness, rank automation opportunities, and build safe AI agent pilot plans.

Primary CTA URL: https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder

## Core Rules (Strict Enforcement)
- **No fake proof:** Never invent fake testimonials, reviews, metrics, logos, or ratings.
- **No unsupported claims:** Do not invent benchmarks, direct integrations, or unsupported compliance claims.
- **Tone and content:** Use direct, anti-hype, operator-friendly language. Avoid vague AI buzzwords like 'unlock your potential', 'revolutionize your workflow', 'seamless experience', 'game-changing', 'cutting-edge', 'transform your business', and 'leverage AI'.
- **Secrets:** Never commit or include secrets, API keys, private tokens, or real environment variables.
- **Disclaimers:** For sensitive workflows (customer-facing, money, compliance), ALWAYS recommend safeguards. Visibly include the disclaimer near relevant CTA sections: "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review."
- **CTA URL mapping:** Map GPT launch CTAs to ChatGPT, resource CTAs to Notion, and repo CTAs to GitHub.
- **Final QA before PR:** Run final checks on paths, claims, and links.

## Folder Map & Architecture
- `/`: Static assets, root HTML/CSS/JS files.
- `app/`: Next.js App Router specific files (if using hybrid setup).
- `pages/seo/`: SEO landing pages (must be static HTML).
- `pages/tools/`: Public-facing tool pages.
- `tools/`: Internal ops, workflows, templates, rules, including this directory.
- `prompts/jules/`: AI prompt libraries.
- `docs/knowledge-files/`: Self-contained demo code assets.
- Base relative paths on directory depth.

## Coding Style & Standards

### HTML/CSS/JS Standards
- Keep static files lightweight and simple.
- Use plain semantic HTML. Mobile-first layouts. Exactly one H1 per page.
- Reuse existing root `styles.css` and `script.js` without adding external frameworks.
- Design Aesthetic: Neobrutalist, futurist fintech, and cyberpunk. Use high contrast, thick borders, hard offset shadows, ink black backgrounds, and vivid accent colors.

### Next.js Standards
- Follow App Router conventions when working in the `app/` directory.

### SEO Standards
- Unique titles and meta descriptions.
- Descriptive H2s.
- Valid JSON-LD schema (`Article` and `FAQPage`).
- Must include a consistent header/nav/footer, 4-6 FAQs per page, and a CTA band near the end.
- All canonical URLs, Open Graph URLs (`og:url`), and Open Graph image URLs (`og:image`) must use absolute paths pointing to `https://smb-ai-builder.vercel.app`.

### Accessibility Standards
- Accessible HTML, clear semantics.
- Accessible CTA links.
- Visible focus states.
- High color contrast conforming to the brand system.

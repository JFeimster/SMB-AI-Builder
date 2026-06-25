# GitHub Copilot Instructions for SMB AI Builder

Note: `tools/copilot/` files are extended reference docs, but the enforceable auto-loaded instructions are in `.github/copilot-instructions.md`.

## Project Purpose
The SMB AI Workflow & Agent Builder helps users audit business workflows, score readiness, rank automation opportunities, and build safe AI agent pilot plans.

Primary CTA URL: https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder
Notion Resource URL: https://feimster.notion.site/smb-ai-builder
GitHub Repo URL: https://github.com/JFeimster/SMB-AI-Builder

## Core Rules (Strict Enforcement)
- **No fake proof:** Never invent fake testimonials, reviews, metrics, logos, ratings, customer counts, partner claims, case studies, benchmarks, or compliance proof.
- **No unsupported claims:** Do not invent benchmarks, direct integrations, certifications, or unsupported compliance claims.
- **Tone and content:** Use direct, anti-hype, operator-friendly language. Avoid vague AI buzzwords like 'unlock your potential', 'revolutionize your workflow', 'seamless experience', 'game-changing', 'cutting-edge', 'transform your business', and 'leverage AI'.
- **Secrets:** Never commit or include secrets, API keys, private tokens, private Vercel IDs, or real environment variables.
- **Sensitive workflows:** If a page, prompt, template, schema, embed, or document touches money, finance, billing, payment, private data, sensitive personal data, customer communication, document collection, legal, HR, medical, lending, underwriting, accounting, tax, compliance, client onboarding, customer support, refunds, pricing, business-critical decisions, or any workflow where an incorrect automated action could create customer, financial, legal, operational, or reputational risk, visibly include this disclaimer near the relevant safety, human review, or CTA section: "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review."
- **CTA URL mapping:** GPT launch/audit CTAs point to the ChatGPT GPT URL. Resource/builder CTAs point to the Notion resource URL. Repo/source CTAs point to the GitHub repo URL.
- **Final QA before PR:** Run final checks on paths, claims, disclaimers, schema, accessibility, and links before opening or updating a PR.

## Folder Map & Architecture
- `/`: Static assets, root HTML/CSS/JS files.
- `app/`: Next.js App Router specific files when using the hybrid setup.
- `pages/seo/`: SEO landing pages and workflow/comparison pages.
- `pages/tools/`: Public-facing tool pages.
- `tools/`: Internal ops, workflows, templates, and tool-specific rules.
- `prompts/jules/`: AI prompt libraries.
- `docs/knowledge-files/`: Self-contained demo code assets.

## Path Depth Rules
- From `pages/seo/`: Home is `../../index.html`.
- From `pages/seo/workflows/*.html` to another workflow page in the same folder, use `[file].html` or `./[file].html`.
- From `pages/seo/workflows/*.html` to a general SEO page, use `../[file].html`.
- From `pages/seo/workflows/*.html` to a comparison page, use `../comparisons/[file].html`.
- From `pages/seo/workflows/*.html` to home, use `../../../index.html`.
- From `pages/seo/workflows/*.html` to `pages/site/`, use `../../site/[file].html`.

## Coding Style & Standards

### HTML/CSS/JS Standards
- Keep static files lightweight and simple.
- Use plain semantic HTML. Mobile-first layouts. Exactly one H1 per page.
- Reuse existing root `styles.css` and `script.js` without adding external frameworks.
- Design aesthetic: neobrutalist, futurist fintech, and cyberpunk. Use high contrast, thick borders, hard offset shadows, ink black backgrounds, and vivid accent colors.

### Next.js Standards
- Follow App Router conventions when working in the `app/` directory.
- Do not add runtime dependencies unless the App Router files actually require them.

### SEO Standards
- Unique titles and meta descriptions.
- Descriptive H2s.
- Valid JSON-LD schema (`Article` and `FAQPage`).
- General SEO and comparison pages should include 4-6 FAQs.
- Workflow audit pages under `pages/seo/workflows/` should include 3-5 FAQs.
- Must include a consistent header/nav/footer and a CTA band near the end.
- All canonical URLs, Open Graph URLs (`og:url`), and Open Graph image URLs (`og:image`) must use absolute paths pointing to `https://smb-ai-builder.vercel.app`.

### Accessibility Standards
- Accessible HTML, clear semantics.
- Accessible CTA links.
- Visible focus states.
- High color contrast conforming to the brand system.

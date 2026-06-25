# SEO Generation Rules

When generating content for the SEO pages (e.g., in `pages/seo/`), adhere strictly to these structural and technical rules.

## 1. Meta Data & Headings
- **Unique Title Tag:** Must be descriptive, under 60 characters, and relevant to the specific workflow or topic.
- **Unique Meta Description:** Must be action-oriented, under 155 characters, and explain *why* the user should click (e.g., "Score your automation readiness before you build").
- **Single H1 Rule:** Every page must have exactly ONE `<h1>` tag.
  - For workflow pages, the H1 format MUST be: `"Audit Your [Workflow] Before Automating It With AI"`.
- **Logical Heading Hierarchy:** Use `<h2>` and `<h3>` tags to logically structure the document. Do not skip heading levels.

## 2. Content Structure (Workflow Pages)
Every workflow audit page must include these specific sections:
- **Why it's tempting to automate:** The pain points driving the desire.
- **What can go wrong:** The risks of naive automation (hallucinations, breaking edge cases).
- **What the GPT checks:** The specific factors our tool will audit.
- **Readiness factors:** A checklist of what makes this process ready (or not ready) for AI.
- **Suggested safe pilot:** A concrete, low-risk way to test automation (e.g., Draft-only mode).
- **Human review checkpoints:** Exactly where a human must stay in the loop.

## 3. FAQs
- **Requirement:** Every SEO page MUST include 4-6 relevant Frequently Asked Questions.
- **Tone:** Answer directly and practically. Do not invent features or claim the tool does the building.

## 4. Internal Linking
- Base relative paths on directory depth.
  - From `pages/seo/` (2 levels deep): Home is `../../index.html`.
  - From `pages/seo/workflows/*.html` to another workflow page in the same folder, use `[file].html` or `./[file].html`.
  - From `pages/seo/workflows/*.html` to a general SEO page, use `../[file].html`.
  - From `pages/seo/workflows/*.html` to a comparison page, use `../comparisons/[file].html`.
  - From `pages/seo/workflows/*.html` to home, use `../../../index.html`.
  - From `pages/seo/workflows/*.html` to `pages/site/`, use `../../site/[file].html`.
- Always include consistent global navigation (Header/Footer links).

## 5. Schema (JSON-LD)
- **Requirement:** Include valid JSON-LD schema for `Article` and `FAQPage` where applicable.
- **Strict Prohibition:** NEVER generate or include fake `Review`, `AggregateRating`, or `Product` rating schemas.
- **URLs:** All canonical URLs in schema must point to the absolute production path: `https://smb-ai-builder.vercel.app`.

## 6. CTAs and Disclaimers
- **CTA Band:** Include a dedicated CTA section near the bottom of the page linking to the Primary GPT URL.
- **Sensitive Workflows:** If the page discusses money, finance, billing, payment, private data, sensitive personal data, customer communication, document collection, legal, HR, medical, lending, underwriting, accounting, tax, compliance, client onboarding, customer support, refunds, pricing, business-critical decisions, or any workflow where an incorrect automated action could create customer, financial, legal, operational, or reputational risk, the exact sensitive workflow disclaimer MUST be present visibly near the safety, human review, or CTA section.
  > "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review."
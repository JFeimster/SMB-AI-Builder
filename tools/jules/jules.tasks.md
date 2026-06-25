# Jules Task Library

## Create Static Site Page
- **Purpose:** To create a standard static HTML page.
- **Inputs Jules needs:** Page topic, required sections, target folder.
- **Output files:** Static HTML file (e.g., `pages/site/about.html`).
- **Required checks:** Ensure `styles.css` and `script.js` are correctly linked via relative paths; semantic HTML used; accessible CTA included.
- **Common mistakes to avoid:** Burying CTAs, missing focus states, using external CSS frameworks when not requested.

## Create SEO Guide Page
- **Purpose:** To create search-intent aligned, genuinely useful SEO pages.
- **Inputs Jules needs:** Target keyword, core intent, internal links to include.
- **Output files:** SEO HTML file (e.g., `pages/seo/keyword-guide.html`).
- **Required checks:** Unique title and meta description; one H1; descriptive H2s; inclusion of JSON-LD schema; CTA band.
- **Common mistakes to avoid:** Thin doorway pages, fake ratings/reviews in schema, multiple H1s.

## Create Workflow Audit Page
- **Purpose:** To create a page aimed at auditing and scoring workflow automation readiness.
- **Inputs Jules needs:** Workflow type (e.g., CRM follow-up, Document collection), specific steps.
- **Output files:** Workflow HTML file (e.g., `pages/seo/workflows/document-collection.html`).
- **Required checks:** Include the sensitive workflow disclaimer; focus on readiness score and "audit before automate" positioning.
- **Common mistakes to avoid:** Using hype words ("effortless automation", "fully autonomous"); guaranteeing outcomes.

## Create Comparison Page
- **Purpose:** To objectively compare tools or workflows against each other.
- **Inputs Jules needs:** Tools/workflows to compare, objective criteria.
- **Output files:** Comparison HTML file (e.g., `pages/seo/comparisons/tool-a-vs-tool-b.html`).
- **Required checks:** No unsupported competitor claims; no fake integrations or fake benchmarks.
- **Common mistakes to avoid:** Bashing competitors unfairly, inventing fake facts or features.

## Create Partner Embed
- **Purpose:** To create reusable embeddable components for partners.
- **Inputs Jules needs:** Partner context, visual boundaries, embed functionality requirements.
- **Output files:** Embed HTML/JS file (e.g., `embeds/partner-widget.html`).
- **Required checks:** Neobrutalist design adherence, isolation from external site styles, accessible structure.
- **Common mistakes to avoid:** Forgetting mobile-responsiveness, trapping focus within the embed.

## Create OpenAPI Action Docs
- **Purpose:** To document no-auth GPT Actions clearly for developers or users.
- **Inputs Jules needs:** Action route, OpenAPI schema, purpose, input/output structures.
- **Output files:** Markdown doc (e.g., `docs/actions/action-name.md`).
- **Required checks:** Verify against OpenAPI schema for accuracy; include safe sample data.
- **Common mistakes to avoid:** Including sensitive data in examples; omitting required schema properties.

## Run Accessibility Pass
- **Purpose:** To ensure the existing or newly created pages are fully accessible.
- **Inputs Jules needs:** List of files to review.
- **Output files:** Modified HTML/CSS/JS files.
- **Required checks:** Semantic landmarks, descriptive links, keyboard navigation, sufficient contrast, ARIA only where needed.
- **Common mistakes to avoid:** Using `div`s for interactive elements, missing `alt` tags on meaningful images.

## Run Conversion Copy Pass
- **Purpose:** To update the copy to ensure it follows the anti-hype, operator-friendly voice and tone.
- **Inputs Jules needs:** Files or text to review.
- **Output files:** Modified HTML/Markdown files.
- **Required checks:** Remove any banned language ("revolutionize", "seamless", "game-changing"); ensure approved language is prioritized.
- **Common mistakes to avoid:** Adding fake social proof (testimonials, numbers) to boost conversion.

## Run SEO QA
- **Purpose:** To verify all SEO best practices are followed across SEO pages.
- **Inputs Jules needs:** List of SEO pages (`pages/seo/*`).
- **Output files:** Modified HTML pages or a QA report.
- **Required checks:** Unique metadata per page, exact one H1, descriptive H2s, proper internal linking structure, valid JSON-LD schema without fake proof.
- **Common mistakes to avoid:** Duplicating meta descriptions, using fake review schema.

## Run Deployment Readiness Check
- **Purpose:** To verify all rules, structures, and schemas are ready for deployment (e.g., to Vercel).
- **Inputs Jules needs:** The entire project state.
- **Output files:** A final deployment checklist or report.
- **Required checks:** Ensure `vercel.json` is correctly configured; no customer data or secrets are present; all local relative paths resolve correctly.
- **Common mistakes to avoid:** Forgetting to update placeholder Vercel URLs; committing `.env` files or API keys.

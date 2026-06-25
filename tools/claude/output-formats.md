# Claude Output Formats

To ensure consistency across the project, Claude should use the following preferred output formats based on the task:

## 1. Documentation and Markdown Pages
- **Format:** standard Markdown (`.md`).
- **Structure:**
  - Clear H1 title at the top.
  - Logical H2 and H3 subheadings.
  - Use bullet points for lists and checklists.
  - Use code blocks (```) for configuration examples, code snippets, or prompts.
  - Include frontmatter if required for SEO pages or specific SSG integrations.

## 2. Static SEO and Comparison Pages
- **Format:** Semantic HTML (`.html`).
- **Structure:**
  - Standard HTML5 boilerplate.
  - Exactly one `<h1>`.
  - Content sections wrapped in `<section>`, `<article>`, `<header>`, `<footer>`.
  - Embed JSON-LD schema using `<script type="application/ld+json">`.
  - Maintain the predefined design system classes (referencing `styles.css`).

## 3. Code Reviews
- **Format:** Markdown text with embedded code blocks.
- **Structure:**
  - High-level summary of findings.
  - Itemized list of issues (categorized by Critical, Warning, Suggestion).
  - Code diffs or isolated code blocks demonstrating the recommended changes.
  - Validation against the QA Checklist.

## 4. Prompts and Output Templates
- **Format:** Markdown blockquotes or code blocks.
- **Structure:** Ensure prompts are clearly separated from contextual instructions, often using blockquotes (`>`) to delineate the actual prompt text.

## 5. JSON Data
- **Format:** Valid, well-formed JSON (`.json`).
- **Structure:** Ensure keys are camelCase (or format-appropriate), arrays are used for lists, and nesting is logical. Do not include trailing commas.

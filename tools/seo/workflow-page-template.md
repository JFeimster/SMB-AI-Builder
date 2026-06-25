# Workflow Page Template

Use this template for creating workflow audit pages located in `pages/seo/workflows/`. These pages must be static HTML.

## Requirements
- **H1 Format:** 'Audit Your [Workflow] Before Automating It With AI'
- **Sections:** Must include specific sections detailed below.
- **FAQs:** 3-5 FAQs required per page.
- **Safety:** For sensitive workflows (finance, HR, compliance), explicitly include the disclaimer below.

## Required Disclaimer (For Sensitive Workflows)
> "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review."

## Template Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audit Your [Workflow] | SMB AI Builder</title>
    <meta name="description" content="Audit your [Workflow] before automating it. Review readiness, risks, and human-in-the-loop safeguards.">
    <!-- Include OG Meta and Canonical tags -->
    <link rel="stylesheet" href="../../../styles.css">
    <!-- Include Schema.org JSON-LD -->
</head>
<body>
    <!-- Global Header -->
    <header>...</header>

    <main>
        <article class="workflow-audit">
            <!-- Exactly one H1 -->
            <h1>Audit Your [Workflow] Before Automating It With AI</h1>

            <section class="section-temptation">
                <h2>Why this workflow is tempting to automate</h2>
                <p>[Explain the pain points, repetitive nature, or time cost that makes this an attractive target for automation.]</p>
            </section>

            <section class="section-risks">
                <h2>What can go wrong</h2>
                <p>[Detail the potential failures: edge cases, lack of context, brand damage, compliance risks.]</p>
            </section>

            <section class="section-checks">
                <h2>What the GPT checks</h2>
                <p>[List the specific parameters, data inputs, and system dependencies the AI audit will review for this workflow.]</p>
            </section>

            <section class="section-readiness">
                <h2>Readiness factors</h2>
                <ul>
                    <li>[Factor 1 e.g., Data cleanliness]</li>
                    <li>[Factor 2 e.g., Process standardization]</li>
                    <li>[Factor 3 e.g., Existing software stack]</li>
                </ul>
            </section>

            <section class="section-pilot">
                <h2>Suggested safe pilot</h2>
                <p>[Describe a low-risk, scoped pilot approach (e.g., Draft-only AI assist).]</p>
            </section>

            <section class="section-review">
                <h2>Human review checkpoints</h2>
                <p>[Specify exactly where and when a human must verify the AI's work before action is taken.]</p>
            </section>

            <section class="faqs">
                <h2>Frequently Asked Questions</h2>
                <!-- Requires 3-5 FAQs -->
                <details>
                    <summary>[Specific Workflow FAQ 1]?</summary>
                    <p>[Answer]</p>
                </details>
                <!-- ... -->
            </section>

            <!-- CTA Band -->
            <section class="cta-band">
                <h2>Build Your AI Agent Pilot Plan</h2>
                <p>Don't guess. Audit this workflow and build a safe automation plan.</p>
                <a href="https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder" class="button cta-primary" target="_blank" rel="noopener">Audit My First Workflow</a>
            </section>

            <!-- Insert Disclaimer here if workflow is sensitive -->

        </article>
    </main>

    <!-- Global Footer -->
    <footer>...</footer>
    <script src="../../../script.js"></script>
</body>
</html>
```

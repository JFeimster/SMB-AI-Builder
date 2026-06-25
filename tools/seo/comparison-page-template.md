# Comparison Page Template

Use this template for creating comparison pages (e.g., comparing tools, methods, or approaches) located in `pages/seo/comparisons/`.

## Rules
- **Must be balanced:** Framed as a decision guide.
- **No attacks:** Never attack competitors (e.g., Zapier, Make, etc.).
- **Positioning:** Position the GPT as a planning/readiness layer *before* building with these tools.
- **No invention:** Do not invent benchmarks, direct integrations, or unsupported claims.
- **Required Sections:** 'Use this when...', 'Audit first when...', Comparison table/card grid, CTA band, 4-6 FAQs.

## Template Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Tool A] vs [Tool B] | Planning Your AI Automation | SMB AI Builder</title>
    <meta name="description" content="Compare [Tool A] and [Tool B] for SMB workflow automation. Learn when to use each and why you should audit your workflow before building.">
    <!-- Include OG Meta and Canonical tags -->
    <link rel="stylesheet" href="../../../styles.css">
</head>
<body>
    <header>...</header>

    <main>
        <article class="comparison-guide">
            <h1>[Tool A] vs [Tool B]: Choosing the Right Automation Path</h1>

            <section class="intro">
                <p>[Objective introduction defining both tools/approaches and the common dilemma for SMBs.]</p>
            </section>

            <section class="comparison-grid">
                <h2>Feature Comparison</h2>
                <!-- Use a table or CSS grid of cards -->
                <table>
                    <thead>
                        <tr>
                            <th>Feature / Need</th>
                            <th>[Tool A]</th>
                            <th>[Tool B]</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>[Criteria 1]</td>
                            <td>[Factual description]</td>
                            <td>[Factual description]</td>
                        </tr>
                        <!-- ... -->
                    </tbody>
                </table>
            </section>

            <section class="use-when">
                <h2>Use [Tool A] when...</h2>
                <ul>
                    <li>[Scenario 1]</li>
                    <li>[Scenario 2]</li>
                </ul>

                <h2>Use [Tool B] when...</h2>
                <ul>
                    <li>[Scenario 3]</li>
                    <li>[Scenario 4]</li>
                </ul>
            </section>

            <section class="audit-first">
                <h2>Audit first when...</h2>
                <p>Before committing to either tool, you must understand your workflow's readiness. Audit first when:</p>
                <ul>
                    <li>The process involves sensitive customer data.
                    <li>The current manual process is undocumented or inconsistent.
                    <li>You are unsure of the edge cases.
                </ul>
                <p>Our GPT acts as the planning layer to help you define these requirements before you start building in [Tool A] or [Tool B].</p>
            </section>

            <section class="faqs">
                <h2>Frequently Asked Questions</h2>
                <!-- Requires 4-6 FAQs -->
                <details>
                    <summary>Can I integrate [Tool A] with the SMB AI Builder?</summary>
                    <p>The SMB AI Builder is a planning and auditing tool. It helps you design the blueprint that you will then execute using tools like [Tool A].</p>
                </details>
                <!-- ... -->
            </section>

            <!-- CTA Band -->
            <section class="cta-band">
                <h2>Plan Before You Build</h2>
                <p>Don't waste time building the wrong automation. Score your readiness first.</p>
                <a href="https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder" class="button cta-primary" target="_blank" rel="noopener">Find What To Automate First</a>
            </section>
        </article>
    </main>

    <footer>...</footer>
    <script src="../../../script.js"></script>
</body>
</html>
```

# General SEO Page Template

Use this template for creating general SEO content pages (guides, how-tos, concepts) located in `pages/seo/`.

## Requirements
- **Tone:** Direct, practical, anti-hype.
- **H1:** Exactly one descriptive H1 per page.
- **FAQs:** 4-6 FAQs required per page.
- **CTA:** Consistent CTA band near the end of the content.
- **Layout:** Standard semantic HTML with consistent header/nav/footer.

## Template Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Unique Keyword Optimized Title | SMB AI Builder]</title>
    <meta name="description" content="[Descriptive meta description focusing on value and problem-solving.]">
    <!-- Include OG Meta and Canonical tags as per metadata-rules.md -->
    <link rel="stylesheet" href="../../styles.css">
    <!-- Include Schema.org JSON-LD as per schema-rules.md -->
</head>
<body>
    <!-- Global Header -->
    <header>...</header>

    <main>
        <article>
            <!-- Exactly one H1 -->
            <h1>[Primary Keyword Driven Title]</h1>

            <section class="intro">
                <p>[Direct, practical introduction to the problem and solution. Set the stage.]</p>
            </section>

            <section class="content-body">
                <h2>[Descriptive H2: Core Concept 1]</h2>
                <p>[Practical, operator-friendly details, checklists, or steps.]</p>

                <h2>[Descriptive H2: Core Concept 2]</h2>
                <p>[Details...]</p>
            </section>

            <section class="faqs">
                <h2>Frequently Asked Questions</h2>
                <!-- Requires 4-6 FAQs, ideally wrapped in proper semantic tags and paired with FAQPage schema -->
                <details>
                    <summary>Question 1?</summary>
                    <p>Direct answer.</p>
                </details>
                <!-- ... -->
            </section>

            <!-- CTA Band -->
            <section class="cta-band">
                <h2>Ready to audit your setup?</h2>
                <p>Score your readiness before AI touches your business.</p>
                <a href="https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder" class="button cta-primary" target="_blank" rel="noopener">Score My Automation Readiness</a>
            </section>
        </article>
    </main>

    <!-- Global Footer -->
    <footer>...</footer>
    <script src="../../script.js"></script>
</body>
</html>
```

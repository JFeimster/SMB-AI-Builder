# Page Patterns

This outlines the standard sequence of sections for various page types within the SMB AI Builder ecosystem.

## Landing Page (Root `index.html`)

The primary conversion engine. Must be loud, build trust immediately, and drive the user to the GPT or primary tool.

1.  **Site Header:** Sticky, clear branding, prominent CTA.
2.  **Hero Cockpit:** Huge H1, strong subhead, primary CTA, trust microcopy, and a visually striking right-side panel (the "cockpit" or "dashboard" mockup).
3.  **Trust Strip:** Social proof, user stats, or partner logos.
4.  **Value Proposition (Bento Grid):** 3-5 cards explaining *why* this builder exists (e.g., "Stop building blind," "Test before you pay").
5.  **Interactive Preview (e.g., Readiness Score):** A visual representation of the tool's output to build intrigue.
6.  **Use Cases / Workflows Matrix:** A grid or list showing exactly what kinds of processes can be automated.
7.  **Safety & Risk Section (Warning Board):** Crucial for SMBs. Explain what *not* to automate without a human in the loop.
8.  **FAQ Accordion:** Address common objections (cost, technical skill required, security).
9.  **Final CTA Band:** Massive, high-contrast section repeating the main call to action.
10. **Site Footer:** Links, legal, plain English copyright.

## Core Site Page (e.g., `privacy.html`, `terms.html`)

Focused on readability over flashiness, but retaining the brand borders and typography.

1.  **Site Header**
2.  **Simple Hero:** Centered H1, brief lede paragraph. Minimal background styling.
3.  **Content Shell:** A narrow, readable column (e.g., max-width 800px) for standard markdown-style content.
4.  **Site Footer**

## SEO Guide / Workflow Page

Educational content designed to rank, but structured as a practical, operator-focused guide rather than a generic blog post.

1.  **Site Header**
2.  **Guide Hero:** H1 containing the target keyword (e.g., "Audit Your [Workflow] Before Automating"). Explicitly state *who* this is for.
3.  **The 'Why It's Tempting' Section:** Acknowledge the pain point.
4.  **The 'What Can Go Wrong' Warning:** A `.warning-board` explaining the risks of automating this specific workflow blindly.
5.  **Readiness Factors / Checklist:** Actionable items the user must have in place before starting.
6.  **Suggested Safe Pilot:** A `.blueprint-card` outlining a low-risk way to test the automation.
7.  **In-Content CTA:** A banner driving to the GPT to score their specific setup.
8.  **FAQ Section:** 3-5 specific questions about this workflow.
9.  **Site Footer**

## Comparison Page

Framed as a readiness/decision guide, never attacking competitors.

1.  **Site Header**
2.  **Hero:** "When to use [Tool] vs. [Tool]".
3.  **'Use this when...' Section:** Clear, bulleted criteria for Tool A.
4.  **'Use that when...' Section:** Clear, bulleted criteria for Tool B.
5.  **'Audit first when...' Section:** Why they should use the SMB AI Builder *before* choosing either tool.
6.  **Comparison Table:** A `.matrix-table` comparing features, not opinions.
7.  **CTA Band**
8.  **FAQ Section**
9.  **Site Footer**

## Partner Embed

A stripped-down version of the tool designed to live inside an iframe on another site.

1.  **No Header/Footer:** Hide standard site navigation.
2.  **Tight Layout:** Reduce padding and margins (`.section` padding is much smaller).
3.  **Single Focus:** Usually just a form input leading directly to a `.scorecard-layout` or `.blueprint-card`.
4.  **Clear Attribution:** "Powered by SMB AI Builder" link.

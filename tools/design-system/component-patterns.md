# Component Patterns

This document outlines the core reusable UI components.

## Hero Cockpit

*   **Usage:** The primary visual element in the hero section.
*   **Structure:** A panel (`.cockpit-panel`) containing a mock UI of the automation tool. Often includes a toolbar (`.panel-toolbar`) with colored dots (`.dot`), a giant score (`.giant-score`), readiness bars, and a terminal snippet.
*   **Style:** Usually features a dark gradient background, rotated slightly, with heavy shadows.

## Scorecard

*   **Usage:** Displays the calculated automation readiness score.
*   **Structure:** A dark card (`.score-table-card`) outlining the criteria and the final score. Often accompanied by colored bands (`.band-danger`, `.band-warning`, etc.) to indicate the readiness tier.

## Automation Matrix

*   **Usage:** Ranks workflows based on impact and effort.
*   **Structure:** A horizontally scrollable table (`.matrix-table`) with clear headings and tags (`.matrix-tag`) indicating the recommended action (Automate Now, Clean Up First, etc.).

## Blueprint Card

*   **Usage:** Presents a specific automation plan or architecture.
*   **Structure:** A brightly colored card (often `var(--lime)`) rotated slightly, containing a list (`.blueprint-list`) of steps, tools, or configurations required for the automation.

## Terminal Block

*   **Usage:** Displays code snippets, CLI commands, or raw JSON data.
*   **Structure:** A dark, monospaced block (`.repo-terminal` or `.terminal-snippet`) with a cyan border and `var(--lime)` text, mimicking a hacker console.

## FAQ Accordion

*   **Usage:** For displaying frequently asked questions.
*   **Structure:** A list (`.faq-list`) of items (`.faq-item`). The question is a button (`.faq-question`) that toggles the visibility of the answer (`.faq-answer`). Uses a plus/minus icon (`.faq-icon`).

## CTA Band

*   **Usage:** A full-width section dedicated to driving a primary conversion.
*   **Structure:** Bright background (e.g., `var(--cyan)` or a gradient), concise heading, short paragraph, and centered action buttons.

## Use-Case Card

*   **Usage:** Highlights specific examples of automations.
*   **Structure:** A simple card (`.use-case-card`) within a grid (`.use-case-grid`), often using alternating background colors from the primary palette.

## Partner Embed Widget

*   **Usage:** For providing the GPT or tool access on third-party sites.
*   **Structure:** Must be responsive, self-contained, and inherit core styles without conflicting with the host page. Usually rendered within an iframe.

## Trust Strip

*   **Usage:** Builds credibility via stats, partner logos, or guarantees.
*   **Structure:** A dark, full-width section (`.trust-strip`) containing a grid (`.trust-grid`) of brief, impactful statements or logos.

# SMB AI Workflow Demo

This directory contains static demo assets for the SMB AI Workflow & Agent Builder.

## Files
- `static-demo-page-v1.html`: The main HTML demo page.
- `workflow-demo-styles-v1.css`: Stylesheet for the demo.
- `readiness-score-calculator-v1.js`: JavaScript logic for calculating the automation readiness score.

## How to use
Open `static-demo-page-v1.html` directly in any web browser. No local server or build step is required.

## Calculator Logic
The JavaScript calculator evaluates 10 dimensions of a workflow and returns a readiness score between 0 and 30. It categorizes readiness into four bands:
- 0-10: Do not automate yet
- 11-20: Clean up first
- 21-26: Pilot carefully
- 27-30: Ready for automation pilot

## Customization
To adapt this demo for different workflows, update the `Current State`, `Pain Points`, and `AI Agent Idea` sections in the HTML. The CSS uses CSS variables for easy theming.

## Safety Disclaimer
This demo supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.

## Rule: No Fake Proof
Do not add fake logos, fake screenshots, fake partner marks, fake certification badges, fake ratings, or fake customer proof to these demo files.

# Embed QA Checklist

Before releasing any changes to the embeds layer, ensure the following checklist is completed:

## Functionality
- [ ] Verify `partner-widget.html` loads correctly.
- [ ] Verify `iframe.html` loads correctly.
- [ ] Verify `iframe-compact.html` loads correctly.
- [ ] Verify `affiliate-card.html` loads correctly.
- [ ] Verify `embed-loader.js` successfully injects the widget into a host page.
- [ ] Verify `partner-config.js` correctly parses `partners.json`.
- [ ] Test the 3-question readiness picker for logic and state changes.

## Sizing & Responsiveness
- [ ] Check full embed max width is constrained to 940px.
- [ ] Check full embed max height is constrained to 1200px.
- [ ] Check compact embed displays correctly between 360px and 520px wide.
- [ ] Check compact embed displays correctly between 540px and 720px tall.

## Tracking & Links
- [ ] Ensure all CTA buttons link to the Primary CTA URL.
- [ ] Ensure `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `ref` parameters are correctly appended to the CTA URL.
- [ ] Verify analytics events (`partner_embed_loaded`, etc.) fire when appropriate actions are taken.

## Content & Compliance
- [ ] Ensure the explicit disclaimer is visible: 'This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.'
- [ ] Confirm no fake partner claims or testimonials are present.
- [ ] Ensure partner attribution is correctly displayed based on config.

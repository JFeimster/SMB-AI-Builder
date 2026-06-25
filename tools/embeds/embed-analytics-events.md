# Embed Analytics Events

The following optional analytics events should be tracked within the embeds layer to measure partner engagement and user interaction:

- `partner_embed_loaded`: Fired when the embed widget successfully loads on a host page. Include the partner ID in the event data.
- `readiness_picker_completed`: Fired when a user completes the 3-question readiness picker within the embed.
- `partner_embed_cta_click`: Fired when a user clicks the main CTA button to proceed to the full GPT. Include the partner ID in the event data.
- `builder_resource_click`: Fired when a user clicks on any supplementary builder resources linked within the embed.

# Analytics Notes

If you choose to implement tracking (such as Vercel Web Analytics, Google Analytics, or PostHog), follow these guidelines.

## General Principles
- **Keep Analytics Optional:** The site should function 100% normally if users block tracking scripts.
- **Do Not Inject Without Approval:** Do not add tracking scripts directly into the codebase without explicit owner approval. Keep privacy first.

## Suggested Tracking Events
If you implement custom event tracking, focus on core conversion interactions rather than generic pageviews:
- `primary_cta_click`
- `secondary_resource_click`
- `github_resource_click`
- `partner_embed_cta_click`
- `readiness_picker_completed`
- `faq_opened`

## Suggested UTM Parameters for Partner Embeds
If generating partner iframe embed links, standardize UTM tags so you can attribute traffic correctly back to specific partners.

- `utm_source=partner`
- `utm_medium=embed`
- `utm_campaign=smb_ai_builder`
- `utm_content=[partner-id]`
- `ref=[partner-id]`

*Example URL format:*
`https://smb-ai-builder.vercel.app/embeds/iframe.html?ref=partner_name&utm_source=partner&utm_medium=embed...`

## Privacy Warning
**Do not collect sensitive workflow contents through analytics.**
If users type or select specific business operations (e.g., HR complaints, financial transactions), do not pass that raw text into analytics platforms. Track that the action occurred, not the sensitive payload.

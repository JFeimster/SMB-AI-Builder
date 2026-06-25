# Analytics Notes

Guidance for adding and managing analytics on the site.

## General Rules
- **Keep analytics optional:** The core functionality does not require analytics.
- **Approval required:** Do not add tracking scripts without explicit owner approval.
- **Privacy note:** Do not collect sensitive workflow contents or personally identifiable information through analytics.

## Suggested Tracking Events
If analytics are enabled, consider tracking:
- `primary_cta_click`
- `secondary_resource_click`
- `github_resource_click`
- `partner_embed_cta_click`
- `readiness_picker_completed`
- `faq_opened`

## Suggested UTM Parameters for Partner Embeds
When providing embed codes to partners, append these parameters to CTA links to track source traffic:
- `utm_source=partner`
- `utm_medium=embed`
- `utm_campaign=smb_ai_builder`
- `utm_content=[partner-id]`
- `ref=[partner-id]`
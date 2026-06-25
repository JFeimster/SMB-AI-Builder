# Analytics Implementation Notes

These notes outline considerations and plans for future analytics implementation across the SMB AI Builder site.

## General Guidelines

- **No Active Scripts Yet**: Currently, this is a planning layer. Do not insert `<script>` tags, tracking pixels, or initialization logic into the codebase until explicitly instructed.
- **No Real Tracking IDs**: Maintain placeholder IDs (e.g., `UA-XXXXX-Y`, `G-XXXXXXXXXX`) in any drafting or examples.
- **Privacy-First Design**: Refer strictly to `privacy-rules.md`. Ensure any future event payloads are scrubbed of PII and sensitive data before transmission.
- **Event Mapping Integration**: When implementations begin, map the front-end triggers accurately to the events outlined in `analytics-event-map.md`.
- **Consent and Compliance**: Future implementations must integrate with appropriate cookie consent and data compliance banners based on geographic requirements.

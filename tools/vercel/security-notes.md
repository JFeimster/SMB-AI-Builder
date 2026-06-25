# Security and Safety Notes

Important considerations for keeping the deployment secure and safe.

## Rules
- **Static Config is not Auth:** Static partner config is not access control. Do not rely on hidden HTML pages for security.
- **No Secrets in Frontend:** Do not expose secrets, API keys, or private tokens in frontend code.
- **Do Not Commit Keys:** Never commit private API keys to the repository.
- **Data Privacy:** Do not collect sensitive customer data through static forms without proper backend and privacy review.
- **No Advice Claims:** Do not frame GPT output as legal, financial, tax, HR, lending, accounting, or compliance advice. Always include disclaimers for sensitive workflows.
- **Partner Protection:** Partner-only embeds require hosting-level protection, auth, signed URLs, or backend enforcement if truly restricted.
- **Link Validation:** Validate all external links.
- **Link Attributes:** Use `rel="noopener noreferrer"` attributes for external links where appropriate.
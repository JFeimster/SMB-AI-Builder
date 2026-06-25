# Security and Safety Notes

Adhere to the following guidelines to maintain a secure and trustworthy posture in production.

## Vercel and Frontend Access
- **Static Partner Config Is Not Access Control:** Hardcoding a list of "approved partners" into static HTML or frontend Next.js code does not prevent abuse. Anyone can view the source code.
- **Do Not Expose Secrets:** Do not expose secrets or private tokens in frontend code (do not prefix Next environment variables with `NEXT_PUBLIC_` unless they are truly meant to be public).
- **Do Not Commit Keys:** Never commit `.env` or hardcoded API keys into the Git repository.

## Data Privacy
- **Do Not Collect Sensitive Data:** Do not collect sensitive customer data (financials, employee records, proprietary IP) through static forms without proper backend routing, encryption, and an explicit privacy review.

## Content Safety & Disclaimers
- **No Professional Advice:** Do not frame GPT output or static workflow plans as professional advice.
- **Explicit Disclaimers Required:** Sensitive workflows must include disclaimers stating that the output is **not legal, financial, tax, HR, lending, accounting, collections, or compliance advice.**

## Partner Embed Safety
- **True Restriction Needs Backend Auth:** Partner-only embeds require hosting-level protection, authentication, signed URLs, or proper backend enforcement if access is strictly restricted. Obfuscating URLs is not secure.

## Links & External Traffic
- **Validate External Links:** Regularly ensure all linked resources resolve to safe destinations.
- **Use `rel` Attributes:** Use `rel="noopener noreferrer"` for external links, particularly user-generated or partner-provided links, to protect against cross-site exploitation.
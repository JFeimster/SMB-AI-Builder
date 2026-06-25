# Privacy & Data Handling

Guidelines for ensuring data privacy and security within the SMB AI Builder ecosystem.

## No-auth Action data model
Because our Actions use `Authentication: None`, the endpoints are effectively public. We must assume any data sent to them is untrusted and potentially sensitive.

## What is submitted
- Anonymized workflow descriptions.
- Generalized tool names.
- Estimated task durations.
- High-level business goals.

## What is returned
- Computed scores (e.g., readiness).
- Formatted Markdown or JSON blueprints.
- Public data lookups (e.g., external API results).

## What should not be submitted
The GPT instructions must explicitly tell the user NOT to provide:
- Personally Identifiable Information (PII) like names, emails, SSNs, or addresses.
- Protected Health Information (PHI).
- Financial data, credit card numbers, or bank details.
- Passwords, API keys, or access tokens.
- Proprietary source code or trade secrets.

## No storage by default
- Action endpoints must run statelessly.
- Do not connect a database (e.g., Postgres, MongoDB, Redis) to the Vercel project for the purpose of storing user request payloads.

## No sensitive logging
- Vercel function logs should only record metadata (status code, latency, route).
- Never `console.log(request.body)` in production.

## Public fetch caveats
- When proxying requests to public APIs, ensure the user's original query is sanitized to prevent exposing sensitive data to third parties.

## Sensitive workflow warnings
- If the user discusses workflows involving HR, finance, legal, or medical data, the GPT must warn them about the risks of AI processing and mandate human review.

## Privacy policy notes
- A clear, human-readable Privacy Policy must be hosted (e.g., `app/privacy/page.tsx`) and linked in the GPT Builder.
- It must state that we do not store chat data, but that OpenAI has its own data retention policies.

## Data minimization checklist
- [ ] Is this data field absolutely necessary for the Action to function?
- [ ] Could the Action work with a less specific input (e.g., "High/Medium/Low" instead of exact revenue numbers)?
- [ ] Are we deleting the payload from memory immediately after processing?

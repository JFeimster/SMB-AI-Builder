# No-Auth Action Guidelines

## What no-auth Actions are
No-auth Actions are GPT endpoints that do not require the user to log in, provide an API key, or authenticate via OAuth. They operate entirely on the data provided in the immediate request payload.

## What they are good for
- **Deterministic logic:** Calculators, readiness scorers, text formatters.
- **Public data lookups:** Fetching weather, exchange rates, or public API data.
- **Stateless formatting:** Converting JSON to Markdown, structuring messy input.
- **Low-friction UX:** Immediate value without setup hurdles.

## What they should not do
- Modify existing remote state (no POST/PUT/DELETE to production databases).
- Access private user accounts or private data silos.
- Execute actual automation sequences (e.g., sending emails, moving money).
- Process highly sensitive PII or compliance-regulated data.

## Stateless/read-only rules
- The Action must not store the request payload on the server.
- The Action must return a computed result and immediately discard the input context in memory.
- Logs should only contain metadata (timestamp, latency, generic error codes), not the payload contents.

## Input validation rules
- Validate all incoming JSON payloads against a strict schema.
- Reject requests with unexpected properties or massive payloads to prevent memory exhaustion.
- Sanitize inputs to prevent injection attacks if the input is used in further downstream public API calls.

## Sensitive data rules
- Explicitly instruct users (via GPT instructions) NOT to submit real PII, passwords, or financial data.
- If the Action detects a structure resembling sensitive data (e.g., SSNs via regex), it should return an error refusing to process it.

## Public fetch rules
- Actions that fetch external data must only hit public, HTTPS APIs.
- Block internal IPs (e.g., 10.x, 192.168.x, localhost).
- Implement strict timeouts (e.g., 5 seconds) to prevent the GPT from hanging.
- Cap response sizes from public APIs to prevent payload bloat.

## Error response rules
- Return standard JSON error structures.
- Include a clear, user-facing message explaining why the request failed.
- Do not expose internal server paths, stack traces, or environment variables in error messages.

## Human-review guidance
- When an Action returns a plan, score, or recommendation, the response text should include a disclaimer stating the output is a draft and requires human review.

## Examples of safe Actions
- `POST /api/readiness-score`: Accepts a JSON workflow description and returns a 0-30 score.
- `GET /api/public-holidays`: Returns public holiday dates for scheduling.
- `POST /api/format-blueprint`: Takes messy text and returns a structured JSON blueprint.

## Examples of unsafe Actions
- `POST /api/send-invoice`: Modifies state/sends data to an external party.
- `GET /api/user-profile?email=...`: Accesses private data without auth.
- `POST /api/store-workflow`: Saves user data to a database.

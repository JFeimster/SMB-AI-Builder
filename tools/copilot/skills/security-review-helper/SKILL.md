# security-review-helper

## Purpose
To analyze code for common security vulnerabilities, unsafe practices, and compliance with the project's strict data privacy and safety rules.

## When to use this skill
- Before finalizing a new API route or core utility function.
- When reviewing code that handles user inputs or external fetches.
- When analyzing CORS settings or public endpoint configurations.

## When not to use this skill
- As a replacement for formal security audits or penetration testing.

## Inputs Copilot should collect
- The code snippet or file to be reviewed.
- Context on where the code is executed (e.g., edge, serverless, client).

## Files and folders this skill may touch
- This skill primarily reads code across the repository; it may suggest edits to any source file containing security flaws.

## Source-of-truth files to read first
- `README.md` (Privacy and Safety Notes section).

## Process
1. Scan the code for hardcoded secrets, API keys, or tokens.
2. Verify that input validation (e.g., Zod) is present and robust on all public endpoints.
3. Check for unsafe external `fetch` calls (e.g., missing timeouts, unhandled rejections).
4. Review logging practices to ensure no sensitive data or PII is being logged.
5. Check CORS configuration to ensure it aligns with project requirements.

## Output requirements
- A list of identified security concerns.
- Actionable code suggestions to remediate the concerns.

## Security and safety rules
- Enforce the rule: "Keep sensitive business data out of the repo."
- Enforce the rule: "Do not log full request bodies."

## QA checklist
- [ ] Were secrets checked?
- [ ] Was input validation confirmed?
- [ ] Were logging practices reviewed for PII leakage?
- [ ] Were external network calls checked for safety?

## Common mistakes to avoid
- Approving API routes that lack input validation.
- Overlooking `console.log(request)` statements in production-bound code.

## Final response format
A structured list of findings (or confirmation of no obvious issues), followed by code blocks for suggested remediations.

# Environment Variables

## Purpose
Manage environment variables safely, ensuring that `.env.example` is correctly formatted, documented, and that no real secrets are ever committed to the repository.

## When to use this skill
- When adding a new feature that requires a configuration value or API key.
- When auditing the repository before a Vercel deployment.
- When updating API routes that depend on external services.

## When not to use this skill
- When configuring client-side only variables that do not require server-side security (though they still shouldn't contain sensitive data).

## Inputs Jules should collect
- The names and purposes of the required environment variables.
- The environments (Development, Preview, Production) where these variables will be needed.

## Files and folders this skill may touch
- `.env.example`
- Application code referencing `process.env`

## Source-of-truth files to read first
- `JULES.md`
- `.env.example`

## Process
1. **Audit `.env.example`:**
   - Verify that every necessary environment variable has an entry.
   - Ensure all values are explicitly safe placeholders (e.g., `YOUR_API_KEY_HERE`, `placeholder_value`).
2. **Code Implementation:**
   - When referencing variables in code, ensure proper fallback or error handling exists if the variable is missing at runtime.
   - Document the purpose of the variable in `.env.example` using comments.
3. **Security Check:**
   - Run a strict visual and automated scan to ensure no real tokens, passwords, database URIs, or private keys are present in `.env.example` or hardcoded in the codebase.

## Output requirements
- A clean, well-documented `.env.example` file.
- Code that safely consumes environment variables without crashing ungracefully if they are absent.

## Security and privacy rules
- **NEVER** commit a `.env`, `.env.local`, `.env.production`, or any file containing real secrets.
- Always use `.env.example` for placeholders only.

## QA checklist
- [ ] Are all required variables listed in `.env.example`?
- [ ] Are all values strictly placeholders?
- [ ] Is there documentation/comments explaining what each variable does?
- [ ] Is error handling in place for missing variables in the application code?

## Common mistakes to avoid
- Pasting a real API key into `.env.example` "just for testing" and forgetting to remove it before committing.
- Failing to document where the user can obtain the necessary API keys.
- Exposing server-side secrets to the client by inappropriately prefixing them with `NEXT_PUBLIC_`.

## Final response format
Confirm the creation or update of `.env.example` with placeholders, explicitly stating that no secrets were committed, and describe the variables added.

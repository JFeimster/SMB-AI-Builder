# Action Data Flow

This document outlines how data moves between the user, the Custom GPT, and our Action endpoints.

## 1. GPT Builder
The user interacts with the ChatGPT interface. Based on its instructions and the user's prompt, the GPT decides to call an Action (e.g., scoring a workflow).

## 2. OpenAPI schema
The GPT references the OpenAPI schema (imported during setup) to understand what data the Action requires and formats a JSON payload.

## 3. Vercel route
The GPT sends an HTTPS POST request to our Vercel-hosted API route (e.g., `https://smb-ai-builder.vercel.app/api/readiness-score`).

## 4. Request validation
The Vercel route receives the request and immediately validates the JSON payload against a strict schema. If validation fails, it returns a 400 Bad Request.

## 5. Deterministic logic
The Vercel route executes the core logic. For example, it calculates the readiness score based on the provided JSON variables. It does not call other LLMs; it relies on hardcoded, deterministic rules.

## 6. Response JSON
The Vercel route formats the result into a clean JSON response according to the OpenAPI schema and sends it back to the GPT.

## 7. User-facing output
The GPT receives the JSON response, interprets the data (e.g., "Score: 15"), and formats a conversational reply to the user, applying its specific persona and tone rules.

## 8. Error handling
If the Vercel route throws an error (e.g., 500 Internal Server Error) or times out, the GPT catches the HTTP error and informs the user gracefully (e.g., "I couldn't score that workflow right now, let's try again manually.").

## 9. No persistent storage
At no point during steps 4-6 does the Vercel route save the user's payload to a database, file system, or external logging service. The operation occurs purely in memory.

## 10. Public fetch Actions
For Actions that fetch external data (e.g., weather, holidays), Step 5 involves the Vercel route making a secondary HTTPS GET request to a public API. This request is subject to strict timeouts to ensure Step 6 happens quickly.

## 11. Human review notes
The final output (Step 7) should always include a caveat that the result is machine-generated and requires human validation.

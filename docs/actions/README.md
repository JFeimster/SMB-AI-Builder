# Actions Documentation

## Purpose
This directory contains documentation, guidelines, and setup instructions for the no-auth GPT Actions used by the SMB AI Builder.

## Files
- `action-catalog.md`: The catalog of planned and existing actions.
- `no-auth-action-guidelines.md`: Rules and constraints for building safe, stateless actions.
- `gpt-action-setup-checklist.md`: Step-by-step guide for configuring Actions in the ChatGPT interface.
- `openapi-style-guide.md`: Requirements for writing GPT-compatible OpenAPI schemas.
- `vercel-deployment-notes.md`: Guidelines for hosting these endpoints on Vercel.

## How to use
Refer to `no-auth-action-guidelines.md` when designing a new feature. Use the `openapi-style-guide.md` to format the schema, and the `gpt-action-setup-checklist.md` when integrating the final schema into ChatGPT.

## Safety note
All Actions must remain stateless, require no authentication, and prioritize user data privacy. Do not log payloads or modify production state.

## Related folders
- `../architecture/`: For overall system data flow.
- `app/api/`: (If present) Where the actual Next.js route code lives.

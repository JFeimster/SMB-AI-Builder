# OpenAPI Actions Infrastructure

## What this folder contains
- `openapi/actions/`: Canonical individual OpenAPI 3.1.0 schemas for each no-auth Action.
- `openapi/combined/`: The unified OpenAPI schema combining all individual Actions into one (`combined-smb-actions.openapi.json`).

## Difference between `openapi/actions/` and `openapi/combined/`
Individual actions are modular and easier to read, edit, and validate. The combined schema is a build artifact useful when you want to import multiple endpoints into a single GPT Builder or external interface at once without manually copying and pasting multiple files.

## How to validate schemas
Run the validation script to ensure all individual schemas meet the rules:
```bash
npx ts-node scripts/validation/validate-openapi.ts
```

## How to build combined schema
Run the build script to combine the actions:
```bash
npx ts-node scripts/actions/build-combined-openapi.ts
```

## GPT Builder import notes
You can copy the raw text of any file in `openapi/actions/` and paste it directly into GPT Builder's "Actions" section. Ensure Authentication is set to "None" and Privacy Policy is provided if required by OpenAI.

## Placeholder domain warning
Most schemas use `https://YOUR-VERCEL-DOMAIN.vercel.app`. This is a placeholder. Before deploying live Actions, replace this with your actual production domain. Do not use fake production domains or misrepresent ownership.

## No-auth Action safety notes
These Actions are planning utilities. They do not provide legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Actions must be stateless.
- Actions must not store submitted workflow data.
- Actions must not require private credentials.

## File naming convention
All schemas should use the `.openapi.json` extension (e.g., `score-automation-readiness.openapi.json`). Request examples should be stored in `examples/actions/` and use the `-request.example.json` suffix.

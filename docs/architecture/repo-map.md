# Repository Map

## Current repo structure
The repository is structured to support GPT Builder knowledge, OpenAPI endpoints, and Vercel deployments.

```text
SMB-AI-Builder/
├── app/                  # Next.js App Router (Vercel endpoints & static pages)
│   ├── api/              # GPT Action endpoint logic
│   └── (static pages)    # Demo and privacy pages
├── docs/                 # Documentation and knowledge layers
│   ├── actions/          # GPT Action configuration guides
│   ├── architecture/     # System design and maps
│   ├── examples/         # Fictional workflow examples
│   ├── knowledge-files/  # Markdown templates directly uploaded to GPT
│   └── prompts/          # Reusable prompt libraries
├── openapi/              # OpenAPI schema definitions
├── tools/                # Internal tooling and QA scripts
└── README.md
```

## Recommended normalized structure
- Ensure all `.md` knowledge files live in `docs/knowledge-files/`.
- Ensure all GPT Action code lives in `app/api/`.

## Where Action packages live
- Serverless API logic: `app/api/[route-name]/route.ts`.
- Supporting Action logic (validators, parsers): `app/api/lib/`.

## Where OpenAPI lives
- `openapi/` directory contains individual schemas.
- `openapi/combined/` contains the merged schema used by the GPT Builder.

## Where examples live
- `docs/examples/workflows/`.

## Where docs live
- Organized within the `docs/` subdirectory by concern (actions, architecture, prompts).

## Where public demo assets live
- Initially in `docs/knowledge-files/` (as static `.html`/`.css`).
- Future state: Hosted via Vercel in the `app/` directory or a separate `/public` folder.

## Where scripts/tests live
- Automation/QA scripts live in `tools/`.
- Tests for Action logic should live alongside the code (e.g., `app/api/[route-name]/[route].test.ts`) or in a top-level `tests/` directory.

## Naming conventions
- Markdown files: `kebab-case.md`.
- TS/JS files: `kebab-case.ts`.
- Components: `PascalCase.tsx`.
- Include `-v1` in filenames intended for direct GPT upload if versioning is necessary (e.g., `automation-blueprint-template-v1.md`).

## Legacy path notes
- Older examples may have existed directly in `docs/examples/`. They have been normalized into `docs/examples/workflows/`.

# Repository Map

## Current repo structure
The repository is structured to support GPT Builder knowledge, action packages, documentation, and Vercel deployments.

```text
SMB-AI-Builder/
├── app/                  # Next.js App Router and GPT Action endpoint packages
│   └── api/              # Each action package lives under app/api/[route-name]/
│       ├── [route-name]/route.ts
│       ├── [route-name]/[route-name].ts
│       ├── [route-name]/[route-name].openapi.json
│       └── [route-name]/README.md
├── docs/                 # Documentation and knowledge layers
│   ├── actions/          # GPT Action configuration guides
│   ├── architecture/     # System design and maps
│   ├── examples/         # Fictional workflow examples
│   ├── knowledge-files/  # Markdown templates directly uploaded to GPT
│   └── prompts/          # Reusable prompt libraries
├── tools/                # Internal tooling and QA references
└── README.md
```

## Recommended normalized structure
- Ensure all `.md` knowledge files live in `docs/knowledge-files/`.
- Ensure all GPT Action code lives in `app/api/`.
- Keep each action's OpenAPI schema with its action package unless a future combined schema directory is intentionally added.

## Where Action packages live
- Serverless API route: `app/api/[route-name]/route.ts`.
- Supporting Action logic, validators, parsers, examples, and README files: `app/api/[route-name]/`.

## Where OpenAPI lives
- Current individual schemas live alongside their action packages: `app/api/[route-name]/[route-name].openapi.json`.
- Do not point contributors to a top-level `openapi/` directory unless that directory is intentionally created and maintained.
- If a combined schema is introduced later, document the exact generated file path in this repo map.

## Where examples live
- `docs/examples/workflows/`.

## Where docs live
- Organized within the `docs/` subdirectory by concern (actions, architecture, prompts).

## Where public demo assets live
- Browser-ready demo assets live under `public/demo/`.
- Shared public media and placeholder directories live under `assets/`.
- Shared CSS may live under `styles/` when it is not tied to the Next app directory.

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

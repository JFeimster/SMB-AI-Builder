# Tools Operations (Tool-Ops) Layer

## Purpose of the tools/ Directory
The `tools/` directory contains the "tool-ops layer" for the SMB AI Builder. It is dedicated to internal tool configurations, prompts, and documentation used by AI agents (like Jules, Codex, GPT) to perform operations on the codebase or handle integrations.

## Internal Tool-Ops Docs vs. Public Pages
- **Public Pages:** Code that is deployed as part of the application (e.g., in `app/`, `pages/`, `public/`) is meant for end users and public deployment.
- **Internal Tool-Ops Docs:** Documentation and instructions in `tools/` are meant exclusively for developer tooling and AI agent reference. They guide how agents interact with the repository, deploy changes, or manage configurations.

## Folder Pattern
Each tool should have its own folder following this consistent structure:
```
tools/{tool-name}/
├── README.md
├── prompts/
├── docs/
├── examples/
└── skills/
    └── {skill-name}/
        └── SKILL.md
```

## How Skills Work
Skills must be placed inside the `skills/` subdirectory of the specific tool folder (e.g., `tools/{tool-name}/skills/{skill-name}/SKILL.md`). Do not create a root `skills/` folder in `tools/`. The `SKILL.md` defines how an agent should execute a specific operation related to that tool.

## How Prompts Work
Prompts used for interacting with an agent about a specific tool should be stored in the `prompts/` directory within the tool's folder (`tools/{tool-name}/prompts/`).

## Preventing Duplicate Tool Layers
Always check if a tool folder already exists in `tools/` before creating a new one. Do not duplicate tool folders; instead, update and organize existing folders securely. If a tool spans multiple capabilities, centralize its configuration in a single root-level tool folder here.

# OpenAPI Tool-Ops Layer

## Purpose
Centralizes documentation, tools, and best practices for creating, validating, and managing OpenAPI specifications for AI agents.

## Best Used For
- Generating OpenAPI 3.1.0 schemas
- Validating schema compliance
- Testing API endpoints against schemas
- Defining GPT Action interfaces
- Managing schema versioning

## Not For
- Defining internal business logic
- Handling authentication implementations (schemas only define the requirement)
- Generating frontend UI code directly

## Common Tasks
- Validate an action schema using the validation script
- Convert a Next.js route into an OpenAPI path definition
- Merge multiple schemas into a unified spec

## Inputs Needed
- API route logic
- Request/Response types
- Server URLs

## Outputs
- Valid OpenAPI 3.1.0 JSON schemas
- Validation error reports
- Schema documentation

## Skills
List related skills in `tools/openapi/skills/`. Note: Subfolders are created only when needed since Git does not preserve empty directories.

## Prompts
Point to `tools/openapi/prompts/` if present.

## Risk Notes
Ensure `operationId` strictly matches the Action name. Validate all schemas against the 3.1.0 specification to prevent agent integration failures.

## Related Site Pages
- Relevant documentation or capability pages will be linked here.

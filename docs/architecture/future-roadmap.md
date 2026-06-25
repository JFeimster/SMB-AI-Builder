# Future Roadmap

Planned evolution of the SMB AI Workflow & Agent Builder repository and capabilities.

## Phase 1: Core deterministic Actions
- Implement basic, stateless calculators (Readiness Scorer, Complexity Estimator).
- Solidify Vercel deployment pipeline.
- Establish strict OpenAPI formatting rules.

## Phase 2: Pilot/safety Actions
- Build validators that check proposed workflows against a known "unsafe" list.
- Create automated blueprint formatters to structure messy user input into clean Markdown templates.

## Phase 3: Public-data Actions
- Integrate safe, public APIs (e.g., checking tool API status, fetching standard holiday calendars for scheduling workflows).
- Ensure tight timeout and error handling for external calls.

## Phase 4: Builder utilities
- Create internal scripts (e.g., in `tools/`) to auto-generate OpenAPI combined schemas from individual endpoint files.
- Build local test harnesses for Actions.

## Phase 5: Static site/SEO/embeds
- Expand the Vercel App Router to host a public-facing landing page.
- Implement SEO best practices and metadata.
- Create embeddable widgets (e.g., an iframe version of the Readiness Calculator for partner sites).

## Phase 6: Advanced UI/demos
- Build interactive React components demonstrating workflow maps.
- Host live demo environments showing "safe" AI agent interactions.

## Risks
- **GPT Builder constraints:** Changes to OpenAI's schema parsing or timeout limits could break Actions.
- **Vercel limits:** Hobby tier limits may be reached if the GPT becomes highly popular.

## Dependencies
- Stable OpenAI Custom GPT features.
- Next.js App Router stability.

## Suggested priorities
1. Solidify Phase 1 (Core Actions) to provide immediate value.
2. Build documentation and examples to guide users.
3. Move to Phase 5 (Static Site) for marketing and distribution.

## Do-not-build-yet items
- **Authentication/Accounts:** Do not build user login systems or database storage until absolutely necessary and legally reviewed.
- **Direct API Integrations (OAuth):** Do not build Actions that connect directly to a user's Salesforce, QuickBooks, etc.

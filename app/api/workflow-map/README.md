# Generate Workflow Map Action

**Endpoint**: `POST /api/workflow-map`

**Purpose**: Convert structured workflow steps into a clean current-state or future-state workflow map.

## Input fields

- `workflowName` (string, required)
- `mapType` ("current_state" | "future_state" | "pilot_state", required)
- `steps` (array of objects, required)
  - `label` (string, required)
  - `owner` (string, optional)
  - `tool` (string, optional)
  - `type` ("task" | "decision" | "handoff" | "ai_task" | "human_review" | "output", optional)
  - `notes` (string, optional)
- `bottlenecks` (array of strings, optional)
- `humanReviewPoints` (array of strings, optional)
- `desiredOutputFormat` ("plain_text" | "mermaid" | "both", optional)
- `notes` (string, optional)

## Output

Returns plain-text step map and/or a valid Mermaid diagram visualizing the workflow steps, ownership, tools, handoffs, and human review markers.

# generateSystemPrompt

**Status**: Planned

## Purpose
Generate an optimal system prompt for a specific automation agent.

## Auth Type
None

## Inputs
agentRole (string), workflowContext (string)

## Outputs
systemPrompt (string), guidelines (array)

## Safe Use Cases
- Drafting starting prompts for internal GPTs.

## Unsafe Use Cases
- Using generated prompts for high-risk automated decision making without testing.

## Human Review Requirements
Human must test and refine the prompt in a sandbox.

## Example Prompt
> Generate a system prompt for an agent that formats meeting notes.

## Example Output Structure
```json
{
  "systemPrompt": "You are an expert...",
  "guidelines": []
}
```

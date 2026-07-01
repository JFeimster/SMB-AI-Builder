# Connector Prompt Usage

Use this folder as the prompt layer for connector planning.

## How To Use

1. Pick the workflow.
2. Pick the connector category.
3. Run the audit prompt first.
4. Run the risk prompt second.
5. Run the pilot prompt third.
6. Do not connect tools until the review gates are clear.

## Default Rule

Start draft-first. Move toward automation only after sample data tests and human review paths are stable.

## Do Not Paste

- Private customer records
- Bank data
- Tax documents
- HR records
- Medical records
- Legal files
- Credentials or secrets

## Safe Prompt Starter

```text
Use non-sensitive sample data to plan this workflow. Identify the minimum connector stack, safe draft outputs, review gates, and the first pilot.
```

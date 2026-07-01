# Connector Prompt Packs

Use these prompts to plan connector-based SMB workflows before wiring tools together.

Do not paste private customer data unless you understand the permissions, risks, and purpose.

## Core Prompts

### Audit the Workflow

```text
Audit this workflow and recommend the minimum connector stack. Identify the current mess, the data involved, what can be automated, what should remain human-reviewed, and the first safe pilot.
```

### Map Connectors

```text
Map this process across the fewest useful connectors. Show the input source, processing step, output destination, human review checkpoint, and failure mode for each step.
```

### Classify Risk

```text
Classify this connector workflow as low, medium, high, or sensitive. Explain what data is touched, what can be automated safely, what must stay draft-first, and what should never be automated.
```

### Build a Pilot Plan

```text
Create a 30-day pilot plan for this connector workflow. Include setup steps, sample data tests, review gates, success criteria, rollback plan, and what not to connect yet.
```

### Design a No-Auth GPT Action

```text
Design a no-auth GPT Action for this workflow. Keep inputs non-sensitive, define a safe request schema, response schema, examples, rate limits, and human-review warnings.
```

## Related Pages

- ../../pages/tools/prompts.html
- ../../pages/tools/connectors.html
- ../../pages/tools/actions.html
- ../../pages/tools/openapi.html
- ../../pages/tools/connector-risk-map.html

# Review Gate Connector Prompts

## Review Map

```text
Map the review requirements for this connector workflow. Identify what AI can draft, what a person must approve, who owns the decision, and where the workflow should stop if confidence is low.
```

## Risk Classifier

```text
Classify this workflow for risk. Flag customer-impacting actions, finance-related actions, private data, regulated decisions, and external messages.
```

## Draft-Only Rewrite

```text
Rewrite this automation plan into draft-only mode. Remove final-send, final-decision, and destructive-write steps. Add approval checkpoints.
```

## Approval Gate Design

```text
Design approval gates for this workflow. Include trigger, reviewer role, required evidence, approval action, rejection action, and audit note.
```

## Failure Mode Review

```text
Review this connector workflow for failure modes. Identify bad data, missing context, duplicate sends, wrong owner, privacy exposure, and rollback steps.
```

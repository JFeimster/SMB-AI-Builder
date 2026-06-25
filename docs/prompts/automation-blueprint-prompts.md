# Automation Blueprint Prompts

## Purpose
Design the architecture and flow of a specific automation.

## When to use
Use when a workflow has been selected and approved for automation to plan the build.

## Inputs needed
- Approved workflow
- Chosen tools
- Readiness score

## Automation blueprint
**Prompt:**
```text
Draft a complete automation blueprint for [Workflow Name], detailing the objective, scope, and technical requirements.
```
**Expected output:** A comprehensive document outlining the project.
**Follow-up prompts:** What are the known unknowns in this blueprint?
**Safety notes:** Include security and privacy requirements in the blueprint.
**Human-review reminders:** Have technical and business stakeholders review.
**Example use cases:** Planning a new automated onboarding sequence.
**Final QA checklist:**
- [ ] Objective clear
- [ ] Scope defined
- [ ] Requirements listed

## Trigger/input/output mapping
**Prompt:**
```text
Map the specific trigger event, the required data inputs, and the expected outputs for this automation.
```
**Expected output:** A precise data flow map.
**Follow-up prompts:** What happens if an input is missing or malformed?
**Safety notes:** Ensure inputs don't inadvertently pull sensitive data.
**Human-review reminders:** Verify data availability.
**Example use cases:** Mapping a webhooks payload to a CRM record.
**Final QA checklist:**
- [ ] Trigger defined
- [ ] Inputs specified
- [ ] Outputs specified

## Tool stack mapping
**Prompt:**
```text
List all tools required for this automation and specify how they will connect (e.g., native integration, Zapier, custom API).
```
**Expected output:** A diagram or list of the integration architecture.
**Follow-up prompts:** Are there any API rate limits we need to consider?
**Safety notes:** Check data processing agreements for all tools.
**Human-review reminders:** Confirm licenses and access rights.
**Example use cases:** Selecting the right tools for a marketing flow.
**Final QA checklist:**
- [ ] Tools listed
- [ ] Connection methods specified

## Human review design
**Prompt:**
```text
Design the human-in-the-loop checkpoint for this workflow. Where does the automation pause, and how is the human notified?
```
**Expected output:** A design for the approval step.
**Follow-up prompts:** What is the SLA for the human to respond?
**Safety notes:** Essential for high-risk actions like sending invoices.
**Human-review reminders:** Ensure the notification channel is actively monitored.
**Example use cases:** Setting up a Slack approval for expense reports.
**Final QA checklist:**
- [ ] Checkpoint defined
- [ ] Notification method clear

## Exception handling
**Prompt:**
```text
Detail how the automation should handle exceptions, errors, or unexpected edge cases.
```
**Expected output:** An error handling protocol.
**Follow-up prompts:** Who is alerted when an exception occurs?
**Safety notes:** Fail safely—stop the process rather than proceed with bad data.
**Human-review reminders:** Review logs periodically to catch unhandled errors.
**Example use cases:** Handling a failed API call to a payment gateway.
**Final QA checklist:**
- [ ] Error paths defined
- [ ] Alerting configured

## Success metrics
**Prompt:**
```text
Define the Key Performance Indicators (KPIs) to measure the success of this automation.
```
**Expected output:** A list of measurable metrics.
**Follow-up prompts:** How will we track these metrics?
**Safety notes:** Ensure metrics don't encourage reckless speed over quality.
**Human-review reminders:** Agree on baseline metrics before launch.
**Example use cases:** Tracking hours saved per week.
**Final QA checklist:**
- [ ] KPIs are measurable
- [ ] Tracking method established

## Rollback plan
**Prompt:**
```text
Create a rollback plan to revert to the manual process if the automation fails critically in production.
```
**Expected output:** A step-by-step guide to shutting down the automation and resuming manual work.
**Follow-up prompts:** Are the manual SOPs up to date?
**Safety notes:** Critical for business continuity.
**Human-review reminders:** Test the rollback procedure during the pilot.
**Example use cases:** Reverting a broken customer sync process.
**Final QA checklist:**
- [ ] Shutdown steps clear
- [ ] Manual resumption steps clear

## Pilot checklist
**Prompt:**
```text
Generate a checklist of tasks that must be completed before launching the automation pilot.
```
**Expected output:** A comprehensive pre-launch checklist.
**Follow-up prompts:** Who signs off on the final checklist?
**Safety notes:** Include security checks in the list.
**Human-review reminders:** Do not skip checklist items.
**Example use cases:** Final QA before turning on a new Zap.
**Final QA checklist:**
- [ ] Covers testing, training, and security
- [ ] Sign-off assigned

# Agent Blueprint Prompts

## Purpose
Design the role, constraints, and behavior of an AI Agent.

## When to use
Use when defining a conversational or autonomous AI agent's instructions and boundaries.

## Inputs needed
- Agent objective
- Target audience
- Available knowledge sources

## AI agent role definition
**Prompt:**
```text
Define the specific role, persona, and primary objective of this AI agent.
```
**Expected output:** A clear persona and goal statement.
**Follow-up prompts:** What is the tone of voice for this agent?
**Safety notes:** Ensure the agent's role does not imply professional licensure (e.g., not a "lawyer").
**Human-review reminders:** Align persona with brand guidelines.
**Example use cases:** Defining a customer support bot persona.
**Final QA checklist:**
- [ ] Role is clear
- [ ] Objective is defined

## Agent instructions
**Prompt:**
```text
Draft the core system instructions (the "prompt") that will govern the agent's behavior and responses.
```
**Expected output:** Detailed system instructions.
**Follow-up prompts:** How should the agent handle greetings and sign-offs?
**Safety notes:** Include instructions to decline unsafe requests.
**Human-review reminders:** Test instructions iteratively to tune behavior.
**Example use cases:** Writing instructions for an internal knowledge bot.
**Final QA checklist:**
- [ ] Instructions are unambiguous
- [ ] Covers primary tasks

## Guardrails
**Prompt:**
```text
Define the strict guardrails and constraints for this agent. What topics must it refuse to discuss?
```
**Expected output:** A list of boundaries and refusal phrasing.
**Follow-up prompts:** How should the agent pivot back to its intended topic?
**Safety notes:** Crucial for preventing jailbreaks and liability.
**Human-review reminders:** Regularly update guardrails based on user interactions.
**Example use cases:** Preventing a sales bot from giving technical support.
**Final QA checklist:**
- [ ] Off-limit topics defined
- [ ] Refusal phrasing provided

## Permission boundaries
**Prompt:**
```text
Outline the specific systems, databases, or actions this agent is permitted to access or execute.
```
**Expected output:** A matrix of permissions.
**Follow-up prompts:** Are we enforcing principle of least privilege?
**Safety notes:** Agents should never have admin access.
**Human-review reminders:** Verify access controls technically, not just in policy.
**Example use cases:** Allowing a bot to read calendar availability but not edit it.
**Final QA checklist:**
- [ ] Permissions documented
- [ ] Least privilege applied

## Handoff rules
**Prompt:**
```text
Design the criteria and procedure for when the AI agent must hand off a conversation to a human.
```
**Expected output:** Handoff triggers and routing instructions.
**Follow-up prompts:** What message does the user see during handoff?
**Safety notes:** Always hand off for complaints, threats, or high-value actions.
**Human-review reminders:** Ensure humans are available to catch handoffs.
**Example use cases:** Escalating an angry customer to a live agent.
**Final QA checklist:**
- [ ] Triggers clearly defined
- [ ] User experience during handoff planned

## Test scenarios
**Prompt:**
```text
Create 5 specific test scenarios to evaluate if the agent follows its instructions and guardrails.
```
**Expected output:** A list of test inputs and expected agent behavior.
**Follow-up prompts:** Do we need adversarial (red-team) scenarios?
**Safety notes:** Include attempts to bypass guardrails.
**Human-review reminders:** Have external users test scenarios for unbiased results.
**Example use cases:** Testing a bot's reaction to requests for discounts.
**Final QA checklist:**
- [ ] Scenarios cover normal and edge cases
- [ ] Expected behavior documented

## Pilot launch checklist
**Prompt:**
```text
List the essential steps to safely launch this agent to a limited pilot group.
```
**Expected output:** A pilot launch plan.
**Follow-up prompts:** How are we collecting feedback from pilot users?
**Safety notes:** Ensure pilot users know they are interacting with AI.
**Human-review reminders:** Review pilot logs daily.
**Example use cases:** Launching an internal HR bot to one department first.
**Final QA checklist:**
- [ ] Feedback mechanism included
- [ ] Monitoring plan in place

## Agent validation
**Prompt:**
```text
Define the criteria for determining if the agent pilot is successful and ready for wider release.
```
**Expected output:** Success criteria for the agent.
**Follow-up prompts:** What error rate is acceptable?
**Safety notes:** Do not lower safety standards to achieve success metrics.
**Human-review reminders:** Gather qualitative feedback alongside quantitative data.
**Example use cases:** Evaluating if a scheduling bot actually saves time.
**Final QA checklist:**
- [ ] Criteria are objective
- [ ] Safety metrics included

# Prompt Library for SMB Automation

## Purpose
A collection of practical prompts for SMB automation consulting and workflow mapping. Stop automating broken workflows. Use these prompts to audit the mess first.

---

## 1. Workflow Audit Prompts
**Use case:** Discovering the steps of a messy manual process.
**Copy/paste prompt:**
"I want to audit a workflow in my business to see if it's ready for automation. The workflow is [Workflow Name]. Here are the tools we use: [Tools]. Here is roughly how we do it today: [Brief Description]. Can you ask me 3-5 specific questions to help map out the exact step-by-step process, identify bottlenecks, and figure out who owns what?"
**Inputs needed:** Workflow name, tools, brief description.
**Expected output:** A list of targeted discovery questions.
**Follow-up prompt:** "Here are the answers to those questions. Now, map out the current-state workflow and tell me the biggest pain points."

## 2. Bottleneck Discovery Prompts
**Use case:** Finding the slowest part of a process.
**Copy/paste prompt:**
"Based on the workflow map we just created, identify the top 2 bottlenecks. Tell me if those bottlenecks are caused by a lack of tools, missing data, or a human approval step that takes too long."
**Expected output:** Bottleneck analysis.

## 3. Readiness Scoring Prompts
**Use case:** Scoring a workflow before AI touches it.
**Copy/paste prompt:**
"Evaluate the workflow we mapped out against your automation readiness scorecard. Score it from 0-3 on workflow clarity, data quality, tool access, and risk level. Tell me if I should Automate Now, Clean Up First, or Keep Human."
**Expected output:** Readiness score and recommendation.

## 4. Automation Opportunity Ranking Prompts
**Use case:** Deciding which workflow to tackle first.
**Copy/paste prompt:**
"I have three workflows I'm considering automating: 1. [Workflow A], 2. [Workflow B], 3. [Workflow C]. Based on typical SMB operations, which of these is usually the lowest risk and highest value to automate first? Rank them in a matrix."

## 5. SOP Drafting Prompts
**Use case:** Creating standard operating procedures for manual cleanup.
**Copy/paste prompt:**
"The workflow [Workflow Name] is too messy to automate right now. Please write a simple, 5-step Standard Operating Procedure (SOP) that a human employee can follow so we can standardize the process before attempting automation next quarter."

## 6. Automation Blueprint Prompts
**Use case:** Designing the step-by-step automation.
**Copy/paste prompt:**
"Create a step-by-step automation blueprint for [Workflow Name]. Define the trigger, the required inputs, the tools involved, the specific AI task (if any), and where a human needs to review it."

## 7. AI Agent Blueprint Prompts
**Use case:** Designing an AI agent concept.
**Copy/paste prompt:**
"I want to build an AI agent that handles [Specific Task, e.g., summarizing intake forms]. Draft an AI Agent Blueprint. Include the system instructions, the guardrails (what it must NEVER do), and the human handoff rules."

## 8. Pilot Planning Prompts
**Use case:** Designing a safe test.
**Copy/paste prompt:**
"Design a 2-week pilot plan for this automation. We will run it on 10 real examples. What success metrics should we track, and what is our fallback plan if it breaks?"

## 9. Test Scenario Prompts
**Use case:** Breaking the agent before launch.
**Copy/paste prompt:**
"Give me 5 test scenarios to run against this AI agent before we put it into production. Include one 'happy path' scenario, two 'missing data' scenarios, and two 'angry customer/high risk' scenarios."

## 10. Human Review & Safety Prompts
**Use case:** Ensuring compliance and safety.
**Copy/paste prompt:**
"This workflow touches [sensitive area: e.g., money, private data, customer communication]. What specific Human-in-the-Loop patterns should we use to ensure this is safe, and what permissions should we restrict?"

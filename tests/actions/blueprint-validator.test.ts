import assert from "node:assert";
import { validateAgentRequest, ValidationError } from "../../app/api/agent-validator/agent-blueprint-validator";

function runTests() {
  console.log("Testing validateAgentRequest...");

  let passCount = 0;
  let failCount = 0;

  function runTest(name: string, testFn: () => void) {
    try {
      testFn();
      console.log(`  ✅ ${name}`);
      passCount++;
    } catch (error) {
      console.error(`  ❌ ${name}`);
      console.error(error);
      failCount++;
    }
  }

  // 1. Valid request
  runTest("Valid request should pass validation", () => {
    const validRequest = {
      agentName: "Sales Bot",
      agentRole: "Sales Assistant",
      targetUser: "Sales Reps",
      primaryJob: "Answer questions",
      inputsNeeded: ["Customer query"],
      outputsProduced: ["Answers"],
      instructions: "Answer politely",
      guardrails: ["Be nice"],
      permissionBoundaries: ["No PII"],
      humanHandoffRules: ["If angry"],
      testScenarios: ["Ask a question"],
      touchesCustomers: false,
    };

    const result = validateAgentRequest(validRequest);
    assert.strictEqual(result.agentName, "Sales Bot");
    assert.strictEqual(result.agentRole, "Sales Assistant");
    assert.deepStrictEqual(result.inputsNeeded, ["Customer query"]);
    assert.strictEqual(result.touchesCustomers, false);
    assert.strictEqual(result.touchesMoney, false); // Default when undefined
  });

  // 2. Not an object
  runTest("Should throw if input is not an object", () => {
    assert.throws(
      () => validateAgentRequest("not an object"),
      (err: Error) => err instanceof ValidationError && err.message.includes("JSON object")
    );
  });

  // 3. Missing required string
  runTest("Should throw if missing required string (agentName)", () => {
    const invalidRequest = {
      // missing agentName
      agentRole: "Role", targetUser: "User", primaryJob: "Job",
      inputsNeeded: ["Input"], outputsProduced: ["Output"], instructions: "Inst",
      guardrails: ["Guard"], permissionBoundaries: ["Bound"], humanHandoffRules: ["Rule"],
      testScenarios: ["Test"]
    };

    assert.throws(
      () => validateAgentRequest(invalidRequest),
      (err: Error) => err instanceof ValidationError && err.message.includes("agentName is required")
    );
  });

  // 4. Invalid boolean
  runTest("Should throw if boolean field has wrong type", () => {
    const invalidRequest = {
      agentName: "Name", agentRole: "Role", targetUser: "User", primaryJob: "Job",
      inputsNeeded: ["Input"], outputsProduced: ["Output"], instructions: "Inst",
      guardrails: ["Guard"], permissionBoundaries: ["Bound"], humanHandoffRules: ["Rule"],
      testScenarios: ["Test"],
      touchesCustomers: "yes" // Should be boolean
    };

    assert.throws(
      () => validateAgentRequest(invalidRequest),
      (err: Error) => err instanceof ValidationError && err.message.includes("touchesCustomers must be a boolean")
    );
  });

  // 5. Missing required string array
  runTest("Should throw if missing required array (inputsNeeded)", () => {
    const invalidRequest = {
      agentName: "Name", agentRole: "Role", targetUser: "User", primaryJob: "Job",
      // missing inputsNeeded
      outputsProduced: ["Output"], instructions: "Inst",
      guardrails: ["Guard"], permissionBoundaries: ["Bound"], humanHandoffRules: ["Rule"],
      testScenarios: ["Test"]
    };

    assert.throws(
      () => validateAgentRequest(invalidRequest),
      (err: Error) => err instanceof ValidationError && err.message.includes("inputsNeeded is required")
    );
  });

  // 6. Invalid array (not an array)
  runTest("Should throw if required array is not an array", () => {
    const invalidRequest = {
      agentName: "Name", agentRole: "Role", targetUser: "User", primaryJob: "Job",
      inputsNeeded: "Not an array", // Should be array
      outputsProduced: ["Output"], instructions: "Inst",
      guardrails: ["Guard"], permissionBoundaries: ["Bound"], humanHandoffRules: ["Rule"],
      testScenarios: ["Test"]
    };

    assert.throws(
      () => validateAgentRequest(invalidRequest),
      (err: Error) => err instanceof ValidationError && err.message.includes("inputsNeeded is required and must be an array")
    );
  });

  // 7. Empty array for required field
  runTest("Should throw if required array is empty", () => {
    const invalidRequest = {
      agentName: "Name", agentRole: "Role", targetUser: "User", primaryJob: "Job",
      inputsNeeded: [], // Empty array
      outputsProduced: ["Output"], instructions: "Inst",
      guardrails: ["Guard"], permissionBoundaries: ["Bound"], humanHandoffRules: ["Rule"],
      testScenarios: ["Test"]
    };

    assert.throws(
      () => validateAgentRequest(invalidRequest),
      (err: Error) => err instanceof ValidationError && err.message.includes("inputsNeeded must contain at least one valid string")
    );
  });

  console.log(`\nResults: ${passCount} passed, ${failCount} failed.`);
  if (failCount > 0) {
    process.exit(1);
  }
}

runTests();

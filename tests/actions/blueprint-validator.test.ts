import assert from 'node:assert';
import { validateAgentBlueprint, AgentBlueprintRequest } from '../../app/api/agent-validator/agent-blueprint-validator.js';

// Helper function to create a valid baseline request
function createValidRequest(): AgentBlueprintRequest {
    return {
        agentName: "Invoice Processor",
        agentRole: "Accounting Assistant",
        targetUser: "Finance Team",
        primaryJob: "Process incoming vendor invoices",
        inputsNeeded: ["Invoice PDF", "Vendor ID"],
        outputsProduced: ["Draft Ledger Entry", "Payment Approval Request"],
        instructions: "You are an accounting assistant. Review the incoming PDF, extract the total amount, identify the vendor, and create a ledger entry. ".repeat(2), // Length > 50
        guardrails: [
            "Never approve a payment directly",
            "Always flag invoices over $10,000"
        ],
        permissionBoundaries: ["Read-only access to email", "Draft-only access to ledger"],
        humanHandoffRules: ["Require human approval for all final payments"],
        testScenarios: [
            "Test with standard $500 invoice",
            "Test with $15,000 invoice to trigger guardrail",
            "Test with blurry PDF to trigger error handling"
        ],
        failureModes: ["Cannot read PDF", "Vendor not found"],
        escalationRules: ["Notify Finance Manager if vendor is missing"],
        touchesCustomers: false,
        touchesMoney: false,
        touchesSensitiveData: false,
        touchesLegalComplianceHRMedicalOrFinance: false,
        notes: "Standard non-sensitive deployment."
    };
}

async function runTests() {
    console.log("Running blueprint-validator tests...");

    // Test 1: Happy path
    {
        const req = createValidRequest();
        const res = validateAgentBlueprint(req);
        assert.strictEqual(res.validationStatus, "ready_for_limited_pilot", "Happy path should return ready_for_limited_pilot");
        assert.strictEqual(res.missingFields.length, 0, "No missing fields expected");
        assert.strictEqual(res.weakFields.length, 0, "No weak fields expected");
        assert.strictEqual(res.recommendedAutomationMode, "Limited pilot automation", "Expected pilot automation mode");
    }

    // Test 2: Weak validations (needs_more_guardrails)
    {
        const req = createValidRequest();
        req.instructions = "Too short";
        req.guardrails = ["Only one guardrail"];
        req.testScenarios = ["Test 1", "Test 2"]; // Less than 3

        const res = validateAgentBlueprint(req);
        assert.strictEqual(res.validationStatus, "needs_more_guardrails", "Weak fields should drop status to needs_more_guardrails");
        assert.ok(res.weakFields.includes("instructions (too brief)"), "Should detect weak instructions");
        assert.ok(res.weakFields.includes("guardrails (recommend at least 2)"), "Should detect weak guardrails");
        assert.ok(res.testingGaps.includes("testScenarios (recommend testing normal, edge, and failure cases)"), "Should detect testing gaps");
    }

    // Test 3: Missing components (not_ready)
    {
        const req = createValidRequest();
        req.testScenarios = [];
        req.humanHandoffRules = [];

        const res = validateAgentBlueprint(req);
        assert.strictEqual(res.validationStatus, "not_ready", "Empty required arrays should drop status to not_ready");
        assert.ok(res.missingFields.includes("testScenarios"), "Should flag missing testScenarios");
        assert.ok(res.missingFields.includes("humanHandoffRules"), "Should flag missing humanHandoffRules");
    }

    // Test 4: Sensitive touches (touchesMoney)
    {
        const req = createValidRequest();
        req.touchesMoney = true;
        // Needs adequate escalation rules to pass sensitive checks
        req.humanHandoffRules = ["Requires human sign-off on transaction"];

        const res = validateAgentBlueprint(req);
        // It drops to "needs_more_guardrails" due to permissionWarnings > 0
        assert.strictEqual(res.validationStatus, "needs_more_guardrails", "Touches money triggers permission warnings, making it needs_more_guardrails");
        assert.strictEqual(res.humanReviewRequired, true, "Touches money should require human review");
        assert.strictEqual(res.recommendedAutomationMode, "Draft-only AI assist", "Touches money should recommend Draft-only AI assist");
        assert.ok(res.permissionWarnings.some(w => w.includes("Draft-only mode")), "Should have permission warning about Draft-only mode");
    }

    // Test 5: Sensitive touches lacking rules (not_ready)
    {
        const req = createValidRequest();
        req.touchesLegalComplianceHRMedicalOrFinance = true;
        req.humanHandoffRules = ["None required"];
        req.escalationRules = [];

        const res = validateAgentBlueprint(req);
        assert.strictEqual(res.validationStatus, "not_ready", "Sensitive data with 'none' handoff should be not_ready");
        assert.ok(res.safetyWarnings.some(w => w.includes("explicitly defined human handoff rules")), "Should warn about handoff rules");
        assert.ok(res.missingFields.includes("humanHandoffRules (inadequate for sensitive workflow)"), "Should flag inadequate handoff rules");
        assert.ok(res.missingFields.includes("escalationRules (required for sensitive workflows)"), "Should flag missing escalation rules");
    }

    // Test 6: touchesCustomers without adequate guardrails
    {
        const req = createValidRequest();
        req.touchesCustomers = true;
        const res = validateAgentBlueprint(req);

        assert.ok(res.safetyWarnings.some(w => w.includes("Customer-facing agents should not be fully autonomous")), "Should warn about customer-facing agents");
        assert.strictEqual(res.recommendedAutomationMode, "Human approval before action", "Touches customers without money/legal should recommend human approval");
    }

    console.log("All blueprint-validator tests passed!");
}

runTests().catch(err => {
    console.error("Test failed:", err);
    process.exit(1);
});

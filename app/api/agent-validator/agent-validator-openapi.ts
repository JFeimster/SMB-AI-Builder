export function buildAgentValidatorOpenApiSchema(serverUrl: string) {
  const schema: any = {
    openapi: "3.1.0",
    info: {
      title: "SMB AI Workflow & Agent Builder - Validate Agent Blueprint",
      description:
        "Validate whether an AI agent blueprint has enough instructions, guardrails, permission boundaries, handoff rules, and tests to be piloted safely.",
      version: "1.0.0",
    },
    paths: {
      "/api/agent-validator": {
        post: {
          operationId: "validateAgentBlueprint",
          summary: "Validate AI agent blueprint",
          description:
            "Checks instructions, guardrails, permissions, handoffs, and tests against safety rules, returning a validation status.",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AgentBlueprintRequest",
                },
              },
            },
          },
          responses: {
            "200": {
              description: "Agent validation result.",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/AgentBlueprintResponse",
                  },
                },
              },
            },
            "400": {
              description: "Invalid request.",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/ErrorResponse",
                  },
                },
              },
            },
            "500": {
              description: "Unexpected server error.",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/ErrorResponse",
                  },
                },
              },
            },
          },
        },
      },
    },
    components: {
      schemas: {
        AgentBlueprintRequest: {
          type: "object",
          required: [
            "agentName",
            "agentRole",
            "targetUser",
            "primaryJob",
            "inputsNeeded",
            "outputsProduced",
            "instructions",
            "guardrails",
            "permissionBoundaries",
            "humanHandoffRules",
            "testScenarios"
          ],
          additionalProperties: false,
          properties: {
            agentName: { type: "string" },
            agentRole: { type: "string" },
            targetUser: { type: "string" },
            primaryJob: { type: "string" },
            inputsNeeded: { type: "array", items: { type: "string" } },
            outputsProduced: { type: "array", items: { type: "string" } },
            instructions: { type: "string" },
            guardrails: { type: "array", items: { type: "string" } },
            permissionBoundaries: { type: "array", items: { type: "string" } },
            humanHandoffRules: { type: "array", items: { type: "string" } },
            testScenarios: { type: "array", items: { type: "string" } },
            failureModes: { type: "array", items: { type: "string" } },
            escalationRules: { type: "array", items: { type: "string" } },
            touchesCustomers: { type: "boolean" },
            touchesMoney: { type: "boolean" },
            touchesSensitiveData: { type: "boolean" },
            touchesLegalComplianceHRMedicalOrFinance: { type: "boolean" },
            notes: { type: "string" }
          },
        },
        AgentBlueprintResponse: {
          type: "object",
          properties: {
            agentName: { type: "string" },
            validationStatus: { type: "string", enum: ["ready_for_limited_pilot", "needs_more_guardrails", "not_ready"] },
            missingFields: { type: "array", items: { type: "string" } },
            weakFields: { type: "array", items: { type: "string" } },
            safetyWarnings: { type: "array", items: { type: "string" } },
            permissionWarnings: { type: "array", items: { type: "string" } },
            testingGaps: { type: "array", items: { type: "string" } },
            humanReviewRequired: { type: "boolean" },
            recommendedAutomationMode: { type: "string" },
            launchReadinessSummary: { type: "string" },
            nextStep: { type: "string" },
            assumptions: { type: "array", items: { type: "string" } }
          },
        },
        ErrorResponse: {
          type: "object",
          properties: {
            error: { type: "string" },
            message: { type: "string" },
            details: { type: "object" },
          },
        },
      },
    },
  };

  schema.servers = [
    {
      url: serverUrl,
      description: "Current deployment base URL.",
    },
  ];

  return schema;
}

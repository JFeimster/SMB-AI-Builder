export function buildTestScenariosOpenApiSchema(serverUrl: string) {
  const schema = {
    "openapi": "3.1.0",
    "info": {
      "title": "SMB AI Workflow Actions - Test Scenarios Generator",
      "version": "1.0.0",
      "description": "No-auth OpenAPI schema for generating test scenarios for AI agents and automations."
    },
    "servers": [
      {
        "url": "https://YOUR-VERCEL-DOMAIN.vercel.app",
        "description": "Replace with your deployed Vercel base URL."
      }
    ],
    "paths": {
      "/api/test-scenarios": {
        "get": {
          "operationId": "getTestScenariosActionInfo",
          "summary": "Get test scenarios generator endpoint information.",
          "description": "Returns basic information about the test scenarios generator action.",
          "responses": {
            "200": {
              "description": "Endpoint metadata.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActionInfo"
                  }
                }
              }
            }
          }
        },
        "post": {
          "operationId": "generateTestScenarios",
          "summary": "Generate standard test scenarios for an AI agent or automation.",
          "description": "Generates test cases across normal, missing, ambiguous, and risky inputs, ensuring robust testing before production.",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TestScenariosRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Generated test scenarios.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TestScenariosResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Invalid request.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorResponse"
                  }
                }
              }
            },
            "500": {
              "description": "Unexpected server error.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorResponse"
                  }
                }
              }
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "TestScenariosRequest": {
          "type": "object",
          "additionalProperties": false,
          "required": [
            "workflowName",
            "workflowType",
            "riskLevel",
            "inputs",
            "outputs"
          ],
          "properties": {
            "workflowName": { "type": "string" },
            "workflowType": { "type": "string" },
            "riskLevel": { "type": "string", "enum": ["low", "medium", "high"] },
            "inputs": {
              "type": "array",
              "items": { "type": "string" }
            },
            "outputs": {
              "type": "array",
              "items": { "type": "string" }
            },
            "edgeCases": {
              "type": "array",
              "items": { "type": "string" }
            },
            "humanHandoffRules": {
              "type": "array",
              "items": { "type": "string" }
            },
            "touchesCustomers": { "type": "boolean" },
            "touchesMoney": { "type": "boolean" },
            "touchesSensitiveData": { "type": "boolean" },
            "touchesLegalComplianceHRMedicalOrFinance": { "type": "boolean" },
            "notes": { "type": "string" }
          }
        },
        "Scenario": {
          "type": "object",
          "properties": {
            "scenarioName": { "type": "string" },
            "inputDescription": { "type": "string" },
            "expectedBehavior": { "type": "string" }
          }
        },
        "TestScenariosResponse": {
          "type": "object",
          "properties": {
            "workflowName": { "type": "string" },
            "scenarioSet": { "type": "string" },
            "normalScenarios": {
              "type": "array",
              "items": { "$ref": "#/components/schemas/Scenario" }
            },
            "missingDataScenarios": {
              "type": "array",
              "items": { "$ref": "#/components/schemas/Scenario" }
            },
            "ambiguousRequestScenarios": {
              "type": "array",
              "items": { "$ref": "#/components/schemas/Scenario" }
            },
            "sensitiveDataScenarios": {
              "type": "array",
              "items": { "$ref": "#/components/schemas/Scenario" }
            },
            "escalationScenarios": {
              "type": "array",
              "items": { "$ref": "#/components/schemas/Scenario" }
            },
            "failureScenarios": {
              "type": "array",
              "items": { "$ref": "#/components/schemas/Scenario" }
            },
            "permissionBoundaryScenarios": {
              "type": "array",
              "items": { "$ref": "#/components/schemas/Scenario" }
            },
            "expectedBehaviors": {
              "type": "array",
              "items": { "type": "string" }
            },
            "humanHandoffTriggers": {
              "type": "array",
              "items": { "type": "string" }
            },
            "riskWarnings": {
              "type": "array",
              "items": { "type": "string" }
            },
            "assumptions": {
              "type": "array",
              "items": { "type": "string" }
            }
          }
        },
        "ActionInfo": {
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "description": { "type": "string" },
            "method": { "type": "string" },
            "path": { "type": "string" },
            "auth": { "type": "string" },
            "requiredBodyFields": {
              "type": "array",
              "items": { "type": "string" }
            }
          }
        },
        "ErrorResponse": {
          "type": "object",
          "properties": {
            "error": { "type": "string" },
            "message": { "type": "string" },
            "details": {
              "type": "object",
              "additionalProperties": true
            }
          }
        }
      }
    }
  } as const;

  return {
    ...schema,
    servers: [
      {
        url: serverUrl,
        description: "Current deployed server URL.",
      },
    ],
  };
}

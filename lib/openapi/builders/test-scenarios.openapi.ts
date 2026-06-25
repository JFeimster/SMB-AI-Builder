import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getGenerateTestScenariosPathItem(): PathItem {
  return {
    post: {
      operationId: "generateTestScenarios",
      summary: "Generate Test Scenarios",
      description: "Creates test cases for normal, missing, ambiguous, and risky inputs. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["workflowName", "inputs"],
              properties: {
                workflowName: { type: "string" },
                inputs: {
                  type: "array",
                  items: { type: "string" },
                },
                complexity: { type: "string", enum: ["low", "medium", "high"], default: "medium" },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful generation of test scenarios.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      testCases: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            type: { type: "string", enum: ["normal", "missing", "ambiguous", "risky"] },
                            description: { type: "string" },
                            expectedBehavior: { type: "string" },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "400": {
          description: "Invalid request body.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  error: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
  };
}

export function buildGenerateTestScenariosOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Generate Test Scenarios",
      version: "1.0.0",
      description: "Creates test cases for normal, missing, ambiguous, and risky inputs. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/test-scenarios": getGenerateTestScenariosPathItem(),
    },
  };
}

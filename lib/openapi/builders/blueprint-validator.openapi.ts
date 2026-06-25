import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getValidateAutomationBlueprintPathItem(): PathItem {
  return {
    post: {
      operationId: "validateAutomationBlueprint",
      summary: "Validate Automation Blueprint",
      description: "Validates an automation blueprint for completeness and common failure points. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["blueprintName", "trigger", "steps", "expectedOutcome"],
              properties: {
                blueprintName: { type: "string" },
                trigger: { type: "string" },
                steps: {
                  type: "array",
                  items: { type: "string" },
                },
                expectedOutcome: { type: "string" },
                hasErrorHandling: { type: "boolean" },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful validation of the blueprint.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      isValid: { type: "boolean" },
                      missingElements: {
                        type: "array",
                        items: { type: "string" },
                      },
                      warnings: {
                        type: "array",
                        items: { type: "string" },
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

export function buildValidateAutomationBlueprintOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Validate Automation Blueprint",
      version: "1.0.0",
      description: "Validates an automation blueprint for completeness. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/blueprint-validator": getValidateAutomationBlueprintPathItem(),
    },
  };
}

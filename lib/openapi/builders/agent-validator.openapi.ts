import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getValidateAgentBlueprintPathItem(): PathItem {
  return {
    post: {
      operationId: "validateAgentBlueprint",
      summary: "Validate Agent Blueprint",
      description: "Validates an AI agent design blueprint to ensure clear guardrails and handoffs. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["agentName", "purpose", "systemPrompt", "tools"],
              properties: {
                agentName: { type: "string" },
                purpose: { type: "string" },
                systemPrompt: { type: "string" },
                tools: {
                  type: "array",
                  items: { type: "string" },
                },
                humanHandoffCondition: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful validation of the agent blueprint.",
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
                      missingGuardrails: {
                        type: "array",
                        items: { type: "string" },
                      },
                      safetySuggestions: {
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

export function buildValidateAgentBlueprintOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Validate Agent Blueprint",
      version: "1.0.0",
      description: "Validates an AI agent design blueprint to ensure clear guardrails and handoffs. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/agent-validator": getValidateAgentBlueprintPathItem(),
    },
  };
}

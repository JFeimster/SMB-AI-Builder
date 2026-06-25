import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getSuggestHumanReviewPatternPathItem(): PathItem {
  return {
    post: {
      operationId: "suggestHumanReviewPattern",
      summary: "Suggest Human Review Pattern",
      description: "Suggests draft-only, approval, exception, or escalation patterns for a workflow. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["workflowName", "riskLevel", "automationGoal"],
              properties: {
                workflowName: { type: "string" },
                riskLevel: { type: "string", enum: ["low", "medium", "high", "critical"] },
                automationGoal: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful suggestion of human review pattern.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      recommendedPattern: { type: "string", enum: ["draft-only", "approval", "exception", "escalation", "fully-automated"] },
                      description: { type: "string" },
                      implementationSteps: {
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

export function buildSuggestHumanReviewPatternOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Suggest Human Review Pattern",
      version: "1.0.0",
      description: "Suggests draft-only, approval, exception, or escalation patterns. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/human-review-pattern": getSuggestHumanReviewPatternPathItem(),
    },
  };
}

import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getClassifyWorkflowRiskPathItem(): PathItem {
  return {
    post: {
      operationId: "classifyWorkflowRisk",
      summary: "Classify Workflow Risk",
      description: "Classifies workflow risk and recommends review level. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["workflowName", "dataTypes", "impactLevel"],
              properties: {
                workflowName: { type: "string" },
                dataTypes: {
                  type: "array",
                  items: { type: "string" },
                },
                impactLevel: { type: "string", enum: ["low", "medium", "high", "critical"] },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful classification of workflow risk.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      riskLevel: { type: "string", enum: ["low", "medium", "high", "critical"] },
                      recommendedReviewLevel: { type: "string" },
                      riskFactors: {
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

export function buildClassifyWorkflowRiskOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Classify Workflow Risk",
      version: "1.0.0",
      description: "Classifies workflow risk and recommends review level. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/risk-classifier": getClassifyWorkflowRiskPathItem(),
    },
  };
}

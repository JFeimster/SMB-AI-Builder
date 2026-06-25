import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getScoreAutomationReadinessPathItem(): PathItem {
  return {
    post: {
      operationId: "scoreAutomationReadiness",
      summary: "Score Automation Readiness",
      description: "Calculates an automation readiness score (0-30) based on process stability, data availability, rule clarity, and error frequency. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["workflowName", "categoryScores"],
              properties: {
                workflowName: {
                  type: "string",
                  description: "The name of the workflow being evaluated.",
                },
                categoryScores: {
                  type: "object",
                  required: ["processStability", "dataAvailability", "ruleClarity", "errorFrequency"],
                  properties: {
                    processStability: { type: "integer", minimum: 0, maximum: 3 },
                    dataAvailability: { type: "integer", minimum: 0, maximum: 3 },
                    ruleClarity: { type: "integer", minimum: 0, maximum: 3 },
                    errorFrequency: { type: "integer", minimum: 0, maximum: 3 },
                  },
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful calculation of the readiness score.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      score: { type: "integer" },
                      readinessBand: { type: "string" },
                      recommendation: { type: "string" },
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

export function buildScoreAutomationReadinessOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Score Automation Readiness",
      version: "1.0.0",
      description: "Calculates an automation readiness score. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/readiness-score": getScoreAutomationReadinessPathItem(),
    },
  };
}

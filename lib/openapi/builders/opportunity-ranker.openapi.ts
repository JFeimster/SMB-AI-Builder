import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getRankAutomationOpportunitiesPathItem(): PathItem {
  return {
    post: {
      operationId: "rankAutomationOpportunities",
      summary: "Rank Automation Opportunities",
      description: "Ranks a list of workflow automation opportunities based on estimated time savings, frequency, and complexity. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["opportunities"],
              properties: {
                opportunities: {
                  type: "array",
                  items: {
                    type: "object",
                    required: ["name", "estimatedHoursSavedPerWeek", "frequency", "complexity"],
                    properties: {
                      name: { type: "string" },
                      estimatedHoursSavedPerWeek: { type: "number" },
                      frequency: { type: "string", enum: ["daily", "weekly", "monthly", "rarely"] },
                      complexity: { type: "string", enum: ["low", "medium", "high"] },
                    },
                  },
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful ranking of opportunities.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      rankedOpportunities: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            name: { type: "string" },
                            score: { type: "number" },
                            rank: { type: "integer" },
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

export function buildRankAutomationOpportunitiesOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Rank Automation Opportunities",
      version: "1.0.0",
      description: "Ranks workflow candidates by automation fit. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/opportunity-ranker": getRankAutomationOpportunitiesPathItem(),
    },
  };
}

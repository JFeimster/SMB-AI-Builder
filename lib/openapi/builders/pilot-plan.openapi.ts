import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getBuildPilotTestPlanPathItem(): PathItem {
  return {
    post: {
      operationId: "buildPilotTestPlan",
      summary: "Build Pilot Test Plan",
      description: "Creates a limited test plan for a workflow automation. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["workflowName", "targetAudience", "durationDays"],
              properties: {
                workflowName: { type: "string" },
                targetAudience: { type: "string" },
                durationDays: { type: "integer", minimum: 1, maximum: 90 },
                successCriteria: {
                  type: "array",
                  items: { type: "string" },
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful generation of the pilot plan.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      pilotPlan: { type: "string" },
                      recommendedMetrics: {
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

export function buildBuildPilotTestPlanOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Build Pilot Test Plan",
      version: "1.0.0",
      description: "Creates a limited test plan for a workflow automation. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/pilot-plan": getBuildPilotTestPlanPathItem(),
    },
  };
}

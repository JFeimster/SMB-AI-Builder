import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getCalculateAutomationRoiPathItem(): PathItem {
  return {
    post: {
      operationId: "calculateAutomationROI",
      summary: "Calculate Automation ROI",
      description: "Estimates time savings, cost savings, and payback period for a proposed automation. This is a stateless planning utility. Estimates are for guidance only; sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["hoursSpentPerMonth", "hourlyRate", "automationCost", "monthlyMaintenance"],
              properties: {
                hoursSpentPerMonth: { type: "number" },
                hourlyRate: { type: "number" },
                automationCost: { type: "number" },
                monthlyMaintenance: { type: "number" },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful calculation of ROI.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      monthlySavings: { type: "number" },
                      annualSavings: { type: "number" },
                      paybackPeriodMonths: { type: "number" },
                      roiPercentage: { type: "number" },
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

export function buildCalculateAutomationRoiOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Calculate Automation ROI",
      version: "1.0.0",
      description: "Estimates time savings, cost savings, and payback period. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/automation-roi": getCalculateAutomationRoiPathItem(),
    },
  };
}

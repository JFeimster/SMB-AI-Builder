import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getGenerateWorkflowMapPathItem(): PathItem {
  return {
    post: {
      operationId: "generateWorkflowMap",
      summary: "Generate Workflow Map",
      description: "Generates a structured mapping of a workflow from informal steps. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["rawProcessDescription"],
              properties: {
                rawProcessDescription: { type: "string" },
                desiredOutputFormat: { type: "string", enum: ["markdown", "json"], default: "markdown" },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful generation of the workflow map.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      workflowMap: { type: "string" },
                      identifiedSystems: {
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

export function buildGenerateWorkflowMapOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Generate Workflow Map",
      version: "1.0.0",
      description: "Generates a structured mapping of a workflow from informal steps. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/workflow-map": getGenerateWorkflowMapPathItem(),
    },
  };
}

import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getCheckRobotsTxtPathItem(): PathItem {
  return {
    post: {
      operationId: "checkRobotsTxt",
      summary: "Check Robots Txt",
      description: "Checks public robots.txt rules before website analysis. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["url"],
              properties: {
                url: { type: "string", description: "The URL of the website to check." },
                targetPath: { type: "string", description: "Optional specific path to check against the rules." },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful check of robots.txt.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      isAllowed: { type: "boolean" },
                      disallowedPaths: {
                        type: "array",
                        items: { type: "string" },
                      },
                      sitemapLinks: {
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

export function buildCheckRobotsTxtOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Check Robots Txt",
      version: "1.0.0",
      description: "Checks public robots.txt rules before website analysis. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/robots-check": getCheckRobotsTxtPathItem(),
    },
  };
}

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
              required: ["domain"],
              properties: {
                domain: { type: "string", description: "HTTPS domain or URL whose robots.txt should be checked." },
                userAgent: { type: "string", description: "Optional target user agent to evaluate." },
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
                  robotsUrl: { type: "string" },
                  exists: { type: "boolean" },
                  allowedSummary: { type: "string" },
                  disallowedPaths: {
                    type: "array",
                    items: { type: "string" },
                  },
                  sitemapLinks: {
                    type: "array",
                    items: { type: "string" },
                  },
                  crawlWarnings: {
                    type: "array",
                    items: { type: "string" },
                  },
                  sourceNote: { type: "string" },
                  assumptions: { type: "array", items: { type: "string" } },
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
                  error: { type: "string" },
                  message: { type: "string" },
                  details: { type: "object", additionalProperties: true },
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

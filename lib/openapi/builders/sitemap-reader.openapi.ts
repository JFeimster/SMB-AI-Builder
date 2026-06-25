import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getAnalyzeSitemapPathItem(): PathItem {
  return {
    post: {
      operationId: "analyzeSitemap",
      summary: "Analyze Sitemap",
      description: "Reads a public sitemap and summarizes page structure. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["url"],
              properties: {
                url: { type: "string", description: "The URL of the sitemap XML." },
                maxUrls: { type: "integer", default: 100, description: "Maximum number of URLs to analyze." },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful analysis of the sitemap.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      totalUrls: { type: "integer" },
                      analyzedUrls: { type: "integer" },
                      likelyPageTypes: {
                        type: "object",
                        additionalProperties: { type: "integer" },
                      },
                      urls: {
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

export function buildAnalyzeSitemapOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Analyze Sitemap",
      version: "1.0.0",
      description: "Reads a public sitemap and summarizes page structure. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/sitemap-reader": getAnalyzeSitemapPathItem(),
    },
  };
}

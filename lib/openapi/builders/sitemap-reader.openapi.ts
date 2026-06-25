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
              required: ["domainOrSitemapUrl"],
              properties: {
                domainOrSitemapUrl: { type: "string", description: "HTTPS domain or sitemap URL to analyze." },
                maxUrls: { type: "integer", minimum: 1, maximum: 250, default: 50, description: "Maximum number of URLs to analyze." },
                includePageTypeGuesses: { type: "boolean", description: "Whether to include simple page type guesses for discovered URLs." },
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
                  sitemapUrl: { type: "string" },
                  urls: {
                    type: "array",
                    items: { type: "string" },
                  },
                  pageTypeGuesses: {
                    anyOf: [
                      { type: "object", additionalProperties: true },
                      { type: "null" },
                    ],
                  },
                  likelyServicePages: { type: "array", items: { type: "string" } },
                  likelyResourcePages: { type: "array", items: { type: "string" } },
                  likelyContactPages: { type: "array", items: { type: "string" } },
                  likelyOnboardingPages: { type: "array", items: { type: "string" } },
                  warnings: { type: "array", items: { type: "string" } },
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

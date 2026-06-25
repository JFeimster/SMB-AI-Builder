import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getExtractWebsiteMetadataPathItem(): PathItem {
  return {
    post: {
      operationId: "extractWebsiteMetadata",
      summary: "Extract Website Metadata",
      description: "Extracts public website metadata for lead-flow and customer journey audits. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["url"],
              properties: {
                url: { type: "string", description: "The URL of the website to extract metadata from." },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful extraction of website metadata.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      title: { type: "string" },
                      metaDescription: { type: "string" },
                      headings: {
                        type: "object",
                        properties: {
                          h1: { type: "array", items: { type: "string" } },
                          h2: { type: "array", items: { type: "string" } },
                        },
                      },
                      formsDetected: { type: "integer" },
                      ctaText: { type: "array", items: { type: "string" } },
                      contactLinks: { type: "array", items: { type: "string" } },
                      socialLinks: { type: "array", items: { type: "string" } },
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

export function buildExtractWebsiteMetadataOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Extract Website Metadata",
      version: "1.0.0",
      description: "Extracts public website metadata for lead-flow and customer journey audits. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/site-metadata": getExtractWebsiteMetadataPathItem(),
    },
  };
}

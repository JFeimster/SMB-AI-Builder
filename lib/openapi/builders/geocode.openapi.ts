import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getGeocodeLocationPathItem(): PathItem {
  return {
    post: {
      operationId: "geocodeLocation",
      summary: "Geocode Location",
      description: "Converts locations to coordinates for weather or local planning. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["query"],
              properties: {
                query: { type: "string", description: "City, postal code, or public location text to geocode." },
                count: { type: "integer", default: 5, description: "Number of results to return." },
                language: { type: "string", default: "en", description: "Language code for geocoding results." },
                countryCode: { type: "string", description: "Optional country code filter for returned matches." },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful geocoding of the location.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  query: { type: "string" },
                  matches: {
                    type: "array",
                    items: {
                      type: "object",
                      additionalProperties: true,
                      properties: {
                        name: { type: "string" },
                        latitude: { type: "number" },
                        longitude: { type: "number" },
                        country: { type: "string" },
                        admin1: { type: "string" },
                        timezone: { type: "string" },
                      },
                    },
                  },
                  bestMatch: {
                    anyOf: [
                      {
                        type: "object",
                        additionalProperties: true,
                      },
                      { type: "null" },
                    ],
                  },
                  sourceNote: { type: "string" },
                  warnings: { type: "array", items: { type: "string" } },
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

export function buildGeocodeLocationOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Geocode Location",
      version: "1.0.0",
      description: "Converts locations to coordinates for weather or local planning. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/geocode": getGeocodeLocationPathItem(),
    },
  };
}

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
              required: ["name"],
              properties: {
                name: { type: "string", description: "The location name to geocode." },
                count: { type: "integer", default: 5, description: "Number of results to return." },
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
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      results: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            id: { type: "integer" },
                            name: { type: "string" },
                            latitude: { type: "number" },
                            longitude: { type: "number" },
                            elevation: { type: "number" },
                            country: { type: "string" },
                            timezone: { type: "string" },
                          },
                        },
                      },
                      bestMatch: {
                        type: "object",
                        properties: {
                          id: { type: "integer" },
                          name: { type: "string" },
                          latitude: { type: "number" },
                          longitude: { type: "number" },
                          elevation: { type: "number" },
                          country: { type: "string" },
                          timezone: { type: "string" },
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

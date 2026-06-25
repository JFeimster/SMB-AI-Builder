import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getGetWeatherByLocationPathItem(): PathItem {
  return {
    post: {
      operationId: "getWeatherByLocation",
      summary: "Get Weather by Location",
      description: "Supports field-service, event, delivery, and local operations planning. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["latitude", "longitude"],
              properties: {
                latitude: { type: "number" },
                longitude: { type: "number" },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful retrieval of weather data.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      latitude: { type: "number" },
                      longitude: { type: "number" },
                      temperature: { type: "number" },
                      windspeed: { type: "number" },
                      winddirection: { type: "number" },
                      weathercode: { type: "number" },
                      is_day: { type: "number" },
                      time: { type: "string" },
                      operationalImpactFlags: {
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

export function buildGetWeatherByLocationOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Get Weather by Location",
      version: "1.0.0",
      description: "Retrieves weather data for operational planning. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/weather": getGetWeatherByLocationPathItem(),
    },
  };
}

import { OpenApiDocument, PathItem } from "../../types/openapi";

export function getGetPublicHolidaysPathItem(): PathItem {
  return {
    post: {
      operationId: "getPublicHolidays",
      summary: "Get Public Holidays",
      description: "Returns public holidays for planning reminders and follow-ups. This is a stateless planning utility. Sensitive decisions require human review.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["countryCode", "year"],
              properties: {
                countryCode: {
                  type: "string",
                  description: "2-letter ISO 3166-1 alpha-2 country code.",
                  example: "US",
                },
                year: {
                  type: "integer",
                  description: "The year for which to fetch holidays.",
                  example: 2024,
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Successful retrieval of public holidays.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: { type: "boolean" },
                  data: {
                    type: "object",
                    properties: {
                      holidays: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            date: { type: "string" },
                            localName: { type: "string" },
                            name: { type: "string" },
                            countryCode: { type: "string" },
                            fixed: { type: "boolean" },
                            global: { type: "boolean" },
                            counties: {
                              type: "array",
                              items: { type: "string" },
                            },
                            launchYear: { type: "integer" },
                            types: {
                              type: "array",
                              items: { type: "string" },
                            },
                          },
                        },
                      },
                      businessDayWarnings: {
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

export function buildGetPublicHolidaysOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  return {
    openapi: "3.1.0",
    info: {
      title: "Get Public Holidays",
      version: "1.0.0",
      description: "Returns public holidays for planning reminders. Planning utility only.",
    },
    servers: [{ url: serverUrl }],
    paths: {
      "/api/public-holidays": getGetPublicHolidaysPathItem(),
    },
  };
}

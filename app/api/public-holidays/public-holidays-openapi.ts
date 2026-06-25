export function buildGetPublicHolidaysOpenApiSchema(serverUrl: string) {
  const schema = {
  "openapi": "3.1.0",
  "info": {
    "title": "SMB AI Workflow Actions - GetPublicHolidays",
    "version": "1.0.0",
    "description": "No-auth OpenAPI schema for: Return public holidays to help plan follow-ups, reminders, staffing, campaigns, and due dates."
  },
  "servers": [
    {
      "url": "https://YOUR-VERCEL-DOMAIN.vercel.app",
      "description": "Replace with your deployed Vercel base URL."
    }
  ],
  "paths": {
    "/api/public-holidays": {
      "get": {
        "operationId": "getGetPublicHolidaysActionInfo",
        "summary": "Get public-holidays endpoint information.",
        "description": "Returns basic information about the action.",
        "responses": {
          "200": {
            "description": "Endpoint metadata.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ActionInfo"
                }
              }
            }
          }
        }
      },
      "post": {
        "operationId": "getPublicHolidays",
        "summary": "Return public holidays to help plan follow-ups, reminders, staffing, campaigns, and due dates.",
        "description": "Return public holidays to help plan follow-ups, reminders, staffing, campaigns, and due dates.",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetPublicHolidaysRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success result.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetPublicHolidaysResponse"
                }
              }
            }
          },
          "400": {
            "description": "Invalid request.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "500": {
            "description": "Unexpected server error.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "GetPublicHolidaysRequest": {
        "type": "object",
        "required": [
          "countryCode",
          "year"
        ],
        "properties": {
          "countryCode": {
            "type": "string"
          },
          "year": {
            "type": "number"
          },
          "region": {
            "type": "string"
          }
        }
      },
      "GetPublicHolidaysResponse": {
        "type": "object",
        "properties": {
          "countryCode": {
            "type": "string"
          },
          "year": {
            "type": "number"
          },
          "holidays": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": true
            }
          },
          "businessDayWarnings": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "sourceNote": {
            "type": "string"
          },
          "warnings": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "assumptions": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "ActionInfo": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "method": {
            "type": "string"
          },
          "path": {
            "type": "string"
          }
        }
      },
      "ErrorResponse": {
        "type": "object",
        "properties": {
          "error": {
            "type": "string"
          },
          "message": {
            "type": "string"
          },
          "details": {
            "type": "object"
          }
        }
      }
    }
  }
};

  schema.servers = [
    {
      url: serverUrl,
      description: "Current deployment base URL.",
    },
  ];

  return schema;
}

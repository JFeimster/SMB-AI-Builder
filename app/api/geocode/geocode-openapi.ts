export function buildGeocodeLocationOpenApiSchema(serverUrl: string) {
  const schema = {
  "openapi": "3.1.0",
  "info": {
    "title": "SMB AI Workflow Actions - GeocodeLocation",
    "version": "1.0.0",
    "description": "No-auth OpenAPI schema for: Convert city, postal code, or address-like location text into coordinates for weather or local planning Actions."
  },
  "servers": [
    {
      "url": "https://YOUR-VERCEL-DOMAIN.vercel.app",
      "description": "Replace with your deployed Vercel base URL."
    }
  ],
  "paths": {
    "/api/geocode": {
      "get": {
        "operationId": "getGeocodeLocationActionInfo",
        "summary": "Get geocode endpoint information.",
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
        "operationId": "geocodeLocation",
        "summary": "Convert city, postal code, or address-like location text into coordinates for weather or local planning Actions.",
        "description": "Convert city, postal code, or address-like location text into coordinates for weather or local planning Actions.",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GeocodeLocationRequest"
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
                  "$ref": "#/components/schemas/GeocodeLocationResponse"
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
      "GeocodeLocationRequest": {
        "type": "object",
        "required": [
          "query"
        ],
        "properties": {
          "query": {
            "type": "string"
          },
          "count": {
            "type": "number"
          },
          "language": {
            "type": "string"
          },
          "countryCode": {
            "type": "string"
          }
        }
      },
      "GeocodeLocationResponse": {
        "type": "object",
        "properties": {
          "query": {
            "type": "string"
          },
          "matches": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": true
            }
          },
          "bestMatch": {
            "type": "object",
            "additionalProperties": true,
            "nullable": true
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

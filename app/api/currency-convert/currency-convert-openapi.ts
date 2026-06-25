export function buildConvertCurrencyEstimateOpenApiSchema(serverUrl: string) {
  const schema = {
  "openapi": "3.1.0",
  "info": {
    "title": "SMB AI Workflow Actions - ConvertCurrencyEstimate",
    "version": "1.0.0",
    "description": "No-auth OpenAPI schema for: Estimate converted amounts across currencies for international SMB planning."
  },
  "servers": [
    {
      "url": "https://YOUR-VERCEL-DOMAIN.vercel.app",
      "description": "Replace with your deployed Vercel base URL."
    }
  ],
  "paths": {
    "/api/currency-convert": {
      "get": {
        "operationId": "getConvertCurrencyEstimateActionInfo",
        "summary": "Get currency-convert endpoint information.",
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
        "operationId": "convertCurrencyEstimate",
        "summary": "Estimate converted amounts across currencies for international SMB planning.",
        "description": "Estimate converted amounts across currencies for international SMB planning.",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ConvertCurrencyEstimateRequest"
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
                  "$ref": "#/components/schemas/ConvertCurrencyEstimateResponse"
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
      "ConvertCurrencyEstimateRequest": {
        "type": "object",
        "required": [
          "amount",
          "fromCurrency",
          "toCurrency"
        ],
        "properties": {
          "amount": {
            "type": "number"
          },
          "fromCurrency": {
            "type": "string"
          },
          "toCurrency": {
            "type": "string"
          },
          "date": {
            "type": "string"
          }
        }
      },
      "ConvertCurrencyEstimateResponse": {
        "type": "object",
        "properties": {
          "amount": {
            "type": "number"
          },
          "fromCurrency": {
            "type": "string"
          },
          "toCurrency": {
            "type": "string"
          },
          "convertedAmount": {
            "type": "number",
            "nullable": true
          },
          "exchangeRate": {
            "type": "number",
            "nullable": true
          },
          "rateDate": {
            "type": "string"
          },
          "sourceNote": {
            "type": "string"
          },
          "disclaimer": {
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

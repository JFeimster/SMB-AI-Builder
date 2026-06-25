export function buildExtractWebsiteMetadataOpenApiSchema(serverUrl: string) {
  const schema = {
  "openapi": "3.1.0",
  "info": {
    "title": "SMB AI Workflow Actions - ExtractWebsiteMetadata",
    "version": "1.0.0",
    "description": "No-auth OpenAPI schema for: Fetch public website metadata for SMB website and lead-flow audits."
  },
  "servers": [
    {
      "url": "https://YOUR-VERCEL-DOMAIN.vercel.app",
      "description": "Replace with your deployed Vercel base URL."
    }
  ],
  "paths": {
    "/api/site-metadata": {
      "get": {
        "operationId": "getExtractWebsiteMetadataActionInfo",
        "summary": "Get site-metadata endpoint information.",
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
        "operationId": "extractWebsiteMetadata",
        "summary": "Fetch public website metadata for SMB website and lead-flow audits.",
        "description": "Fetch public website metadata for SMB website and lead-flow audits.",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ExtractWebsiteMetadataRequest"
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
                  "$ref": "#/components/schemas/ExtractWebsiteMetadataResponse"
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
      "ExtractWebsiteMetadataRequest": {
        "type": "object",
        "required": [
          "url"
        ],
        "properties": {
          "url": {
            "type": "string"
          },
          "includeHeadings": {
            "type": "boolean"
          },
          "includeFormsDetected": {
            "type": "boolean"
          },
          "includeContactLinks": {
            "type": "boolean"
          }
        }
      },
      "ExtractWebsiteMetadataResponse": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "finalUrl": {
            "type": "string"
          },
          "title": {
            "type": "string",
            "nullable": true
          },
          "metaDescription": {
            "type": "string",
            "nullable": true
          },
          "headings": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          },
          "formsDetected": {
            "type": "boolean",
            "nullable": true
          },
          "ctaText": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          },
          "contactLinks": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          },
          "socialLinks": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          },
          "warnings": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "sourceNote": {
            "type": "string"
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

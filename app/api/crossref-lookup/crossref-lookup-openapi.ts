export function buildLookupPublicationMetadataOpenApiSchema(serverUrl: string) {
  const schema = {
  "openapi": "3.1.0",
  "info": {
    "title": "SMB AI Workflow Actions - LookupPublicationMetadata",
    "version": "1.0.0",
    "description": "No-auth OpenAPI schema for: Retrieve public citation metadata for articles, reports, DOI references, or research sources."
  },
  "servers": [
    {
      "url": "https://YOUR-VERCEL-DOMAIN.vercel.app",
      "description": "Replace with your deployed Vercel base URL."
    }
  ],
  "paths": {
    "/api/crossref-lookup": {
      "get": {
        "operationId": "getLookupPublicationMetadataActionInfo",
        "summary": "Get crossref-lookup endpoint information.",
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
        "operationId": "lookupPublicationMetadata",
        "summary": "Retrieve public citation metadata for articles, reports, DOI references, or research sources.",
        "description": "Retrieve public citation metadata for articles, reports, DOI references, or research sources.",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LookupPublicationMetadataRequest"
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
                  "$ref": "#/components/schemas/LookupPublicationMetadataResponse"
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
      "LookupPublicationMetadataRequest": {
        "type": "object",
        "properties": {
          "doi": {
            "type": "string"
          },
          "query": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "author": {
            "type": "string"
          },
          "rows": {
            "type": "number"
          }
        }
      },
      "LookupPublicationMetadataResponse": {
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
          "title": {
            "type": "string",
            "nullable": true
          },
          "authors": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          },
          "publicationDate": {
            "type": "string",
            "nullable": true
          },
          "doi": {
            "type": "string",
            "nullable": true
          },
          "publisher": {
            "type": "string",
            "nullable": true
          },
          "sourceUrl": {
            "type": "string",
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

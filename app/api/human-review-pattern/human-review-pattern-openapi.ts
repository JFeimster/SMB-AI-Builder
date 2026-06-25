export function buildHumanReviewPatternOpenApiSchema(serverUrl: string) {
  const schema = {
    "openapi": "3.1.0",
    "info": {
      "title": "SMB AI Workflow Actions - Human Review Pattern Suggestor",
      "version": "1.0.0",
      "description": "No-auth OpenAPI schema for recommending human-in-the-loop approval models for workflows."
    },
    "servers": [
      {
        "url": "https://YOUR-VERCEL-DOMAIN.vercel.app",
        "description": "Replace with your deployed Vercel base URL."
      }
    ],
    "paths": {
      "/api/human-review-pattern": {
        "get": {
          "operationId": "getHumanReviewPatternActionInfo",
          "summary": "Get human review pattern suggestor endpoint information.",
          "description": "Returns basic information about the human review pattern suggestion action.",
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
          "operationId": "suggestHumanReviewPattern",
          "summary": "Recommend the right human-in-the-loop approval model for a workflow.",
          "description": "Suggests appropriate levels of human involvement (e.g., Draft-only, Exception review) based on workflow risk, customer impact, and failure severity.",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HumanReviewPatternRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Recommended human review pattern.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/HumanReviewPatternResponse"
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
        "HumanReviewPatternRequest": {
          "type": "object",
          "additionalProperties": false,
          "required": [
            "workflowName",
            "riskLevel",
            "customerFacing",
            "touchesSensitiveData",
            "failureImpact"
          ],
          "properties": {
            "workflowName": { "type": "string" },
            "riskLevel": { "type": "string", "enum": ["low", "medium", "high"] },
            "customerFacing": { "type": "boolean" },
            "touchesSensitiveData": { "type": "boolean" },
            "failureImpact": { "type": "string", "enum": ["low", "medium", "high"] },
            "decisionType": { "type": "string" },
            "requiresLicensedJudgment": { "type": "boolean" },
            "currentReviewProcess": { "type": "string" },
            "notes": { "type": "string" }
          }
        },
        "HumanReviewPatternResponse": {
          "type": "object",
          "properties": {
            "workflowName": { "type": "string" },
            "recommendedPattern": { "type": "string" },
            "patternDescription": { "type": "string" },
            "humanRole": { "type": "string" },
            "aiRole": { "type": "string" },
            "approvalBeforeAction": { "type": "boolean" },
            "exceptionReviewRules": {
              "type": "array",
              "items": { "type": "string" }
            },
            "escalationRules": {
              "type": "array",
              "items": { "type": "string" }
            },
            "auditLogRecommendation": { "type": "string" },
            "rollbackRecommendation": { "type": "string" },
            "riskWarnings": {
              "type": "array",
              "items": { "type": "string" }
            },
            "nextStep": { "type": "string" },
            "assumptions": {
              "type": "array",
              "items": { "type": "string" }
            }
          }
        },
        "ActionInfo": {
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "description": { "type": "string" },
            "method": { "type": "string" },
            "path": { "type": "string" },
            "auth": { "type": "string" },
            "requiredBodyFields": {
              "type": "array",
              "items": { "type": "string" }
            }
          }
        },
        "ErrorResponse": {
          "type": "object",
          "properties": {
            "error": { "type": "string" },
            "message": { "type": "string" },
            "details": {
              "type": "object",
              "additionalProperties": true
            }
          }
        }
      }
    }
  } as const;

  return {
    ...schema,
    servers: [
      {
        url: serverUrl,
        description: "Current deployed server URL.",
      },
    ],
  };
}

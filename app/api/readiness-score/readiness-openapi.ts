export function buildReadinessOpenApiSchema(serverUrl: string) {
  const schema = {
  "openapi": "3.1.0",
  "info": {
    "title": "SMB AI Workflow Actions - Readiness Score",
    "version": "1.0.0",
    "description": "No-auth OpenAPI schema for scoring SMB automation readiness."
  },
  "servers": [
    {
      "url": "https://YOUR-VERCEL-DOMAIN.vercel.app",
      "description": "Replace with your deployed Vercel base URL."
    }
  ],
  "paths": {
    "/api/readiness-score": {
      "get": {
        "operationId": "getReadinessScoreActionInfo",
        "summary": "Get readiness score endpoint information.",
        "description": "Returns basic information about the readiness scoring action.",
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
        "operationId": "scoreAutomationReadiness",
        "summary": "Calculate automation readiness score for an SMB workflow.",
        "description": "Scores a workflow across ten readiness categories using a 0-3 scale and returns total score, readiness band, blockers, risk flags, and recommended next step.",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ReadinessScoreRequest"
              },
              "examples": {
                "leadFollowUp": {
                  "summary": "Lead follow-up workflow",
                  "value": {
                    "workflowName": "Lead follow-up after website inquiry",
                    "workflowDescription": "A new website inquiry is reviewed, qualified, and followed up by email.",
                    "userGoal": "Respond faster while keeping human approval before customer-facing replies.",
                    "scores": {
                      "workflowClarity": 2,
                      "processConsistency": 2,
                      "dataQuality": 2,
                      "toolAccess": 2,
                      "ownership": 3,
                      "riskLevel": 2,
                      "humanReviewPlan": 2,
                      "customerExperienceImpact": 3,
                      "measurementPlan": 1,
                      "rollbackPlan": 1
                    },
                    "categoryNotes": {
                      "measurementPlan": "No baseline response-time metric yet.",
                      "rollbackPlan": "Manual fallback exists but is not documented."
                    },
                    "notes": "Initial pilot should be draft-only."
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Readiness score result.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReadinessScoreResponse"
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
      "ReadinessCategoryKey": {
        "type": "string",
        "enum": [
          "workflowClarity",
          "processConsistency",
          "dataQuality",
          "toolAccess",
          "ownership",
          "riskLevel",
          "humanReviewPlan",
          "customerExperienceImpact",
          "measurementPlan",
          "rollbackPlan"
        ]
      },
      "ScoreValue": {
        "type": "integer",
        "minimum": 0,
        "maximum": 3,
        "description": "0 = Not ready, 1 = Needs cleanup, 2 = Mostly ready, 3 = Ready for pilot. For riskLevel, higher means lower risk."
      },
      "ReadinessScores": {
        "type": "object",
        "required": [
          "workflowClarity",
          "processConsistency",
          "dataQuality",
          "toolAccess",
          "ownership",
          "riskLevel",
          "humanReviewPlan",
          "customerExperienceImpact",
          "measurementPlan",
          "rollbackPlan"
        ],
        "additionalProperties": false,
        "properties": {
          "workflowClarity": {
            "$ref": "#/components/schemas/ScoreValue"
          },
          "processConsistency": {
            "$ref": "#/components/schemas/ScoreValue"
          },
          "dataQuality": {
            "$ref": "#/components/schemas/ScoreValue"
          },
          "toolAccess": {
            "$ref": "#/components/schemas/ScoreValue"
          },
          "ownership": {
            "$ref": "#/components/schemas/ScoreValue"
          },
          "riskLevel": {
            "$ref": "#/components/schemas/ScoreValue"
          },
          "humanReviewPlan": {
            "$ref": "#/components/schemas/ScoreValue"
          },
          "customerExperienceImpact": {
            "$ref": "#/components/schemas/ScoreValue"
          },
          "measurementPlan": {
            "$ref": "#/components/schemas/ScoreValue"
          },
          "rollbackPlan": {
            "$ref": "#/components/schemas/ScoreValue"
          }
        }
      },
      "CategoryNotes": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "workflowClarity": {
            "type": "string"
          },
          "processConsistency": {
            "type": "string"
          },
          "dataQuality": {
            "type": "string"
          },
          "toolAccess": {
            "type": "string"
          },
          "ownership": {
            "type": "string"
          },
          "riskLevel": {
            "type": "string"
          },
          "humanReviewPlan": {
            "type": "string"
          },
          "customerExperienceImpact": {
            "type": "string"
          },
          "measurementPlan": {
            "type": "string"
          },
          "rollbackPlan": {
            "type": "string"
          }
        }
      },
      "ReadinessScoreRequest": {
        "type": "object",
        "required": [
          "workflowName",
          "scores"
        ],
        "additionalProperties": false,
        "properties": {
          "workflowName": {
            "type": "string",
            "description": "Name of the workflow being scored."
          },
          "workflowDescription": {
            "type": "string",
            "description": "Brief description of the current workflow."
          },
          "userGoal": {
            "type": "string",
            "description": "What the user wants to improve or automate."
          },
          "scores": {
            "$ref": "#/components/schemas/ReadinessScores"
          },
          "categoryNotes": {
            "$ref": "#/components/schemas/CategoryNotes"
          },
          "notes": {
            "type": "string",
            "description": "Optional general notes about the workflow or scoring assumptions."
          }
        }
      },
      "CategoryResult": {
        "type": "object",
        "properties": {
          "key": {
            "$ref": "#/components/schemas/ReadinessCategoryKey"
          },
          "label": {
            "type": "string"
          },
          "score": {
            "$ref": "#/components/schemas/ScoreValue"
          },
          "scoreLabel": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "interpretation": {
            "type": "string"
          },
          "improvementTip": {
            "type": "string"
          },
          "note": {
            "type": "string"
          }
        }
      },
      "ReadinessScoreResponse": {
        "type": "object",
        "properties": {
          "workflowName": {
            "type": "string"
          },
          "workflowDescription": {
            "type": "string"
          },
          "userGoal": {
            "type": "string"
          },
          "totalScore": {
            "type": "integer"
          },
          "maxScore": {
            "type": "integer",
            "const": 30
          },
          "readinessLevel": {
            "type": "string"
          },
          "recommendationCategory": {
            "type": "string",
            "enum": [
              "Do not automate yet",
              "Clean up first",
              "Pilot carefully",
              "Ready for automation pilot"
            ]
          },
          "interpretation": {
            "type": "string"
          },
          "biggestBlocker": {
            "type": "string"
          },
          "lowestScoringCategories": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CategoryResult"
            }
          },
          "categoryResults": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CategoryResult"
            }
          },
          "humanReviewRequired": {
            "type": "boolean"
          },
          "recommendedAutomationMode": {
            "type": "string",
            "enum": [
              "Do not automate yet",
              "Process cleanup only",
              "Draft-only AI assistance",
              "Limited pilot with human approval",
              "Automation pilot with monitoring"
            ]
          },
          "nextStep": {
            "type": "string"
          },
          "riskFlags": {
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
          },
          "notes": {
            "type": "string"
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
          },
          "auth": {
            "type": "string"
          },
          "requiredBodyFields": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "scoreScale": {
            "type": "object"
          },
          "readinessBands": {
            "type": "object"
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

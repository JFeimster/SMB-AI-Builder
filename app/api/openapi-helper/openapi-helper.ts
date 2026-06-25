export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface GenerateActionSpecFromEndpointRequest {
  actionName: string;
  route: string;
  method: "GET" | "POST";
  summary: string;
  description: string;
  inputs: Record<string, unknown>[];
  outputs: Record<string, unknown>[];
  serverUrl?: string;
  authentication?: "None" | "API Key" | "OAuth" | "Bearer Token";
}

export interface GenerateActionSpecFromEndpointResponse {
  operationId: string;
  pathObject: Record<string, unknown>;
  openapiDraft: string;
  warnings: string[];
  assumptions: string[];
  nextStep: string;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateGenerateActionSpecFromEndpointRequest(input: unknown): GenerateActionSpecFromEndpointRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  if (typeof input.actionName !== "string" || input.actionName.trim() === "") throw new ValidationError("actionName is required.");
  if (typeof input.route !== "string" || input.route.trim() === "") throw new ValidationError("route is required.");

  if (input.method !== "GET" && input.method !== "POST") {
      throw new ValidationError("method must be GET or POST.");
  }

  if (typeof input.summary !== "string") throw new ValidationError("summary is required.");
  if (typeof input.description !== "string") throw new ValidationError("description is required.");

  if (!Array.isArray(input.inputs)) throw new ValidationError("inputs must be an array.");
  if (!Array.isArray(input.outputs)) throw new ValidationError("outputs must be an array.");

  return {
      actionName: input.actionName,
      route: input.route.startsWith("/") ? input.route : "/" + input.route,
      method: input.method,
      summary: input.summary,
      description: input.description,
      inputs: input.inputs,
      outputs: input.outputs,
      serverUrl: typeof input.serverUrl === "string" ? input.serverUrl : "https://YOUR-DOMAIN.com",
      authentication: typeof input.authentication === "string" ? input.authentication as any : "None",
  };
}

export async function generateActionSpecFromEndpoint(input: GenerateActionSpecFromEndpointRequest): Promise<GenerateActionSpecFromEndpointResponse> {
  const opId = input.actionName.replace(/[^a-zA-Z0-9]/g, "");

  const properties: Record<string, any> = {};
  for (const ipt of input.inputs) {
      if (ipt.name && typeof ipt.name === "string") {
          properties[ipt.name] = { type: ipt.type || "string" };
      }
  }

  const reqBody = {
      required: true,
      content: {
          "application/json": {
              schema: {
                  type: "object",
                  properties: properties,
                  required: input.inputs.filter((i: any) => i.required).map((i: any) => i.name)
              }
          }
      }
  };

  const pathObj = {
      [input.route]: {
          [input.method.toLowerCase()]: {
              operationId: opId,
              summary: input.summary,
              description: input.description,
              ...(input.method === "POST" ? { requestBody: reqBody } : {}),
              responses: {
                  "200": { description: "Success" }
              }
          }
      }
  };

  const fullSchema = {
      openapi: "3.1.0",
      info: { title: input.actionName, version: "1.0.0" },
      servers: [{ url: input.serverUrl }],
      paths: pathObj
  };

  return {
    operationId: opId,
    pathObject: pathObj,
    openapiDraft: JSON.stringify(fullSchema, null, 2),
    warnings: ["Schema is a draft and needs review.", "Assumes all parameters are in body for POST.", "Authentication is documented but might need security scheme setup."],
    assumptions: ["Default authentication is None.", "Default OpenAPI version is 3.1.0."],
    nextStep: "Review the openapiDraft JSON and test it in the GPT builder.",
  };
}

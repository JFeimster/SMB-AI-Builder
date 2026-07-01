export interface ServerObject {
  url: string;
  description?: string;
}
export interface SchemaObject {
  type?: "string" | "number" | "integer" | "boolean" | "object" | "array";
  description?: string;
  properties?: Record<string, SchemaObject>;
  items?: SchemaObject;
  required?: string[];
  enum?: (string | number)[];
  nullable?: boolean;
  [key: string]: unknown;
}
export interface ResponsesObject {
  [statusCode: string]: {
    description: string;
    content?: { "application/json": { schema: SchemaObject } };
  };
}
export interface Operation {
  operationId: string;
  summary?: string;
  description?: string;
  parameters?: unknown[];
  requestBody?: {
    required?: boolean;
    content: { "application/json": { schema: SchemaObject } };
  };
  responses: ResponsesObject;
}
export interface PathItem {
  get?: Operation;
  post?: Operation;
}
export interface OpenApiDocument {
  openapi: "3.1.0";
  info: { title: string; version: string; description?: string };
  servers?: ServerObject[];
  paths: Record<string, PathItem>;
  components?: { schemas?: Record<string, SchemaObject> };
}

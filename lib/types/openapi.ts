export interface OpenApiDocument {
  openapi: string;
  info: {
    title: string;
    version: string;
    description?: string;
  };
  servers?: { url: string; description?: string }[];
  paths: Record<string, PathItem>;
  components?: {
    schemas?: Record<string, any>;
  };
}

export interface PathItem {
  get?: Operation;
  post?: Operation;
  put?: Operation;
  delete?: Operation;
  patch?: Operation;
}

export interface Operation {
  operationId: string;
  summary: string;
  description: string;
  requestBody?: {
    required: boolean;
    content: {
      "application/json": {
        schema: any;
      };
    };
  };
  responses: Record<string, Response>;
}

export interface Response {
  description: string;
  content?: {
    "application/json": {
      schema: any;
    };
  };
}

import { NextRequest, NextResponse } from "next/server";
import {
  ValidationError,
  generateActionSpecFromEndpoint,
  validateGenerateActionSpecFromEndpointRequest,
} from "./openapi-helper";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESPONSE_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "no-store",
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: RESPONSE_HEADERS,
  });
}

export async function GET() {
  return NextResponse.json(
    {
      name: "generateActionSpecFromEndpoint",
      description: "Help the builder turn a plain endpoint definition into an OpenAPI Action schema draft.",
      method: "POST",
      path: "/api/openapi-helper",
      auth: "none",
      requiredBodyFields: ["actionName", "route", "method", "summary", "description", "inputs", "outputs"],
    },
    { status: 200, headers: RESPONSE_HEADERS },
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = validateGenerateActionSpecFromEndpointRequest(body);
    const result = await generateActionSpecFromEndpoint(validated);

    return NextResponse.json(result, {
      status: 200,
      headers: RESPONSE_HEADERS,
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          error: "INVALID_JSON",
          message: "Request body must be valid JSON.",
        },
        { status: 400, headers: RESPONSE_HEADERS },
      );
    }

    if (error instanceof ValidationError) {
      return NextResponse.json(
        {
          error: "VALIDATION_ERROR",
          message: error.message,
          details: error.details,
        },
        { status: 400, headers: RESPONSE_HEADERS },
      );
    }

    console.error("Unexpected error in generateActionSpecFromEndpoint:", error);

    return NextResponse.json(
      {
        error: "INTERNAL_SERVER_ERROR",
        message: "Unable to process request.",
      },
      { status: 500, headers: RESPONSE_HEADERS },
    );
  }
}

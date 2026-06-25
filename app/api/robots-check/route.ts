import { NextRequest, NextResponse } from "next/server";
import {
  ValidationError,
  checkRobotsTxt,
  validateCheckRobotsTxtRequest,
} from "./robots-check";

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
      name: "checkRobotsTxt",
      description: "Check public robots.txt before suggesting crawl-like automations.",
      method: "POST",
      path: "/api/robots-check",
      auth: "none",
      requiredBodyFields: ["domain"],
    },
    { status: 200, headers: RESPONSE_HEADERS },
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = validateCheckRobotsTxtRequest(body);
    const result = await checkRobotsTxt(validated);

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

    console.error("Unexpected error in checkRobotsTxt:", error);

    return NextResponse.json(
      {
        error: "INTERNAL_SERVER_ERROR",
        message: "Unable to process request.",
      },
      { status: 500, headers: RESPONSE_HEADERS },
    );
  }
}

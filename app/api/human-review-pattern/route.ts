import { NextRequest, NextResponse } from "next/server";
import {
  ValidationError,
  suggestHumanReviewPattern,
  validateHumanReviewPatternRequest,
} from "./human-review-pattern";

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
      name: "suggestHumanReviewPattern",
      description:
        "Recommend the right human-in-the-loop approval model for a workflow.",
      method: "POST",
      path: "/api/human-review-pattern",
      auth: "none",
      requiredBodyFields: ["workflowName", "riskLevel", "customerFacing", "touchesSensitiveData", "failureImpact"],
    },
    { status: 200, headers: RESPONSE_HEADERS },
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = validateHumanReviewPatternRequest(body);
    const result = suggestHumanReviewPattern(validated);

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

    console.error("Unexpected human review pattern error:", error);

    return NextResponse.json(
      {
        error: "INTERNAL_SERVER_ERROR",
        message: "Unable to suggest human review pattern.",
      },
      { status: 500, headers: RESPONSE_HEADERS },
    );
  }
}

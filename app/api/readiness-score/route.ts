import { NextRequest, NextResponse } from "next/server";
import {
  ValidationError,
  scoreAutomationReadiness,
  validateReadinessRequest,
} from "../../../lib/actions/automation-readiness";

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
      name: "scoreAutomationReadiness",
      description:
        "Scores an SMB workflow across ten automation-readiness categories and returns a readiness band, blockers, and next step.",
      method: "POST",
      path: "/api/readiness-score",
      auth: "none",
      requiredBodyFields: ["workflowName", "scores"],
      scoreScale: {
        "0": "Not ready",
        "1": "Needs cleanup",
        "2": "Mostly ready",
        "3": "Ready for pilot",
      },
      readinessBands: {
        "0-10": "Do not automate yet",
        "11-20": "Clean up first",
        "21-26": "Pilot carefully",
        "27-30": "Ready for automation pilot",
      },
    },
    { status: 200, headers: RESPONSE_HEADERS },
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = validateReadinessRequest(body);
    const result = scoreAutomationReadiness(validated);

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

    console.error("Unexpected readiness scoring error:", error);

    return NextResponse.json(
      {
        error: "INTERNAL_SERVER_ERROR",
        message: "Unable to score automation readiness.",
      },
      { status: 500, headers: RESPONSE_HEADERS },
    );
  }
}

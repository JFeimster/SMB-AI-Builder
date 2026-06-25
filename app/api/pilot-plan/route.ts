import { NextRequest, NextResponse } from "next/server";
import {
  ValidationError,
  buildPilotTestPlan,
  validatePilotPlanRequest,
} from "./pilot-plan";

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
      name: "buildPilotTestPlan",
      description:
        "Turns a proposed automation into a structured SMB automation pilot plan.",
      method: "POST",
      path: "/api/pilot-plan",
      auth: "none",
      requiredBodyFields: ["workflowName", "automationGoal", "riskLevel", "successMetrics"],
    },
    { status: 200, headers: RESPONSE_HEADERS },
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = validatePilotPlanRequest(body);
    const result = buildPilotTestPlan(validated);

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

    console.error("Unexpected pilot plan building error:", error);

    return NextResponse.json(
      {
        error: "INTERNAL_SERVER_ERROR",
        message: "Unable to build pilot plan.",
      },
      { status: 500, headers: RESPONSE_HEADERS },
    );
  }
}

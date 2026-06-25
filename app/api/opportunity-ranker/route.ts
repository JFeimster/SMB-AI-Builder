import { NextRequest, NextResponse } from "next/server";
import {
  rankAutomationOpportunities,
  validateOpportunityRankerRequest,
  ValidationError,
} from "../../../lib/actions/automation-opportunity-ranker";

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
      name: "rankAutomationOpportunities",
      description:
        "Ranks SMB workflow automation opportunities by impact, readiness, risk, data quality, tool readiness, and human-review needs.",
      method: "POST",
      path: "/api/opportunity-ranker",
      auth: "none",
      requiredBodyFields: ["opportunities"],
      recommendationCategories: [
        "Automate now",
        "Clean up first",
        "Keep human",
        "Revisit later",
      ],
      scoreScale: {
        "0": "Not ready / very low",
        "1": "Needs cleanup / low",
        "2": "Mostly ready / medium",
        "3": "Ready / high",
      },
      notes:
        "For riskLevel, a higher score means lower risk and stronger suitability for a controlled pilot.",
    },
    { status: 200, headers: RESPONSE_HEADERS },
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = validateOpportunityRankerRequest(body);
    const result = rankAutomationOpportunities(validated);

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

    console.error("Unexpected automation opportunity ranking error:", error);

    return NextResponse.json(
      {
        error: "INTERNAL_SERVER_ERROR",
        message: "Unable to rank automation opportunities.",
      },
      { status: 500, headers: RESPONSE_HEADERS },
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import {
  ValidationError,
  getLaborMarketSeries,
  validateGetLaborMarketSeriesRequest,
} from "./bls-series";

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
      name: "getLaborMarketSeries",
      description: "Pull public labor/economic series for staffing, wage, or market-context discussions.",
      method: "POST",
      path: "/api/bls-series",
      auth: "none",
      requiredBodyFields: ["seriesId", "startYear", "endYear"],
    },
    { status: 200, headers: RESPONSE_HEADERS },
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = validateGetLaborMarketSeriesRequest(body);
    const result = await getLaborMarketSeries(validated);

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

    console.error("Unexpected error in getLaborMarketSeries:", error);

    return NextResponse.json(
      {
        error: "INTERNAL_SERVER_ERROR",
        message: "Unable to process request.",
      },
      { status: 500, headers: RESPONSE_HEADERS },
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import {
  ValidationError,
  convertCurrencyEstimate,
  validateConvertCurrencyEstimateRequest,
} from "./currency-convert";

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
      name: "convertCurrencyEstimate",
      description: "Estimate converted amounts across currencies for international SMB planning.",
      method: "POST",
      path: "/api/currency-convert",
      auth: "none",
      requiredBodyFields: ["amount", "fromCurrency", "toCurrency"],
    },
    { status: 200, headers: RESPONSE_HEADERS },
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = validateConvertCurrencyEstimateRequest(body);
    const result = await convertCurrencyEstimate(validated);

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

    console.error("Unexpected error in convertCurrencyEstimate:", error);

    return NextResponse.json(
      {
        error: "INTERNAL_SERVER_ERROR",
        message: "Unable to process request.",
      },
      { status: 500, headers: RESPONSE_HEADERS },
    );
  }
}

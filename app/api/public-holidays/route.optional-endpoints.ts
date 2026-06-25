import { NextRequest, NextResponse } from "next/server";
import { buildGetPublicHolidaysOpenApiSchema } from "./public-holidays-openapi";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESPONSE_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "no-store",
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: RESPONSE_HEADERS,
  });
}

export async function GET(request: NextRequest) {
  const serverUrl = new URL(request.url).origin;

  return NextResponse.json(buildGetPublicHolidaysOpenApiSchema(serverUrl), {
    status: 200,
    headers: RESPONSE_HEADERS,
  });
}

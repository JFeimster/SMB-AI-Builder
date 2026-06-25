import { NextResponse } from "next/server";

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
      name: "calculateAutomationROI",
      description:
        "Estimate potential time savings, cost savings, and payback period for an SMB workflow automation.",
      method: "POST",
      path: "/api/automation-roi",
      auth: "none",
      requiredBodyFields: [
        "workflowName",
        "timePerTaskMinutes",
        "taskFrequency",
        "laborCostPerHour"
      ]
    },
    { status: 200, headers: RESPONSE_HEADERS },
  );
}

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
      name: "generateWorkflowMap",
      description:
        "Convert structured workflow steps into a clean current-state or future-state workflow map.",
      method: "POST",
      path: "/api/workflow-map",
      auth: "none",
      requiredBodyFields: [
        "workflowName",
        "mapType",
        "steps"
      ]
    },
    { status: 200, headers: RESPONSE_HEADERS },
  );
}

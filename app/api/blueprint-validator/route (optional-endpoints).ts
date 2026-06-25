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
      name: "validateAutomationBlueprint",
      description:
        "Validate whether an automation blueprint is complete and safe enough for pilot planning.",
      method: "POST",
      path: "/api/blueprint-validator",
      auth: "none",
      requiredBodyFields: [
        "workflowName",
        "automationGoal",
        "trigger",
        "inputs",
        "tools",
        "workflowSteps",
        "aiTasks",
        "humanReviewPoints",
        "outputs",
        "successMetrics",
        "rollbackPlan"
      ]
    },
    { status: 200, headers: RESPONSE_HEADERS },
  );
}

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
      name: "validateAgentBlueprint",
      description:
        "Validate whether an AI agent blueprint has enough instructions, guardrails, permission boundaries, handoff rules, and tests to be piloted safely.",
      method: "POST",
      path: "/api/agent-validator",
      auth: "none",
      requiredBodyFields: [
        "agentName",
        "agentRole",
        "targetUser",
        "primaryJob",
        "inputsNeeded",
        "outputsProduced",
        "instructions",
        "guardrails",
        "permissionBoundaries",
        "humanHandoffRules",
        "testScenarios"
      ]
    },
    { status: 200, headers: RESPONSE_HEADERS },
  );
}

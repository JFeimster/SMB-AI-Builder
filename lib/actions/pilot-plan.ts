export interface PilotPlanRequest {
  workflowName: string;
  riskLevel: "low" | "medium" | "high";
  testScenarios?: string[];
  goNoGoCriteria?: string[];
  rollbackChecklist?: string[];
  notes?: string;
}

export interface PilotPlanResponse {
  workflowName: string;
  testPeriodDays: number;
  testCases: string[];
  goNoGoCriteria: string[];
  rollbackChecklist: string[];
  humanApprovalRequired: boolean;
  assumptions: string[];
  nextStep: string;
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export function buildPilotTestPlan(input: PilotPlanRequest): PilotPlanResponse {
  if (!input || !input.workflowName) throw new ValidationError("workflowName is required");

  const testPeriodDays = 14;

  const defaultTestCases = [
    "Normal operation: Feed standard data and verify correct output.",
    "Missing data: Leave optional fields blank to ensure it doesn't break.",
    "Ambiguous input: Provide unclear instructions to see if the AI asks for clarification.",
    "Format mismatch: Provide data in the wrong format (e.g. text instead of number).",
    "Edge case volume: Feed the max expected batch size."
  ];

  let testCases = input.testScenarios && input.testScenarios.length >= 5
    ? input.testScenarios
    : [...(input.testScenarios || []), ...defaultTestCases].slice(0, 8);

  const goNoGoCriteria = input.goNoGoCriteria && input.goNoGoCriteria.length > 0
    ? input.goNoGoCriteria
    : [
        "Time savings actually achieved > 0",
        "Error rate is acceptable compared to manual baseline",
        "No severe safety/compliance breaches occurred"
      ];

  const rollbackChecklist = input.rollbackChecklist && input.rollbackChecklist.length > 0
    ? input.rollbackChecklist
    : [
        "Pause the AI workflow/agent trigger immediately.",
        "Reassign in-flight work to the human owner.",
        "Notify stakeholders that manual fallback is active.",
        "WARNING: A proper rollback plan was not provided, please formalize these steps."
      ];

  const humanApprovalRequired = input.riskLevel === "high";

  return {
    workflowName: input.workflowName,
    testPeriodDays,
    testCases,
    goNoGoCriteria,
    rollbackChecklist,
    humanApprovalRequired,
    assumptions: [
      "A standard 14-day test period is long enough to hit standard cadence.",
      "High-risk workflows automatically mandate human approval before action in pilot."
    ],
    nextStep: "Assign a pilot owner and begin testing these specific scenarios against sample data."
  };
}

export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface PilotPlanRequest {
  workflowName: string;
  automationGoal: string;
  riskLevel: "low" | "medium" | "high";
  users?: string[];
  testPeriodDays?: number;
  successMetrics: string[];
  failureCriteria?: string[];
  humanReviewPoints?: string[];
  rollbackPlan?: string;
  sampleDataDescription?: string;
  touchesCustomers?: boolean;
  touchesMoney?: boolean;
  touchesSensitiveData?: boolean;
  touchesLegalComplianceHRMedicalOrFinance?: boolean;
  notes?: string;
}

export interface TestCase {
  scenario: string;
  input: string;
  expectedOutcome: string;
  type: string;
}

export interface PilotPlanResponse {
  workflowName: string;
  pilotScope: string;
  testPeriod: string;
  testUsers: string[];
  sampleDataGuidance: string;
  successMetrics: string[];
  failureCriteria: string[];
  requiredHumanReview: string[];
  testCases: TestCase[];
  goNoGoCriteria: string[];
  rollbackChecklist: string[];
  riskWarnings: string[];
  recommendedAutomationMode: string;
  nextStep: string;
  assumptions: string[];
}

function cleanRequiredString(value: unknown, fieldName: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new ValidationError(`${fieldName} is required and must be a non-empty string.`);
  }
  return value.trim();
}

function cleanOptionalString(value: unknown, fieldName: string): string | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value !== "string") {
    throw new ValidationError(`${fieldName} must be a string when provided.`);
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function cleanOptionalBoolean(value: unknown, fieldName: string): boolean | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "boolean") {
    throw new ValidationError(`${fieldName} must be a boolean when provided.`);
  }
  return value;
}

function cleanOptionalNumber(value: unknown, fieldName: string): number | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "number") {
    throw new ValidationError(`${fieldName} must be a number when provided.`);
  }
  return value;
}

function cleanStringArray(value: unknown, fieldName: string): string[] | undefined {
  if (value === undefined || value === null) return undefined;
  if (!Array.isArray(value)) {
    throw new ValidationError(`${fieldName} must be an array of strings when provided.`);
  }
  return value.filter((v): v is string => typeof v === "string" && v.trim().length > 0).map(v => v.trim());
}

export function validatePilotPlanRequest(input: unknown): PilotPlanRequest {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  const record = input as Record<string, unknown>;

  const riskLevel = cleanRequiredString(record.riskLevel, "riskLevel");
  if (!["low", "medium", "high"].includes(riskLevel)) {
    throw new ValidationError("riskLevel must be one of 'low', 'medium', 'high'.");
  }

  const successMetrics = cleanStringArray(record.successMetrics, "successMetrics");
  if (!successMetrics || successMetrics.length === 0) {
    throw new ValidationError("successMetrics is required and must contain at least one valid string.");
  }

  return {
    workflowName: cleanRequiredString(record.workflowName, "workflowName"),
    automationGoal: cleanRequiredString(record.automationGoal, "automationGoal"),
    riskLevel: riskLevel as "low" | "medium" | "high",
    users: cleanStringArray(record.users, "users"),
    testPeriodDays: cleanOptionalNumber(record.testPeriodDays, "testPeriodDays"),
    successMetrics: successMetrics,
    failureCriteria: cleanStringArray(record.failureCriteria, "failureCriteria"),
    humanReviewPoints: cleanStringArray(record.humanReviewPoints, "humanReviewPoints"),
    rollbackPlan: cleanOptionalString(record.rollbackPlan, "rollbackPlan"),
    sampleDataDescription: cleanOptionalString(record.sampleDataDescription, "sampleDataDescription"),
    touchesCustomers: cleanOptionalBoolean(record.touchesCustomers, "touchesCustomers"),
    touchesMoney: cleanOptionalBoolean(record.touchesMoney, "touchesMoney"),
    touchesSensitiveData: cleanOptionalBoolean(record.touchesSensitiveData, "touchesSensitiveData"),
    touchesLegalComplianceHRMedicalOrFinance: cleanOptionalBoolean(record.touchesLegalComplianceHRMedicalOrFinance, "touchesLegalComplianceHRMedicalOrFinance"),
    notes: cleanOptionalString(record.notes, "notes"),
  };
}

export function buildPilotTestPlan(request: PilotPlanRequest): PilotPlanResponse {
  const testPeriodDays = request.testPeriodDays && request.testPeriodDays > 0 ? request.testPeriodDays : 14;
  const testUsers = request.users && request.users.length > 0 ? request.users : ["1-2 test users"];
  const failureCriteria = request.failureCriteria && request.failureCriteria.length > 0 ? request.failureCriteria : ["Any critical error", "Data leakage", "Negative customer feedback"];
  const humanReviewPoints = request.humanReviewPoints && request.humanReviewPoints.length > 0 ? request.humanReviewPoints : [];

  let recommendedAutomationMode = "Limited pilot automation";
  const riskWarnings: string[] = [];

  const isHighRisk = request.riskLevel === "high" ||
                     request.touchesMoney ||
                     request.touchesSensitiveData ||
                     request.touchesLegalComplianceHRMedicalOrFinance;

  if (isHighRisk) {
    recommendedAutomationMode = "Draft-only or Human approval before action";
    riskWarnings.push("This workflow involves high risk elements (e.g., money, sensitive data, compliance). Fully autonomous action is not recommended.");
    if (humanReviewPoints.length === 0) {
      humanReviewPoints.push("Final review of output before execution");
    }
  }

  const rollbackChecklist: string[] = [];
  if (!request.rollbackPlan) {
    riskWarnings.push("No rollback plan provided. A default rollback checklist has been generated.");
    rollbackChecklist.push("Identify manual fallback process owner");
    rollbackChecklist.push("Document steps to pause or disable the automation tool");
    rollbackChecklist.push("Define communication plan if the pilot must be stopped immediately");
    rollbackChecklist.push("Verify manual process can resume without data loss");
  } else {
    rollbackChecklist.push(request.rollbackPlan);
  }

  const testCases: TestCase[] = [
    {
      scenario: "Standard happy path",
      input: "Typical, complete request with no missing data",
      expectedOutcome: "Automation processes the request correctly without errors.",
      type: "Normal"
    },
    {
      scenario: "Missing required information",
      input: "Request lacking critical fields (e.g., missing email or ID)",
      expectedOutcome: "Automation flags the missing data and pauses for human review.",
      type: "Exception"
    },
    {
      scenario: "Unexpected data format",
      input: "Dates or numbers provided in an unexpected format",
      expectedOutcome: "System handles gracefully without crashing, falling back to manual review.",
      type: "Exception"
    },
    {
      scenario: "Duplicate request handling",
      input: "Same request submitted twice in short succession",
      expectedOutcome: "Automation identifies duplicate and processes only one, or notifies human.",
      type: "Edge Case"
    },
    {
      scenario: "Maximum payload/length exceeded",
      input: "Input text or file significantly larger than normal",
      expectedOutcome: "Automation rejects safely with an error or truncates safely if appropriate.",
      type: "Edge Case"
    }
  ];

  if (request.touchesCustomers) {
    testCases.push({
      scenario: "Angry or urgent customer inquiry",
      input: "Customer message with urgent or frustrated tone",
      expectedOutcome: "Automation correctly routes to a human agent immediately.",
      type: "Escalation"
    });
  }

  const goNoGoCriteria = [
    "All critical test cases pass",
    `Test run for ${testPeriodDays} days without major incidents`,
    "Success metrics indicate positive ROI or time savings",
    "Users report acceptable usability",
    "Rollback plan is verified and understood by the team"
  ];

  return {
    workflowName: request.workflowName,
    pilotScope: `Controlled test of ${request.workflowName} to achieve: ${request.automationGoal}`,
    testPeriod: `${testPeriodDays} days`,
    testUsers: testUsers,
    sampleDataGuidance: request.sampleDataDescription || "Use recent, anonymized historical data for initial tests.",
    successMetrics: request.successMetrics,
    failureCriteria: failureCriteria,
    requiredHumanReview: humanReviewPoints.length > 0 ? humanReviewPoints : ["Exception handling only"],
    testCases: testCases,
    goNoGoCriteria: goNoGoCriteria,
    rollbackChecklist: rollbackChecklist,
    riskWarnings: riskWarnings,
    recommendedAutomationMode: recommendedAutomationMode,
    nextStep: "Review this pilot plan with stakeholders, set up the test environment, and begin the pilot period.",
    assumptions: [
      "This plan is a starting point and should be customized based on specific business rules.",
      "The test environment is isolated from critical production data if possible.",
      "Human reviewers are trained on what to look for during the pilot."
    ]
  };
}

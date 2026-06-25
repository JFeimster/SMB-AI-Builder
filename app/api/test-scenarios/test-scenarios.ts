export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface TestScenariosRequest {
  workflowName: string;
  workflowType: string;
  riskLevel: "low" | "medium" | "high";
  inputs: string[];
  outputs: string[];
  edgeCases?: string[];
  humanHandoffRules?: string[];
  touchesCustomers?: boolean;
  touchesMoney?: boolean;
  touchesSensitiveData?: boolean;
  touchesLegalComplianceHRMedicalOrFinance?: boolean;
  notes?: string;
}

export interface Scenario {
  scenarioName: string;
  inputDescription: string;
  expectedBehavior: string;
}

export interface TestScenariosResponse {
  workflowName: string;
  scenarioSet: string;
  normalScenarios: Scenario[];
  missingDataScenarios: Scenario[];
  ambiguousRequestScenarios: Scenario[];
  sensitiveDataScenarios: Scenario[];
  escalationScenarios: Scenario[];
  failureScenarios: Scenario[];
  permissionBoundaryScenarios: Scenario[];
  expectedBehaviors: string[];
  humanHandoffTriggers: string[];
  riskWarnings: string[];
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

function cleanStringArray(value: unknown, fieldName: string): string[] | undefined {
  if (value === undefined || value === null) return undefined;
  if (!Array.isArray(value)) {
    throw new ValidationError(`${fieldName} must be an array of strings when provided.`);
  }
  return value.filter((v): v is string => typeof v === "string" && v.trim().length > 0).map(v => v.trim());
}

export function validateTestScenariosRequest(input: unknown): TestScenariosRequest {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  const record = input as Record<string, unknown>;

  const riskLevel = cleanRequiredString(record.riskLevel, "riskLevel");
  if (!["low", "medium", "high"].includes(riskLevel)) {
    throw new ValidationError("riskLevel must be one of 'low', 'medium', 'high'.");
  }

  const inputs = cleanStringArray(record.inputs, "inputs");
  if (!inputs || inputs.length === 0) {
    throw new ValidationError("inputs is required and must contain at least one valid string.");
  }

  const outputs = cleanStringArray(record.outputs, "outputs");
  if (!outputs || outputs.length === 0) {
    throw new ValidationError("outputs is required and must contain at least one valid string.");
  }

  return {
    workflowName: cleanRequiredString(record.workflowName, "workflowName"),
    workflowType: cleanRequiredString(record.workflowType, "workflowType"),
    riskLevel: riskLevel as "low" | "medium" | "high",
    inputs: inputs,
    outputs: outputs,
    edgeCases: cleanStringArray(record.edgeCases, "edgeCases"),
    humanHandoffRules: cleanStringArray(record.humanHandoffRules, "humanHandoffRules"),
    touchesCustomers: cleanOptionalBoolean(record.touchesCustomers, "touchesCustomers"),
    touchesMoney: cleanOptionalBoolean(record.touchesMoney, "touchesMoney"),
    touchesSensitiveData: cleanOptionalBoolean(record.touchesSensitiveData, "touchesSensitiveData"),
    touchesLegalComplianceHRMedicalOrFinance: cleanOptionalBoolean(record.touchesLegalComplianceHRMedicalOrFinance, "touchesLegalComplianceHRMedicalOrFinance"),
    notes: cleanOptionalString(record.notes, "notes"),
  };
}

export function generateTestScenarios(request: TestScenariosRequest): TestScenariosResponse {
  const riskWarnings: string[] = [];
  const expectedBehaviors: string[] = [];
  const humanHandoffTriggers: string[] = request.humanHandoffRules && request.humanHandoffRules.length > 0
    ? [...request.humanHandoffRules]
    : [];

  const isHighRisk = request.riskLevel === "high" ||
                     request.touchesMoney ||
                     request.touchesSensitiveData ||
                     request.touchesLegalComplianceHRMedicalOrFinance;

  if (isHighRisk) {
    riskWarnings.push("High-risk factors detected. Ensure tests cover strict human handoff and authorization limits.");
    if (humanHandoffTriggers.length === 0) {
      humanHandoffTriggers.push("Any request modifying sensitive data or executing financial transactions");
    }
  }

  expectedBehaviors.push(`Produce outputs: ${request.outputs.join(", ")}`);
  expectedBehaviors.push("Gracefully fail if any required inputs are completely unintelligible.");

  if (request.touchesCustomers) {
    humanHandoffTriggers.push("Customer expresses strong negative sentiment or asks to speak to a human");
  }

  // Generate generic scenarios (fictional) based on standard categories
  const normalScenarios: Scenario[] = [
    {
      scenarioName: "Standard Request",
      inputDescription: `Fictional complete request containing: ${request.inputs.join(", ")}`,
      expectedBehavior: `Successfully generate outputs: ${request.outputs.join(", ")} without requiring human intervention.`
    }
  ];

  const missingDataScenarios: Scenario[] = [
    {
      scenarioName: "Missing Primary Input",
      inputDescription: `Request is missing a core input like the first item in: ${request.inputs.join(", ")}`,
      expectedBehavior: "System prompts for missing information or pauses and flags for human review."
    }
  ];

  const ambiguousRequestScenarios: Scenario[] = [
    {
      scenarioName: "Ambiguous Instructions",
      inputDescription: "Fictional request contains contradictory instructions or unclear intent.",
      expectedBehavior: "System refuses to guess and triggers human handoff."
    }
  ];

  const sensitiveDataScenarios: Scenario[] = [];
  if (request.touchesSensitiveData || request.touchesLegalComplianceHRMedicalOrFinance) {
    sensitiveDataScenarios.push({
      scenarioName: "PII or Sensitive Data Included",
      inputDescription: "Fictional request includes SSN, credit card, or personal health info.",
      expectedBehavior: "System redacts data before logging, or refuses to process and routes to secure human queue."
    });
  }

  const escalationScenarios: Scenario[] = [];
  if (request.touchesCustomers) {
    escalationScenarios.push({
      scenarioName: "Frustrated Customer",
      inputDescription: "Fictional message: 'This is taking forever, I want to talk to a real person immediately.'",
      expectedBehavior: "System immediately hands off to a human agent without attempting to resolve the issue autonomously."
    });
  }

  const failureScenarios: Scenario[] = [
    {
      scenarioName: "Tool or Integration Timeout",
      inputDescription: "Simulated failure of a required downstream tool or API.",
      expectedBehavior: "System logs the error, safely pauses the workflow, and notifies the human owner."
    }
  ];

  const permissionBoundaryScenarios: Scenario[] = [
    {
      scenarioName: "Out of Scope Request",
      inputDescription: "User asks the system to perform an action completely unrelated to its workflow type.",
      expectedBehavior: "System politely declines, stating its boundaries, and offers to route to a human."
    }
  ];

  if (request.touchesMoney) {
    permissionBoundaryScenarios.push({
      scenarioName: "Unauthorized Transaction",
      inputDescription: "User requests a refund or payment that exceeds automated approval limits.",
      expectedBehavior: "System queues the request for manager approval."
    });
  }

  return {
    workflowName: request.workflowName,
    scenarioSet: `${request.workflowType} standard test coverage`,
    normalScenarios,
    missingDataScenarios,
    ambiguousRequestScenarios,
    sensitiveDataScenarios,
    escalationScenarios,
    failureScenarios,
    permissionBoundaryScenarios,
    expectedBehaviors,
    humanHandoffTriggers,
    riskWarnings,
    assumptions: [
      "Test scenarios should be executed using fictional data, not real customer records.",
      "The behaviors defined here should be verified in a safe test environment.",
      "Human handoff triggers should be configured before exposing the automation to real users."
    ]
  };
}

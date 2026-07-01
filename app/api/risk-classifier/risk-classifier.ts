export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface RiskClassifierRequest {
  workflowName: string;
  workflowDescription: string;
  touchesCustomers: boolean;
  touchesMoney: boolean;
  touchesSensitiveData: boolean;
  touchesLegal?: boolean;
  touchesHR?: boolean;
  touchesMedical?: boolean;
  touchesCompliance?: boolean;
  touchesTaxAccountingOrFinance?: boolean;
  touchesLendingCreditOrUnderwriting?: boolean;
  failureImpact?: "low" | "medium" | "high";
  requiresLicensedJudgment?: boolean;
  notes?: string;
}

export interface RiskClassifierResponse {
  workflowName: string;
  riskLevel: "low" | "medium" | "high";
  riskReasons: string[];
  riskFlags: string[];
  humanReviewRequired: boolean;
  recommendedAutomationMode: string;
  saferWorkflowPattern: string;
  notRecommendedActions: string[];
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

function cleanRequiredBoolean(value: unknown, fieldName: string): boolean {
  if (typeof value !== "boolean") {
    throw new ValidationError(`${fieldName} is required and must be a boolean.`);
  }
  return value;
}

function cleanOptionalBoolean(value: unknown, fieldName: string): boolean | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "boolean") {
    throw new ValidationError(`${fieldName} must be a boolean when provided.`);
  }
  return value;
}

export function validateRiskClassifierRequest(input: unknown): RiskClassifierRequest {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  const record = input as Record<string, unknown>;

  const failureImpact = cleanOptionalString(record.failureImpact, "failureImpact");
  if (failureImpact && !["low", "medium", "high"].includes(failureImpact)) {
      throw new ValidationError("failureImpact must be one of 'low', 'medium', 'high'.");
  }

  return {
    workflowName: cleanRequiredString(record.workflowName, "workflowName"),
    workflowDescription: cleanRequiredString(record.workflowDescription, "workflowDescription"),
    touchesCustomers: cleanRequiredBoolean(record.touchesCustomers, "touchesCustomers"),
    touchesMoney: cleanRequiredBoolean(record.touchesMoney, "touchesMoney"),
    touchesSensitiveData: cleanRequiredBoolean(record.touchesSensitiveData, "touchesSensitiveData"),
    touchesLegal: cleanOptionalBoolean(record.touchesLegal, "touchesLegal"),
    touchesHR: cleanOptionalBoolean(record.touchesHR, "touchesHR"),
    touchesMedical: cleanOptionalBoolean(record.touchesMedical, "touchesMedical"),
    touchesCompliance: cleanOptionalBoolean(record.touchesCompliance, "touchesCompliance"),
    touchesTaxAccountingOrFinance: cleanOptionalBoolean(record.touchesTaxAccountingOrFinance, "touchesTaxAccountingOrFinance"),
    touchesLendingCreditOrUnderwriting: cleanOptionalBoolean(record.touchesLendingCreditOrUnderwriting, "touchesLendingCreditOrUnderwriting"),
    failureImpact: failureImpact as "low" | "medium" | "high" | undefined,
    requiresLicensedJudgment: cleanOptionalBoolean(record.requiresLicensedJudgment, "requiresLicensedJudgment"),
    notes: cleanOptionalString(record.notes, "notes"),
  };
}

export function classifyWorkflowRisk(request: RiskClassifierRequest): RiskClassifierResponse {
  let riskLevel: "low" | "medium" | "high" = "low";
  const riskReasons: string[] = [];
  const riskFlags: string[] = [];
  let humanReviewRequired = false;
  let recommendedAutomationMode = "Limited pilot automation";
  let saferWorkflowPattern = "Standard review exception queue";
  const notRecommendedActions: string[] = [];

  const mediumRiskFactors = [
    request.touchesLegal, request.touchesHR, request.touchesMedical, request.touchesCompliance,
    request.touchesLendingCreditOrUnderwriting, request.touchesTaxAccountingOrFinance,
    request.requiresLicensedJudgment
  ];

  if (mediumRiskFactors.some(f => f === true)) {
    riskLevel = "medium";
    riskReasons.push("Involves legal, HR, medical, compliance, financial, lending, or licensed judgment fields.");
    humanReviewRequired = true;
    recommendedAutomationMode = "Draft-only AI assist";
    saferWorkflowPattern = "Human approval before final action";
    notRecommendedActions.push("Fully autonomous decision making", "Final approval without human review");
  }

  if ((request.touchesMoney && request.touchesCustomers) || request.touchesSensitiveData) {
    riskLevel = "high";
    riskReasons.push("Directly touches money + customers, or sensitive personal data.");
    humanReviewRequired = true;
    recommendedAutomationMode = "Draft-only or Exception review";
    saferWorkflowPattern = "Two-step verification / Approval queue";
    notRecommendedActions.push("Autonomous communications handling sensitive data", "Autonomous financial transactions");
    riskFlags.push("Strict data privacy review recommended.");
  }

  if (request.failureImpact === "high") {
    riskLevel = "high";
    riskReasons.push("Failure impact is rated as 'high'.");
    humanReviewRequired = true;
    recommendedAutomationMode = "Manual process only or Draft-only";
    saferWorkflowPattern = "Human approval before action with strict audit logs";
    riskFlags.push("High impact failure requires robust rollback and monitoring.");
  }

  if (request.failureImpact === "medium" && riskLevel === "low") {
      riskLevel = "medium";
      riskReasons.push("Failure impact is 'medium'.");
  }

  if (riskLevel === "low") {
    riskReasons.push("No high-risk or sensitive data factors identified.");
    if (request.touchesCustomers) {
      riskReasons.push("Touches customers but no other high risk factors identified.");
      humanReviewRequired = true;
      saferWorkflowPattern = "Exception review or Approval before send";
      recommendedAutomationMode = "Limited pilot automation";
    }
  }

  return {
    workflowName: request.workflowName,
    riskLevel,
    riskReasons,
    riskFlags,
    humanReviewRequired,
    recommendedAutomationMode,
    saferWorkflowPattern,
    notRecommendedActions: notRecommendedActions.length > 0 ? notRecommendedActions : ["Deploying without testing failure cases"],
    nextStep: `Adopt the recommended pattern: ${saferWorkflowPattern}. Design human handoffs accordingly.`,
    assumptions: [
      "This classification is for planning purposes only and is not legal, compliance, or financial advice.",
      "High risk does not mean un-automatable, but requires stricter human-in-the-loop patterns.",
      "Any system involving sensitive data must still undergo standard security reviews."
    ]
  };
}

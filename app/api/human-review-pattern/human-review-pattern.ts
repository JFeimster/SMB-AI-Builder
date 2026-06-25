export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface HumanReviewPatternRequest {
  workflowName: string;
  riskLevel: "low" | "medium" | "high";
  customerFacing: boolean;
  touchesSensitiveData: boolean;
  failureImpact: "low" | "medium" | "high";
  decisionType?: string;
  requiresLicensedJudgment?: boolean;
  currentReviewProcess?: string;
  notes?: string;
}

export interface HumanReviewPatternResponse {
  workflowName: string;
  recommendedPattern: string;
  patternDescription: string;
  humanRole: string;
  aiRole: string;
  approvalBeforeAction: boolean;
  exceptionReviewRules: string[];
  escalationRules: string[];
  auditLogRecommendation: string;
  rollbackRecommendation: string;
  riskWarnings: string[];
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

export function validateHumanReviewPatternRequest(input: unknown): HumanReviewPatternRequest {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  const record = input as Record<string, unknown>;

  const riskLevel = cleanRequiredString(record.riskLevel, "riskLevel");
  if (!["low", "medium", "high"].includes(riskLevel)) {
    throw new ValidationError("riskLevel must be one of 'low', 'medium', 'high'.");
  }

  const failureImpact = cleanRequiredString(record.failureImpact, "failureImpact");
  if (!["low", "medium", "high"].includes(failureImpact)) {
    throw new ValidationError("failureImpact must be one of 'low', 'medium', 'high'.");
  }

  return {
    workflowName: cleanRequiredString(record.workflowName, "workflowName"),
    riskLevel: riskLevel as "low" | "medium" | "high",
    customerFacing: cleanRequiredBoolean(record.customerFacing, "customerFacing"),
    touchesSensitiveData: cleanRequiredBoolean(record.touchesSensitiveData, "touchesSensitiveData"),
    failureImpact: failureImpact as "low" | "medium" | "high",
    decisionType: cleanOptionalString(record.decisionType, "decisionType"),
    requiresLicensedJudgment: cleanOptionalBoolean(record.requiresLicensedJudgment, "requiresLicensedJudgment"),
    currentReviewProcess: cleanOptionalString(record.currentReviewProcess, "currentReviewProcess"),
    notes: cleanOptionalString(record.notes, "notes"),
  };
}

export function suggestHumanReviewPattern(request: HumanReviewPatternRequest): HumanReviewPatternResponse {
  let recommendedPattern = "Limited pilot automation";
  let patternDescription = "AI performs the action, but specific exceptions are routed to a human for review.";
  let humanRole = "Review escalated exceptions and monitor performance metrics.";
  let aiRole = "Execute standard workflow path for confident, low-risk requests.";
  let approvalBeforeAction = false;

  const exceptionReviewRules: string[] = ["Low confidence score from AI", "Missing required input data"];
  const escalationRules: string[] = ["System errors or timeouts"];
  const riskWarnings: string[] = [];

  if (request.requiresLicensedJudgment) {
    recommendedPattern = "Manual process only or Draft-only AI assist";
    patternDescription = "AI assists with data gathering or summarizing, but the final decision remains entirely with the licensed human professional.";
    humanRole = "Review AI drafts, apply professional judgment, and make the final decision or take final action.";
    aiRole = "Gather data, summarize context, or prepare draft responses only.";
    approvalBeforeAction = true;
    riskWarnings.push("Licensed professional judgment cannot be safely delegated to an AI agent.");
    escalationRules.push("Any situation outside standard guidelines");
  } else if (request.riskLevel === "high" || request.failureImpact === "high") {
    recommendedPattern = "Draft-only AI assist or Human approval before action";
    patternDescription = "AI prepares the work, but a human must explicitly approve it before the final action is taken or message is sent.";
    humanRole = "Review, edit, and approve every AI-generated draft before execution.";
    aiRole = "Prepare drafts or stage actions and place them in an approval queue.";
    approvalBeforeAction = true;
    riskWarnings.push("High risk or high failure impact workflows require explicit human approval before any action is finalized.");
    exceptionReviewRules.push("Any request modifying sensitive state");
  } else if (request.customerFacing && request.riskLevel === "medium") {
    recommendedPattern = "Human approval before action";
    patternDescription = "To protect the customer experience, AI drafts communications but a human reviews before sending.";
    humanRole = "Review and tweak tone/accuracy of customer communications before they are sent.";
    aiRole = "Draft responses based on customer intent and business rules.";
    approvalBeforeAction = true;
    escalationRules.push("Customer expresses frustration or asks for a human");
  } else if (request.touchesSensitiveData) {
    recommendedPattern = "Two-step verification / Approval queue";
    patternDescription = "AI can process standard data, but any export, modification, or sharing of sensitive data requires secondary human approval.";
    humanRole = "Approve any action that moves or modifies sensitive information.";
    aiRole = "Process information internally but pause at boundaries.";
    approvalBeforeAction = true;
    riskWarnings.push("Handling sensitive data requires strict audit logging and bounded permissions.");
  } else if (request.riskLevel === "low" && request.failureImpact === "low") {
    recommendedPattern = "Exception review";
    patternDescription = "AI handles the majority of cases autonomously. Humans only review cases the AI flags as uncertain.";
    humanRole = "Handle edge cases, angry customers, or complex requests the AI cannot confidently resolve.";
    aiRole = "Handle standard, repetitive requests autonomously.";
    approvalBeforeAction = false;
  }

  let auditLogRecommendation = "Maintain standard logs of AI actions for periodic review.";
  if (request.touchesSensitiveData || request.riskLevel === "high" || request.failureImpact === "high") {
      auditLogRecommendation = "Maintain strict, immutable audit logs detailing what the AI saw, what it drafted, who approved it, and when.";
  }

  return {
    workflowName: request.workflowName,
    recommendedPattern,
    patternDescription,
    humanRole,
    aiRole,
    approvalBeforeAction,
    exceptionReviewRules,
    escalationRules,
    auditLogRecommendation,
    rollbackRecommendation: "Document manual procedures so human staff can take over immediately if the AI system is paused.",
    riskWarnings,
    nextStep: `Implement the '${recommendedPattern}' pattern in your pilot phase before expanding scope.`,
    assumptions: [
      "This recommendation assumes current AI capabilities where hallucinations or poor judgment can occasionally occur.",
      "Never remove human review from sensitive workflows without legal and compliance sign-off.",
      "The recommended pattern is a starting point for safe testing."
    ]
  };
}

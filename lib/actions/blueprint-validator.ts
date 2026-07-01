export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface AutomationBlueprintRequest {
  workflowName: string;
  automationGoal: string;
  trigger: string;
  inputs: string[];
  tools: string[];
  workflowSteps: string[];
  aiTasks: string[];
  humanReviewPoints: string[];
  outputs: string[];
  exceptions?: string[];
  successMetrics: string[];
  rollbackPlan: string;
  riskLevel?: "low" | "medium" | "high";
  touchesCustomers?: boolean;
  touchesMoney?: boolean;
  touchesSensitiveData?: boolean;
  touchesLegalComplianceHRMedicalOrFinance?: boolean;
  notes?: string;
}

export interface AutomationBlueprintResponse {
  workflowName: string;
  validationStatus: "ready_for_pilot" | "needs_cleanup" | "not_ready";
  missingFields: string[];
  weakFields: string[];
  riskWarnings: string[];
  humanReviewRequired: boolean;
  recommendedAutomationMode: string;
  pilotReadinessSummary: string;
  nextStep: string;
  assumptions: string[];
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
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

function parseStringArray(value: unknown, fieldName: string, required: boolean): string[] {
    if (required && !Array.isArray(value)) {
        throw new ValidationError(`${fieldName} is required and must be an array of strings.`);
    }
    if (!required && value === undefined) {
        return [];
    }
    if (!Array.isArray(value)) {
        throw new ValidationError(`${fieldName} must be an array of strings.`);
    }
    const arr = value.filter(v => typeof v === 'string' && v.trim() !== "").map(v => v.trim());
    if (required && arr.length === 0) {
        throw new ValidationError(`${fieldName} must contain at least one valid string.`);
    }
    return arr;
}

function parseBoolean(value: unknown, fieldName: string): boolean {
  if (value === undefined || value === null) return false;
  if (typeof value !== "boolean") {
    throw new ValidationError(`${fieldName} must be a boolean when provided.`);
  }
  return value;
}

export function validateBlueprintRequest(input: unknown): AutomationBlueprintRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  const workflowName = cleanRequiredString(input.workflowName, "workflowName");
  const automationGoal = cleanRequiredString(input.automationGoal, "automationGoal");
  const trigger = cleanRequiredString(input.trigger, "trigger");

  const inputs = parseStringArray(input.inputs, "inputs", true);
  const tools = parseStringArray(input.tools, "tools", true);
  const workflowSteps = parseStringArray(input.workflowSteps, "workflowSteps", true);
  const aiTasks = parseStringArray(input.aiTasks, "aiTasks", true);
  const humanReviewPoints = parseStringArray(input.humanReviewPoints, "humanReviewPoints", true);
  const outputs = parseStringArray(input.outputs, "outputs", true);
  const exceptions = parseStringArray(input.exceptions, "exceptions", false);
  const successMetrics = parseStringArray(input.successMetrics, "successMetrics", true);
  const rollbackPlan = cleanRequiredString(input.rollbackPlan, "rollbackPlan");

  const riskLevelRaw = cleanOptionalString(input.riskLevel, "riskLevel");
  let riskLevel: "low" | "medium" | "high" | undefined = undefined;
  if (riskLevelRaw) {
     if (!["low", "medium", "high"].includes(riskLevelRaw)) {
         throw new ValidationError("riskLevel must be one of: 'low', 'medium', 'high'.");
     }
     riskLevel = riskLevelRaw as "low" | "medium" | "high";
  }

  const touchesCustomers = parseBoolean(input.touchesCustomers, "touchesCustomers");
  const touchesMoney = parseBoolean(input.touchesMoney, "touchesMoney");
  const touchesSensitiveData = parseBoolean(input.touchesSensitiveData, "touchesSensitiveData");
  const touchesLegalComplianceHRMedicalOrFinance = parseBoolean(input.touchesLegalComplianceHRMedicalOrFinance, "touchesLegalComplianceHRMedicalOrFinance");
  const notes = cleanOptionalString(input.notes, "notes");

  return {
    workflowName,
    automationGoal,
    trigger,
    inputs,
    tools,
    workflowSteps,
    aiTasks,
    humanReviewPoints,
    outputs,
    exceptions,
    successMetrics,
    rollbackPlan,
    riskLevel,
    touchesCustomers,
    touchesMoney,
    touchesSensitiveData,
    touchesLegalComplianceHRMedicalOrFinance,
    notes
  };
}

export function validateBlueprint(input: AutomationBlueprintRequest): AutomationBlueprintResponse {
    const missingFields: string[] = [];
    const weakFields: string[] = [];
    const riskWarnings: string[] = [];

    // We already require these in input validation, but let's check length conceptually as 'weak' if they just passed minimal validation.
    if (input.humanReviewPoints.length === 0) missingFields.push("humanReviewPoints");
    if (input.successMetrics.length === 0) missingFields.push("successMetrics");

    if (input.rollbackPlan.length < 10) weakFields.push("rollbackPlan (too short, needs detail)");
    if (input.successMetrics.length === 1 && input.successMetrics[0].length < 10) weakFields.push("successMetrics (too brief)");

    const isSensitive = input.touchesCustomers || input.touchesMoney || input.touchesSensitiveData || input.touchesLegalComplianceHRMedicalOrFinance;
    const humanReviewRequired = isSensitive || input.riskLevel === "high" || input.riskLevel === "medium";

    if (humanReviewRequired && input.humanReviewPoints.length === 0) {
        riskWarnings.push("Sensitive or medium/high risk workflow lacks human review points. Add explicit human approval before action.");
    }

    if (isSensitive) {
        riskWarnings.push("This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.");
    }

    if ((input.riskLevel === "high" || input.riskLevel === "medium") && (!input.exceptions || input.exceptions.length === 0)) {
        weakFields.push("exceptions (missing for medium/high risk workflow)");
    }

    if (input.touchesCustomers) riskWarnings.push("Customer-facing workflows should use draft-only mode or approval before action.");
    if (input.touchesMoney || input.touchesLegalComplianceHRMedicalOrFinance) riskWarnings.push("Financial, compliance, or HR impacts require strict human-in-the-loop oversight and audit logs.");

    let validationStatus: "ready_for_pilot" | "needs_cleanup" | "not_ready" = "ready_for_pilot";
    let recommendedAutomationMode = "Limited pilot automation";

    if (missingFields.length > 0 || riskWarnings.length > 2) {
        validationStatus = "not_ready";
    } else if (weakFields.length > 0) {
        validationStatus = "needs_cleanup";
    }

    if (humanReviewRequired) {
        if (input.riskLevel === "high" || input.touchesLegalComplianceHRMedicalOrFinance) {
            recommendedAutomationMode = "Draft-only AI assist";
        } else {
            recommendedAutomationMode = "Human approval before action";
        }
    }

    let pilotReadinessSummary = "";
    let nextStep = "";

    if (validationStatus === "not_ready") {
        pilotReadinessSummary = "Blueprint is incomplete or unsafe for pilot.";
        nextStep = "Address missing fields and high-priority risk warnings before attempting to build this automation.";
    } else if (validationStatus === "needs_cleanup") {
        pilotReadinessSummary = "Blueprint has the core components but needs refinement.";
        nextStep = "Flesh out weak fields like exception handling or rollback plans before testing.";
    } else {
        pilotReadinessSummary = "Blueprint appears structurally sound and ready for pilot design.";
        nextStep = `Proceed with building a limited pilot using '${recommendedAutomationMode}' mode.`;
    }

    const assumptions = [
        "Validation assumes the provided steps and inputs represent the entire workflow.",
        "A 'ready_for_pilot' status means the blueprint is structurally complete, not that the automation is guaranteed to succeed.",
        "Fully autonomous execution is never recommended for workflows touching sensitive data or money without extensive prior testing."
    ];

    return {
        workflowName: input.workflowName,
        validationStatus,
        missingFields,
        weakFields,
        riskWarnings,
        humanReviewRequired: !!humanReviewRequired,
        recommendedAutomationMode,
        pilotReadinessSummary,
        nextStep,
        assumptions
    };
}

export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface AgentBlueprintRequest {
  agentName: string;
  agentRole: string;
  targetUser: string;
  primaryJob: string;
  inputsNeeded: string[];
  outputsProduced: string[];
  instructions: string;
  guardrails: string[];
  permissionBoundaries: string[];
  humanHandoffRules: string[];
  testScenarios: string[];
  failureModes?: string[];
  escalationRules?: string[];
  touchesCustomers?: boolean;
  touchesMoney?: boolean;
  touchesSensitiveData?: boolean;
  touchesLegalComplianceHRMedicalOrFinance?: boolean;
  notes?: string;
}

export interface AgentBlueprintResponse {
  agentName: string;
  validationStatus: "ready_for_limited_pilot" | "needs_more_guardrails" | "not_ready";
  missingFields: string[];
  weakFields: string[];
  safetyWarnings: string[];
  permissionWarnings: string[];
  testingGaps: string[];
  humanReviewRequired: boolean;
  recommendedAutomationMode: string;
  launchReadinessSummary: string;
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

export function validateAgentRequest(input: unknown): AgentBlueprintRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  const agentName = cleanRequiredString(input.agentName, "agentName");
  const agentRole = cleanRequiredString(input.agentRole, "agentRole");
  const targetUser = cleanRequiredString(input.targetUser, "targetUser");
  const primaryJob = cleanRequiredString(input.primaryJob, "primaryJob");

  const inputsNeeded = parseStringArray(input.inputsNeeded, "inputsNeeded", true);
  const outputsProduced = parseStringArray(input.outputsProduced, "outputsProduced", true);
  const instructions = cleanRequiredString(input.instructions, "instructions");
  const guardrails = parseStringArray(input.guardrails, "guardrails", true);
  const permissionBoundaries = parseStringArray(input.permissionBoundaries, "permissionBoundaries", true);
  const humanHandoffRules = parseStringArray(input.humanHandoffRules, "humanHandoffRules", true);
  const testScenarios = parseStringArray(input.testScenarios, "testScenarios", true);

  const failureModes = parseStringArray(input.failureModes, "failureModes", false);
  const escalationRules = parseStringArray(input.escalationRules, "escalationRules", false);

  const touchesCustomers = parseBoolean(input.touchesCustomers, "touchesCustomers");
  const touchesMoney = parseBoolean(input.touchesMoney, "touchesMoney");
  const touchesSensitiveData = parseBoolean(input.touchesSensitiveData, "touchesSensitiveData");
  const touchesLegalComplianceHRMedicalOrFinance = parseBoolean(input.touchesLegalComplianceHRMedicalOrFinance, "touchesLegalComplianceHRMedicalOrFinance");
  const notes = cleanOptionalString(input.notes, "notes");

  return {
    agentName,
    agentRole,
    targetUser,
    primaryJob,
    inputsNeeded,
    outputsProduced,
    instructions,
    guardrails,
    permissionBoundaries,
    humanHandoffRules,
    testScenarios,
    failureModes,
    escalationRules,
    touchesCustomers,
    touchesMoney,
    touchesSensitiveData,
    touchesLegalComplianceHRMedicalOrFinance,
    notes
  };
}

export function validateAgentBlueprint(input: AgentBlueprintRequest): AgentBlueprintResponse {
    const missingFields: string[] = [];
    const weakFields: string[] = [];
    const safetyWarnings: string[] = [];
    const permissionWarnings: string[] = [];
    const testingGaps: string[] = [];

    // The validation function already ensures length > 0, but let's check for weak content
    if (input.instructions.length < 50) weakFields.push("instructions (too brief)");
    if (input.guardrails.length < 2) weakFields.push("guardrails (recommend at least 2)");
    if (input.testScenarios.length < 3) testingGaps.push("testScenarios (recommend testing normal, edge, and failure cases)");

    if (input.permissionBoundaries.length === 0) missingFields.push("permissionBoundaries"); // Handled by strict parse, but if passed empty array by bypass
    if (input.testScenarios.length === 0) missingFields.push("testScenarios");
    if (input.humanHandoffRules.length === 0) missingFields.push("humanHandoffRules");

    const isSensitive = input.touchesCustomers || input.touchesMoney || input.touchesSensitiveData || input.touchesLegalComplianceHRMedicalOrFinance;
    const humanReviewRequired = isSensitive;

    if (isSensitive) {
        safetyWarnings.push("This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.");

        if (input.humanHandoffRules.length === 0 || input.humanHandoffRules.some(rule => rule.toLowerCase().includes("none"))) {
             safetyWarnings.push("Sensitive workflows require explicitly defined human handoff rules.");
             missingFields.push("humanHandoffRules (inadequate for sensitive workflow)");
        }
        if (!input.escalationRules || input.escalationRules.length === 0) {
             missingFields.push("escalationRules (required for sensitive workflows)");
        }
    }

    if (input.touchesCustomers) safetyWarnings.push("Customer-facing agents should not be fully autonomous without extensive testing and guardrails.");
    if (input.touchesMoney) permissionWarnings.push("Agents handling financial transactions must operate in Draft-only mode or require strict Human approval before action.");
    if (input.touchesLegalComplianceHRMedicalOrFinance) permissionWarnings.push("Agents touching HR/Legal/Medical data must not make final compliance decisions.");

    let validationStatus: "ready_for_limited_pilot" | "needs_more_guardrails" | "not_ready" = "ready_for_limited_pilot";
    let recommendedAutomationMode = "Limited pilot automation";

    if (missingFields.length > 0 || safetyWarnings.length > 2 || permissionWarnings.length > 1) {
        validationStatus = "not_ready";
    } else if (weakFields.length > 0 || testingGaps.length > 0 || permissionWarnings.length > 0) {
        validationStatus = "needs_more_guardrails";
    }

    if (humanReviewRequired) {
        if (input.touchesLegalComplianceHRMedicalOrFinance || input.touchesMoney) {
            recommendedAutomationMode = "Draft-only AI assist";
        } else {
            recommendedAutomationMode = "Human approval before action";
        }
    }

    let launchReadinessSummary = "";
    let nextStep = "";

    if (validationStatus === "not_ready") {
        launchReadinessSummary = "Agent blueprint lacks critical safety, permission, or testing constraints.";
        nextStep = "Fix missing fields and address safety warnings before building this agent.";
    } else if (validationStatus === "needs_more_guardrails") {
        launchReadinessSummary = "Agent is defined but needs tighter guardrails or better test coverage.";
        nextStep = "Add the missing guardrails and test scenarios to ensure the agent fails safely.";
    } else {
        launchReadinessSummary = "Agent blueprint appears solid and well-bounded.";
        nextStep = `Build a prototype and run your test scenarios using '${recommendedAutomationMode}' mode.`;
    }

    const assumptions = [
        "A 'ready_for_limited_pilot' status means the blueprint is complete, not that the agent won't hallucinate.",
        "Fully autonomous execution is never recommended for workflows touching sensitive data or money.",
        "Testing must be performed on safe, sample data first."
    ];

    return {
        agentName: input.agentName,
        validationStatus,
        missingFields,
        weakFields,
        safetyWarnings,
        permissionWarnings,
        testingGaps,
        humanReviewRequired: !!humanReviewRequired,
        recommendedAutomationMode,
        launchReadinessSummary,
        nextStep,
        assumptions
    };
}

export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface TaskFrequency {
  count: number;
  period: "day" | "week" | "month" | "quarter" | "year";
}

export interface AutomationRoiRequest {
  workflowName: string;
  timePerTaskMinutes: number;
  taskFrequency: TaskFrequency;
  laborCostPerHour: number;
  automationSetupCostEstimate?: number;
  automationMaintenanceCostMonthly?: number;
  humanReviewTimeMinutes?: number;
  expectedAutomationCoveragePercent?: number;
  notes?: string;
  riskLevel?: "low" | "medium" | "high";
  touchesSensitiveWorkflow?: boolean;
}

export interface AutomationRoiResponse {
  workflowName: string;
  monthlyTaskVolume: number;
  currentMonthlyHours: number;
  estimatedAutomatedHours: number;
  humanReviewHours: number;
  netMonthlyHoursSaved: number;
  estimatedMonthlyValue: number;
  estimatedAnnualValue: number;
  setupCostEstimate?: number;
  maintenanceCostMonthly?: number;
  estimatedMonthlyNetValue: number;
  paybackMonths?: number;
  sensitivityNotes: string[];
  assumptions: string[];
  riskFlags: string[];
  humanReviewRequired: boolean;
  recommendation: string;
  nextStep: string;
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

function parseNumber(value: unknown, fieldName: string): number {
  if (typeof value !== "number" || isNaN(value)) {
    throw new ValidationError(`${fieldName} must be a valid number.`);
  }
  return value;
}

function parseOptionalNumber(value: unknown, fieldName: string): number | undefined {
  if (value === undefined || value === null) return undefined;
  return parseNumber(value, fieldName);
}

function parseBoolean(value: unknown, fieldName: string): boolean | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "boolean") {
    throw new ValidationError(`${fieldName} must be a boolean when provided.`);
  }
  return value;
}

export function validateRoiRequest(input: unknown): AutomationRoiRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  const workflowName = cleanRequiredString(input.workflowName, "workflowName");
  const timePerTaskMinutes = parseNumber(input.timePerTaskMinutes, "timePerTaskMinutes");

  if (!isPlainObject(input.taskFrequency)) {
    throw new ValidationError("taskFrequency is required and must be an object.");
  }

  const count = parseNumber(input.taskFrequency.count, "taskFrequency.count");
  const period = cleanRequiredString(input.taskFrequency.period, "taskFrequency.period");

  if (!["day", "week", "month", "quarter", "year"].includes(period)) {
    throw new ValidationError("taskFrequency.period must be one of: 'day', 'week', 'month', 'quarter', 'year'.");
  }

  const laborCostPerHour = parseNumber(input.laborCostPerHour, "laborCostPerHour");
  const automationSetupCostEstimate = parseOptionalNumber(input.automationSetupCostEstimate, "automationSetupCostEstimate");
  const automationMaintenanceCostMonthly = parseOptionalNumber(input.automationMaintenanceCostMonthly, "automationMaintenanceCostMonthly");
  const humanReviewTimeMinutes = parseOptionalNumber(input.humanReviewTimeMinutes, "humanReviewTimeMinutes");
  const expectedAutomationCoveragePercent = parseOptionalNumber(input.expectedAutomationCoveragePercent, "expectedAutomationCoveragePercent");

  if (expectedAutomationCoveragePercent !== undefined && (expectedAutomationCoveragePercent < 0 || expectedAutomationCoveragePercent > 100)) {
     throw new ValidationError("expectedAutomationCoveragePercent must be between 0 and 100.");
  }

  const notes = cleanOptionalString(input.notes, "notes");
  const riskLevelRaw = cleanOptionalString(input.riskLevel, "riskLevel");
  let riskLevel: "low" | "medium" | "high" | undefined = undefined;

  if (riskLevelRaw) {
     if (!["low", "medium", "high"].includes(riskLevelRaw)) {
         throw new ValidationError("riskLevel must be one of: 'low', 'medium', 'high'.");
     }
     riskLevel = riskLevelRaw as "low" | "medium" | "high";
  }

  const touchesSensitiveWorkflow = parseBoolean(input.touchesSensitiveWorkflow, "touchesSensitiveWorkflow");

  return {
    workflowName,
    timePerTaskMinutes,
    taskFrequency: {
       count,
       period: period as "day" | "week" | "month" | "quarter" | "year"
    },
    laborCostPerHour,
    automationSetupCostEstimate,
    automationMaintenanceCostMonthly,
    humanReviewTimeMinutes,
    expectedAutomationCoveragePercent,
    notes,
    riskLevel,
    touchesSensitiveWorkflow
  };
}

export function calculateAutomationROI(input: AutomationRoiRequest): AutomationRoiResponse {
    let monthlyVolume = 0;

    switch (input.taskFrequency.period) {
        case "day":
            monthlyVolume = input.taskFrequency.count * 30; // assuming 30 days/month avg
            break;
        case "week":
            monthlyVolume = input.taskFrequency.count * 4.33; // 52 weeks / 12 months
            break;
        case "month":
            monthlyVolume = input.taskFrequency.count;
            break;
        case "quarter":
            monthlyVolume = input.taskFrequency.count / 3;
            break;
        case "year":
            monthlyVolume = input.taskFrequency.count / 12;
            break;
    }

    const currentMonthlyHours = (monthlyVolume * input.timePerTaskMinutes) / 60;

    const coverage = input.expectedAutomationCoveragePercent !== undefined ? input.expectedAutomationCoveragePercent / 100 : 1.0;

    const automatedTasksVolume = monthlyVolume * coverage;

    const humanReviewMinutes = input.humanReviewTimeMinutes || 0;
    const humanReviewHours = (automatedTasksVolume * humanReviewMinutes) / 60;

    const remainingManualVolume = monthlyVolume * (1 - coverage);
    const remainingManualHours = (remainingManualVolume * input.timePerTaskMinutes) / 60;

    const totalNewHours = humanReviewHours + remainingManualHours;

    const netMonthlyHoursSaved = currentMonthlyHours - totalNewHours;
    const estimatedMonthlyValue = netMonthlyHoursSaved * input.laborCostPerHour;
    const estimatedAnnualValue = estimatedMonthlyValue * 12;

    const maintenanceCostMonthly = input.automationMaintenanceCostMonthly || 0;
    const estimatedMonthlyNetValue = estimatedMonthlyValue - maintenanceCostMonthly;

    let paybackMonths: number | undefined = undefined;
    if (input.automationSetupCostEstimate && estimatedMonthlyNetValue > 0) {
        paybackMonths = input.automationSetupCostEstimate / estimatedMonthlyNetValue;
    } else if (input.automationSetupCostEstimate && estimatedMonthlyNetValue <= 0) {
        paybackMonths = -1; // Won't pay back
    }

    const humanReviewRequired = input.riskLevel === "high" || input.riskLevel === "medium" || input.touchesSensitiveWorkflow === true;

    const sensitivityNotes: string[] = [];
    if (input.touchesSensitiveWorkflow) {
        sensitivityNotes.push("This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.");
    }

    const riskFlags: string[] = [];
    if (input.riskLevel === "high") {
        riskFlags.push("High risk workflow. Do not allow fully autonomous action without testing and oversight.");
    } else if (input.riskLevel === "medium") {
        riskFlags.push("Medium risk workflow. Keep a human in the loop for approval before action.");
    }
    if (input.touchesSensitiveWorkflow) {
        riskFlags.push("Sensitive workflow detected. Ensure compliance boundaries are maintained.");
    }

    if (humanReviewRequired && (input.humanReviewTimeMinutes === undefined || input.humanReviewTimeMinutes === 0)) {
         riskFlags.push("Workflow is sensitive or medium/high risk but human review time is 0. Add human review points.");
    }

    let recommendation = "";
    let nextStep = "";

    if (estimatedMonthlyNetValue < 0) {
        recommendation = "Revisit later";
        nextStep = "The cost of maintaining this automation currently exceeds its labor value. Consider simpler tools or keeping the process manual.";
    } else if (paybackMonths && paybackMonths > 12) {
        recommendation = "Revisit later";
        nextStep = `Payback period is long (${paybackMonths.toFixed(1)} months). Evaluate if there are faster wins elsewhere first.`;
    } else if (humanReviewRequired) {
        recommendation = "Draft-only AI assist";
        nextStep = "Due to workflow sensitivity or risk, deploy automation as a draft generator or require explicit human approval before action.";
    } else if (estimatedMonthlyNetValue > 0 && netMonthlyHoursSaved > 0) {
        recommendation = "Automate now";
        nextStep = "Good candidate for automation. Build a limited pilot plan to verify these time and cost assumptions.";
    } else {
        recommendation = "Clean up first";
        nextStep = "Not enough clear ROI to justify the setup yet. Focus on streamlining the manual process first.";
    }

    const assumptions = [
       "Calculations assume a standard month (4.33 weeks, 30 days).",
       "Human review time applies only to automated task coverage.",
       "This ROI estimate does not guarantee outcomes, financial savings, or performance.",
       "We assume manual tasks take exactly the 'timePerTaskMinutes' every time.",
       "This action cannot replace qualified human financial review."
    ];

    return {
       workflowName: input.workflowName,
       monthlyTaskVolume: Number(monthlyVolume.toFixed(2)),
       currentMonthlyHours: Number(currentMonthlyHours.toFixed(2)),
       estimatedAutomatedHours: Number((totalNewHours - humanReviewHours).toFixed(2)), // time it takes if AI does it? AI time is 0, so 0. Wait, "estimatedAutomatedHours" output might mean something else. Let's omit it or just provide 0 since AI runs fast.
       humanReviewHours: Number(humanReviewHours.toFixed(2)),
       netMonthlyHoursSaved: Number(netMonthlyHoursSaved.toFixed(2)),
       estimatedMonthlyValue: Number(estimatedMonthlyValue.toFixed(2)),
       estimatedAnnualValue: Number(estimatedAnnualValue.toFixed(2)),
       setupCostEstimate: input.automationSetupCostEstimate,
       maintenanceCostMonthly: input.automationMaintenanceCostMonthly,
       estimatedMonthlyNetValue: Number(estimatedMonthlyNetValue.toFixed(2)),
       paybackMonths: paybackMonths !== undefined ? Number(paybackMonths.toFixed(1)) : undefined,
       sensitivityNotes,
       assumptions,
       riskFlags,
       humanReviewRequired,
       recommendation,
       nextStep
    };
}

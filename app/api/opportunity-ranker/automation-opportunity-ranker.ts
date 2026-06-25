export type ScoreValue = 0 | 1 | 2 | 3;

export type OpportunityFactorKey =
  | "frequency"
  | "timeSavedPotential"
  | "revenueImpact"
  | "customerExperienceImpact"
  | "dataReadiness"
  | "toolReadiness"
  | "processClarity"
  | "ownershipClarity"
  | "riskLevel"
  | "humanReviewPlan";

export type RecommendationCategory =
  | "Automate now"
  | "Clean up first"
  | "Keep human"
  | "Revisit later";

export type RecommendedAutomationMode =
  | "Limited automation pilot with human approval"
  | "Draft-only AI assistance"
  | "Process cleanup before automation"
  | "Keep human-led; use AI only for drafts or summaries"
  | "Revisit after higher-priority workflows";

export type OpportunityScores = Record<OpportunityFactorKey, ScoreValue>;

export interface WorkflowOpportunityInput {
  workflowName: string;
  workflowDescription?: string;
  currentTools?: string[];
  owner?: string;
  frequency?: ScoreValue | string;
  timeSavedPotential?: ScoreValue | string;
  revenueImpact?: ScoreValue | string;
  customerExperienceImpact?: ScoreValue | string;
  dataReadiness?: ScoreValue | string;
  toolReadiness?: ScoreValue | string;
  processClarity?: ScoreValue | string;
  ownershipClarity?: ScoreValue | string;
  riskLevel?: ScoreValue | string;
  humanReviewPlan?: ScoreValue | string;
  touchesCustomers?: boolean;
  touchesMoney?: boolean;
  touchesSensitiveData?: boolean;
  touchesLegalCompliance?: boolean;
  touchesTaxAccounting?: boolean;
  touchesHrEmployment?: boolean;
  touchesMedicalHealth?: boolean;
  customerFacingFinalAction?: boolean;
  notes?: string;
}

export interface OpportunityRankerRequest {
  businessName?: string;
  businessContext?: string;
  rankingGoal?: string;
  opportunities: WorkflowOpportunityInput[];
  weights?: Partial<Record<OpportunityFactorKey, number>>;
  topN?: number;
}

export interface FactorBreakdown {
  key: OpportunityFactorKey;
  label: string;
  score: ScoreValue;
  scoreLabel: string;
  weight: number;
  weightedScore: number;
  maxWeightedScore: number;
  interpretation: string;
}

export interface RankedOpportunity {
  rank: number;
  workflowName: string;
  workflowDescription?: string;
  currentTools?: string[];
  owner?: string;
  totalWeightedScore: number;
  maxWeightedScore: number;
  scorePercent: number;
  priorityScore: number;
  recommendation: RecommendationCategory;
  automationFit: "High" | "Medium" | "Low";
  recommendedAutomationMode: RecommendedAutomationMode;
  impactSummary: string;
  blockerSummary: string;
  nextStep: string;
  humanReviewRequired: boolean;
  riskFlags: string[];
  factorBreakdown: FactorBreakdown[];
  notes?: string;
}

export interface OpportunityRankerResponse {
  businessName?: string;
  businessContext?: string;
  rankingGoal?: string;
  totalOpportunities: number;
  weightsUsed: Record<OpportunityFactorKey, number>;
  rankedOpportunities: RankedOpportunity[];
  topRecommendations: RankedOpportunity[];
  portfolioSummary: {
    automateNowCount: number;
    cleanUpFirstCount: number;
    keepHumanCount: number;
    revisitLaterCount: number;
    bestFirstWorkflow?: string;
    biggestPortfolioBlocker: string;
  };
  assumptions: string[];
}

interface FactorMeta {
  label: string;
  description: string;
  scoreMeanings: Record<ScoreValue, string>;
}

export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export const FACTOR_KEYS: OpportunityFactorKey[] = [
  "frequency",
  "timeSavedPotential",
  "revenueImpact",
  "customerExperienceImpact",
  "dataReadiness",
  "toolReadiness",
  "processClarity",
  "ownershipClarity",
  "riskLevel",
  "humanReviewPlan",
];

export const DEFAULT_WEIGHTS: Record<OpportunityFactorKey, number> = {
  frequency: 1.2,
  timeSavedPotential: 1.2,
  revenueImpact: 1.1,
  customerExperienceImpact: 1.0,
  dataReadiness: 1.2,
  toolReadiness: 1.0,
  processClarity: 1.2,
  ownershipClarity: 0.8,
  riskLevel: 1.4,
  humanReviewPlan: 1.0,
};

export const FACTOR_META: Record<OpportunityFactorKey, FactorMeta> = {
  frequency: {
    label: "Frequency",
    description: "How often the workflow happens.",
    scoreMeanings: {
      0: "Rare or one-off.",
      1: "Occasional.",
      2: "Recurring enough to matter.",
      3: "High-volume or frequent.",
    },
  },
  timeSavedPotential: {
    label: "Time saved potential",
    description: "How much manual effort automation could reduce.",
    scoreMeanings: {
      0: "Little or no time savings.",
      1: "Some time savings.",
      2: "Meaningful time savings.",
      3: "Large time savings across the team.",
    },
  },
  revenueImpact: {
    label: "Revenue impact",
    description: "Potential impact on revenue, conversion, retention, or cash collection.",
    scoreMeanings: {
      0: "No clear revenue impact.",
      1: "Indirect or small revenue impact.",
      2: "Moderate revenue or cash-flow impact.",
      3: "Strong revenue, conversion, retention, or cash-flow impact.",
    },
  },
  customerExperienceImpact: {
    label: "Customer experience impact",
    description: "Potential impact on speed, clarity, consistency, or service quality.",
    scoreMeanings: {
      0: "No customer experience impact.",
      1: "Minor customer experience improvement.",
      2: "Noticeable customer experience improvement.",
      3: "Major improvement to response time, clarity, or consistency.",
    },
  },
  dataReadiness: {
    label: "Data readiness",
    description: "Whether required data is available, complete, clean, and consistent.",
    scoreMeanings: {
      0: "Required data is missing or unreliable.",
      1: "Data exists but needs cleanup.",
      2: "Data is mostly usable.",
      3: "Data is clean, available, and consistently structured.",
    },
  },
  toolReadiness: {
    label: "Tool readiness",
    description: "Whether the tools involved are accessible and practical to connect or use.",
    scoreMeanings: {
      0: "Tools are missing, inaccessible, or not usable.",
      1: "Tools exist but access or setup is unclear.",
      2: "Tools are mostly ready.",
      3: "Tools are ready for a pilot.",
    },
  },
  processClarity: {
    label: "Process clarity",
    description: "Whether the current process is documented, repeatable, and clear.",
    scoreMeanings: {
      0: "Process is unclear or undocumented.",
      1: "Process has gaps or inconsistent steps.",
      2: "Process is mostly clear.",
      3: "Process is clear, repeatable, and documented.",
    },
  },
  ownershipClarity: {
    label: "Ownership clarity",
    description: "Whether a person or team clearly owns the workflow and exceptions.",
    scoreMeanings: {
      0: "No clear owner.",
      1: "Ownership is informal or inconsistent.",
      2: "Owner is mostly clear.",
      3: "Owner, approver, and escalation path are clear.",
    },
  },
  riskLevel: {
    label: "Risk level",
    description:
      "How safe the workflow is for automation. Higher score means lower risk and better pilot suitability.",
    scoreMeanings: {
      0: "High-risk workflow or sensitive final decision.",
      1: "Meaningful risk that requires cleanup and review.",
      2: "Moderate risk with manageable review points.",
      3: "Low-risk workflow suitable for a controlled pilot.",
    },
  },
  humanReviewPlan: {
    label: "Human review plan",
    description: "Whether human approval, exception handling, and escalation rules are defined.",
    scoreMeanings: {
      0: "No human review plan.",
      1: "Human review is vague or informal.",
      2: "Human review is mostly defined.",
      3: "Human review, escalation, and approval rules are clear.",
    },
  },
};

const STRING_SCORE_MAP: Record<string, ScoreValue> = {
  "0": 0,
  none: 0,
  no: 0,
  "not ready": 0,
  "very low": 0,
  "rare": 0,
  "one-off": 0,
  "one off": 0,
  "missing": 0,
  "unclear": 0,
  "undocumented": 0,
  "high risk": 0,
  highrisk: 0,
  high: 3,

  "1": 1,
  low: 1,
  occasional: 1,
  weak: 1,
  limited: 1,
  "needs cleanup": 1,
  "some cleanup": 1,
  inconsistent: 1,
  vague: 1,

  "2": 2,
  medium: 2,
  moderate: 2,
  recurring: 2,
  partial: 2,
  "mostly ready": 2,
  "mostly clear": 2,
  manageable: 2,

  "3": 3,
  yes: 3,
  ready: 3,
  strong: 3,
  frequent: 3,
  "very high": 3,
  "high volume": 3,
  "low risk": 3,
  lowrisk: 3,
  clear: 3,
  clean: 3,
};

const RISK_STRING_SCORE_MAP: Record<string, ScoreValue> = {
  "0": 0,
  high: 0,
  "high risk": 0,
  highrisk: 0,
  severe: 0,
  sensitive: 0,
  "very risky": 0,
  "not safe": 0,

  "1": 1,
  mediumhigh: 1,
  "medium-high": 1,
  "medium high": 1,
  meaningful: 1,
  "meaningful risk": 1,

  "2": 2,
  medium: 2,
  moderate: 2,
  manageable: 2,
  "manageable risk": 2,

  "3": 3,
  low: 3,
  "low risk": 3,
  lowrisk: 3,
  safe: 3,
  "low-risk": 3,
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function asOptionalString(value: unknown, fieldName: string): string | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "string") {
    throw new ValidationError(`${fieldName} must be a string when provided.`);
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function asOptionalStringArray(value: unknown, fieldName: string): string[] | undefined {
  if (value === undefined || value === null) return undefined;
  if (!Array.isArray(value)) {
    throw new ValidationError(`${fieldName} must be an array of strings when provided.`);
  }

  const cleaned = value
    .map((item, index) => {
      if (typeof item !== "string") {
        throw new ValidationError(`${fieldName}[${index}] must be a string.`);
      }
      return item.trim();
    })
    .filter(Boolean);

  return cleaned.length ? cleaned : undefined;
}

function asOptionalBoolean(value: unknown, fieldName: string): boolean | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "boolean") {
    throw new ValidationError(`${fieldName} must be a boolean when provided.`);
  }
  return value;
}

function normalizeStringScore(value: string, factorKey: OpportunityFactorKey): ScoreValue | undefined {
  const normalized = value.trim().toLowerCase();
  if (!normalized) return undefined;

  if (factorKey === "riskLevel") {
    return RISK_STRING_SCORE_MAP[normalized] ?? STRING_SCORE_MAP[normalized];
  }

  return STRING_SCORE_MAP[normalized];
}

function normalizeScore(
  value: unknown,
  factorKey: OpportunityFactorKey,
  workflowName: string,
  assumptions: string[],
): ScoreValue {
  if (value === undefined || value === null || value === "") {
    assumptions.push(
      `${workflowName}: ${FACTOR_META[factorKey].label} was missing, so it defaulted to 1 (needs cleanup / low readiness).`,
    );
    return 1;
  }

  if (typeof value === "number") {
    if (Number.isInteger(value) && value >= 0 && value <= 3) {
      return value as ScoreValue;
    }

    throw new ValidationError(
      `${workflowName}: ${factorKey} must be an integer from 0 to 3 when provided as a number.`,
      { factorKey, value },
    );
  }

  if (typeof value === "string") {
    const score = normalizeStringScore(value, factorKey);
    if (score !== undefined) return score;

    throw new ValidationError(
      `${workflowName}: ${factorKey} string value could not be interpreted. Use 0, 1, 2, 3, or labels like low, medium, high, ready, needs cleanup, low risk, high risk.`,
      { factorKey, value },
    );
  }

  throw new ValidationError(
    `${workflowName}: ${factorKey} must be a score from 0 to 3 or a supported score label.`,
    { factorKey, value },
  );
}

function validateWeights(value: unknown): Record<OpportunityFactorKey, number> {
  const weights = { ...DEFAULT_WEIGHTS };

  if (value === undefined || value === null) {
    return weights;
  }

  if (!isPlainObject(value)) {
    throw new ValidationError("weights must be an object when provided.");
  }

  for (const factorKey of FACTOR_KEYS) {
    const weight = value[factorKey];
    if (weight === undefined || weight === null) continue;

    if (typeof weight !== "number" || !Number.isFinite(weight) || weight < 0 || weight > 5) {
      throw new ValidationError(`weights.${factorKey} must be a number from 0 to 5.`);
    }

    weights[factorKey] = weight;
  }

  return weights;
}

function getBoolean(value: boolean | undefined): boolean {
  return value === true;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function round(value: number, decimals = 1): number {
  return Number(value.toFixed(decimals));
}

function average(values: number[]): number {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function scoreLabel(score: ScoreValue): string {
  switch (score) {
    case 0:
      return "Not ready / very low";
    case 1:
      return "Needs cleanup / low";
    case 2:
      return "Mostly ready / medium";
    case 3:
      return "Ready / high";
  }
}

function validateOpportunity(raw: unknown, index: number): WorkflowOpportunityInput {
  if (!isPlainObject(raw)) {
    throw new ValidationError(`opportunities[${index}] must be an object.`);
  }

  const workflowName = asOptionalString(raw.workflowName, `opportunities[${index}].workflowName`);
  if (!workflowName) {
    throw new ValidationError(`opportunities[${index}].workflowName is required.`);
  }

  return {
    workflowName,
    workflowDescription: asOptionalString(
      raw.workflowDescription,
      `opportunities[${index}].workflowDescription`,
    ),
    currentTools: asOptionalStringArray(raw.currentTools, `opportunities[${index}].currentTools`),
    owner: asOptionalString(raw.owner, `opportunities[${index}].owner`),
    frequency: raw.frequency as ScoreValue | string | undefined,
    timeSavedPotential: raw.timeSavedPotential as ScoreValue | string | undefined,
    revenueImpact: raw.revenueImpact as ScoreValue | string | undefined,
    customerExperienceImpact: raw.customerExperienceImpact as ScoreValue | string | undefined,
    dataReadiness: raw.dataReadiness as ScoreValue | string | undefined,
    toolReadiness: raw.toolReadiness as ScoreValue | string | undefined,
    processClarity: raw.processClarity as ScoreValue | string | undefined,
    ownershipClarity: raw.ownershipClarity as ScoreValue | string | undefined,
    riskLevel: raw.riskLevel as ScoreValue | string | undefined,
    humanReviewPlan: raw.humanReviewPlan as ScoreValue | string | undefined,
    touchesCustomers: asOptionalBoolean(
      raw.touchesCustomers,
      `opportunities[${index}].touchesCustomers`,
    ),
    touchesMoney: asOptionalBoolean(raw.touchesMoney, `opportunities[${index}].touchesMoney`),
    touchesSensitiveData: asOptionalBoolean(
      raw.touchesSensitiveData,
      `opportunities[${index}].touchesSensitiveData`,
    ),
    touchesLegalCompliance: asOptionalBoolean(
      raw.touchesLegalCompliance,
      `opportunities[${index}].touchesLegalCompliance`,
    ),
    touchesTaxAccounting: asOptionalBoolean(
      raw.touchesTaxAccounting,
      `opportunities[${index}].touchesTaxAccounting`,
    ),
    touchesHrEmployment: asOptionalBoolean(
      raw.touchesHrEmployment,
      `opportunities[${index}].touchesHrEmployment`,
    ),
    touchesMedicalHealth: asOptionalBoolean(
      raw.touchesMedicalHealth,
      `opportunities[${index}].touchesMedicalHealth`,
    ),
    customerFacingFinalAction: asOptionalBoolean(
      raw.customerFacingFinalAction,
      `opportunities[${index}].customerFacingFinalAction`,
    ),
    notes: asOptionalString(raw.notes, `opportunities[${index}].notes`),
  };
}

export function validateOpportunityRankerRequest(body: unknown): OpportunityRankerRequest {
  if (!isPlainObject(body)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  if (!Array.isArray(body.opportunities)) {
    throw new ValidationError("opportunities is required and must be an array.");
  }

  if (body.opportunities.length === 0) {
    throw new ValidationError("opportunities must include at least one workflow.");
  }

  if (body.opportunities.length > 50) {
    throw new ValidationError("opportunities cannot include more than 50 workflows in one request.");
  }

  let topN: number | undefined;
  const topNValue = body.topN;
  if (topNValue !== undefined && topNValue !== null) {
    if (
      typeof topNValue !== "number" ||
      !Number.isInteger(topNValue) ||
      topNValue < 1 ||
      topNValue > 10
    ) {
      throw new ValidationError("topN must be an integer from 1 to 10 when provided.");
    }
    topN = topNValue;
  }

  validateWeights(body.weights);

  return {
    businessName: asOptionalString(body.businessName, "businessName"),
    businessContext: asOptionalString(body.businessContext, "businessContext"),
    rankingGoal: asOptionalString(body.rankingGoal, "rankingGoal"),
    opportunities: body.opportunities.map((opportunity, index) =>
      validateOpportunity(opportunity, index),
    ),
    weights: body.weights as Partial<Record<OpportunityFactorKey, number>> | undefined,
    topN,
  };
}

function buildFactorBreakdown(
  scores: OpportunityScores,
  weights: Record<OpportunityFactorKey, number>,
): FactorBreakdown[] {
  return FACTOR_KEYS.map((key) => {
    const score = scores[key];
    const weight = weights[key];
    return {
      key,
      label: FACTOR_META[key].label,
      score,
      scoreLabel: scoreLabel(score),
      weight,
      weightedScore: round(score * weight, 2),
      maxWeightedScore: round(3 * weight, 2),
      interpretation: FACTOR_META[key].scoreMeanings[score],
    };
  });
}

function buildRiskFlags(opportunity: WorkflowOpportunityInput, scores: OpportunityScores): string[] {
  const flags: string[] = [];

  if (getBoolean(opportunity.touchesCustomers)) {
    flags.push("Touches customers or customer communications.");
  }
  if (getBoolean(opportunity.customerFacingFinalAction)) {
    flags.push("Could create or send a final customer-facing action.");
  }
  if (getBoolean(opportunity.touchesMoney)) {
    flags.push("Touches money, billing, pricing, payments, or cash flow.");
  }
  if (getBoolean(opportunity.touchesSensitiveData)) {
    flags.push("Touches sensitive or private data.");
  }
  if (getBoolean(opportunity.touchesLegalCompliance)) {
    flags.push("Touches legal, contractual, regulatory, or compliance matters.");
  }
  if (getBoolean(opportunity.touchesTaxAccounting)) {
    flags.push("Touches tax, accounting, bookkeeping, or financial reporting.");
  }
  if (getBoolean(opportunity.touchesHrEmployment)) {
    flags.push("Touches HR, hiring, payroll, performance, or employment decisions.");
  }
  if (getBoolean(opportunity.touchesMedicalHealth)) {
    flags.push("Touches medical, health, or wellness-related information or decisions.");
  }
  if (scores.riskLevel <= 1) {
    flags.push("Risk level is not low enough for autonomous automation.");
  }
  if (scores.humanReviewPlan <= 1) {
    flags.push("Human review plan is weak or missing.");
  }
  if (scores.dataReadiness <= 1) {
    flags.push("Data needs cleanup before dependable automation.");
  }
  if (scores.processClarity <= 1) {
    flags.push("Process should be documented or standardized before automation.");
  }
  if (scores.toolReadiness <= 1) {
    flags.push("Tool access or integration path needs cleanup before implementation.");
  }

  return flags;
}

function hasSensitiveDecisionArea(opportunity: WorkflowOpportunityInput): boolean {
  return (
    getBoolean(opportunity.touchesLegalCompliance) ||
    getBoolean(opportunity.touchesTaxAccounting) ||
    getBoolean(opportunity.touchesHrEmployment) ||
    getBoolean(opportunity.touchesMedicalHealth)
  );
}

function calculateRecommendation(
  opportunity: WorkflowOpportunityInput,
  scores: OpportunityScores,
  scorePercent: number,
): RecommendationCategory {
  const impactScore = average([
    scores.frequency,
    scores.timeSavedPotential,
    scores.revenueImpact,
    scores.customerExperienceImpact,
  ]);
  const hasCriticalReadinessBlocker =
    scores.dataReadiness <= 1 ||
    scores.toolReadiness <= 1 ||
    scores.processClarity <= 1 ||
    scores.ownershipClarity <= 1;

  const sensitiveDecisionArea = hasSensitiveDecisionArea(opportunity);
  const customerFacingFinalAction = getBoolean(opportunity.customerFacingFinalAction);
  const weakReview = scores.humanReviewPlan <= 1;
  const highRisk = scores.riskLevel <= 1;

  if ((sensitiveDecisionArea || customerFacingFinalAction) && (highRisk || weakReview)) {
    return "Keep human";
  }

  if (impactScore < 1.25 && scores.frequency <= 1 && scores.timeSavedPotential <= 1) {
    return "Revisit later";
  }

  if (highRisk || hasCriticalReadinessBlocker || weakReview) {
    return "Clean up first";
  }

  if (scorePercent >= 70 && scores.riskLevel >= 2 && scores.humanReviewPlan >= 2) {
    return "Automate now";
  }

  if (impactScore >= 2) {
    return "Clean up first";
  }

  return "Revisit later";
}

function calculatePriorityScore(
  opportunity: WorkflowOpportunityInput,
  scores: OpportunityScores,
  scorePercent: number,
  recommendation: RecommendationCategory,
): number {
  let penalty = 0;

  if (scores.riskLevel === 0) penalty += 20;
  if (scores.riskLevel === 1) penalty += 10;
  if (scores.humanReviewPlan === 0) penalty += 14;
  if (scores.humanReviewPlan === 1) penalty += 7;
  if (scores.dataReadiness <= 1) penalty += 5;
  if (scores.processClarity <= 1) penalty += 5;
  if (scores.toolReadiness <= 1) penalty += 4;
  if (scores.ownershipClarity <= 1) penalty += 3;

  if (hasSensitiveDecisionArea(opportunity) && scores.humanReviewPlan <= 1) penalty += 12;
  if (getBoolean(opportunity.customerFacingFinalAction) && scores.humanReviewPlan <= 1) penalty += 10;

  if (recommendation === "Automate now") penalty -= 5;
  if (recommendation === "Keep human") penalty += 20;
  if (recommendation === "Revisit later") penalty += 8;

  return round(clamp(scorePercent - penalty, 0, 100), 1);
}

function getRecommendedAutomationMode(
  recommendation: RecommendationCategory,
  scores: OpportunityScores,
): RecommendedAutomationMode {
  if (recommendation === "Keep human") {
    return "Keep human-led; use AI only for drafts or summaries";
  }

  if (recommendation === "Clean up first") {
    if (scores.humanReviewPlan >= 2 && scores.riskLevel >= 2) {
      return "Draft-only AI assistance";
    }
    return "Process cleanup before automation";
  }

  if (recommendation === "Automate now") {
    return "Limited automation pilot with human approval";
  }

  return "Revisit after higher-priority workflows";
}

function getAutomationFit(recommendation: RecommendationCategory, priorityScore: number): "High" | "Medium" | "Low" {
  if (recommendation === "Automate now" && priorityScore >= 65) return "High";
  if (recommendation === "Keep human") return "Low";
  if (recommendation === "Revisit later" && priorityScore < 50) return "Low";
  return "Medium";
}

function buildImpactSummary(scores: OpportunityScores): string {
  const impactScore = average([
    scores.frequency,
    scores.timeSavedPotential,
    scores.revenueImpact,
    scores.customerExperienceImpact,
  ]);

  if (impactScore >= 2.5) {
    return "High-value opportunity because it appears frequent, time-saving, revenue-relevant, or customer-impacting.";
  }

  if (impactScore >= 1.75) {
    return "Moderate-value opportunity with enough impact to consider after readiness and risk checks.";
  }

  return "Lower-impact opportunity; it may not be the best first automation unless there is a strategic reason.";
}

function buildBlockerSummary(
  recommendation: RecommendationCategory,
  scores: OpportunityScores,
  riskFlags: string[],
): string {
  const blockers = FACTOR_KEYS.filter((key) => scores[key] <= 1)
    .map((key) => FACTOR_META[key].label.toLowerCase());

  if (recommendation === "Automate now") {
    return "No major blocker detected for a limited pilot, assuming the workflow remains human-reviewed.";
  }

  if (recommendation === "Keep human") {
    return "The main blocker is safety: this workflow is too sensitive, risky, or under-reviewed for autonomous automation.";
  }

  if (recommendation === "Revisit later") {
    return "The main blocker is priority: expected impact or frequency appears lower than other opportunities.";
  }

  if (blockers.length) {
    return `Clean up first: ${blockers.slice(0, 3).join(", ")}.`;
  }

  if (riskFlags.length) {
    return `Clean up first: ${riskFlags[0]}`;
  }

  return "Clean up first because the workflow is not yet strong enough for a reliable pilot.";
}

function buildNextStep(recommendation: RecommendationCategory, scores: OpportunityScores): string {
  if (recommendation === "Automate now") {
    return "Create a small pilot with sample data, human approval before final action, success metrics, and a rollback path.";
  }

  if (recommendation === "Keep human") {
    return "Keep the workflow human-led. Consider AI only for drafting, summarizing, checklist preparation, or internal decision support.";
  }

  if (recommendation === "Revisit later") {
    return "Document the workflow and revisit after higher-frequency or higher-impact workflows have been piloted.";
  }

  if (scores.dataReadiness <= 1) {
    return "Clean the required data fields, locations, naming, and formats before designing the automation.";
  }
  if (scores.processClarity <= 1) {
    return "Document the workflow trigger, steps, decision points, owner, handoffs, and expected output.";
  }
  if (scores.toolReadiness <= 1) {
    return "Confirm tool access, export/import options, and whether the workflow can be piloted without broad permissions.";
  }
  if (scores.humanReviewPlan <= 1) {
    return "Define who reviews outputs, what requires approval, and when the workflow escalates to a person.";
  }

  return "Tighten the missing readiness areas, then rerun the ranking before piloting.";
}

function buildScoreRecord(
  opportunity: WorkflowOpportunityInput,
  assumptions: string[],
): OpportunityScores {
  return FACTOR_KEYS.reduce((scores, key) => {
    scores[key] = normalizeScore(opportunity[key], key, opportunity.workflowName, assumptions);
    return scores;
  }, {} as OpportunityScores);
}

function rankOneOpportunity(
  opportunity: WorkflowOpportunityInput,
  weights: Record<OpportunityFactorKey, number>,
  assumptions: string[],
): Omit<RankedOpportunity, "rank"> {
  const scores = buildScoreRecord(opportunity, assumptions);
  const factorBreakdown = buildFactorBreakdown(scores, weights);
  const totalWeightedScore = round(
    factorBreakdown.reduce((sum, factor) => sum + factor.weightedScore, 0),
    2,
  );
  const maxWeightedScore = round(
    factorBreakdown.reduce((sum, factor) => sum + factor.maxWeightedScore, 0),
    2,
  );
  const scorePercent = round((totalWeightedScore / maxWeightedScore) * 100, 1);
  const recommendation = calculateRecommendation(opportunity, scores, scorePercent);
  const priorityScore = calculatePriorityScore(opportunity, scores, scorePercent, recommendation);
  const riskFlags = buildRiskFlags(opportunity, scores);
  const recommendedAutomationMode = getRecommendedAutomationMode(recommendation, scores);
  const humanReviewRequired =
    getBoolean(opportunity.touchesCustomers) ||
    getBoolean(opportunity.touchesMoney) ||
    getBoolean(opportunity.touchesSensitiveData) ||
    hasSensitiveDecisionArea(opportunity) ||
    getBoolean(opportunity.customerFacingFinalAction) ||
    scores.riskLevel <= 2;

  return {
    workflowName: opportunity.workflowName,
    workflowDescription: opportunity.workflowDescription,
    currentTools: opportunity.currentTools,
    owner: opportunity.owner,
    totalWeightedScore,
    maxWeightedScore,
    scorePercent,
    priorityScore,
    recommendation,
    automationFit: getAutomationFit(recommendation, priorityScore),
    recommendedAutomationMode,
    impactSummary: buildImpactSummary(scores),
    blockerSummary: buildBlockerSummary(recommendation, scores, riskFlags),
    nextStep: buildNextStep(recommendation, scores),
    humanReviewRequired,
    riskFlags,
    factorBreakdown,
    notes: opportunity.notes,
  };
}

function buildPortfolioSummary(rankedOpportunities: RankedOpportunity[]): OpportunityRankerResponse["portfolioSummary"] {
  const counts = rankedOpportunities.reduce(
    (acc, opportunity) => {
      if (opportunity.recommendation === "Automate now") acc.automateNowCount += 1;
      if (opportunity.recommendation === "Clean up first") acc.cleanUpFirstCount += 1;
      if (opportunity.recommendation === "Keep human") acc.keepHumanCount += 1;
      if (opportunity.recommendation === "Revisit later") acc.revisitLaterCount += 1;
      return acc;
    },
    {
      automateNowCount: 0,
      cleanUpFirstCount: 0,
      keepHumanCount: 0,
      revisitLaterCount: 0,
    },
  );

  const bestFirst =
    rankedOpportunities.find((opportunity) => opportunity.recommendation === "Automate now") ??
    rankedOpportunities.find((opportunity) => opportunity.recommendation === "Clean up first") ??
    rankedOpportunities[0];

  const allLowFactorLabels = new Map<string, number>();
  for (const opportunity of rankedOpportunities) {
    for (const factor of opportunity.factorBreakdown) {
      if (factor.score <= 1) {
        allLowFactorLabels.set(factor.label, (allLowFactorLabels.get(factor.label) ?? 0) + 1);
      }
    }
  }

  const biggestPortfolioBlocker =
    [...allLowFactorLabels.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ??
    "No repeated blocker detected across the submitted workflows.";

  return {
    ...counts,
    bestFirstWorkflow: bestFirst?.workflowName,
    biggestPortfolioBlocker,
  };
}

export function rankAutomationOpportunities(request: OpportunityRankerRequest): OpportunityRankerResponse {
  const assumptions: string[] = [];
  const weightsUsed = validateWeights(request.weights);

  const rankedOpportunities = request.opportunities
    .map((opportunity) => rankOneOpportunity(opportunity, weightsUsed, assumptions))
    .sort((a, b) => {
      if (b.priorityScore !== a.priorityScore) return b.priorityScore - a.priorityScore;
      if (b.scorePercent !== a.scorePercent) return b.scorePercent - a.scorePercent;
      return a.workflowName.localeCompare(b.workflowName);
    })
    .map((opportunity, index) => ({
      ...opportunity,
      rank: index + 1,
    }));

  const topN = Math.min(request.topN ?? 3, rankedOpportunities.length);

  if (!request.weights) {
    assumptions.push("Default SMB automation ranking weights were used.");
  }

  return {
    businessName: request.businessName,
    businessContext: request.businessContext,
    rankingGoal: request.rankingGoal,
    totalOpportunities: rankedOpportunities.length,
    weightsUsed,
    rankedOpportunities,
    topRecommendations: rankedOpportunities.slice(0, topN),
    portfolioSummary: buildPortfolioSummary(rankedOpportunities),
    assumptions,
  };
}

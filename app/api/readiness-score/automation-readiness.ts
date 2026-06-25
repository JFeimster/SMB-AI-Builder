export type ScoreValue = 0 | 1 | 2 | 3;

export type ReadinessCategoryKey =
  | "workflowClarity"
  | "processConsistency"
  | "dataQuality"
  | "toolAccess"
  | "ownership"
  | "riskLevel"
  | "humanReviewPlan"
  | "customerExperienceImpact"
  | "measurementPlan"
  | "rollbackPlan";

export type ReadinessScores = Record<ReadinessCategoryKey, ScoreValue>;

export interface ReadinessScoreRequest {
  workflowName: string;
  workflowDescription?: string;
  userGoal?: string;
  scores: ReadinessScores;
  notes?: string;
  categoryNotes?: Partial<Record<ReadinessCategoryKey, string>>;
}

export interface CategoryResult {
  key: ReadinessCategoryKey;
  label: string;
  score: ScoreValue;
  scoreLabel: string;
  description: string;
  interpretation: string;
  improvementTip: string;
  note?: string;
}

export interface ReadinessScoreResponse {
  workflowName: string;
  workflowDescription?: string;
  userGoal?: string;
  totalScore: number;
  maxScore: 30;
  readinessLevel: string;
  recommendationCategory:
    | "Do not automate yet"
    | "Clean up first"
    | "Pilot carefully"
    | "Ready for automation pilot";
  interpretation: string;
  biggestBlocker: string;
  lowestScoringCategories: CategoryResult[];
  categoryResults: CategoryResult[];
  humanReviewRequired: boolean;
  recommendedAutomationMode:
    | "Do not automate yet"
    | "Process cleanup only"
    | "Draft-only AI assistance"
    | "Limited pilot with human approval"
    | "Automation pilot with monitoring";
  nextStep: string;
  riskFlags: string[];
  assumptions: string[];
  notes?: string;
}

interface CategoryMeta {
  label: string;
  description: string;
  improvementTip: string;
  scoreMeanings: Record<ScoreValue, string>;
  blockerPriority: number;
}

export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export const CATEGORY_KEYS: ReadinessCategoryKey[] = [
  "workflowClarity",
  "processConsistency",
  "dataQuality",
  "toolAccess",
  "ownership",
  "riskLevel",
  "humanReviewPlan",
  "customerExperienceImpact",
  "measurementPlan",
  "rollbackPlan",
];

export const CATEGORY_META: Record<ReadinessCategoryKey, CategoryMeta> = {
  workflowClarity: {
    label: "Workflow clarity",
    description: "How clearly the current workflow, steps, triggers, and outputs are defined.",
    improvementTip:
      "Document the trigger, major steps, decision points, owner, required inputs, and expected output before automating.",
    blockerPriority: 3,
    scoreMeanings: {
      0: "The workflow is unclear or mostly undocumented.",
      1: "Some steps are known, but the workflow has gaps or conflicting descriptions.",
      2: "The workflow is mostly clear, with minor gaps to resolve before testing.",
      3: "The workflow is clear, documented, and ready to pilot.",
    },
  },
  processConsistency: {
    label: "Process consistency",
    description: "How repeatable the process is from one case, customer, or task to the next.",
    improvementTip:
      "Standardize the process into a repeatable path with named exceptions before adding automation.",
    blockerPriority: 4,
    scoreMeanings: {
      0: "The process changes case by case and is not ready for automation.",
      1: "The process has repeatable pieces, but too many ad hoc variations.",
      2: "The process is mostly repeatable with known exceptions.",
      3: "The process is consistent, repeatable, and has clear exception handling.",
    },
  },
  dataQuality: {
    label: "Data quality",
    description: "Whether the required data is complete, reliable, accessible, and consistently formatted.",
    improvementTip:
      "Clean up missing fields, inconsistent naming, duplicate records, or scattered data sources before relying on AI output.",
    blockerPriority: 1,
    scoreMeanings: {
      0: "Required data is missing, unreliable, or inaccessible.",
      1: "Some required data exists, but quality or consistency problems are likely.",
      2: "Data is mostly usable, with a few cleanup items.",
      3: "Data is complete, reliable, consistently structured, and available to the workflow.",
    },
  },
  toolAccess: {
    label: "Tool access",
    description: "Whether the workflow’s systems, forms, files, or apps are available for safe integration or manual upload.",
    improvementTip:
      "Confirm which systems hold the needed data and whether the automation will use exports, forms, shared folders, or integrations.",
    blockerPriority: 7,
    scoreMeanings: {
      0: "The required tools or data sources are not accessible.",
      1: "Some access exists, but permissions, exports, or integrations are unclear.",
      2: "Most access is available, with small setup or permissions work needed.",
      3: "Required tools are accessible with appropriate permissions and clear boundaries.",
    },
  },
  ownership: {
    label: "Ownership",
    description: "Whether a person or team clearly owns the workflow, exceptions, approvals, and maintenance.",
    improvementTip:
      "Assign an owner for workflow changes, review queues, exceptions, metrics, and rollback decisions.",
    blockerPriority: 5,
    scoreMeanings: {
      0: "No clear owner is responsible for this workflow.",
      1: "Ownership is informal or split across people without clear accountability.",
      2: "An owner exists, but review and exception duties need clarification.",
      3: "Ownership is clear, including review, escalation, maintenance, and success tracking.",
    },
  },
  riskLevel: {
    label: "Risk level",
    description:
      "How safe the workflow is to automate. Higher scores mean lower operational, customer, financial, legal, or compliance risk.",
    improvementTip:
      "For customer-facing, financial, legal, HR, medical, compliance, or sensitive workflows, use draft-only or approval-first automation.",
    blockerPriority: 0,
    scoreMeanings: {
      0: "High risk; automation could create serious customer, financial, legal, HR, medical, or compliance issues.",
      1: "Meaningful risk exists and needs strong human review before any pilot.",
      2: "Risk is manageable with clear human review and exception rules.",
      3: "Risk is low and appropriate for a controlled automation pilot.",
    },
  },
  humanReviewPlan: {
    label: "Human review plan",
    description: "Whether the workflow has clear approval, escalation, exception, and review rules.",
    improvementTip:
      "Define what AI can draft, what requires approval, who reviews it, and when the workflow escalates to a person.",
    blockerPriority: 2,
    scoreMeanings: {
      0: "There is no human review plan.",
      1: "Human review is mentioned, but approval and escalation rules are vague.",
      2: "Human review is mostly defined, with minor gaps.",
      3: "Human review, approval, escalation, and exception handling are clearly defined.",
    },
  },
  customerExperienceImpact: {
    label: "Customer experience impact",
    description: "Whether the automation is likely to improve the customer experience without creating confusion or friction.",
    improvementTip:
      "Test customer-facing drafts, timing, tone, and escalation paths before automating external messages.",
    blockerPriority: 8,
    scoreMeanings: {
      0: "Automation could harm the customer experience or create confusion.",
      1: "Customer impact is uncertain and needs testing.",
      2: "Automation should help customers, but customer-facing outputs need review.",
      3: "Automation is likely to improve speed, clarity, or reliability for customers.",
    },
  },
  measurementPlan: {
    label: "Measurement plan",
    description: "Whether success metrics, baseline performance, and pilot review criteria are defined.",
    improvementTip:
      "Define baseline time, error rate, response time, cost, conversion rate, or customer satisfaction before the pilot.",
    blockerPriority: 9,
    scoreMeanings: {
      0: "No clear success metric exists.",
      1: "Success is loosely defined but not measurable.",
      2: "Metrics exist, but baseline or pilot review criteria need refinement.",
      3: "Metrics, baseline, and pilot success criteria are clear.",
    },
  },
  rollbackPlan: {
    label: "Rollback plan",
    description: "Whether the team knows how to pause, reverse, or safely disable the automation.",
    improvementTip:
      "Create a simple rollback plan: how to pause automation, who decides, what happens to in-flight items, and how work resumes manually.",
    blockerPriority: 6,
    scoreMeanings: {
      0: "No rollback or pause plan exists.",
      1: "Rollback is informal or unclear.",
      2: "Rollback is mostly understood, but needs documentation.",
      3: "Rollback steps, owner, and manual fallback are clearly defined.",
    },
  },
};

export const SCORE_LABELS: Record<ScoreValue, string> = {
  0: "Not ready",
  1: "Needs cleanup",
  2: "Mostly ready",
  3: "Ready for pilot",
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanOptionalString(value: unknown, fieldName: string): string | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value !== "string") {
    throw new ValidationError(`${fieldName} must be a string when provided.`);
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function cleanRequiredString(value: unknown, fieldName: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new ValidationError(`${fieldName} is required and must be a non-empty string.`);
  }

  return value.trim();
}

function parseScore(value: unknown, key: ReadinessCategoryKey): ScoreValue {
  if (!Number.isInteger(value) || (value as number) < 0 || (value as number) > 3) {
    throw new ValidationError(`scores.${key} must be an integer from 0 to 3.`, {
      category: key,
      received: value,
      validValues: [0, 1, 2, 3],
    });
  }

  return value as ScoreValue;
}

function validateCategoryNotes(value: unknown): Partial<Record<ReadinessCategoryKey, string>> | undefined {
  if (value === undefined || value === null) return undefined;

  if (!isPlainObject(value)) {
    throw new ValidationError("categoryNotes must be an object when provided.");
  }

  const cleaned: Partial<Record<ReadinessCategoryKey, string>> = {};

  for (const key of CATEGORY_KEYS) {
    const note = cleanOptionalString(value[key], `categoryNotes.${key}`);
    if (note) cleaned[key] = note;
  }

  return Object.keys(cleaned).length > 0 ? cleaned : undefined;
}

export function validateReadinessRequest(input: unknown): ReadinessScoreRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  const workflowName = cleanRequiredString(input.workflowName, "workflowName");
  const workflowDescription = cleanOptionalString(input.workflowDescription, "workflowDescription");
  const userGoal = cleanOptionalString(input.userGoal, "userGoal");
  const notes = cleanOptionalString(input.notes, "notes");
  const categoryNotes = validateCategoryNotes(input.categoryNotes);

  if (!isPlainObject(input.scores)) {
    throw new ValidationError("scores is required and must be an object.");
  }

  const scores = CATEGORY_KEYS.reduce((accumulator, key) => {
    accumulator[key] = parseScore(input.scores[key], key);
    return accumulator;
  }, {} as ReadinessScores);

  return {
    workflowName,
    workflowDescription,
    userGoal,
    scores,
    notes,
    categoryNotes,
  };
}

function getReadinessBand(totalScore: number): Pick<
  ReadinessScoreResponse,
  "readinessLevel" | "recommendationCategory" | "interpretation" | "recommendedAutomationMode" | "nextStep"
> {
  if (totalScore <= 10) {
    return {
      readinessLevel: "0-10: Do not automate yet",
      recommendationCategory: "Do not automate yet",
      recommendedAutomationMode: "Do not automate yet",
      interpretation:
        "This workflow is not ready for automation. It likely needs documentation, ownership, data cleanup, or safer human review before AI should be introduced.",
      nextStep:
        "Document the current workflow, assign an owner, clean up critical inputs, and rerun the score before designing automation.",
    };
  }

  if (totalScore <= 20) {
    return {
      readinessLevel: "11-20: Clean up first",
      recommendationCategory: "Clean up first",
      recommendedAutomationMode: "Process cleanup only",
      interpretation:
        "This workflow has automation potential, but the process should be cleaned up before launching an AI-assisted pilot.",
      nextStep:
        "Fix the lowest-scoring categories first, then test a narrow draft-only version with sample data.",
    };
  }

  if (totalScore <= 26) {
    return {
      readinessLevel: "21-26: Pilot carefully",
      recommendationCategory: "Pilot carefully",
      recommendedAutomationMode: "Limited pilot with human approval",
      interpretation:
        "This workflow is a reasonable candidate for a controlled pilot, but it still needs clear human review and monitoring.",
      nextStep:
        "Build a limited pilot with test data, approval checkpoints, exception handling, success metrics, and a rollback plan.",
    };
  }

  return {
    readinessLevel: "27-30: Ready for automation pilot",
    recommendationCategory: "Ready for automation pilot",
    recommendedAutomationMode: "Automation pilot with monitoring",
    interpretation:
      "This workflow appears ready for a limited automation pilot with monitoring, documented review rules, and clear rollback steps.",
    nextStep:
      "Launch a small pilot, monitor results against the baseline, review edge cases, and expand only after the pilot meets success criteria.",
  };
}

function buildRiskFlags(scores: ReadinessScores, totalScore: number): string[] {
  const flags: string[] = [];

  if (scores.riskLevel <= 1) {
    flags.push(
      "Risk level is low-scoring. Use draft-only mode or approval-first automation; do not allow fully autonomous action.",
    );
  }

  if (scores.humanReviewPlan <= 1) {
    flags.push(
      "Human review is weak or undefined. Define approval, escalation, and exception rules before piloting.",
    );
  }

  if (scores.dataQuality <= 1) {
    flags.push(
      "Data quality is a blocker. Clean or standardize required inputs before relying on AI-generated outputs.",
    );
  }

  if (scores.rollbackPlan <= 1) {
    flags.push(
      "Rollback plan is weak. Document how to pause the automation and return to the manual process.",
    );
  }

  if (totalScore < 21) {
    flags.push(
      "Overall readiness is below pilot level. Focus on process cleanup before implementing automation.",
    );
  }

  return flags;
}

function chooseBiggestBlocker(lowestScoringCategories: CategoryResult[]): string {
  const primary = [...lowestScoringCategories].sort(
    (a, b) => CATEGORY_META[a.key].blockerPriority - CATEGORY_META[b.key].blockerPriority,
  )[0];

  return `${primary.label}: ${primary.improvementTip}`;
}

export function scoreAutomationReadiness(input: ReadinessScoreRequest): ReadinessScoreResponse {
  const categoryResults: CategoryResult[] = CATEGORY_KEYS.map((key) => {
    const meta = CATEGORY_META[key];
    const score = input.scores[key];

    return {
      key,
      label: meta.label,
      score,
      scoreLabel: SCORE_LABELS[score],
      description: meta.description,
      interpretation: meta.scoreMeanings[score],
      improvementTip: meta.improvementTip,
      note: input.categoryNotes?.[key],
    };
  });

  const totalScore = categoryResults.reduce((sum, category) => sum + category.score, 0);
  const band = getReadinessBand(totalScore);
  const lowestScore = Math.min(...categoryResults.map((category) => category.score));
  const lowestScoringCategories = categoryResults.filter((category) => category.score === lowestScore);
  const riskFlags = buildRiskFlags(input.scores, totalScore);

  const humanReviewRequired =
    input.scores.riskLevel <= 2 ||
    input.scores.humanReviewPlan <= 2 ||
    input.scores.customerExperienceImpact <= 1 ||
    totalScore < 27;

  const assumptions = [
    "Scores use a 0-3 readiness scale where 0 means not ready and 3 means ready for pilot.",
    "For riskLevel, a higher score means lower risk and stronger suitability for a controlled pilot.",
    "This action does not make final business, legal, financial, HR, medical, tax, or compliance decisions.",
    "Sensitive or customer-facing workflows should keep a human approval step unless separately reviewed.",
  ];

  return {
    workflowName: input.workflowName,
    workflowDescription: input.workflowDescription,
    userGoal: input.userGoal,
    totalScore,
    maxScore: 30,
    ...band,
    biggestBlocker: chooseBiggestBlocker(lowestScoringCategories),
    lowestScoringCategories,
    categoryResults,
    humanReviewRequired,
    riskFlags,
    assumptions,
    notes: input.notes,
  };
}

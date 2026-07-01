export const READINESS_CATEGORIES = [
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
] as const;
export const READINESS_CATEGORY_LABELS: Record<
  (typeof READINESS_CATEGORIES)[number],
  string
> = {
  workflowClarity: "Workflow clarity",
  processConsistency: "Process consistency",
  dataQuality: "Data quality",
  toolAccess: "Tool access",
  ownership: "Ownership",
  riskLevel: "Risk level",
  humanReviewPlan: "Human review plan",
  customerExperienceImpact: "Customer experience impact",
  measurementPlan: "Measurement plan",
  rollbackPlan: "Rollback plan",
};
export const SCORE_SCALE = {
  min: 0,
  max: 3,
  meanings: {
    0: "Not ready",
    1: "Needs cleanup",
    2: "Mostly ready",
    3: "Ready for pilot",
  },
} as const;
export const READINESS_BANDS = [
  { min: 0, max: 10, level: "0-10", recommendation: "Do not automate yet" },
  { min: 11, max: 20, level: "11-20", recommendation: "Clean up first" },
  { min: 21, max: 26, level: "21-26", recommendation: "Pilot carefully" },
  {
    min: 27,
    max: 30,
    level: "27-30",
    recommendation: "Ready for automation pilot",
  },
] as const;
export const RECOMMENDATION_LABELS = [
  "Automate now",
  "Clean up first",
  "Keep human",
  "Revisit later",
] as const;
export const AUTOMATION_MODES = [
  "Manual process only",
  "Draft-only AI assist",
  "Human approval before action",
  "Exception review",
  "Limited pilot automation",
  "Ready for automation pilot",
] as const;
export function getReadinessBand(total: number) {
  if (total <= 10) return READINESS_BANDS[0];
  if (total <= 20) return READINESS_BANDS[1];
  if (total <= 26) return READINESS_BANDS[2];
  return READINESS_BANDS[3];
}

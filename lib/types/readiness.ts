import { READINESS_CATEGORIES } from "../constants/readiness-model";
import type { SensitivityFlags, RiskFlag, Assumption } from "./shared";
export type ReadinessCategoryKey = (typeof READINESS_CATEGORIES)[number];
export type ReadinessScores = Record<ReadinessCategoryKey, number>;
export interface ScoreReadinessRequest extends SensitivityFlags {
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
  score: number;
  scoreLabel: string;
  description: string;
  interpretation: string;
  improvementTip: string;
  note?: string;
}
export interface ReadinessResult {
  workflowName: string;
  workflowDescription?: string;
  userGoal?: string;
  totalScore: number;
  maxScore: 30;
  readinessLevel: string;
  recommendationCategory: string;
  interpretation: string;
  biggestBlocker: string;
  lowestScoringCategories: CategoryResult[];
  categoryResults: CategoryResult[];
  humanReviewRequired: boolean;
  recommendedAutomationMode: string;
  nextStep: string;
  riskFlags: RiskFlag[];
  assumptions: Assumption[];
  notes?: string;
}

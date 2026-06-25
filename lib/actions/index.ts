export * from "./public-holidays";
export * from "./weather";
export * from "./geocode";
export * from "./site-metadata";
export * from "./sitemap-reader";
export * from "./robots-check";

export * from "../automation-readiness";

export {
  DEFAULT_WEIGHTS,
  FACTOR_KEYS,
  FACTOR_META,
  ValidationError as OpportunityRankerValidationError,
  rankAutomationOpportunities,
  validateOpportunityRankerRequest,
} from "../automation-opportunity-ranker";

export type {
  FactorBreakdown,
  OpportunityFactorKey,
  OpportunityRankerRequest,
  OpportunityRankerResponse,
  OpportunityScores,
  RankedOpportunity,
  RecommendationCategory,
  RecommendedAutomationMode,
  ScoreValue as OpportunityScoreValue,
  WorkflowOpportunityInput,
} from "../automation-opportunity-ranker";

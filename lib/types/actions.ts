export * from "./shared";
export type ActionName =
  | "scoreAutomationReadiness"
  | "rankAutomationOpportunities"
  | "calculateAutomationROI"
  | "validateAutomationBlueprint"
  | "validateAgentBlueprint"
  | "generateWorkflowMap"
  | "buildPilotTestPlan"
  | "generateTestScenarios"
  | "classifyWorkflowRisk"
  | "suggestHumanReviewPattern"
  | "getPublicHolidays"
  | "getWeatherByLocation"
  | "geocodeLocation"
  | "extractWebsiteMetadata"
  | "analyzeSitemap"
  | "checkRobotsTxt"
  | "convertCurrencyEstimate"
  | "getLaborMarketSeries"
  | "lookupPublicationMetadata"
  | "generateActionSpecFromEndpoint";
export interface ActionMeta {
  name: ActionName;
  route: string;
  method: "GET" | "POST";
  summary: string;
  requiresPublicFetch?: boolean;
}

import { OpenApiDocument } from "../types/openapi";
import { getScoreAutomationReadinessPathItem } from "./builders/readiness.openapi";
import { getRankAutomationOpportunitiesPathItem } from "./builders/opportunity-ranker.openapi";
import { getCalculateAutomationRoiPathItem } from "./builders/automation-roi.openapi";
import { getValidateAutomationBlueprintPathItem } from "./builders/blueprint-validator.openapi";
import { getValidateAgentBlueprintPathItem } from "./builders/agent-validator.openapi";
import { getGenerateWorkflowMapPathItem } from "./builders/workflow-map.openapi";
import { getBuildPilotTestPlanPathItem } from "./builders/pilot-plan.openapi";
import { getGenerateTestScenariosPathItem } from "./builders/test-scenarios.openapi";
import { getClassifyWorkflowRiskPathItem } from "./builders/risk-classifier.openapi";
import { getSuggestHumanReviewPatternPathItem } from "./builders/human-review-pattern.openapi";
import { getGetPublicHolidaysPathItem } from "./builders/public-holidays.openapi";
import { getGetWeatherByLocationPathItem } from "./builders/weather.openapi";
import { getGeocodeLocationPathItem } from "./builders/geocode.openapi";
import { getExtractWebsiteMetadataPathItem } from "./builders/site-metadata.openapi";
import { getAnalyzeSitemapPathItem } from "./builders/sitemap-reader.openapi";
import { getCheckRobotsTxtPathItem } from "./builders/robots-check.openapi";

export function buildCombinedOpenApi(serverUrl: string = "https://YOUR-VERCEL-DOMAIN.vercel.app"): OpenApiDocument {
  const paths: Record<string, any> = {
    "/api/readiness-score": getScoreAutomationReadinessPathItem(),
    "/api/opportunity-ranker": getRankAutomationOpportunitiesPathItem(),
    "/api/automation-roi": getCalculateAutomationRoiPathItem(),
    "/api/blueprint-validator": getValidateAutomationBlueprintPathItem(),
    "/api/agent-validator": getValidateAgentBlueprintPathItem(),
    "/api/workflow-map": getGenerateWorkflowMapPathItem(),
    "/api/pilot-plan": getBuildPilotTestPlanPathItem(),
    "/api/test-scenarios": getGenerateTestScenariosPathItem(),
    "/api/risk-classifier": getClassifyWorkflowRiskPathItem(),
    "/api/human-review-pattern": getSuggestHumanReviewPatternPathItem(),
    "/api/public-holidays": getGetPublicHolidaysPathItem(),
    "/api/weather": getGetWeatherByLocationPathItem(),
    "/api/geocode": getGeocodeLocationPathItem(),
    "/api/site-metadata": getExtractWebsiteMetadataPathItem(),
    "/api/sitemap-reader": getAnalyzeSitemapPathItem(),
    "/api/robots-check": getCheckRobotsTxtPathItem(),
  };

  // Check for duplicate path keys
  const keys = Object.keys(paths);
  const uniqueKeys = new Set(keys);
  if (keys.length !== uniqueKeys.size) {
    throw new Error("Duplicate path keys found in combined OpenAPI document.");
  }

  return {
    openapi: "3.1.0",
    info: {
      title: "SMB AI Workflow Actions",
      version: "1.0.0",
      description: "A comprehensive suite of no-auth, stateless planning utilities for SMB AI Workflows.",
    },
    servers: [{ url: serverUrl }],
    paths,
  };
}

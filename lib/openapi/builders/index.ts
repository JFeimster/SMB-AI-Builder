// Note: Some of these OpenAPI builders describe route-level action packages
// and are not all backed by root `lib/actions/*` exports.

import { buildScoreAutomationReadinessOpenApi, getScoreAutomationReadinessPathItem } from "./readiness.openapi";
import { buildRankAutomationOpportunitiesOpenApi, getRankAutomationOpportunitiesPathItem } from "./opportunity-ranker.openapi";
import { buildCalculateAutomationRoiOpenApi, getCalculateAutomationRoiPathItem } from "./automation-roi.openapi";
import { buildValidateAutomationBlueprintOpenApi, getValidateAutomationBlueprintPathItem } from "./blueprint-validator.openapi";
import { buildValidateAgentBlueprintOpenApi, getValidateAgentBlueprintPathItem } from "./agent-validator.openapi";
import { buildGenerateWorkflowMapOpenApi, getGenerateWorkflowMapPathItem } from "./workflow-map.openapi";
import { buildBuildPilotTestPlanOpenApi, getBuildPilotTestPlanPathItem } from "./pilot-plan.openapi";
import { buildGenerateTestScenariosOpenApi, getGenerateTestScenariosPathItem } from "./test-scenarios.openapi";
import { buildClassifyWorkflowRiskOpenApi, getClassifyWorkflowRiskPathItem } from "./risk-classifier.openapi";
import { buildSuggestHumanReviewPatternOpenApi, getSuggestHumanReviewPatternPathItem } from "./human-review-pattern.openapi";
import { buildGetPublicHolidaysOpenApi, getGetPublicHolidaysPathItem } from "./public-holidays.openapi";
import { buildGetWeatherByLocationOpenApi, getGetWeatherByLocationPathItem } from "./weather.openapi";
import { buildGeocodeLocationOpenApi, getGeocodeLocationPathItem } from "./geocode.openapi";
import { buildExtractWebsiteMetadataOpenApi, getExtractWebsiteMetadataPathItem } from "./site-metadata.openapi";
import { buildAnalyzeSitemapOpenApi, getAnalyzeSitemapPathItem } from "./sitemap-reader.openapi";
import { buildCheckRobotsTxtOpenApi, getCheckRobotsTxtPathItem } from "./robots-check.openapi";

export const buildersRegistry = [
  {
    name: "scoreAutomationReadiness",
    route: "/api/readiness-score",
    build: buildScoreAutomationReadinessOpenApi,
    getPathItem: getScoreAutomationReadinessPathItem,
  },
  {
    name: "rankAutomationOpportunities",
    route: "/api/opportunity-ranker",
    build: buildRankAutomationOpportunitiesOpenApi,
    getPathItem: getRankAutomationOpportunitiesPathItem,
  },
  {
    name: "calculateAutomationROI",
    route: "/api/automation-roi",
    build: buildCalculateAutomationRoiOpenApi,
    getPathItem: getCalculateAutomationRoiPathItem,
  },
  {
    name: "validateAutomationBlueprint",
    route: "/api/blueprint-validator",
    build: buildValidateAutomationBlueprintOpenApi,
    getPathItem: getValidateAutomationBlueprintPathItem,
  },
  {
    name: "validateAgentBlueprint",
    route: "/api/agent-validator",
    build: buildValidateAgentBlueprintOpenApi,
    getPathItem: getValidateAgentBlueprintPathItem,
  },
  {
    name: "generateWorkflowMap",
    route: "/api/workflow-map",
    build: buildGenerateWorkflowMapOpenApi,
    getPathItem: getGenerateWorkflowMapPathItem,
  },
  {
    name: "buildPilotTestPlan",
    route: "/api/pilot-plan",
    build: buildBuildPilotTestPlanOpenApi,
    getPathItem: getBuildPilotTestPlanPathItem,
  },
  {
    name: "generateTestScenarios",
    route: "/api/test-scenarios",
    build: buildGenerateTestScenariosOpenApi,
    getPathItem: getGenerateTestScenariosPathItem,
  },
  {
    name: "classifyWorkflowRisk",
    route: "/api/risk-classifier",
    build: buildClassifyWorkflowRiskOpenApi,
    getPathItem: getClassifyWorkflowRiskPathItem,
  },
  {
    name: "suggestHumanReviewPattern",
    route: "/api/human-review-pattern",
    build: buildSuggestHumanReviewPatternOpenApi,
    getPathItem: getSuggestHumanReviewPatternPathItem,
  },
  {
    name: "getPublicHolidays",
    route: "/api/public-holidays",
    build: buildGetPublicHolidaysOpenApi,
    getPathItem: getGetPublicHolidaysPathItem,
  },
  {
    name: "getWeatherByLocation",
    route: "/api/weather",
    build: buildGetWeatherByLocationOpenApi,
    getPathItem: getGetWeatherByLocationPathItem,
  },
  {
    name: "geocodeLocation",
    route: "/api/geocode",
    build: buildGeocodeLocationOpenApi,
    getPathItem: getGeocodeLocationPathItem,
  },
  {
    name: "extractWebsiteMetadata",
    route: "/api/site-metadata",
    build: buildExtractWebsiteMetadataOpenApi,
    getPathItem: getExtractWebsiteMetadataPathItem,
  },
  {
    name: "analyzeSitemap",
    route: "/api/sitemap-reader",
    build: buildAnalyzeSitemapOpenApi,
    getPathItem: getAnalyzeSitemapPathItem,
  },
  {
    name: "checkRobotsTxt",
    route: "/api/robots-check",
    build: buildCheckRobotsTxtOpenApi,
    getPathItem: getCheckRobotsTxtPathItem,
  },
];

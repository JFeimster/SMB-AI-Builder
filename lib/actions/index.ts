export type ActionResult<T> = T; // Enforces the type signature externally

// Import and re-export with ActionResult wrapped types
import { scoreAutomationReadiness as internal_scoreAutomationReadiness, ReadinessScoreRequest, ReadinessScoreResponse } from "./automation-readiness";
import { rankAutomationOpportunities as internal_rankAutomationOpportunities, OpportunityRankerRequest, OpportunityRankerResponse } from "./automation-opportunity-ranker";
import { calculateAutomationROI as internal_calculateAutomationROI, AutomationRoiRequest, AutomationRoiResponse } from "./automation-roi";
import { validateAutomationBlueprint as internal_validateBlueprint, AutomationBlueprintRequest, AutomationBlueprintResponse } from "./blueprint-validator";
import { validateAgentBlueprint as internal_validateAgentBlueprint, AgentBlueprintRequest, AgentBlueprintResponse } from "./agent-validator";
import { generateWorkflowMap as internal_generateWorkflowMap, WorkflowMapRequest, WorkflowMapResponse } from "./workflow-map";
import { buildPilotTestPlan as internal_buildPilotTestPlan, PilotPlanRequest, PilotPlanResponse } from "./pilot-plan";
import { generateTestScenarios as internal_generateTestScenarios, TestScenarioRequest, TestScenarioResponse } from "./test-scenarios";
import { classifyWorkflowRisk as internal_classifyWorkflowRisk, RiskClassifierRequest, RiskClassifierResponse } from "./risk-classifier";
import { suggestHumanReviewPattern as internal_suggestHumanReviewPattern, ReviewPatternRequest, ReviewPatternResponse } from "./human-review-pattern";

export function scoreAutomationReadiness(req: ReadinessScoreRequest): ActionResult<ReadinessScoreResponse> { return internal_scoreAutomationReadiness(req); }
export function rankAutomationOpportunities(req: OpportunityRankerRequest): ActionResult<OpportunityRankerResponse> { return internal_rankAutomationOpportunities(req); }
export function calculateAutomationROI(req: AutomationRoiRequest): ActionResult<AutomationRoiResponse> { return internal_calculateAutomationROI(req); }
export function validateBlueprint(req: AutomationBlueprintRequest): ActionResult<AutomationBlueprintResponse> { return internal_validateBlueprint(req); }
export function validateAgentBlueprint(req: AgentBlueprintRequest): ActionResult<AgentBlueprintResponse> { return internal_validateAgentBlueprint(req); }
export function generateWorkflowMap(req: WorkflowMapRequest): ActionResult<WorkflowMapResponse> { return internal_generateWorkflowMap(req); }
export function buildPilotTestPlan(req: PilotPlanRequest): ActionResult<PilotPlanResponse> { return internal_buildPilotTestPlan(req); }
export function generateTestScenarios(req: TestScenarioRequest): ActionResult<TestScenarioResponse> { return internal_generateTestScenarios(req); }
export function classifyWorkflowRisk(req: RiskClassifierRequest): ActionResult<RiskClassifierResponse> { return internal_classifyWorkflowRisk(req); }
export function suggestHumanReviewPattern(req: ReviewPatternRequest): ActionResult<ReviewPatternResponse> { return internal_suggestHumanReviewPattern(req); }

// Re-export specific types safely without conflicts
export type { ReadinessScoreRequest, ReadinessScoreResponse, OpportunityRankerRequest, OpportunityRankerResponse, AutomationRoiRequest, AutomationRoiResponse, AutomationBlueprintRequest, AutomationBlueprintResponse, AgentBlueprintRequest, AgentBlueprintResponse, WorkflowMapRequest, WorkflowMapResponse, PilotPlanRequest, PilotPlanResponse, TestScenarioRequest, TestScenarioResponse, RiskClassifierRequest, RiskClassifierResponse, ReviewPatternRequest, ReviewPatternResponse };

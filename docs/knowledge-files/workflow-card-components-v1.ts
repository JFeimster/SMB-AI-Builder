// TypeScript Interfaces for UI Prototypes

export interface WorkflowAuditCard {
  id: string;
  workflowName: string;
  owner: string;
  currentStatus: string;
  painPoints: string[];
  riskLevel: 'Low' | 'Medium' | 'High';
  recommendation: RecommendedAutomationMode;
}

export interface ReadinessCategoryScore {
  category: string;
  score: 0 | 1 | 2 | 3;
  notes?: string;
}

export interface ReadinessScorecard {
  workflowId: string;
  scores: ReadinessCategoryScore[];
  totalScore: number;
  readinessLevel: string;
  biggestBlocker?: string;
}

export interface AutomationOpportunity {
  id: string;
  workflowName: string;
  frequency: string;
  timeSaved: string;
  businessImpact: string;
  risk: string;
  dataReadiness: string;
  toolReadiness: string;
  humanReview: string;
  automationFit: string;
  recommendation: RecommendedAutomationMode;
}

export interface AgentBlueprintCard {
  agentName: string;
  agentRole: string;
  targetUser: string;
  primaryJob: string;
  inputsNeeded: string[];
  outputsProduced: string[];
  guardrails: string[];
  humanHandoffRules: string;
}

export interface TestScenario {
  id: string;
  title: string;
  workflowType: string;
  riskLevel: string;
  userInput: string;
  expectedBehavior: string;
  shouldHandoff: boolean;
}

export interface PilotPlanCard {
  pilotScope: string;
  successMetrics: string[];
  failureCriteria: string[];
  humanReviewRules: string;
}

export type RecommendedAutomationMode =
  | 'Automate now'
  | 'Clean up first'
  | 'Keep human'
  | 'Revisit later';

export interface HumanReviewPoint {
  step: string;
  reviewerRole: string;
  actionRequired: 'Approve' | 'Edit Draft' | 'Exception Handling';
}

export interface RiskFlag {
  type: 'Financial' | 'Legal' | 'Customer-facing' | 'Data Privacy';
  description: string;
}

// Sample Data

export const SAMPLE_LEAD_FOLLOWUP_AUDIT: WorkflowAuditCard = {
  id: 'wf-001',
  workflowName: 'Lead Follow-up',
  owner: 'Sales Team',
  currentStatus: 'Manual email sent hours after inquiry.',
  painPoints: ['Slow response', 'Lost leads', 'Repetitive typing'],
  riskLevel: 'Medium',
  recommendation: 'Automate now'
};

export const SAMPLE_CLIENT_ONBOARDING_AUDIT: WorkflowAuditCard = {
  id: 'wf-002',
  workflowName: 'Client Onboarding',
  owner: 'Account Manager',
  currentStatus: 'Manual creation of folders and sending intake forms.',
  painPoints: ['Inconsistent welcome experience', 'Forgotten steps'],
  riskLevel: 'Low',
  recommendation: 'Automate now'
};

export const SAMPLE_DOC_COLLECTION_AUDIT: WorkflowAuditCard = {
  id: 'wf-003',
  workflowName: 'Tax Document Collection',
  owner: 'Accounting',
  currentStatus: 'Emailing clients to ask for W2s repeatedly.',
  painPoints: ['Clients ignore emails', 'Files sent insecurely'],
  riskLevel: 'High',
  recommendation: 'Clean up first'
};

export interface AutomationOpportunityTable {
  opportunities: AutomationOpportunity[];
  topRecommendations: string[];
}

export interface RiskClassifierRequest {
  workflowName: string;
  description?: string;
  touchesLegalComplianceHRMedicalOrFinance?: boolean;
  touchesMoney?: boolean;
  touchesCustomers?: boolean;
  touchesSensitiveData?: boolean;
  makesLicensedJudgment?: boolean;
}

export interface RiskClassifierResponse {
  workflowName: string;
  riskLevel: "low" | "medium" | "high";
  riskFactors: string[];
  recommendedAutomationMode: string;
  saferWorkflowPattern: string;
  notRecommendedActions: string[];
  assumptions: string[];
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export function classifyWorkflowRisk(input: RiskClassifierRequest): RiskClassifierResponse {
  if (!input || !input.workflowName) throw new ValidationError("workflowName is required");

  let riskLevel: "low" | "medium" | "high" = "low";
  const riskFactors: string[] = [];
  const notRecommendedActions: string[] = [];

  const hasHighRiskLegalOrFinancial = input.touchesLegalComplianceHRMedicalOrFinance || input.makesLicensedJudgment;
  const isHighRiskMoney = input.touchesMoney && (input.touchesCustomers || input.touchesSensitiveData);

  if (hasHighRiskLegalOrFinancial) {
    riskLevel = "high";
    riskFactors.push("Touches highly regulated areas (Legal/HR/Medical/Compliance/Tax/Finance) or requires licensed professional judgment.");
    notRecommendedActions.push("Do not allow fully autonomous final decisions.");
    notRecommendedActions.push("Do not provide actual legal, financial, or medical advice.");
  } else if (input.touchesMoney) {
    riskLevel = "medium";
    riskFactors.push("Handles financial transactions or calculations.");
  }

  if (isHighRiskMoney) {
    riskLevel = "high";
    riskFactors.push("Handles money while also interacting with customers or sensitive data.");
    notRecommendedActions.push("Do not trigger unverified financial transfers.");
  }

  if (input.touchesCustomers && riskLevel === "low") {
    riskFactors.push("Customer-facing, which carries brand and reputation risk.");
    notRecommendedActions.push("Do not allow unreviewed outward communication until thoroughly tested.");
  }

  if (input.touchesSensitiveData) {
    if (riskLevel === "low") riskLevel = "medium";
    riskFactors.push("Processes sensitive data or PII.");
    notRecommendedActions.push("Do not store or log sensitive data in insecure prompts or outputs.");
  }

  let recommendedAutomationMode = "Limited pilot with human approval";
  let saferWorkflowPattern = "Draft -> Review -> Send";

  if (riskLevel === "high") {
    recommendedAutomationMode = "Draft-only AI assistance";
    saferWorkflowPattern = "Internal summarization or draft generation only, requiring strict human expert review before any action.";
  } else if (riskLevel === "medium") {
    recommendedAutomationMode = "Human approval before action";
    saferWorkflowPattern = "AI proposes action -> Human reviews and clicks 'Approve' -> Action executes.";
  }

  if (riskLevel === "low" && riskFactors.length === 0) {
    riskFactors.push("No obvious high-risk factors detected based on input.");
  }

  return { workflowName: input.workflowName, riskLevel, riskFactors, recommendedAutomationMode, saferWorkflowPattern, notRecommendedActions, assumptions: ["Risk classification is an estimation tool and does not constitute compliance or legal clearance.", "Any workflow touching money, HR, medical, or legal data inherently carries compliance risk."] };
}

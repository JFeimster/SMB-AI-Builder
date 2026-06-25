export interface ReviewPatternRequest {
  workflowName: string;
  riskLevel: "low" | "medium" | "high";
  customerFacing: boolean;
  failureImpact: "low" | "medium" | "high";
  touchesSensitiveData: boolean;
}

export interface ReviewPatternResponse {
  workflowName: string;
  recommendedPattern: string;
  humanReviewPoints: string[];
  draftOnlyReason?: string;
  assumptions: string[];
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export function suggestHumanReviewPattern(input: ReviewPatternRequest): ReviewPatternResponse {
  if (!input || !input.workflowName) throw new ValidationError("workflowName is required");

  let recommendedPattern = "Keep human-led; use AI only for drafts or summaries";
  const humanReviewPoints: string[] = [];
  let draftOnlyReason: string | undefined = undefined;

  const isHighlySensitive = input.riskLevel === "high" || input.failureImpact === "high";

  if (isHighlySensitive) {
    recommendedPattern = "Draft-only AI assistance";
    draftOnlyReason = "Workflow is classified as high risk or high failure impact. Never remove human review from sensitive workflows.";
    humanReviewPoints.push("Review all AI-generated drafts for factual accuracy and compliance.");
    humanReviewPoints.push("Explicit human decision required before taking any final action or sending communications.");
  } else if (input.customerFacing || input.touchesSensitiveData || input.riskLevel === "medium") {
    recommendedPattern = "Limited automation pilot with human approval";
    humanReviewPoints.push("Human must review and click 'Approve' before AI executes the action.");
    if (input.customerFacing) {
      humanReviewPoints.push("Review tone, clarity, and brand alignment on all external messages.");
    }
    if (input.touchesSensitiveData) {
      humanReviewPoints.push("Verify sensitive data was handled, redacted, or utilized securely according to policy.");
    }
  } else {
    recommendedPattern = "Limited automation pilot with human approval";
    humanReviewPoints.push("Monitor output batches periodically to ensure the AI hasn't drifted or hallucinated.");
    humanReviewPoints.push("Maintain a simple rollback trigger to pause the workflow if unexpected behavior occurs.");
  }

  return { workflowName: input.workflowName, recommendedPattern, humanReviewPoints, draftOnlyReason, assumptions: ["We strictly follow a safety-first approach; autonomous execution without human review is never recommended for sensitive data or high-risk outcomes.", "Human review patterns map directly to the defined automation modes."] };
}

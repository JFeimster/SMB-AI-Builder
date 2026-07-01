/**
 * Common types shared across various actions.
 */

/**
 * Indicates the evaluated risk level of an action or workflow.
 */
export type RiskLevel = "low" | "medium" | "high";

/**
 * Standard frequency periods for recurring tasks or workflows.
 */
export type FrequencyPeriod = "day" | "week" | "month" | "quarter" | "year";

/**
 * Booleans indicating potentially sensitive scopes that trigger additional safety, review, or human-in-the-loop requirements.
 */
export interface SensitivityFlags {
  touchesCustomers?: boolean;
  touchesMoney?: boolean;
  touchesSensitiveData?: boolean;
  touchesLegal?: boolean;
  touchesHR?: boolean;
  touchesMedical?: boolean;
  touchesCompliance?: boolean;
  touchesTaxAccountingOrFinance?: boolean;
  touchesLendingCreditOrUnderwriting?: boolean;
  requiresLicensedJudgment?: boolean;
}

/**
 * Structured error details for validation or processing issues.
 */
export interface ActionError {
  code: string;
  message: string;
  field?: string;
}

/**
 * Union type representing either a successful response payload or an array of structural errors.
 */
export type ActionResult<T> =
  | { ok: true; data: T }
  | { ok: false; errors: ActionError[] };

/**
 * String alias used for describing conditions or bounds assumed during an evaluation.
 */
export type Assumption = string;

/**
 * String alias for warning descriptions that indicate an explicit risk boundary condition.
 */
export type RiskFlag = string;

/**
 * String alias for warnings, slightly less severe than RiskFlags.
 */
export type Warning = string;

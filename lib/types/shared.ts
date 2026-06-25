export type RiskLevel = "low" | "medium" | "high";
export type FrequencyPeriod = "day" | "week" | "month" | "quarter" | "year";
export interface SensitivityFlags { touchesCustomers?: boolean; touchesMoney?: boolean; touchesSensitiveData?: boolean; touchesLegal?: boolean; touchesHR?: boolean; touchesMedical?: boolean; touchesCompliance?: boolean; touchesTaxAccountingOrFinance?: boolean; touchesLendingCreditOrUnderwriting?: boolean; requiresLicensedJudgment?: boolean; }
export interface ActionError { code: string; message: string; field?: string; }
export type ActionResult<T> = { ok: true; data: T } | { ok: false; errors: ActionError[] };
export type Assumption = string;
export type RiskFlag = string;
export type Warning = string;

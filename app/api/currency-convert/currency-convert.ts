export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface ConvertCurrencyEstimateRequest {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  date?: string;
}

export interface ConvertCurrencyEstimateResponse {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  convertedAmount: number | null;
  exchangeRate: number | null;
  rateDate: string;
  sourceNote: string;
  disclaimer: string;
  warnings: string[];
  assumptions: string[];
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateConvertCurrencyEstimateRequest(input: unknown): ConvertCurrencyEstimateRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  if (input.amount === undefined || input.amount === null) {
    throw new ValidationError("amount is required.");
  }

  if (typeof input.amount !== "number") {
      throw new ValidationError("amount must be a number.");
  }

  if (input.fromCurrency === undefined || input.fromCurrency === null || input.fromCurrency === "") {
    throw new ValidationError("fromCurrency is required.");
  }

  if (typeof input.fromCurrency !== "string") {
      throw new ValidationError("fromCurrency must be a string.");
  }

  if (input.toCurrency === undefined || input.toCurrency === null || input.toCurrency === "") {
    throw new ValidationError("toCurrency is required.");
  }

  if (typeof input.toCurrency !== "string") {
      throw new ValidationError("toCurrency must be a string.");
  }

  return {
      amount: input.amount,
      fromCurrency: input.fromCurrency.toUpperCase(),
      toCurrency: input.toCurrency.toUpperCase(),
      date: typeof input.date === "string" ? input.date : undefined,
  };
}

export async function convertCurrencyEstimate(input: ConvertCurrencyEstimateRequest): Promise<ConvertCurrencyEstimateResponse> {
  const warnings: string[] = [];
  let convertedAmount: number | null = null;
  let exchangeRate: number | null = null;
  let rateDate = input.date || new Date().toISOString().split('T')[0];

  try {
    const endpoint = input.date ? input.date : "latest";
    const url = `https://api.frankfurter.app/${endpoint}?amount=${input.amount}&from=${input.fromCurrency}&to=${input.toCurrency}`;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 5000);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);

    if (response.ok) {
      const data = await response.json();
      exchangeRate = data.rates[input.toCurrency] / input.amount;
      convertedAmount = data.rates[input.toCurrency];
      rateDate = data.date;
    } else {
      warnings.push(`Failed to fetch currency conversion: ${response.status}`);
    }
  } catch (err: any) {
    warnings.push(`Error fetching currency conversion: ${err.message}`);
  }

  return {
    amount: input.amount,
    fromCurrency: input.fromCurrency,
    toCurrency: input.toCurrency,
    convertedAmount,
    exchangeRate,
    rateDate,
    sourceNote: "Frankfurter API",
    disclaimer: "Rates are estimates and may be delayed. Do not use for real-time trading.",
    warnings,
    assumptions: ["Standard 3-letter currency codes used."]
  };
}

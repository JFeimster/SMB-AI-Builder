export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function cleanRequiredString(value: unknown, fieldName: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new ValidationError(`${fieldName} is required and must be a non-empty string.`);
  }
  return value.trim();
}

export function cleanOptionalString(value: unknown, fieldName: string): string | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value !== "string") {
    throw new ValidationError(`${fieldName} must be a string when provided.`);
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function parseStringArray(value: unknown, fieldName: string, required = false): string[] {
    if (required && !Array.isArray(value)) {
        throw new ValidationError(`${fieldName} is required and must be an array of strings.`);
    }
    if (!required && value === undefined) {
        return [];
    }
    if (!Array.isArray(value)) {
        throw new ValidationError(`${fieldName} must be an array of strings.`);
    }
    const arr = value.filter((v: unknown) => typeof v === 'string' && v.trim() !== "").map((v: string) => v.trim());
    if (required && arr.length === 0) {
        throw new ValidationError(`${fieldName} must contain at least one valid string.`);
    }
    return arr;
}

export function parseBoolean(value: unknown, fieldName: string): boolean {
  if (value === undefined || value === null) return false;
  if (typeof value !== "boolean") {
    throw new ValidationError(`${fieldName} must be a boolean when provided.`);
  }
  return value;
}

export function parseNonNegativeNumber(value: unknown, fieldName: string): number {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    throw new ValidationError(`${fieldName} must be a finite non-negative number.`);
  }
  return value;
}

export function parseOptionalNonNegativeNumber(value: unknown, fieldName: string): number | undefined {
  if (value === undefined || value === null) return undefined;
  return parseNonNegativeNumber(value, fieldName);
}

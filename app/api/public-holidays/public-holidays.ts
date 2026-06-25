export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface GetPublicHolidaysRequest {
  countryCode: string;
  year: number;
  region?: string;
}

export interface GetPublicHolidaysResponse {
  countryCode: string;
  year: number;
  holidays: Record<string, unknown>[];
  businessDayWarnings: string[];
  sourceNote: string;
  warnings: string[];
  assumptions: string[];
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateGetPublicHolidaysRequest(input: unknown): GetPublicHolidaysRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  if (input.countryCode === undefined || input.countryCode === null || input.countryCode === "") {
    throw new ValidationError("countryCode is required.");
  }

  if (typeof input.countryCode !== "string") {
      throw new ValidationError("countryCode must be a string.");
  }

  if (input.countryCode.length > 3) {
      throw new ValidationError("countryCode should be a 2 or 3 letter ISO code.");
  }

  if (input.year === undefined || input.year === null) {
      throw new ValidationError("year is required.");
  }

  if (typeof input.year !== "number" || !Number.isInteger(input.year)) {
      throw new ValidationError("year must be an integer.");
  }

  return {
      countryCode: input.countryCode,
      year: input.year,
      region: typeof input.region === "string" ? input.region : undefined,
  };
}

export async function getPublicHolidays(input: GetPublicHolidaysRequest): Promise<GetPublicHolidaysResponse> {
  const warnings: string[] = [];
  const holidays: Record<string, unknown>[] = [];
  const businessDayWarnings: string[] = [];

  try {
    const url = `https://date.nager.at/api/v3/PublicHolidays/${input.year}/${input.countryCode}`;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 5000);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);

    if (response.ok) {
      const data = await response.json();
      for (const h of data) {
        if (!input.region || !h.counties || h.counties.includes(input.region)) {
            holidays.push({
              date: h.date,
              localName: h.localName,
              name: h.name,
              global: h.global
            });
            businessDayWarnings.push(`${h.name} on ${h.date} may impact SLAs.`);
        }
      }
    } else {
      warnings.push(`Failed to fetch holidays: ${response.status}`);
    }
  } catch (err: any) {
    warnings.push(`Error fetching holidays: ${err.message}`);
  }

  return {
    countryCode: input.countryCode,
    year: input.year,
    holidays,
    businessDayWarnings,
    sourceNote: "Nager.Date API",
    warnings,
    assumptions: ["Standard public holidays for country level.", "Do not guarantee local legal compliance."]
  };
}

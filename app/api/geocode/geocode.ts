export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface GeocodeLocationRequest {
  query: string;
  count?: number;
  language?: string;
  countryCode?: string;
}

export interface GeocodeLocationResponse {
  query: string;
  matches: Record<string, unknown>[];
  bestMatch: Record<string, unknown> | null;
  sourceNote: string;
  warnings: string[];
  assumptions: string[];
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateGeocodeLocationRequest(input: unknown): GeocodeLocationRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  if (input.query === undefined || input.query === null || input.query === "") {
    throw new ValidationError("query is required.");
  }

  if (typeof input.query !== "string") {
      throw new ValidationError("query must be a string.");
  }

  return {
      query: input.query,
      count: typeof input.count === "number" ? input.count : undefined,
      language: typeof input.language === "string" ? input.language : undefined,
      countryCode: typeof input.countryCode === "string" ? input.countryCode : undefined,
  };
}

export async function geocodeLocation(input: GeocodeLocationRequest): Promise<GeocodeLocationResponse> {
  const warnings: string[] = [];
  const matches: Record<string, unknown>[] = [];
  let bestMatch: Record<string, unknown> | null = null;

  try {
    const count = input.count || 5;
    const lang = input.language || "en";
    let url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(input.query)}&count=${count}&language=${lang}`;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 5000);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);

    if (response.ok) {
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        for (const r of data.results) {
          if (!input.countryCode || r.country_code?.toLowerCase() === input.countryCode.toLowerCase()) {
            matches.push({
              name: r.name,
              latitude: r.latitude,
              longitude: r.longitude,
              country: r.country,
              admin1: r.admin1,
              timezone: r.timezone
            });
          }
        }
        if (matches.length > 0) bestMatch = matches[0];
      } else {
        warnings.push("No results found for query.");
      }
    } else {
      warnings.push(`Failed to fetch geocoding: ${response.status}`);
    }
  } catch (err: any) {
    warnings.push(`Error fetching geocoding: ${err.message}`);
  }

  return {
    query: input.query,
    matches,
    bestMatch,
    sourceNote: "Open-Meteo Geocoding API",
    warnings,
    assumptions: ["Query is public place/city, not private address."]
  };
}

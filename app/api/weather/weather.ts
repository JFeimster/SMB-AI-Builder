export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface GetWeatherByLocationRequest {
  latitude?: number;
  longitude?: number;
  locationName?: string;
  startDate?: string;
  endDate?: string;
  timezone?: string;
}

export interface GetWeatherByLocationResponse {
  location: string;
  forecastSummary: string;
  dailyForecast: Record<string, unknown>[];
  operationalImpactFlags: string[];
  sourceNote: string;
  warnings: string[];
  assumptions: string[];
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateGetWeatherByLocationRequest(input: unknown): GetWeatherByLocationRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  const req: GetWeatherByLocationRequest = {};

  if (input.latitude !== undefined && input.latitude !== null) {
      if (typeof input.latitude !== "number") throw new ValidationError("latitude must be a number.");
      req.latitude = input.latitude;
  }

  if (input.longitude !== undefined && input.longitude !== null) {
      if (typeof input.longitude !== "number") throw new ValidationError("longitude must be a number.");
      req.longitude = input.longitude;
  }

  if (input.locationName !== undefined && input.locationName !== null) {
      if (typeof input.locationName !== "string") throw new ValidationError("locationName must be a string.");
      req.locationName = input.locationName;
  }

  if (req.latitude === undefined || req.longitude === undefined) {
      throw new ValidationError("latitude and longitude are required. If you only have a name, use geocodeLocation first.");
  }

  if (input.startDate !== undefined && input.startDate !== null) {
      if (typeof input.startDate !== "string") throw new ValidationError("startDate must be a string.");
      req.startDate = input.startDate;
  }

  if (input.endDate !== undefined && input.endDate !== null) {
      if (typeof input.endDate !== "string") throw new ValidationError("endDate must be a string.");
      req.endDate = input.endDate;
  }

  if (input.timezone !== undefined && input.timezone !== null) {
      if (typeof input.timezone !== "string") throw new ValidationError("timezone must be a string.");
      req.timezone = input.timezone;
  }

  return req;
}

export async function getWeatherByLocation(input: GetWeatherByLocationRequest): Promise<GetWeatherByLocationResponse> {
  const warnings: string[] = [];
  const dailyForecast: Record<string, unknown>[] = [];
  let forecastSummary = "No forecast data available.";
  let impactFlags: string[] = [];

  const tz = input.timezone || "auto";
  const start = input.startDate || new Date().toISOString().split("T")[0];
  const end = input.endDate || new Date(Date.now() + 6 * 24 * 3600 * 1000).toISOString().split("T")[0];

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${input.latitude}&longitude=${input.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=${tz}&start_date=${start}&end_date=${end}`;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 5000);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);

    if (response.ok) {
      const data = await response.json();
      if (data.daily) {
        forecastSummary = "Forecast fetched successfully.";
        const times = data.daily.time;
        for (let i = 0; i < times.length; i++) {
          const maxT = data.daily.temperature_2m_max[i];
          const minT = data.daily.temperature_2m_min[i];
          const precip = data.daily.precipitation_sum[i];

          dailyForecast.push({
            date: times[i],
            maxTemp: maxT,
            minTemp: minT,
            precipitation: precip
          });

          if (precip > 10) impactFlags.push(`Heavy rain expected on ${times[i]}.`);
          if (maxT > 35) impactFlags.push(`Extreme heat expected on ${times[i]}.`);
          if (minT < 0) impactFlags.push(`Freezing temps expected on ${times[i]}.`);
        }
      }
    } else {
      warnings.push(`Failed to fetch weather: ${response.status}`);
    }
  } catch (err: any) {
    warnings.push(`Error fetching weather: ${err.message}`);
  }

  return {
    location: input.locationName || `${input.latitude}, ${input.longitude}`,
    forecastSummary,
    dailyForecast,
    operationalImpactFlags: impactFlags.length > 0 ? impactFlags : ["Clear weather generally."],
    sourceNote: "Open-Meteo API",
    warnings,
    assumptions: ["Timezone defaults to auto.", "Do not guarantee weather accuracy."]
  };
}

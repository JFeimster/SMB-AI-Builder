export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface GetLaborMarketSeriesRequest {
  seriesId: string;
  startYear: number;
  endYear: number;
}

export interface GetLaborMarketSeriesResponse {
  seriesId: string;
  startYear: number;
  endYear: number;
  values: Record<string, unknown>[];
  latestValue: number | null;
  trendSummary: string;
  sourceNote: string;
  warnings: string[];
  assumptions: string[];
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateGetLaborMarketSeriesRequest(input: unknown): GetLaborMarketSeriesRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  if (input.seriesId === undefined || input.seriesId === null || input.seriesId === "") {
    throw new ValidationError("seriesId is required.");
  }

  if (typeof input.seriesId !== "string") {
      throw new ValidationError("seriesId must be a string.");
  }

  if (input.startYear === undefined || input.startYear === null) {
    throw new ValidationError("startYear is required.");
  }

  if (typeof input.startYear !== "number" || !Number.isInteger(input.startYear)) {
      throw new ValidationError("startYear must be an integer.");
  }

  if (input.endYear === undefined || input.endYear === null) {
    throw new ValidationError("endYear is required.");
  }

  if (typeof input.endYear !== "number" || !Number.isInteger(input.endYear)) {
      throw new ValidationError("endYear must be an integer.");
  }

  if (input.endYear < input.startYear) {
      throw new ValidationError("endYear cannot be before startYear.");
  }

  return {
      seriesId: input.seriesId,
      startYear: input.startYear,
      endYear: input.endYear,
  };
}

export async function getLaborMarketSeries(input: GetLaborMarketSeriesRequest): Promise<GetLaborMarketSeriesResponse> {
  const warnings: string[] = [];
  let values: Record<string, unknown>[] = [];
  let latestValue: number | null = null;
  let trendSummary = "No data to calculate trend.";

  try {
    const url = "https://api.bls.gov/publicAPI/v1/timeseries/data/";

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 8000);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        seriesid: [input.seriesId],
        startyear: input.startYear.toString(),
        endyear: input.endYear.toString()
      }),
      signal: controller.signal
    });
    clearTimeout(id);

    if (response.ok) {
      const data = await response.json();
      if (data.status === "REQUEST_SUCCEEDED" && data.Results && data.Results.series && data.Results.series.length > 0) {
        const seriesData = data.Results.series[0].data;
        values = seriesData;
        if (values.length > 0) {
          latestValue = parseFloat((values[0] as any).value);
          trendSummary = `Latest value in ${(values[0] as any).year} ${(values[0] as any).period} is ${latestValue}`;
        }
      } else {
        warnings.push(`BLS API Error or no data: ${data.message ? data.message.join(', ') : 'Unknown error'}`);
      }
    } else {
      warnings.push(`Failed to fetch BLS data: ${response.status}`);
    }
  } catch (err: any) {
    warnings.push(`Error fetching BLS data: ${err.message}`);
  }

  return {
    seriesId: input.seriesId,
    startYear: input.startYear,
    endYear: input.endYear,
    values,
    latestValue,
    trendSummary,
    sourceNote: "BLS Public API v1",
    warnings,
    assumptions: ["Max 10 years per request limit typically applies.", "Do not provide investment, employment, legal, or compliance advice."]
  };
}

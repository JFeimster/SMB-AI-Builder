import { ActionResult, GeocodeResponse, GeocodeLocation } from "../types/actions";
import { safeFetchJson } from "./_fetch";

export async function geocodeLocation(name: string, count: number = 5): Promise<ActionResult<GeocodeResponse>> {
  if (!name || typeof name !== "string") {
    return {
      success: false,
      error: "Location name is required.",
    };
  }

  try {
    const encodedName = encodeURIComponent(name);
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodedName}&count=${count}&language=en&format=json`;

    interface OpenMeteoGeocodingResponse {
      results?: GeocodeLocation[];
    }

    const rawResponse = await safeFetchJson<OpenMeteoGeocodingResponse>(url);

    if (!rawResponse || !rawResponse.results || rawResponse.results.length === 0) {
      return {
        success: false,
        error: `No matching locations found for '${name}'.`,
      };
    }

    const results = rawResponse.results;

    return {
      success: true,
      data: {
        results,
        bestMatch: results[0], // The first result is typically the best match based on population/relevance
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to geocode location.",
      sourceNote: "Data provided by Open-Meteo Geocoding API. This is an estimate.",
    };
  }
}

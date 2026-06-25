import { ActionResult, WeatherResponse } from "../types/actions";
import { safeFetchJson } from "./_fetch";

export async function getWeatherByLocation(latitude: number, longitude: number): Promise<ActionResult<WeatherResponse>> {
  if (typeof latitude !== "number" || typeof longitude !== "number") {
    return {
      success: false,
      error: "Latitude and longitude are required. If you only have an address or city name, run geocodeLocation first.",
    };
  }

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    // Type definition for open-meteo response
    interface OpenMeteoResponse {
      latitude: number;
      longitude: number;
      current_weather: {
        temperature: number;
        windspeed: number;
        winddirection: number;
        weathercode: number;
        is_day: number;
        time: string;
      };
    }

    const rawResponse = await safeFetchJson<OpenMeteoResponse>(url);

    if (!rawResponse || !rawResponse.current_weather) {
      throw new Error("Invalid response from weather API.");
    }

    const current = rawResponse.current_weather;
    const flags: string[] = [];

    // Simple operational impact flags based on WMO weather codes and wind speed
    if (current.windspeed > 40) {
      flags.push("High winds detected. May impact outdoor operations or drone flights.");
    }

    // WMO Weather interpretation codes
    if ([71, 73, 75, 77, 85, 86].includes(current.weathercode)) {
      flags.push("Snow detected. May impact logistics and field service.");
    } else if ([95, 96, 99].includes(current.weathercode)) {
      flags.push("Thunderstorm detected. Severe operational impact likely.");
    } else if ([61, 63, 65, 66, 67, 80, 81, 82].includes(current.weathercode)) {
      flags.push("Rain detected. May impact outdoor work.");
    }

    const data: WeatherResponse = {
      latitude: rawResponse.latitude,
      longitude: rawResponse.longitude,
      ...current,
      operationalImpactFlags: flags.length > 0 ? flags : undefined,
    };

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch weather data.",
      sourceNote: "Data provided by Open-Meteo. This is an estimate, sensitive decisions require human review.",
    };
  }
}

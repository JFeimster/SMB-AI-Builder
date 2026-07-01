import { ActionResult, PublicHolidaysResponse, PublicHoliday } from "../types/actions";
import { safeFetchJson } from "./_fetch";

export async function getPublicHolidays(countryCode: string, year: number): Promise<ActionResult<PublicHolidaysResponse>> {
  if (!countryCode || countryCode.length !== 2) {
    return {
      success: false,
      error: "Valid 2-letter ISO 3166-1 alpha-2 country code is required.",
    };
  }

  if (!year || year < 1900 || year > 2100) {
    return {
      success: false,
      error: "Valid year is required (between 1900 and 2100).",
    };
  }

  try {
    const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode.toUpperCase()}`;
    const holidays = await safeFetchJson<PublicHoliday[]>(url);

    const warnings: string[] = [];
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    if (year === currentYear) {
      const upcoming = holidays.filter(h => new Date(h.date) >= today);
      if (upcoming.length > 0) {
        warnings.push(`There are ${upcoming.length} upcoming holidays this year.`);
      }
    }

    return {
      success: true,
      data: {
        holidays,
        businessDayWarnings: warnings.length > 0 ? warnings : undefined,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch public holidays.",
      sourceNote: "Data provided by Nager.Date. This is an estimate, sensitive decisions require human review.",
    };
  }
}

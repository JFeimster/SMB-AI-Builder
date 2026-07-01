<<<<<<< HEAD
// Shared types are re-exported through the index barrel now.
export type ActionResult<T> = T;
=======
export interface ActionResult<T> {
  success: boolean;
  data?: T;
  error?: string;
  sourceNote?: string;
}

export interface PublicHoliday {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties?: string[];
  launchYear?: number;
  types: string[];
}

export interface PublicHolidaysResponse {
  holidays: PublicHoliday[];
  businessDayWarnings?: string[];
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  is_day: number;
  time: string;
  operationalImpactFlags?: string[];
}

export interface GeocodeLocation {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation?: number;
  feature_code?: string;
  country_code?: string;
  admin1_id?: number;
  admin2_id?: number;
  timezone: string;
  population?: number;
  country?: string;
  admin1?: string;
  admin2?: string;
}

export interface GeocodeResponse {
  results: GeocodeLocation[];
  bestMatch?: GeocodeLocation;
}

export interface SiteMetadataResponse {
  title?: string;
  metaDescription?: string;
  headings: {
    h1: string[];
    h2: string[];
  };
  formsDetected: number;
  ctaText: string[];
  contactLinks: string[];
  socialLinks: string[];
}

export interface SitemapAnalysisResponse {
  totalUrls: number;
  analyzedUrls: number;
  likelyPageTypes: Record<string, number>;
  urls: string[];
}

export interface RobotsCheckResponse {
  isAllowed: boolean;
  disallowedPaths: string[];
  sitemapLinks: string[];
}
>>>>>>> origin/main

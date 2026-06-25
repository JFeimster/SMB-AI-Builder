export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface LookupPublicationMetadataRequest {
  doi?: string;
  query?: string;
  title?: string;
  author?: string;
  rows?: number;
}

export interface LookupPublicationMetadataResponse {
  query: string;
  matches: Record<string, unknown>[];
  bestMatch: Record<string, unknown> | null;
  title: string | null;
  authors: string[] | null;
  publicationDate: string | null;
  doi: string | null;
  publisher: string | null;
  sourceUrl: string | null;
  sourceNote: string;
  warnings: string[];
  assumptions: string[];
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateLookupPublicationMetadataRequest(input: unknown): LookupPublicationMetadataRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  const req: LookupPublicationMetadataRequest = {};

  if (input.doi !== undefined && input.doi !== null) {
      if (typeof input.doi !== "string") throw new ValidationError("doi must be a string.");
      req.doi = input.doi;
  }

  if (input.query !== undefined && input.query !== null) {
      if (typeof input.query !== "string") throw new ValidationError("query must be a string.");
      req.query = input.query;
  }

  if (input.title !== undefined && input.title !== null) {
      if (typeof input.title !== "string") throw new ValidationError("title must be a string.");
      req.title = input.title;
  }

  if (input.author !== undefined && input.author !== null) {
      if (typeof input.author !== "string") throw new ValidationError("author must be a string.");
      req.author = input.author;
  }

  if (!req.doi && !req.query && !req.title) {
      throw new ValidationError("At least one of doi, query, or title must be provided.");
  }

  if (input.rows !== undefined && input.rows !== null) {
      if (typeof input.rows !== "number") throw new ValidationError("rows must be a number.");
      req.rows = input.rows;
  }

  return req;
}

export async function lookupPublicationMetadata(input: LookupPublicationMetadataRequest): Promise<LookupPublicationMetadataResponse> {
  const warnings: string[] = [];
  const matches: Record<string, unknown>[] = [];
  let bestMatch: Record<string, unknown> | null = null;

  let fetchUrl = "";
  if (input.doi) {
    fetchUrl = `https://api.crossref.org/works/${encodeURIComponent(input.doi)}`;
  } else {
    const q = [];
    if (input.query) q.push(`query=${encodeURIComponent(input.query)}`);
    if (input.title) q.push(`query.title=${encodeURIComponent(input.title)}`);
    if (input.author) q.push(`query.author=${encodeURIComponent(input.author)}`);
    if (input.rows) q.push(`rows=${input.rows}`);
    fetchUrl = `https://api.crossref.org/works?${q.join("&")}`;
  }

  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 6000);
    const response = await fetch(fetchUrl, { signal: controller.signal });
    clearTimeout(id);

    if (response.ok) {
      const data = await response.json();
      if (input.doi && data.message) {
        matches.push(data.message);
      } else if (data.message && data.message.items) {
        for (const item of data.message.items) {
          matches.push(item);
        }
      }
      if (matches.length > 0) bestMatch = matches[0];
    } else {
      warnings.push(`Failed to fetch Crossref data: ${response.status}`);
    }
  } catch (err: any) {
    warnings.push(`Error fetching Crossref data: ${err.message}`);
  }

  const firstMatch = bestMatch as any;

  return {
    query: input.doi || input.title || input.query || "",
    matches,
    bestMatch,
    title: firstMatch && firstMatch.title ? firstMatch.title[0] : null,
    authors: firstMatch && firstMatch.author ? firstMatch.author.map((a: any) => `${a.given} ${a.family}`) : null,
    publicationDate: firstMatch && firstMatch.created ? firstMatch.created["date-time"] : null,
    doi: firstMatch ? firstMatch.DOI : null,
    publisher: firstMatch ? firstMatch.publisher : null,
    sourceUrl: firstMatch ? `https://doi.org/${firstMatch.DOI}` : null,
    sourceNote: "Crossref REST API",
    warnings,
    assumptions: ["Requires either DOI or query/title.", "Does not return full copyrighted article text."]
  };
}

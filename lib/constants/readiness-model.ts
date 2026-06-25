export const RECOMMENDATION_LABELS = [
  "Automate now",
  "Clean up first",
  "Keep human",
  "Revisit later",
] as const;

export const AUTOMATION_MODES = [
  "Limited pilot with human approval",
  "Draft-only AI assistance",
  "Process cleanup before automation",
  "Keep human-led; use AI only for drafts or summaries",
  "Revisit after higher-priority workflows",
] as const;

export const READINESS_BANDS = {
  "0-10": "Do not automate yet",
  "11-20": "Clean up first",
  "21-26": "Pilot carefully",
  "27-30": "Ready for automation pilot",
} as const;

# Analytics QA Checklist

Use this checklist during testing and pre-release to ensure analytics implementation adheres to our guidelines.

## Privacy & Safety
- [ ] Confirmed no sensitive workflow contents are tracked.
- [ ] Confirmed no uploaded document metadata or contents are tracked.
- [ ] Confirmed no private business details are being tracked.
- [ ] Confirmed no personal data (PII) is stored or passed in URLs.
- [ ] Confirmed no private partner data is exposed in analytics payloads or front-end tracking calls.

## Implementation Correctness
- [ ] Confirmed no real analytics scripts or production tracking IDs have been committed to the repository (unless launching).
- [ ] All required UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `ref`) are formatted correctly according to `partner-utm-rules.md`.
- [ ] Event triggers correspond exactly to the events defined in `analytics-event-map.md`.
- [ ] CTA tracking matches definitions in `cta-tracking-plan.md`.

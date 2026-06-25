# Analytics Release Checklist

Prior to launching any new analytics implementation or significant updates, ensure the following steps are completed.

## Release Readiness

- [ ] Ensure the **Analytics QA Checklist** (`analytics-qa-checklist.md`) has been fully completed and signed off.
- [ ] Confirm compliance with all rules stated in `privacy-rules.md`.
- [ ] Verify that real tracking IDs and scripts are implemented only in intended production environments and not exposed inadvertently.
- [ ] Cross-check UTM parameter setups for active partners against `partner-utm-rules.md`.
- [ ] Ensure that event tracking functions as expected and matches definitions in `analytics-event-map.md`.
- [ ] Document all updates, changes, and implementation details in `analytics-changelog.md`.

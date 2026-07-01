# OpenAPI / Action Layer Deferral

This consolidation intentionally does not merge the stale OpenAPI/action PR work.

## Reason

The stale OpenAPI PRs had schema alignment issues where combined action definitions could imply request bodies that do not match the actual route validators.

## Rule

Do not publish a GPT Action as available unless:

- The route exists.
- The route validator accepts the documented request body.
- The OpenAPI schema uses the same operation name as the route/docs.
- Example requests work against the route.
- Sensitive workflows include human-review warnings.

## Next Safe Batch

Create a separate OpenAPI/action PR after the connector documentation foundation is merged.

That PR should:

1. Inventory actual API routes.
2. Match each route to a validator.
3. Generate one OpenAPI file per real action.
4. Avoid dummy request bodies.
5. Keep no-auth actions non-sensitive.
6. Add tests or sample request validation where possible.

## Related Pages

- ../../pages/tools/actions.html
- ../../pages/tools/no-auth-actions.html
- ../../pages/tools/openapi.html
- ../../pages/tools/connector-risk-map.html

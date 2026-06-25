# Partner Config Rules

## Guidelines for `partner-config.js` and `partners.json`

- **Configuration Definitions:** All partner configurations and metadata must be defined in `partners.json`.
- **Loading Mechanisms:** `partner-config.js` should be responsible for fetching and applying the configuration from `partners.json`.
- **Allowed Domains:** `partners.json` must specify a list of allowed domains for each partner ID to ensure the embed is only loaded on approved partner sites.
- **Static Configuration:** Note that this configuration is static and handled client-side. See `static-access-control-warning.md` for security implications.
- **Data Structure:** `partners.json` should structure data clearly, indexing by partner ID for efficient lookup by `partner-config.js`.

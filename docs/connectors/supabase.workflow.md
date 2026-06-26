# Supabase Workflow Playbook

## Connector
Supabase

## Best For
PostgreSQL databases, authentication, edge functions, and real-time subscriptions for custom web applications.

## Do Not Use For
Unstructured document storage (if not using storage buckets appropriately), or scenarios requiring deep, legacy on-premise integrations without proper middleware.

## Required Inputs
- Table Names
- Row Data (JSON objects matching schema)
- Authentication Tokens/Roles
- Storage Bucket Names

## Common SMB Workflows
1. Storing custom application user profiles.
2. Managing backend data for internal dashboards.
3. Handling file uploads for client portals.
4. Triggering webhooks on database row changes.
5. Managing custom authentication flows.

## Automation Opportunities
- Inserting rows from external API aggregators.
- Syncing user data between Supabase Auth and external CRMs.
- Triggering edge functions on specific database events.
- Creating temporary signed URLs for file access.

## What Should Stay Human
- Designing the database schema and running migrations.
- Defining Row Level Security (RLS) policies.
- Managing production database backups and restorations.

## Privacy / Security Risks
Misconfigured Row Level Security (RLS) is a catastrophic risk, potentially exposing all user data to anonymous access. Automations running with bypass-RLS service keys can silently overwrite critical data.

## Risk Level
- High (requires strict RLS and schema control)

## Starter Prompt
```text
I am building an internal dashboard and using Supabase for the database. When a new user signs up, I need to create a profile row in the 'profiles' table and then sync their email to our CRM. Help me map out this data flow and the necessary triggers.
```

## Example Output
```json
{
  "workflow_step": "Create User Profile",
  "connector": "Supabase",
  "action": "Insert Row",
  "parameters": {
    "table": "profiles",
    "data": {
      "user_id": "uuid-1234",
      "email": "user@example.com",
      "role": "customer"
    }
  }
}
```

## Related Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/tools/integration-map.html](../../pages/tools/integration-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)

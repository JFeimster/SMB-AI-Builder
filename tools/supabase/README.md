# Supabase Tool-Ops Layer

## Purpose
Provides guidance on interacting with Supabase for Postgres database management, authentication, and real-time data.

## Best Used For
- Managing relational data via PostgREST
- Handling user authentication flows
- Storing unstructured files in Storage
- Setting up row-level security (RLS) policies
- Triggering edge functions

## Not For
- Storing extremely large binary objects in the database itself
- Bypassing RLS policies inappropriately
- Managing highly sensitive compliance data without auditing

## Common Tasks
- Generate a SQL schema migration
- Query a table using the REST API
- Configure a storage bucket

## Inputs Needed
- Table schemas
- Query parameters
- Authentication credentials

## Outputs
- SQL scripts
- JSON API responses
- Configuration guidelines

## Skills
List related skills in `tools/supabase/skills/`. Note: Subfolders are created only when needed since Git does not preserve empty directories.

## Prompts
Point to `tools/supabase/prompts/` if present.

## Risk Notes
Never expose the service_role key publicly. Always enforce Row Level Security (RLS) for client-side access. Ensure proper indexing for performance.

## Related Site Pages
- Relevant documentation or capability pages will be linked here.

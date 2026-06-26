# Skill: Airtable Base Planner

## Purpose
Plans the tables, fields, and relationships for an Airtable Base.

## Use When
When designing a new Airtable system for inventory, event management, or complex relational data.

## Inputs Needed
- Business process being managed
- Key entities (e.g., Products, Orders, Customers)
- Reporting requirements

## Outputs
- A relational database schema (Tables and Fields)
- Field types (Linked Record, Lookup, Formula)
- Recommended Views and Interfaces

## Procedure
1. Identify the core tables needed to avoid data duplication.
2. Define the fields for each table, specifying the Airtable field type.
3. Map the relationships (Linked Records) between tables.
4. Suggest Lookups or Rollups to surface related data.
5. Propose useful Views or Interface dashboards.
6. Verify against safety rules.

## Safety / Human Review
- No fake live connector claims (cannot build the Base directly).
- Ensure the schema follows basic relational database principles.

## Quality Checklist
- [ ] Schema avoids data duplication?
- [ ] Linked Records are used correctly?
- [ ] Field types are appropriate?

## Example Prompt
```
I need to manage our physical inventory and equipment checkouts in Airtable. I have a list of items, and I need to know who has checked them out and when they are due back. How should I structure the Base?
```

## Related Tool Docs
- [Airtable Tool Docs](../../README.md)

## Related Site Pages
- [Airtable Pages](../../../../pages/tools/airtable)

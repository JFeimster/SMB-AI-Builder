# Architecture Documentation

## Purpose
This directory contains the system architecture, data flow diagrams, and structural guidelines for the SMB AI Builder repository.

## Files
- `repo-map.md`: Explains the repository directory structure and naming conventions.
- `action-data-flow.md`: Details how data moves between the user, the GPT, and Vercel endpoints.
- `privacy-and-data-handling.md`: Rules for maintaining statelessness and protecting user data.
- `future-roadmap.md`: Planned phases of development and feature prioritization.

## How to use
Review `repo-map.md` to understand where files belong. Read `action-data-flow.md` before building new endpoints to understand the lifecycle of a request. Strictly adhere to the rules in `privacy-and-data-handling.md`.

## Safety note
The architecture is intentionally designed to be stateless and "no-auth". Do not introduce databases, persistent storage, or user authentication without consulting the roadmap and reviewing privacy implications.

## Related folders
- `../actions/`: Specific configuration guidelines for the GPT Actions described in the data flow.
- `../../app/`: Where the Next.js and API route architecture is actually implemented.

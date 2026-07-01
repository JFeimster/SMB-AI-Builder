# PowerShell Safety Rules

The following safety rules apply to all scripts in the PowerShell tool-ops layer to ensure local QA remains non-destructive and safe.

1. **No Destructive Operations**: Scripts must not create destructive changes.
2. **Do Not Delete Files**: No files should be deleted by the validation scripts.
3. **Do Not Move Files**: Scripts must not move files without explicit confirmation.
4. **No Admin Privileges**: Scripts must run under standard user permissions without requiring elevated/administrative privileges.
5. **No Private Credentials**: Scripts must not require, process, or ask for private credentials.
6. **No Secrets**: Scripts must not read, print, or store secrets (e.g., API keys, environment variables).
7. **Read-Only / Dry-Run Default**: Scripts should default to read-only checks or a dry-run behavior (`-WhatIf`). Any script that writes output (like building a zip) must explicitly print what it plans to do before doing it unless explicitly overridden.
8. **Explicit Output Directories**: Any script that produces artifacts must require an explicit output directory.
9. **Never Overwrite Silently**: Scripts must never overwrite existing files in the repository silently; they must require an explicit `-Force` flag.
10. **Avoid Root Writes**: Scripts must avoid writing files directly to the repository root directory.
11. **Clear Console Output**: Scripts should use clear, formatted console output (e.g., pass/warn/fail messages).
12. **Repo Root Execution**: All scripts must be designed to work when executed from the repository root directory.
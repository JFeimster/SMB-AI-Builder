# SMB AI Builder - PowerShell Tool-Ops Layer

Welcome to the safe PowerShell automation layer for Windows-friendly local QA of the SMB AI Builder repo.

## Purpose
This layer provides a collection of non-destructive, read-only PowerShell scripts to automate local Quality Assurance (QA), metadata validation, link checking, and release packaging for the SMB AI Builder project.

## How to Run Scripts
To run the scripts, open a PowerShell terminal (`pwsh` or Windows PowerShell) at the repository root and execute the desired script:

```powershell
# Example: Run all checks
.\tools\powershell\examples\run-all-checks.ps1

# Example: Check links
.\tools\powershell\scripts\check-links.ps1
```

For more details on usage, see [PowerShell Usage](powershell-usage.md).

## Safety Rules
All scripts in this directory strictly adhere to the project safety rules. Scripts are designed to be read-only by default, requiring explicit directories and flags for any destructive operations. See [PowerShell Safety Rules](powershell-safety-rules.md) for more details.

## Script Index
A comprehensive list of available scripts can be found in the [PowerShell Script Index](powershell-script-index.md).
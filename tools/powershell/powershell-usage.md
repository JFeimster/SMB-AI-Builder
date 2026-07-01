# PowerShell Usage Guide

This guide explains how to use the PowerShell scripts for local QA of the SMB AI Builder repository.

All scripts must be executed from the repository root directory.

## Run All Checks
To run the full suite of non-destructive checks sequentially:

```powershell
.\tools\powershell\examples\run-all-checks.ps1
```

## Run a Single Check
To run an individual check, execute the corresponding script in the `scripts` folder.

Example: Check for broken links:
```powershell
.\tools\powershell\scripts\check-links.ps1
```

Example: Check CTA Links:
```powershell
.\tools\powershell\scripts\check-cta-links.ps1
```

## Build Static Zip
To build the static distribution zip file (excluding source control, node_modules, and OS junk):

```powershell
# Dry run (shows what it will do)
.\tools\powershell\scripts\build-static-zip.ps1 -WhatIf

# Actually build it
.\tools\powershell\scripts\build-static-zip.ps1 -OutDir "dist" -Force
```
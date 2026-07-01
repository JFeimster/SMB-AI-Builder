Write-Host "Running All Checks..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

$scriptsPath = Join-Path -Path $PSScriptRoot -ChildPath "..\scripts"
$scriptsPath = [System.IO.Path]::GetFullPath($scriptsPath)

$checks = @(
    "check-file-structure.ps1",
    "check-embed-files.ps1",
    "check-sitemap-paths.ps1",
    "check-placeholders.ps1",
    "check-cta-links.ps1",
    "check-metadata.ps1",
    "check-links.ps1"
)

$i = 1
foreach ($check in $checks) {
    Write-Host ""
    Write-Host "----------------------------------------" -ForegroundColor Cyan
    Write-Host "[$i/$($checks.Count)] Running $check" -ForegroundColor Cyan
    Write-Host "----------------------------------------" -ForegroundColor Cyan

    $scriptPath = Join-Path -Path $scriptsPath -ChildPath $check

    if (Test-Path -Path $scriptPath) {
        # Dot sourcing the script so it runs in current scope, passing the root as SearchPath implicitly since it executes from the dir it's called from ideally.
        # But to be safe, we explicitly pass the repo root.
        # Assuming PSScriptRoot is tools/powershell/examples
        $repoRoot = [System.IO.Path]::GetFullPath((Join-Path -Path $PSScriptRoot -ChildPath "..\..\.."))

        & $scriptPath -SearchPath $repoRoot
    } else {
        Write-Host "[FAIL] Script not found: $scriptPath" -ForegroundColor Red
    }

    $i++
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Checks Completed. Please review the output above." -ForegroundColor Cyan

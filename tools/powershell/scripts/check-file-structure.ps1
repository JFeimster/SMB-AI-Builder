param(
    [string]$SearchPath = "."
)

Write-Host "Running check-file-structure.ps1..." -ForegroundColor Cyan

$expectedDirectories = @(
    "pages/site/",
    "pages/seo/",
    "pages/seo/comparisons/",
    "pages/seo/workflows/",
    "pages/seo-support/",
    "embeds/",
    "tools/"
)

foreach ($dir in $expectedDirectories) {
    $fullPath = Join-Path -Path $SearchPath -ChildPath $dir
    if (Test-Path -Path $fullPath -PathType Container) {
        Write-Host "[PASS] Found directory: $dir" -ForegroundColor Green
    } else {
        Write-Host "[FAIL] Missing directory: $dir" -ForegroundColor Red
    }
}

Write-Host "File structure check completed." -ForegroundColor Cyan

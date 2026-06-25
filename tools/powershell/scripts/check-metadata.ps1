param(
    [string]$SearchPath = "."
)

Write-Host "Running check-metadata.ps1..." -ForegroundColor Cyan

$htmlFiles = Get-ChildItem -Path $SearchPath -Recurse -Filter "*.html" | Where-Object { $_.FullName -notmatch "node_modules" -and $_.FullName -notmatch "\.next" -and $_.FullName -notmatch "dist" }

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    $issues = @()

    if ($content -notmatch "<title>.*?</title>") { $issues += "Missing <title>" }
    if ($content -notmatch '<meta\s+name="description"\s+content=".*?"') { $issues += "Missing meta description" }
    if ($content -notmatch '<meta\s+name="viewport"\s+content=".*?"') { $issues += "Missing viewport" }
    if ($content -notmatch "<h1>.*?</h1>") { $issues += "Missing <H1>" }
    if ($content -notmatch '<meta\s+property="og:title"\s+content=".*?"') { $issues += "Missing Open Graph title" }
    if ($content -notmatch '<meta\s+property="og:description"\s+content=".*?"') { $issues += "Missing Open Graph description" }

    if ($issues.Count -eq 0) {
        # Uncomment to see all passes
        # Write-Host "[PASS] Valid metadata for $($file.Name)" -ForegroundColor Green
    } else {
        Write-Host "[FAIL] Metadata issues in $($file.FullName):" -ForegroundColor Red
        foreach ($issue in $issues) {
            Write-Host "  - $issue" -ForegroundColor Yellow
        }
    }
}

Write-Host "Metadata check completed." -ForegroundColor Cyan

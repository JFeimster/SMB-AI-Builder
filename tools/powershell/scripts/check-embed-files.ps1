param(
    [string]$SearchPath = "."
)

Write-Host "Running check-embed-files.ps1..." -ForegroundColor Cyan

$expectedFiles = @(
    "embeds/partner-widget.html",
    "embeds/partner-widget.css",
    "embeds/partner-widget.js",
    "embeds/iframe.html",
    "embeds/iframe-compact.html",
    "embeds/affiliate-card.html",
    "embeds/embed-loader.js",
    "embeds/partner-config.js",
    "embeds/partners.json",
    "embeds/EMBED-README.md",
    "embeds/demo-partner-page.html"
)

foreach ($file in $expectedFiles) {
    $fullPath = Join-Path -Path $SearchPath -ChildPath $file
    if (Test-Path -Path $fullPath) {
        Write-Host "[PASS] Found file: $file" -ForegroundColor Green
    } else {
        Write-Host "[FAIL] Missing file: $file" -ForegroundColor Red
    }
}

# Check for 940px / 1200px constraint in CSS or README
$constraintFound = $false
$constraintCheckFiles = @("embeds/partner-widget.css", "embeds/EMBED-README.md")

foreach ($file in $constraintCheckFiles) {
    $fullPath = Join-Path -Path $SearchPath -ChildPath $file
    if (Test-Path -Path $fullPath) {
        $content = Get-Content -Path $fullPath -Raw
        if ($content -match "940px" -or $content -match "1200px") {
            Write-Host "[PASS] Constraint check passed: 940px / 1200px found in $file" -ForegroundColor Green
            $constraintFound = $true
            break
        }
    }
}

if (-not $constraintFound) {
    Write-Host "[FAIL] Width constraint (940px / 1200px) not found in CSS or README." -ForegroundColor Red
}

Write-Host "Embed files check completed." -ForegroundColor Cyan

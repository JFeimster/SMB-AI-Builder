param(
    [string]$SitemapPath = "sitemap.xml",
    [string]$SearchPath = "."
)

Write-Host "Running check-sitemap-paths.ps1..." -ForegroundColor Cyan

if (-not (Test-Path -Path $SitemapPath)) {
    Write-Host "[FAIL] sitemap.xml not found at $SitemapPath" -ForegroundColor Red
    exit
}

Write-Host "[PASS] sitemap.xml found." -ForegroundColor Green

$sitemapContent = Get-Content -Path $SitemapPath -Raw

$expectedFolders = @(
    "pages/site/",
    "pages/seo/",
    "pages/seo/comparisons/",
    "pages/seo/workflows/",
    "embeds/"
)

foreach ($folder in $expectedFolders) {
    if ($sitemapContent -match [regex]::Escape($folder)) {
        Write-Host "[PASS] Found path folder in sitemap: $folder" -ForegroundColor Green
    } else {
        Write-Host "[WARN] Missing path folder in sitemap: $folder" -ForegroundColor Yellow
    }
}

Write-Host "Sitemap check completed." -ForegroundColor Cyan

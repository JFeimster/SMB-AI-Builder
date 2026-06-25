param(
    [string]$SearchPath = "."
)

Write-Host "Running check-links.ps1..." -ForegroundColor Cyan

$htmlFiles = Get-ChildItem -Path $SearchPath -Recurse -Filter "*.html" | Where-Object { $_.FullName -notmatch "node_modules" -and $_.FullName -notmatch "\.next" -and $_.FullName -notmatch "dist" }

$brokenLinksFound = $false

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw

    # Very basic regex to find href attributes
    $regex = 'href="([^"]+)"'
    $matches = [regex]::Matches($content, $regex)

    foreach ($match in $matches) {
        $link = $match.Groups[1].Value

        # Skip absolute links, mailto, tel, empty links, and fragments
        if ($link -match "^http" -or $link -match "^mailto:" -or $link -match "^tel:" -or [string]::IsNullOrWhiteSpace($link) -or $link.StartsWith("#")) {
            continue
        }

        # Resolve relative path
        $targetPath = Join-Path -Path $file.DirectoryName -ChildPath $link
        $targetPath = [System.IO.Path]::GetFullPath($targetPath)

        # Check if the target is a directory or an existing file. It may be missing an extension depending on the server config, but we check if it exists exactly or as a directory first.
        if (-not (Test-Path -Path $targetPath)) {
             Write-Host "[FAIL] Broken relative link found in $($file.FullName): $link -> Target not found" -ForegroundColor Red
             $brokenLinksFound = $true
        }
    }
}

if (-not $brokenLinksFound) {
    Write-Host "[PASS] All relative links check out (basic validation)." -ForegroundColor Green
} else {
    Write-Host "[WARN] Some links may be broken. Please review." -ForegroundColor Yellow
}

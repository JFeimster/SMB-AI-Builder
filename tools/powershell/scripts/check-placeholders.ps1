param(
    [string]$SearchPath = "."
)

Write-Host "Running check-placeholders.ps1..." -ForegroundColor Cyan

$placeholders = @(
    "YOURDOMAIN.com",
    "example.com",
    "localhost",
    "127.0.0.1",
    "TODO",
    "FIXME",
    "INSERT_",
    "REPLACE_"
)

$excludePaths = @(
    "*\.git\*",
    "*\node_modules\*",
    "*\dist\*",
    "*\out\*",
    "*\.next\*",
    "*\.vercel\*",
    "*\tools\powershell\*"
)

# Build regex pattern for all placeholders
$pattern = ($placeholders | ForEach-Object { [regex]::Escape($_) }) -join "|"

$files = Get-ChildItem -Path $SearchPath -Recurse -File | Where-Object {
    $path = $_.FullName
    $exclude = $false
    foreach ($ex in $excludePaths) {
        if ($path -like $ex) {
            $exclude = $true
            break
        }
    }
    -not $exclude
}

$foundIssues = $false

foreach ($file in $files) {
    # Skip binary files if possible or catch errors
    try {
        $lines = Get-Content -Path $file.FullName -ErrorAction Stop
        for ($i = 0; $i -lt $lines.Count; $i++) {
            if ($lines[$i] -match $pattern) {
                $match = [regex]::Match($lines[$i], $pattern).Value
                Write-Host "[WARN] Found placeholder '$match' in $($file.FullName):$($i + 1)" -ForegroundColor Yellow
                $foundIssues = $true
            }
        }
    } catch {
        # Ignored, likely a binary file
    }
}

if (-not $foundIssues) {
    Write-Host "[PASS] No placeholders found." -ForegroundColor Green
}

Write-Host "Placeholders check completed." -ForegroundColor Cyan

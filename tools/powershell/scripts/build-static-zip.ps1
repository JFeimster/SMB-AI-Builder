param(
    [string]$SourcePath = ".",
    [string]$OutDir = "",
    [switch]$Force,
    [switch]$WhatIf
)

Write-Host "Running build-static-zip.ps1..." -ForegroundColor Cyan

if ([string]::IsNullOrWhiteSpace($OutDir)) {
    Write-Host "[ERROR] Explicit -OutDir is required to prevent accidental root writes." -ForegroundColor Red
    Write-Host "Example: .\build-static-zip.ps1 -OutDir `"dist`"" -ForegroundColor Yellow
    exit 1
}

# Resolve full path to output directory
$OutDir = [System.IO.Path]::GetFullPath($OutDir)
$DestinationZip = Join-Path -Path $OutDir -ChildPath "smb-ai-builder-static.zip"

if ($WhatIf) {
    Write-Host "[WHATIF] Would create destination zip at: $DestinationZip" -ForegroundColor Yellow
    exit 0
}

# Ensure dist directory exists
if (-not (Test-Path -Path $OutDir)) {
    Write-Host "Creating output directory: $OutDir"
    New-Item -ItemType Directory -Path $OutDir | Out-Null
}

# Remove existing zip if it exists and Force is passed
if (Test-Path -Path $DestinationZip) {
    if (-not $Force) {
        Write-Host "[ERROR] Destination file $DestinationZip already exists." -ForegroundColor Red
        Write-Host "Use -Force to overwrite." -ForegroundColor Yellow
        exit 1
    }
    Remove-Item -Path $DestinationZip -Force
}

$tempDir = Join-Path -Path $env:TEMP -ChildPath "smb-ai-builder-build"

if (Test-Path -Path $tempDir) {
    Remove-Item -Path $tempDir -Recurse -Force
}

New-Item -ItemType Directory -Path $tempDir | Out-Null

Write-Host "Copying files to staging directory..."

# Get all files excluding specific patterns
$filesToCopy = Get-ChildItem -Path $SourcePath -Recurse | Where-Object {
    $path = $_.FullName
    $exclude = $false

    # Exclude directories
    if ($path -match "\\\.git(\\|$)") { $exclude = $true }
    if ($path -match "\\node_modules(\\|$)") { $exclude = $true }
    if ($path -match "\\\.next(\\|$)") { $exclude = $true }
    if ($path -match "\\dist(\\|$)") { $exclude = $true }
    if ($path -match "\\out(\\|$)") { $exclude = $true }
    if ($path -match "\\\.vercel(\\|$)") { $exclude = $true }

    # Exclude output dir
    if ($path.StartsWith($OutDir)) { $exclude = $true }

    # Exclude specific files
    if ($_.Name -match "^\.env") { $exclude = $true }
    if ($_.Name -eq ".DS_Store") { $exclude = $true }
    if ($_.Name -eq "Thumbs.db") { $exclude = $true }

    -not $exclude
}

foreach ($item in $filesToCopy) {
    # Calculate relative path to maintain structure
    $relPath = $item.FullName.Substring((Resolve-Path $SourcePath).Path.Length).TrimStart('\')

    # Skip the root path itself if it somehow gets included
    if ([string]::IsNullOrEmpty($relPath)) { continue }

    $targetPath = Join-Path -Path $tempDir -ChildPath $relPath

    if ($item.PSIsContainer) {
        if (-not (Test-Path -Path $targetPath)) {
            New-Item -ItemType Directory -Path $targetPath | Out-Null
        }
    } else {
        $targetDir = Split-Path -Path $targetPath -Parent
        if (-not (Test-Path -Path $targetDir)) {
            New-Item -ItemType Directory -Path $targetDir | Out-Null
        }
        Copy-Item -Path $item.FullName -Destination $targetPath -Force
    }
}

Write-Host "Compressing files into $DestinationZip..."
Compress-Archive -Path "$tempDir\*" -DestinationPath $DestinationZip -Force

# Cleanup
Remove-Item -Path $tempDir -Recurse -Force

Write-Host "[PASS] Static build zip created successfully at $DestinationZip" -ForegroundColor Green

param(
    [string]$SearchPath = "."
)

Write-Host "Running check-cta-links.ps1..." -ForegroundColor Cyan

$gptUrl = "https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder"
$notionUrl = "https://feimster.notion.site/smb-ai-builder"
$githubUrl = "https://github.com/JFeimster/SMB-AI-Builder"

$htmlFiles = Get-ChildItem -Path $SearchPath -Recurse -Filter "*.html" | Where-Object { $_.FullName -notmatch "node_modules" -and $_.FullName -notmatch "\.next" -and $_.FullName -notmatch "dist" }

$foundGpt = 0
$foundNotion = 0
$foundGithub = 0

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw

    if ($content -match [regex]::Escape($gptUrl)) {
        Write-Host "[PASS] Primary GPT CTA URL found in $($file.FullName)" -ForegroundColor Green
        $foundGpt++
    }
    if ($content -match [regex]::Escape($notionUrl)) {
        Write-Host "[PASS] Notion URL found in $($file.FullName)" -ForegroundColor Green
        $foundNotion++
    }
    if ($content -match [regex]::Escape($githubUrl)) {
        Write-Host "[PASS] GitHub URL found in $($file.FullName)" -ForegroundColor Green
        $foundGithub++
    }
}

if ($foundGpt -eq 0) { Write-Host "[WARN] Primary GPT CTA URL not found in any HTML files." -ForegroundColor Yellow }
if ($foundNotion -eq 0) { Write-Host "[WARN] Notion URL not found in any HTML files." -ForegroundColor Yellow }
if ($foundGithub -eq 0) { Write-Host "[WARN] GitHub URL not found in any HTML files." -ForegroundColor Yellow }

Write-Host "CTA Links check completed." -ForegroundColor Cyan

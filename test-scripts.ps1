# test-scripts.ps1
Write-Host "🧪 Testing Scripts..." -ForegroundColor Cyan

Write-Host "`n1. Testing format:check..." -ForegroundColor Yellow
pnpm run format:check
if ($LASTEXITCODE -ne 0) { Write-Host "❌ format:check failed" -ForegroundColor Red; exit 1 }

Write-Host "`n2. Testing type-check..." -ForegroundColor Yellow
pnpm run type-check
if ($LASTEXITCODE -ne 0) { Write-Host "❌ type-check failed" -ForegroundColor Red; exit 1 }

Write-Host "`n3. Testing lint..." -ForegroundColor Yellow
pnpm run lint
if ($LASTEXITCODE -ne 0) { Write-Host "⚠️  lint has warnings/errors" -ForegroundColor Yellow }

Write-Host "`n4. Testing build:remotes..." -ForegroundColor Yellow
pnpm run build:remotes
if ($LASTEXITCODE -ne 0) { Write-Host "❌ build:remotes failed" -ForegroundColor Red; exit 1 }

Write-Host "`n5. Testing build:host..." -ForegroundColor Yellow
pnpm run build:host
if ($LASTEXITCODE -ne 0) { Write-Host "❌ build:host failed" -ForegroundColor Red; exit 1 }

Write-Host "`n6. Testing test..." -ForegroundColor Yellow
pnpm run test
if ($LASTEXITCODE -ne 0) { Write-Host "❌ test failed" -ForegroundColor Red; exit 1 }

Write-Host "`n✅ All automated tests passed!" -ForegroundColor Green
Write-Host "`n⚠️  Manual tests needed:" -ForegroundColor Yellow
Write-Host "   - pnpm run dev:all"
Write-Host "   - pnpm run start"
Write-Host "   - pnpm run preview"
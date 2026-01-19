# Run this inside packages/product-catalog/ folder

Write-Host "Creating Product Catalog files..." -ForegroundColor Green

# Create directories
$directories = @(
    "src/types",
    "src/api",
    "src/hooks",
    "src/components"
)

foreach ($dir in $directories) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

# Create index.html
@"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Product Catalog - Micro Frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/bootstrap.tsx"></script>
  </body>
</html>
"@ | Out-File -FilePath "index.html" -Encoding UTF8

# Create index.css
@"
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
"@ | Out-File -FilePath "src/index.css" -Encoding UTF8

Write-Host "✅ Directory structure created!" -ForegroundColor Green
Write-Host ""
Write-Host "Now create these files manually and copy content from the artifact:" -ForegroundColor Yellow
Write-Host "1. src/types/product.ts" -ForegroundColor Cyan
Write-Host "2. src/api/mockData.ts" -ForegroundColor Cyan
Write-Host "3. src/api/productsApi.ts" -ForegroundColor Cyan
Write-Host "4. src/hooks/useProducts.ts" -ForegroundColor Cyan
Write-Host "5. src/components/ProductCard.tsx" -ForegroundColor Cyan
Write-Host "6. src/components/ProductFilters.tsx" -ForegroundColor Cyan
Write-Host "7. src/components/ProductList.tsx" -ForegroundColor Cyan
Write-Host "8. src/components/ProductDetail.tsx" -ForegroundColor Cyan
Write-Host "9. src/bootstrap.tsx" -ForegroundColor Cyan
Write-Host ""
Write-Host "After creating all files, run:" -ForegroundColor Yellow
Write-Host "npm run dev" -ForegroundColor White
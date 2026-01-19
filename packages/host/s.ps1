# Run this inside packages/host/ folder

Write-Host "Creating Host Application files..." -ForegroundColor Green

# Create index.html
@"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>E-Commerce Micro Frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
"@ | Out-File -FilePath "index.html" -Encoding UTF8

# Create src/index.css
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

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
"@ | Out-File -FilePath "src/index.css" -Encoding UTF8

# The rest would be too long for one script
# I'll create a guide for you to manually create or use a text editor

Write-Host "✅ Basic files created!" -ForegroundColor Green
Write-Host ""
Write-Host "Now create these files manually:" -ForegroundColor Yellow
Write-Host "1. src/types/remotes.d.ts"
Write-Host "2. src/stores/authStore.ts"
Write-Host "3. src/stores/themeStore.ts"
Write-Host "4. src/config/queryClient.ts"
Write-Host "5. src/components/ErrorBoundary.tsx"
Write-Host "6. src/components/RemoteWrapper.tsx"
Write-Host "7. src/layouts/MainLayout.tsx"
Write-Host "8. src/pages/HomePage.tsx"
Write-Host "9. src/pages/LoginPage.tsx"
Write-Host "10. src/pages/NotFoundPage.tsx"
Write-Host "11. src/routes/index.tsx"
Write-Host "12. src/App.tsx"
Write-Host "13. src/main.tsx"
Write-Host ""
Write-Host "Copy content from the artifact 'Host Application - Complete Implementation'" -ForegroundColor Cyan
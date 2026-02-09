# Ecommerce Microfrontend

## CI/CD Pipeline

This project uses GitHub Actions for automated testing, deployment, and monitoring.

### Workflows

#### **CI/CD Pipeline** (`.github/workflows/ci.yml`)

- **Triggers:** Push to main/develop, Pull Requests
- **Jobs:**
  - **Test & Validate:** Type check, lint, format, test, build
  - **Deploy Preview:** Deploy PR previews to GitHub Pages
  - **Deploy Production:** Deploy main branch to production
  - **E2E Tests:** Run Playwright tests on deployed preview

#### **Security Scan** (`.github/workflows/security.yml`)

- **Triggers:** Push, PRs, weekly schedule
- **Features:**
  - Dependency audit with `pnpm audit`
  - Snyk security scanning
  - CodeQL static analysis

#### **Performance Monitoring** (`.github/workflows/performance.yml`)

- **Triggers:** Push, PRs
- **Features:**
  - Lighthouse CI performance testing
  - Bundle size analysis and tracking
  - Performance regression detection

#### **Release** (`.github/workflows/release.yml`)

- **Triggers:** Git tags (v\*)
- **Features:**
  - Automated changelog generation
  - GitHub releases creation
  - Docker image building and pushing
  - Production deployment

### Docker Support

Multi-stage Dockerfiles for each service:

- `packages/host/Dockerfile` - Nginx-based static hosting
- `packages/product-catalog/Dockerfile` - Node.js application
- `packages/shopping-cart/Dockerfile` - Node.js application

**Docker Compose:**

```bash
docker-compose up -d  # Run all services
```

### Performance Standards

**Lighthouse CI Requirements:**

- Performance: ≥ 80
- Best Practices: ≥ 80
- SEO: ≥ 89

### Required Secrets

Add these to GitHub repository settings:

- `GITHUB_TOKEN` (auto-provided)
- `SNYK_TOKEN` (for security scanning)
- `DOCKER_USERNAME` (for Docker Hub)
- `DOCKER_PASSWORD` (for Docker Hub)

## Git Hooks

This project uses Husky for Git hooks to ensure code quality:

### Pre-commit Hook

Runs before each commit:

- `pnpm run lint:fix` - Auto-fix ESLint issues
- `pnpm run format` - Format code with Prettier
- `pnpm run type-check` - TypeScript type checking

### Commit Message Hook

Validates commit messages follow conventional commits:

```
feat: add new feature
fix: resolve bug
docs: update documentation
style: code formatting changes
refactor: code refactoring
test: add/update tests
chore: build process or auxiliary tool changes
```

## Installation

```bash
pnpm install
```

The `prepare` script will automatically set up Git hooks.

## Development

```bash
pnpm dev          # Start all packages in development
pnpm start        # Start production servers
pnpm build:all    # Build all packages
pnpm validate     # Run full validation (type-check + lint + format + test)
```

## Deployment

### Manual Release

```bash
git tag v1.0.0
git push origin v1.0.0
```

### Docker Deployment

```bash
# Build and run locally
docker-compose up -d

# Pull and run latest images
docker-compose pull && docker-compose up -d
```

### Environment URLs

- **Production:** `https://[username].github.io/[repo]/production/`
- **Preview:** `https://[username].github.io/[repo]/preview/`

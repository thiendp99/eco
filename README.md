# Ecommerce Microfrontend Project

**Live Demo:** [eco-host-git-develop-thiendp9s-projects.vercel.app/](https://eco-host-git-develop-thiendp9s-projects.vercel.app/)

### 📝 Project Overview

A scalable e-commerce frontend built using a Microfrontend Architecture. It is divided into multiple independent applications (Host, Product Catalog, Shopping Cart) managed within a monorepo, allowing them to be developed, tested, and deployed independently.

### 🛠️ Tech Stack & Tools

- **Core Frameworks:** React 18, TypeScript, Tailwind CSS
- **Architecture:** Vite Module Federation (`@originjs/vite-plugin-federation`), PNPM Workspace
- **State Tracking & Data:** Zustand, React Query, React Router DOM
- **Testing & Quality:** Vitest (Unit), Playwright (E2E), ESLint, Prettier, Husky, Commitlint
- **DevOps CI/CD:** GitHub Actions, Docker, Docker Compose, GitHub Pages
- **Monitoring & Security:** Lighthouse CI, Snyk Security, CodeQL

### 🚀 Key Responsibilities & Contributions

- **Architecture Setup:** Architected with **Vite Module Federation** into targeted domains, isolating concerns and increasing independent development speed.
- **Monorepo Config:** Organized via **PNPM Workspace** to efficiently share React components, types, and common utilities seamlessly.
- **Workflow Automation:** Constructed **GitHub Actions** CI/CD pipelines to automate linting, type-checking, and rapid deployment routines.
- **Code Quality & Sec:** Implemented automated dependency/static-analysis with **Snyk** and **CodeQL**, coupled with **Lighthouse CI** benchmarking to maintain strict accessibility parameters.
- **Containerization Run:** Designed **multi-stage Dockerfiles** and managed services via **docker-compose** for consistent local and production stages; launched dynamically via **GitHub Pages**.
- **Testing coverage:** Authored robust stability measures executing unit tests with **Vitest** and reliable End-to-End checks via **Playwright**.

---

## CI/CD Pipeline

This project uses GitHub Actions for automated testing, deployment, and monitoring.

### Workflows

#### **CI/CD Pipeline** (`.github/workflows/ci.yml`)

- **Triggers:** Push to main/develop, Pull Requests
- **Jobs:**
  - **Validate & Build:** Type-check, lint, format, test, and build all packages
  - **Deploy Preview:** Deploy preview environments to GitHub Pages (for `develop` branch)
  - **E2E Tests:** Run Playwright end-to-end tests against the deployed preview

#### **Production Deployment** (`.github/workflows/deploy.yml`)

- **Triggers:** Push to `develop` or `feature/github-pages-deployment`
- **Jobs:**
  - **Deploy:** Build all applications and assemble deployment artifacts for GitHub Pages deployment.

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
- Accessibility: ≥ 89
- Best Practices: ≥ 80
- SEO: ≥ 80

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
pnpm start        # Start development servers (builds remotes and runs host in dev mode)
pnpm preview      # Build all packages and serve them in preview mode locally
pnpm build        # Build all packages (host and remotes)
pnpm validate     # Run full validation (type-check, lint, format, and test)
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

- **Production:** `https://thiendp99.github.io/eco/`
- **Preview:** `https://thiendp99.github.io/ecommerce-microfrontend/preview/`

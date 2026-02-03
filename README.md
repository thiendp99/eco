# Ecommerce Microfrontend

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

# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY packages/shared/package.json ./packages/shared/
COPY packages/product-catalog/package.json ./packages/product-catalog/

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY packages/shared ./packages/shared
COPY packages/product-catalog ./packages/product-catalog

# Build
RUN pnpm --filter @ecommerce/shared build
RUN pnpm --filter @ecommerce/product-catalog build

# Production stage
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/packages/product-catalog/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]

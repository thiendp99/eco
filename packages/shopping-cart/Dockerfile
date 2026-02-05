# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY packages/shared/package.json ./packages/shared/
COPY packages/shopping-cart/package.json ./packages/shopping-cart/

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY packages/shared ./packages/shared
COPY packages/shopping-cart ./packages/shopping-cart

# Build
RUN pnpm --filter @ecommerce/shared build
RUN pnpm --filter @ecommerce/shopping-cart build

# Production stage
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/packages/shopping-cart/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3002

CMD ["nginx", "-g", "daemon off;"]

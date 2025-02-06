# Monorepo Starter with Express and tRPC

This is a monorepo starter template using Express and tRPC with Turborepo.

## Apps

- `mobile`: Expo mobile app for iOS/Android
- `web`: React SPA web app
- `server`: Express server with tRPC API

## Packages

- `@rizrmdhn/api`: tRPC API implementation
- `@rizrmdhn/db`: Database client using Drizzle ORM
- `@rizrmdhn/auth`: Authentication utilities and middleware
- `@rizrmdhn/types`: Shared TypeScript types/interfaces
- `@rizrmdhn/validators`: Data validation with Zod

## Tooling

- `@rizrmdhn/eslint-config`: ESLint config and rules
- `@rizrmdhn/prettier-config`: Prettier formatting rules
- `@rizrmdhn/tailwind`: Tailwind CSS configuration
- `@rizrmdhn/tsconfig`: TypeScript compiler settings

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev

# Build all apps
pnpm build
```

## Key Features

- Type-safe API calls with tRPC
- Shared components and utilities
- JWT authentication
- Monorepo workspace with pnpm
- Modern tooling:
  - TypeScript 5
  - ESLint + Prettier
  - Tailwind CSS
  - Turborepo

## Development

- `pnpm dev` - Start development
- `pnpm build` - Production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code
- `pnpm typecheck` - Type check

## Database

- `pnpm db:generate` - Generate migrations
- `pnpm db:migrate` - Run migrations
- `pnpm db:push` - Push schema changes
- `pnpm db:studio` - Open DB GUI

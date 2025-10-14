# AGENTS.md

This file provides guidance for AI agents working on this codebase.

## Project Overview

**Next.js Boilerplate Base** is a modern Next.js application built with the App Router architecture, featuring a clean and organized structure for scalable web applications.

### Tech Stack

- **Framework**: Next.js 15.5.4 (with Turbopack)
- **Runtime**: Bun
- **Language**: TypeScript 5.9.2
- **UI**: React 19.1.1
- **Styling**: Tailwind CSS 4.1.13
- **Linting & Formatting**: Biome 2.2.4

## Project Structure

```
/
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   ├── core/             # Core configurations and utilities
│   │   ├── config/       # Application configuration
│   │   ├── lib/          # Third-party library integrations
│   │   ├── providers/    # React context providers
│   │   └── styles/       # Global styles
│   ├── features/         # Feature-based modules
│   ├── shared/           # Shared resources across features
│   │   ├── components/   # Reusable UI components
│   │   ├── constants/    # Application constants
│   │   ├── hooks/        # Custom React hooks
│   │   └── utils/        # Utility functions
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
└── [config files]        # Configuration files (biome, tsconfig, etc.)
```

## Coding Standards

### File Naming Conventions

**CRITICAL**: All files MUST follow **kebab-case** naming convention.

- ✅ `user-profile.tsx`
- ✅ `api-client.ts`
- ✅ `use-auth.ts`
- ❌ `UserProfile.tsx`
- ❌ `apiClient.ts`
- ❌ `useAuth.ts`

This is enforced by Biome's `useFilenamingConvention` rule.

### Code Style

- **Indentation**: Tabs (width: 2)
- **Quotes**: Single quotes for JavaScript/TypeScript
- **Semicolons**: Not required (ASI - Automatic Semicolon Insertion)
- **Import Organization**:
  1. Node.js built-in modules (`:NODE:`) and Bun modules (`:BUN:`)
  2. Blank line
  3. Local imports with `@/` alias

### Naming Conventions

#### Variables
- **Format**: `camelCase`, `CONSTANT_CASE`, or `PascalCase`
- **Minimum length**: 2 characters

#### Types & Interfaces
- **Type Aliases**: Must end with `Type` or `Props` (e.g., `UserType`, `ButtonProps`)
- **Interfaces**: Must end with `Props`, `Dto`, or `Response` (e.g., `ApiResponse`, `FormProps`)
- **Format**: `PascalCase`

#### Enums
- **Format**: `PascalCase` for enum name
- **Members**: `PascalCase` or `CONSTANT_CASE`

#### Functions & Components
- **React Components**: Use function components (enforced by `useReactFunctionComponents`)
- **Format**: `PascalCase` for components, `camelCase` for functions
- **Max Parameters**: 4 parameters maximum

#### Object Properties
- **Format**: `camelCase` or `snake_case`

### TypeScript Guidelines

- Import types using `import type` syntax when possible
- Use shorthand array syntax: `string[]` instead of `Array<string>`
- Avoid implicit coercions
- Use exhaustive dependency arrays in React hooks
- Place hooks at the top level only

### React Best Practices

- No `children` prop (use composition instead)
- Use JSX keys in iterables
- Avoid async client components in Next.js
- No `<img>` element (use Next.js `<Image>` component)
- Use semantic HTML elements
- Include proper ARIA attributes

### Security & Performance

- No `target="_blank"` without `rel="noopener noreferrer"`
- Avoid `process.env` directly (use `env` class from `@/core/config/env`)
- Use static response methods in Next.js routes

### Accessibility

- Always include alt text for images
- Use valid ARIA props and roles
- Include `lang` attribute in HTML
- Use semantic elements
- Ensure button elements have explicit `type` attribute

## Environment Variables

This project uses a unified `Env` class with Zod validation for type-safe environment variable management. The system automatically prevents access to server-only variables from the client side.

### Usage

```typescript
// Import the singleton instance
import { env } from '@/core/config/env'

// Access any environment variable (shared, client, or server)
const appName = env.get('APP_NAME')        // Server-only variable
const nodeEnv = env.get('NODE_ENV')        // Shared variable (accessible everywhere)

// Attempting to access server variables on the client will throw an error
// This protection is automatic based on the schema configuration
```

### Architecture

The environment system is split into three schemas:

1. **Shared Schema** (`SHARED_SCHEMA`): Variables accessible on both client and server
   - Example: `NODE_ENV`, `VERCEL_ENV`
   - Defined in `src/core/config/env/schemas.ts`

2. **Client Schema** (`CLIENT_SCHEMA`): Variables accessible only on the client
   - Must be prefixed with `NEXT_PUBLIC_` by Next.js convention
   - Defined in `src/core/config/env/schemas.ts`

3. **Server Schema** (`SERVER_SCHEMA`): Variables accessible only on the server
   - Should NEVER have `NEXT_PUBLIC_` prefix
   - Automatically protected from client-side access
   - Defined in `src/core/config/env/schemas.ts`

### Key Rules

1. **Server variables are automatically protected**
   - ✅ `APP_NAME`, `DATABASE_URL`, `API_SECRET_KEY` (server-only)
   - ❌ Attempting to access these from client throws an error
   - No need to manually check if you're on the server

2. **Use the same `env.get()` method everywhere**
   - The class automatically handles client vs server context
   - TypeScript provides autocompletion for all defined variables

3. **Validation happens automatically**
   - Server: validates all schemas (shared + client + server) at startup
   - Client: validates only safe schemas (shared + client) on first access
   - Missing or invalid variables throw descriptive errors

### Configuration

Schemas are defined in `src/core/config/env/schemas.ts`:

```typescript
// Server-only variables
const SERVER_SCHEMA = z.object({
  APP_NAME: z.string().default('Next.js Boilerplate'),
  DATABASE_URL: z.string().url(),  // Add new server variable
})

// Client-safe variables (must be prefixed with NEXT_PUBLIC_)
const CLIENT_SCHEMA = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),  // Add new client variable
})

// Variables accessible everywhere
const SHARED_SCHEMA = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
})
```

### Example Usage

```typescript
// Server Component or API Route
import { env } from '@/core/config/env'

export default function ServerComponent() {
  const appName = env.get('APP_NAME')        // ✅ Works on server
  const nodeEnv = env.get('NODE_ENV')        // ✅ Works everywhere
  
  return <div>{appName}</div>
}

// Client Component
'use client'
import { env } from '@/core/config/env'

export default function ClientComponent() {
  const nodeEnv = env.get('NODE_ENV')        // ✅ Works (shared variable)
  // const appName = env.get('APP_NAME')     // ❌ Throws error (server-only)
  
  return <div>{nodeEnv}</div>
}
```

## Path Aliases

Use the `@/` alias to import from the `src` directory:

```typescript
import { Button } from '@/shared/components/button'
import { API_URL } from '@/shared/constants/api'
import { useAuth } from '@/shared/hooks/use-auth'
import { env } from '@/core/config/env'
```

## Commands

```bash
# Development
bun run dev          # Start development server with Turbopack

# Build
bun run build        # Build for production with Turbopack

# Production
bun run start        # Start production server

# Code Quality
bun run lint         # Check code with Biome
bun run format       # Format code with Biome
```

## Development Workflow

1. **Creating New Files**: Always use kebab-case naming
2. **Adding Features**: Place feature-specific code in `src/features/[feature-name]/`
3. **Shared Code**: Place reusable components, hooks, and utils in `src/shared/`
4. **Type Definitions**: Add shared types in `src/types/`
5. **Styling**: Global styles go in `src/core/styles/`, component styles use Tailwind classes
6. **Configuration**: App-level config goes in `src/core/config/`
7. **Agent Documentation**: When creating documentation, architecture notes, or analysis as an AI agent, place them in `.agent/` directory at the root level
8. **Project Documentation**: Human-written project documentation goes in `docs/` directory

## Common Patterns

### Creating a Component

```typescript
// src/shared/components/button.tsx
import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
	variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
	return (
		<button className={`btn btn-${variant}`} type="button" {...props}>
			{props.children}
		</button>
	)
}
```

### Creating a Custom Hook

```typescript
// src/shared/hooks/use-local-storage.ts
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
	// Implementation
}
```

### Creating a Type

```typescript
// src/types/user.ts
export interface UserDto {
	id: string
	name: string
	email: string
}

export type UserStatusType = 'active' | 'inactive' | 'pending'
```

## Error Prevention

### Avoid These Common Mistakes

1. ❌ Using `PascalCase` for filenames
2. ❌ Importing without `import type` for type-only imports
3. ❌ Using `console.log` (enforced by Biome)
4. ❌ Using more than 4 function parameters
5. ❌ Using `var` keyword
6. ❌ Missing alt text on images
7. ❌ Using `<img>` instead of Next.js `<Image>`
8. ❌ Accessing `process.env` directly in components

### Best Practices

1. ✅ Use kebab-case for all filenames
2. ✅ Organize imports properly (Node → blank line → local)
3. ✅ Use `import type` for type imports
4. ✅ Keep components focused and single-purpose
5. ✅ Use TypeScript strictly (no `any` types)
6. ✅ Follow accessibility guidelines
7. ✅ Use Next.js optimized components (`<Image>`, `<Link>`)
8. ✅ Leverage the `@/` path alias

## Additional Notes

- The project uses **Turbopack** for faster builds
- Biome is configured with strict rules for code quality
- The codebase enforces both Next.js and React recommended practices
- All code must be ASCII-compatible
- Version control is managed with Git (default branch: `main`)

## Getting Help

When uncertain about implementation details:
1. Check existing patterns in similar files
2. Review Biome configuration in `biome.json`
3. Consult TypeScript paths in `tsconfig.json`
4. Follow Next.js App Router conventions

---

**Last Updated**: October 7, 2025
**Project Version**: 0.0.1

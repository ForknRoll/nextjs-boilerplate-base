# Environment Variables

This project uses a unified `Env` class with Zod validation for type-safe environment variable management. The system automatically prevents access to server-only variables from the client side.

## Usage

```typescript
// Import the singleton instance
import { env } from '@/core/config/env'

// Access any environment variable (shared, client, or server)
const appName = env.get('APP_NAME')        // Server-only variable
const nodeEnv = env.get('NODE_ENV')        // Shared variable (accessible everywhere)

// Attempting to access server variables on the client will throw an error
// This protection is automatic based on the schema configuration
```

## Architecture

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

## Key Rules

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

## Configuration

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

## Example Usage

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

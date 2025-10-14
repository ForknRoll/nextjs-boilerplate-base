# Path Aliases

Use the `@/` alias to import from the `src` directory:

```typescript
import { Button } from '@/shared/components/button'
import { API_URL } from '@/shared/constants/api'
import { useAuth } from '@/shared/hooks/use-auth'
import { env } from '@/core/config/env'
```

## Path Configuration

The `@/` alias is configured in `tsconfig.json` and points to the `src` directory, allowing for clean and consistent imports throughout the application without relative path complexity.

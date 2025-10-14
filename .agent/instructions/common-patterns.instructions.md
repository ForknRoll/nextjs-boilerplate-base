# Common Patterns

## Creating a Component

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

## Creating a Custom Hook

```typescript
// src/shared/hooks/use-local-storage.ts
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
	// Implementation
}
```

## Creating a Type

```typescript
// src/types/user.ts
export interface UserDto {
	id: string
	name: string
	email: string
}

export type UserStatusType = 'active' | 'inactive' | 'pending'
```

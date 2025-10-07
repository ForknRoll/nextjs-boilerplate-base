import type { ReactNode } from 'react'

/**
 * A readonly type that represents the children prop commonly used in React components.
 *
 * @example
 * ```typescript
 * const MyComponent: React.FC<ChildrenProps> = ({ children }) => {
 *   return <div>{children}</div>;
 * };
 * ```
 */
export interface ChildrenProps {
	readonly children: ReactNode
}

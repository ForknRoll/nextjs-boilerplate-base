# Coding Standards

## File Naming Conventions

**CRITICAL**: All files MUST follow **kebab-case** naming convention.

- ✅ `user-profile.tsx`
- ✅ `api-client.ts`
- ✅ `use-auth.ts`
- ❌ `UserProfile.tsx`
- ❌ `apiClient.ts`
- ❌ `useAuth.ts`

This is enforced by Biome's `useFilenamingConvention` rule.

## Code Style

- **Indentation**: Tabs (width: 2)
- **Quotes**: Single quotes for JavaScript/TypeScript
- **Semicolons**: Not required (ASI - Automatic Semicolon Insertion)
- **Import Organization**:
  1. Node.js built-in modules (`:NODE:`) and Bun modules (`:BUN:`)
  2. Blank line
  3. Local imports with `@/` alias

## Naming Conventions

### Variables
- **Format**: `camelCase`, `CONSTANT_CASE`, or `PascalCase`
- **Minimum length**: 2 characters

### Types & Interfaces
- **Type Aliases**: Must end with `Type` or `Props` (e.g., `UserType`, `ButtonProps`)
- **Interfaces**: Must end with `Props`, `Dto`, or `Response` (e.g., `ApiResponse`, `FormProps`)
- **Format**: `PascalCase`

### Enums
- **Format**: `PascalCase` for enum name
- **Members**: `PascalCase` or `CONSTANT_CASE`

### Functions & Components
- **React Components**: Use function components (enforced by `useReactFunctionComponents`)
- **Format**: `PascalCase` for components, `camelCase` for functions
- **Max Parameters**: 4 parameters maximum

### Object Properties
- **Format**: `camelCase` or `snake_case`

## TypeScript Guidelines

- Import types using `import type` syntax when possible
- Use shorthand array syntax: `string[]` instead of `Array<string>`
- Avoid implicit coercions
- Use exhaustive dependency arrays in React hooks
- Place hooks at the top level only

## React Best Practices

- No `children` prop (use composition instead)
- Use JSX keys in iterables
- Avoid async client components in Next.js
- No `<img>` element (use Next.js `<Image>` component)
- Use semantic HTML elements
- Include proper ARIA attributes

## Security & Performance

- No `target="_blank"` without `rel="noopener noreferrer"`
- Avoid `process.env` directly (use `env` class from `@/core/config/env`)
- Use static response methods in Next.js routes

## Accessibility

- Always include alt text for images
- Use valid ARIA props and roles
- Include `lang` attribute in HTML
- Use semantic elements
- Ensure button elements have explicit `type` attribute

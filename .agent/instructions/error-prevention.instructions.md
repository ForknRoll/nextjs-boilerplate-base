# Error Prevention

## Avoid These Common Mistakes

1. ❌ Using `PascalCase` for filenames
2. ❌ Importing without `import type` for type-only imports
3. ❌ Using `console.log` (enforced by Biome)
4. ❌ Using more than 4 function parameters
5. ❌ Using `var` keyword
6. ❌ Missing alt text on images
7. ❌ Using `<img>` instead of Next.js `<Image>`
8. ❌ Accessing `process.env` directly in components

## Best Practices

1. ✅ Use kebab-case for all filenames
2. ✅ Organize imports properly (Node → blank line → local)
3. ✅ Use `import type` for type imports
4. ✅ Keep components focused and single-purpose
5. ✅ Use TypeScript strictly (no `any` types)
6. ✅ Follow accessibility guidelines
7. ✅ Use Next.js optimized components (`<Image>`, `<Link>`)
8. ✅ Leverage the `@/` path alias

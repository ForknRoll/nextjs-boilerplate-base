# Development Workflow

## File Organization

1. **Creating New Files**: Always use kebab-case naming
2. **Adding Features**: Place feature-specific code in `src/features/[feature-name]/`
3. **Shared Code**: Place reusable components, hooks, and utils in `src/shared/`
4. **Type Definitions**: Add shared types in `src/types/`
5. **Styling**: Global styles go in `src/core/styles/`, component styles use Tailwind classes
6. **Configuration**: App-level config goes in `src/core/config/`
7. **Agent Documentation**: When creating documentation, architecture notes, or analysis as an AI agent, place them in `.agent/` directory at the root level
8. **Project Documentation**: Human-written project documentation goes in `docs/` directory

## Getting Help

When uncertain about implementation details:
1. Check existing patterns in similar files
2. Review Biome configuration in `biome.json`
3. Consult TypeScript paths in `tsconfig.json`
4. Follow Next.js App Router conventions

# AGENTS.md

Lightweight index and entry point for agent instructions used by this repository.

This file provides a quick reference and points to the canonical, modular instruction files located in `.agent/instructions/`. The VS Code settings are configured to use `.agent/instructions` as the source of truth for chat/agent behavior.

## Quick Reference

### Project Overview
- **Framework**: Next.js 15.5.4 (App Router + Turbopack)
- **Runtime**: Bun
- **Language**: TypeScript 5.9.2
- **UI**: React 19.1.1
- **Styling**: Tailwind CSS 4.1.13
- **Linting**: Biome 2.2.4

📄 **Full details**: [.agent/instructions/project-overview.instructions.md](.agent/instructions/project-overview.instructions.md)

### Build and Test Commands

```bash
# Development
bun run dev          # Start dev server with Turbopack

# Build
bun run build        # Production build with Turbopack

# Production
bun run start        # Start production server

# Code Quality
bun run lint         # Check code with Biome
bun run format       # Format code with Biome
```

📄 **Full details**: [.agent/instructions/commands.instructions.md](.agent/instructions/commands.instructions.md)

### Code Style Guidelines

**CRITICAL**: All files MUST use **kebab-case** naming:
- ✅ `user-profile.tsx`, `api-client.ts`, `use-auth.ts`
- ❌ `UserProfile.tsx`, `apiClient.ts`, `useAuth.ts`

**Key Rules**:
- Indentation: Tabs (width: 2)
- Quotes: Single quotes
- Semicolons: Optional (ASI)
- Import order: Node/Bun modules → blank line → local `@/` imports
- Type imports: Use `import type` when possible
- Components: Function components only (PascalCase)
- Functions: camelCase, max 4 parameters

📄 **Full details**: [.agent/instructions/coding-standards.instructions.md](.agent/instructions/coding-standards.instructions.md)

### Testing Instructions

Currently, this project does not have a testing framework configured. When implementing tests:

1. Use a testing framework compatible with Next.js 15 and React 19
2. Follow the same kebab-case naming convention for test files
3. Place unit tests alongside source files or in `__tests__` directories
4. Place integration/e2e tests in a dedicated `tests/` directory at root
5. Ensure all tests pass before merging code

📄 **Patterns and examples**: [.agent/instructions/common-patterns.instructions.md](.agent/instructions/common-patterns.instructions.md)

### Security Considerations

**Environment Variables**:
- ✅ Use `env.get()` from `@/core/config/env` (Zod-validated, type-safe)
- ❌ Never access `process.env` directly
- ❌ Never expose server-only variables to client (no `NEXT_PUBLIC_` prefix for secrets)

**Links and Navigation**:
- ✅ Always use `rel="noopener noreferrer"` with `target="_blank"`
- ✅ Use Next.js `<Link>` component for internal navigation

**Content Security**:
- ✅ Validate and sanitize user input
- ✅ Use Next.js `<Image>` component (automatic optimization)
- ❌ Never use `<img>` tag directly

**Accessibility & Security**:
- ✅ Include alt text for images
- ✅ Use semantic HTML elements
- ✅ Include proper ARIA attributes
- ✅ Use `lang` attribute in HTML

📄 **Full details**: [.agent/instructions/error-prevention.instructions.md](.agent/instructions/error-prevention.instructions.md)

## Modular Instruction Files

All detailed instructions are maintained in separate files for easier navigation and maintenance:

- **[project-overview.instructions.md](.agent/instructions/project-overview.instructions.md)** — Tech stack, architecture, project structure
- **[coding-standards.instructions.md](.agent/instructions/coding-standards.instructions.md)** — Naming conventions, code style, TypeScript rules
- **[environment-variables.instructions.md](.agent/instructions/environment-variables.instructions.md)** — Env var management with Zod validation
- **[path-aliases.instructions.md](.agent/instructions/path-aliases.instructions.md)** — Import path configuration
- **[commands.instructions.md](.agent/instructions/commands.instructions.md)** — Available npm/bun scripts
- **[development-workflow.instructions.md](.agent/instructions/development-workflow.instructions.md)** — File organization and workflow
- **[common-patterns.instructions.md](.agent/instructions/common-patterns.instructions.md)** — Code examples and patterns
- **[error-prevention.instructions.md](.agent/instructions/error-prevention.instructions.md)** — Common mistakes and best practices

## Maintenance

- **Source of truth**: `.agent/instructions/*.instructions.md`
- **VS Code chat settings**: `.vscode/settings.json` → `chat.instructionsFilesLocations`
- **Update workflow**: Edit individual `.instructions.md` files, then regenerate this index if needed

To regenerate a combined version from fragments (optional):
```bash
cat .agent/instructions/*.instructions.md > AGENTS_COMBINED.md
```

---

**Last Updated**: October 13, 2025  
**Project Version**: 0.0.1

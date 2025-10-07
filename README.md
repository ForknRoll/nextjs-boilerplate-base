# Next.js Boilerplate Base

A modern, production-ready Next.js boilerplate with a clean architecture and best practices built-in.

## 🚀 Tech Stack

- **Framework**: [Next.js 15.5.4](https://nextjs.org) with App Router & Turbopack
- **Runtime**: [Bun](https://bun.sh)
- **Language**: TypeScript 5.9.2
- **UI Library**: React 19.1.1
- **Styling**: Tailwind CSS 4.1.13
- **Code Quality**: Biome 2.2.4 (linting & formatting)

## ✨ Features

- 🎯 **Clean Architecture**: Organized folder structure with clear separation of concerns
- 🚀 **Turbopack**: Lightning-fast builds and hot module replacement
- 📁 **Feature-Based Structure**: Scalable organization for growing applications
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- 🔒 **Type-Safe**: Full TypeScript support with strict configuration
- 📏 **Code Standards**: Enforced conventions via Biome (kebab-case files, consistent formatting)
- ♿ **Accessibility**: Built-in rules for accessible components
- 🎭 **Path Aliases**: Clean imports with `@/` alias

## 📂 Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
├── core/             # Core configurations and utilities
│   ├── config/       # Application configuration
│   ├── lib/          # Third-party library integrations
│   ├── providers/    # React context providers
│   └── styles/       # Global styles
├── features/         # Feature-based modules
├── shared/           # Shared resources across features
│   ├── components/   # Reusable UI components
│   ├── constants/    # Application constants
│   ├── hooks/        # Custom React hooks
│   └── utils/        # Utility functions
└── types/            # TypeScript type definitions
```

## 🏃 Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your machine

### Installation

1. Clone or use this repository as a template
2. Install dependencies:

```bash
bun install
```

3. Run the development server:

```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

```bash
bun run dev          # Start development server with Turbopack
bun run build        # Build for production
bun run start        # Start production server
bun run lint         # Check code with Biome
bun run format       # Format code with Biome
```

## 🎯 Development Guidelines

### File Naming

**All files must use kebab-case:**
- ✅ `user-profile.tsx`
- ✅ `use-auth.ts`
- ❌ `UserProfile.tsx`
- ❌ `useAuth.ts`

### Import Organization

```typescript
// 1. Node.js built-in modules
import { readFile } from 'node:fs'

// 2. Blank line

// 3. Local imports with @/ alias
import { Button } from '@/shared/components/button'
import { useAuth } from '@/shared/hooks/use-auth'
```

### Naming Conventions

- **Components**: PascalCase function components
- **Variables**: camelCase, CONSTANT_CASE, or PascalCase
- **Types**: Must end with `Type` (e.g., `UserType`)
- **Interfaces**: Must end with `Props`, `Dto`, or `Response`
- **Functions**: camelCase, max 4 parameters

### React Best Practices

- Use Next.js `<Image>` component instead of `<img>`
- Use Next.js `<Link>` component for navigation
- Always include `alt` text for images
- Use semantic HTML elements
- Include proper ARIA attributes

For detailed guidelines, see [AGENTS.md](./AGENTS.md).

## 🔧 Configuration

- **TypeScript**: `tsconfig.json` - Strict mode enabled
- **Biome**: `biome.json` - Linting and formatting rules
- **Tailwind**: `postcss.config.mjs` - CSS processing
- **Next.js**: `next.config.ts` - Framework configuration

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Bun Documentation](https://bun.sh/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Biome Documentation](https://biomejs.dev)

## 🚀 Deployment

This boilerplate is optimized for deployment on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ForknRoll/nextjs-boilerplate-base)

For other platforms, build the project with `bun run build` and deploy the `.next` folder.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js Boilerplate Base**

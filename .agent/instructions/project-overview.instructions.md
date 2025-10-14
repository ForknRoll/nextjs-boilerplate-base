# Project Overview

**Next.js Boilerplate Base** is a modern Next.js application built with the App Router architecture, featuring a clean and organized structure for scalable web applications.

## Tech Stack

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

## Additional Notes

- The project uses **Turbopack** for faster builds
- Biome is configured with strict rules for code quality
- The codebase enforces both Next.js and React recommended practices
- All code must be ASCII-compatible
- Version control is managed with Git (default branch: `main`)

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Build the library (production by default)
ng build

# Build in watch mode (development)
npm run watch

# Run unit tests (Vitest)
ng test

# Serve (no app project exists; library-only workspace)
# Use npm link workflow instead — see below
```

## Library Publishing / Local Linking

The workspace contains a single Angular library (`angular-library-playground`). There is no standalone app project. To consume the library locally:

```bash
# 1. Build the library
ng build

# 2. npm link the dist output
npm run link
# (runs: cd ./dist/angular-library-playground && npm link)

# 3. In a consumer project
npm link angular-library-playground
```

## Architecture

This is an **Angular CLI workspace** (`angular.json` version 1) that contains a single **Angular library** project, built with `ng-packagr`.

- `projects/angular-library-playground/` — the library source
  - `src/public-api.ts` — the public API entry point; all exports that consumers should access must be re-exported here
  - `src/lib/` — library implementation files
  - `ng-package.json` — ng-packagr config; output goes to `dist/angular-library-playground`
- `dist/angular-library-playground/` — build output (not committed); also mapped in `tsconfig.json` `paths` as `angular-library-playground` for internal consumption
- Tests use **Vitest** (not Karma/Jasmine). Test files are `*.spec.ts` and use `vitest/globals` types.

## Code Style

Prettier is configured in `package.json`:
- `printWidth: 100`
- `singleQuote: true`
- HTML files use the `angular` parser
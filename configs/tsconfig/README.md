# Typescript Configuration Files

## Description

tsconfig holds the typescript configuration for the mono-repo

tsconfig
├── README.md
├── base.json
├── nextjs.json
├── nodejs.json
├── package.json
├── react-library.json
└── vite.json

## Default configuration (`base.json`)

This is the base configuration which will be extended by all other configs.

Let's break down the key elements of the `base.json` configuration:
The `base.json` configuration provides a set of default options for TypeScript compilation. It sets the target ECMAScript version, module system, compiler options, and directory configurations. It can be extended and customized for different project requirements.

## Next.js configuration (`nextjs.json`)

The `nextjs.json` file that extends from a base configuration (`base.json`) and is specifically tailored for a Next.js project. Let's break down the key elements of this configuration:

This configuration is optimized for Next.js projects, taking into account the specific requirements and conventions of the Next.js framework. It extends from the `base.json` file, allowing you to maintain a common set of configuration options shared across multiple projects while customizing certain settings for Next.js-specific needs.

## Node.js configuration (`nodejs.json`)

This configuration is optimized for a CommonJS module system, targeting the ES5 version, and includes type definitions for Node.js. It extends from the base.json configuration, allowing you to maintain a common set of configuration options shared across multiple projects while customizing certain settings for this specific project.

## React library configuration (`react-library.json`)

This configuration is tailored for a React library project. It extends from the base.json configuration, allowing you to maintain a common set of configuration options shared across multiple projects while customizing certain settings for this specific project.

## Vite configuration (`vite.json`)

This configuration is tailored for a Vite project using TypeScript. It extends from the base.json configuration, allowing you to maintain a common set of configuration options shared across multiple projects while customizing certain settings for this specific project.

# Showcase

[![status-image]][status-link]
[![coverage-image]][coverage-link]

## Overview

This project is a showcase of profiles for political figures.

## Structure of the Project

The project has the following structure:

```text
├── README.md
├── apps # Directory for applications
│ └── web # Web application built using Next.js
├── configs # Configuration files, including tsconfig, jest, eslint
├── tools # Node.js scripts and tools
│ └── utils # Utility scripts and tools

```

## Using the Project

To use this mono-repo project, please follow these steps:

First, prepare your development environment. You need to install Node version 16.0.0 or higher. Additionally, install `turbo` and `pnpm` globally by running the following commands:

```bash
npm install -g pnpm
npm install -g turbo
```

Next, clone the mono-repo:

```bash
# Clone the repository (using HTTPS)
git clone https://github.com/neekware/showcase.git

# Change directory into the cloned repository
cd showcase

# Install dependencies
pnpm i
```

You can format all files of a specific type:

```bash
# Example: Format all .ts, .tsx, .json, .html, .css, .scss files
pnpm format
```

To run lint, build and test.

```bash
# lint all apps/packages
turbo lint

# build all apps/packages
turbo build

# test all apps/packages
turbo test
```

To run code coverage, coveralls (note: ci/cd).

```bash
# run test with coverage for all apps/packages
turbo coverage

# combine test coverage for all apps/packages
turbo coveralls
```

To clean build,test,lint cache artifact.

```bash
# clean all lint, build, test, ... etc. artifacts
turbo clean
```

To execute long-running processes.

```bash
# run the apps in development (watch mode)
turbo dev

# run the apps from the `build` artifacts (prod mode)
turbo start
```

### To Install New Packages

To install new packages, you can use the following commands:

```bash
# Install an external dependency at the root/top-level in the main package.json
pnpm -w add <external-lib-name>

# Install a external development dependency at the root/top-level in the main package.json
pnpm -w add <external-lib-name> -D

# Install a dependency in a sub-package (lib/app) ONLY
# Example: pnpm --filter=ui add uuid
# (where "ui" is the internal package name and "uuid" is the external dependency)
pnpm --filter=<internal-package-name> add <external-lib-name>
```

### Contribution

To contribute to the repository.

- Fork the repository on GitHub.
- Clone the repository locally.
- Set up your environment and install global dependencies.
- Install the recommended plugins (e.g., VSCode).
- Make modifications, fix bugs, and add new features.
- Write unit tests for your new logic.
- Format, lint, test, and build.
- Commit your changes to your own repository.
- Merge your changes into the `sandbox` branch in your repository.
- Issue a pull request (PR) from your `repo/sandbox` to `showcase/sandbox`.
- Monitor your PR for further instructions and recommended fixes, if required.
- Sync your forked repository with the upstream showcase repository.
- Rinse and repeat.

### Community Guidelines

- There are no guarantees that all PRs will be accepted.
- Respect each other and be objective when raising PRs, making comments, etc.
- Enjoy contributing to the mono-repo.

## License

- Released under a ([MIT](https://raw.githubusercontent.com/neekware/showcase/main/LICENSE.md)) license.

## Version

X.Y.Z Semantic Versioning

    `MAJOR` version -- making incompatible API changes
    `MINOR` version -- adding functionality in a backwards-compatible manner
    `PATCH` version -- making backwards-compatible bug fixes

## Lines of Code (auto-generated stats)

```txt<br>--------------------------------------------------------------------------------
 Language             Files        Lines        Blank      Comment         Code
--------------------------------------------------------------------------------
 YAML                     2         7055          966            0         6089
 JSON                    23          442            0            0          442
 Markdown                11          306           93            0          213
 TypeScript               9          285           38           49          198
 JavaScript              13          148            0           21          127
 Typescript JSX           8          135           10            0          125
 CSS                      1            4            0            0            4
--------------------------------------------------------------------------------
 Total                   67         8375         1107           70         7198
--------------------------------------------------------------------------------
```

## Sponsors

[ [Neekware Inc.](http://neekware.com) ]

[status-image]: https://github.com/neekware/showcase/actions/workflows/ci.yml/badge.svg
[status-link]: https://github.com/neekware/showcase/actions/workflows/ci.yml
[version-image]: https://img.shields.io/npm/v/@showcase.svg
[version-link]: https://www.npmjs.com/settings/showcase/packages
[coverage-image]: https://coveralls.io/repos/neekware/showcase/badge.svg
[coverage-link]: https://coveralls.io/r/neekware/showcase

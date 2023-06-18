# Eslint Custom Config

## Description

This configuration is for react and nextjs application and libraries.

## Naming convention

The `eslint-config-{configName}` is a naming convention for shareable ESLint configurations that are published as separate npm packages.

Here we name it `eslint-config-{custom}`

.eslintrc.js should extend this module with "custom".

Example:

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  extends: ['custom'],
};
```

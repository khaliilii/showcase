# Eslint Custom Config - Server

## Description

This configuration is for modules that run on `nodejs`.

## Naming convention

The `eslint-config-{configName}` is a naming convention for shareable ESLint configurations that are published as separate npm packages.

Here we name it `eslint-config-{custom-server}`

.eslintrc.js should extend this module with "custom-server".

Example:

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  extends: ['custom-server'],
};
```

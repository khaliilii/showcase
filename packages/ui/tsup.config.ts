import { Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  banner: {
    js: "'use client'",
  },
  ...options,
}));

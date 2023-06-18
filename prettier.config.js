/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: 'lf',
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: 'es5',
  importOrder: [
    '^(react/(.*)$)|^(react-(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next-(.8)$)|^(next$)',
    '^@showcase/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  singleQuote: true,
  overrides: [
    {
      files: '**/*.html',
      options: {
        printWidth: 100,
      },
    },
    {
      files: '**/*.ts',
      options: {
        printWidth: 80,
      },
    },
    {
      files: '**/*.tsx',
      options: {
        printWidth: 80,
      },
    },
    {
      files: '**/*.json',
      options: {
        printWidth: 80,
      },
    },
    {
      files: '**/*.js',
      options: {
        printWidth: 80,
      },
    },
  ],
};

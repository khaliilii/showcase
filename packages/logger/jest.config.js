// Jest configuration for the ui package
module.exports = {
  preset: 'jest-presets/jest/node',
  displayName: 'logger',
  rootDir: '.',
  coverageDirectory: '../../coverage/logger',
  coverageReporters: ['html', 'json', ['lcov', { projectRoot: '../..' }]],
};

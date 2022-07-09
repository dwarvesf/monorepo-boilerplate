// Add any custom config to be passed to Jest
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/scripts/'],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: false,
  globals: {
    'ts-jest': {
      babelConfig: true,
      diagnostics: false,
    },
  },
  preset: 'ts-jest',
  collectCoverageFrom: [
    '**/*.(ts|tsx)',
    '!**/*.d.ts',
    '!**/*.stories.js',
    '!**/*.stories.tsx',
    '!**/__stubs__/**',
  ],
  coverageProvider: 'v8',
}

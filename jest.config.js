module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/dist/'
    ],
    moduleNameMapper: {
      '@app/(.*)': '<rootDir>/src/app/$1',
      '@env/(.*)': '<rootDir>/src/environments/$1'
    },
    collectCoverage: true,
    coverageReporters: ['text', 'lcov', 'html'],
    coverageDirectory: 'coverage',
    // Set coverage thresholds if desired
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
      }
    }
  };
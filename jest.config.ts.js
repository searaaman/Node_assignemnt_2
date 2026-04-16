import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    // This is crucial: it maps your TS files to the expected ESM format
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    // This ensures ts-jest handles ALL .ts files
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
};

export default jestConfig;
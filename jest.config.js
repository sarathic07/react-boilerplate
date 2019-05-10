module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "jsx"],
  setupFiles: ["<rootDir>/enzyme.config.js"],
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testURL: "http://localhost",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: true,
  snapshotSerializers: ["enzyme-to-json/serializer"],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};

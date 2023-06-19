module.exports = {
    name: "javascript-asynchronism-kata",
    verbose: false,
    testMatch: ["**/*.test.js"],
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements:61,
        branches: 40,
        lines: 67,
        functions: 72,
      },
    },
  };
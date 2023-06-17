module.exports = {
    name: "javascript-asynchronism-kata",
    verbose: false,
    testMatch: ["**/*.test.js"],
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements:77,
        branches: 25,
        lines: 77,
        functions: 100,
      },
    },
  };
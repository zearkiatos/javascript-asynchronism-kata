module.exports = {
  name: "javascript-asynchronism-kata",
  verbose: false,
  testMatch: ["**/*.test.js"],
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 53,
      lines: 84,
      functions: 89,
    },
  },
};

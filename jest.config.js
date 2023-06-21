module.exports = {
  name: "javascript-asynchronism-kata",
  verbose: false,
  testMatch: ["**/*.test.js"],
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      statements: 79,
      branches: 53,
      lines: 83,
      functions: 89,
    },
  },
};

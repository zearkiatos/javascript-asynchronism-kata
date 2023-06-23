module.exports = {
  name: "javascript-asynchronism-kata",
  verbose: false,
  testMatch: ["**/*.test.js"],
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      statements: 82,
      branches: 62,
      lines: 85,
      functions: 91,
    },
  },
};

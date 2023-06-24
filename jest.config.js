module.exports = {
  name: "javascript-asynchronism-kata",
  verbose: false,
  testMatch: ["**/*.test.js"],
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      statements: 84,
      branches: 62,
      lines: 87,
      functions: 91,
    },
  },
};

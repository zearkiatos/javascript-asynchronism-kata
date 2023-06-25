import captureErrorRequest from "../../src/async/captureErrorRequest";
describe("Test unit suite test for capture error request", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("Should catch an error an managment the error", async () => {
    const expectedError = new Error("API Not Found");

    try {
      await captureErrorRequest.runCode();
    } catch (ex) {
      expect(ex).toEqual(expectedError);
    }
  });
});

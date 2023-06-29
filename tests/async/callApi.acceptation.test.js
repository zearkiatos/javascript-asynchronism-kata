import callApi from "../../src/async/callApi";
import config from "../../src/config";
describe("Test acceptation suite for api client", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("Should return the data in JSON format", async () => {
    const result = await callApi.runCode(
      `${config.PLATZI_FAKE_API_BASE_URL}/categories`
    );

    expect(typeof result).toBe("object");
    expect(result.length > 0).toBeTruthy();
  });

  test("Should return a throw error when the api url is invalid", async () => {
    const errorMessageExpected = "Invalid URL";
    try {
      await callApi.runCode("----");
    } catch (ex) {
      expect(ex.message).toBe(errorMessageExpected);
    }
  });

  test("Should return a throw error when the api url not exist", async () => {
    const errorMessageExpected = "Something was wrong";
    try {
      await callApi.runCode("https://domain-a.com/api-1");
    } catch (ex) {
      expect(ex.message).toBe(errorMessageExpected);
    }
  });
});

import * as fetch from "node-fetch";
import { fetchData, anotherFunction } from "../../src/async/challenge";
import config from "../../src/config";
import { sleep } from "../utils/testUtils";

describe("Test acceptation suite with asynchronism", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("Should get product data", async () => {
    const fetchSpyOn = jest.spyOn(fetch, "default");
    const apiUrl = `${config.PLATZI_FAKE_API_BASE_URL}/products`;

    const result = await fetchData(apiUrl);

    expect(fetchSpyOn).toHaveBeenCalled();
    expect(fetchSpyOn).toHaveBeenCalledWith(apiUrl);
    expect(result.length > 0).toBeTruthy();
  });

  test("Should get an error an throw the error", async () => {
    const fetchSpyOn = jest.spyOn(fetch, "default").mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          reject("Something was wrong");
        })
    );
    const consoleLogSpyOn = jest.spyOn(console, "log");
    const apiUrl = `${config.PLATZI_FAKE_API_BASE_URL}/products`;
    const expectedError = "Error: Something was wrong";

    expect(fetchData(apiUrl)).rejects.toEqual("Something was wrong");
    await sleep(2000);
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalledWith(expectedError);
    expect(fetchSpyOn).toHaveBeenCalled();
    expect(fetchSpyOn).toHaveBeenCalledWith(apiUrl);
  });

  test("Should get data in a chain", async () => {
    const fetchSpyOn = jest.spyOn(fetch, "default");
    const consoleLogSpyOn = jest.spyOn(console, "log");

    await anotherFunction(config.PLATZI_FAKE_API_BASE_URL);

    expect(fetchSpyOn).toHaveBeenCalled();
    expect(fetchSpyOn.mock.calls).toHaveLength(3);
    expect(fetchSpyOn.mock.calls[1][0]).toContain(
      `${config.PLATZI_FAKE_API_BASE_URL}/products`
    );
    expect(fetchSpyOn.mock.calls[2][0]).toContain(
      `${config.PLATZI_FAKE_API_BASE_URL}/categories`
    );
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn.mock.calls).toHaveLength(3);
  });
});

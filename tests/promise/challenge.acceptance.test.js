import * as fetch from "node-fetch";
import { fetchData } from "../../src/promise/challenge";
import config from "../../src/config";
import { sleep } from "../utils/testUtils";

describe("Acceptance test suite to call an api with nodefetch", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
  test("Should call the api", async () => {
    const apiUrl = `${config.PLATZI_FAKE_API_BASE_URL}/products`;
    const fetchSpyOn = jest.spyOn(fetch, "default");
    const consoleSpyOn = jest.spyOn(console, "log");
    const expectedMessage = 'Call was successful';

    fetchData(apiUrl)
      .then((response) => response.json())
      .then((products) => {
        console.log(products);
      })
      .then(() => {
        console.log(expectedMessage);
      });
    await sleep(3000);

    expect(fetchSpyOn).toHaveBeenCalled();
    expect(fetchSpyOn).toHaveBeenCalledWith(apiUrl);
    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn.mock.calls).toHaveLength(2);
    expect(consoleSpyOn.mock.calls[1][0]).toBe(expectedMessage);
  });

  test("Should call and send a error", async () => {
    const fakeUrl = `${config.PLATZI_FAKE_API_BASE_URL}products`;
    const fetchSpyOn = jest.spyOn(fetch, "default").mockImplementation(() => new Promise((resolve, reject) => {
      reject('Something was wrong')
    }));
    const consoleSpyOn = jest.spyOn(console, "log");
    const expectedMessage = 'Something was wrong';

    fetchData(fakeUrl)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      })
    await sleep(3000);

    expect(fetchSpyOn).toHaveBeenCalled();
    expect(fetchSpyOn).toHaveBeenCalledWith(fakeUrl);
    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn.mock.calls).toHaveLength(1);
    expect(consoleSpyOn.mock.calls[0][0]).toBe(expectedMessage);
  });
});

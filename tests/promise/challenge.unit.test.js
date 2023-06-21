import * as fetch from "node-fetch";
import { fetchDataMultiply } from "../../src/promise/challenge";
import config from "../../src/config";
import { sleep } from "../utils/testUtils";
import ProductBuilder from "../builders/productBuilder";

describe("Unit test suite to call an api with nodefetch", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("Should call with multiply calls", async () => {
    const apiUrl = `${config.PLATZI_FAKE_API_BASE_URL}`;
    const productsMock = [new ProductBuilder().build()]
    const fetchSpyOn = jest.spyOn(fetch, "default").mockReturnValueOnce(
      new Promise((resolve, reject) => {
        const responseObject = {
          json: () => productsMock,
        };
        resolve(responseObject);
      })
    )
    .mockReturnValueOnce(
        new Promise((resolve, reject) => {
            const responseObject = {
              json: () => productsMock[0],
            };
            resolve(responseObject);
          })
    )
    .mockReturnValueOnce(
        new Promise((resolve, reject) => {
            const responseObject = {
              json: () => productsMock[0].category,
            };
            resolve(responseObject);
          })
    );
    const consoleSpyOn = jest.spyOn(console, "log");

    fetchDataMultiply(apiUrl);
    await sleep(3000);

    expect(fetchSpyOn).toHaveBeenCalled();
    expect(fetchSpyOn).toHaveBeenCalledWith(`${apiUrl}/products`);
    expect(fetchSpyOn.mock.calls[1][0]).toBe(`${apiUrl}/products/311`);
    expect(fetchSpyOn.mock.calls[2][0]).toBe(`${apiUrl}/categories/1`);
    expect(consoleSpyOn.mock.calls).toHaveLength(4);
    expect(consoleSpyOn.mock.calls[0][0]).toBe(productsMock);
    expect(consoleSpyOn.mock.calls[1][0]).toBe(productsMock[0].title);
    expect(consoleSpyOn.mock.calls[2][0]).toBe(productsMock[0].category.name);
    expect(consoleSpyOn.mock.calls[3][0]).toBe('Finally');
  });

  test("Should get an error a catch the error", async () => {
    const apiUrl = `${config.PLATZI_FAKE_API_BASE_URL}`;
    const expectedMessage = 'Something was wrong 🤯'
    const productsMock = [new ProductBuilder().build()]
    const fetchSpyOn = jest.spyOn(fetch, "default").mockReturnValue(
      new Promise((resolve, reject) => {
        reject(expectedMessage);
      })
    );
    const consoleSpyOn = jest.spyOn(console, "log");

    fetchDataMultiply(apiUrl);
    await sleep(3000);

    expect(fetchSpyOn).toHaveBeenCalled();
    expect(fetchSpyOn).toHaveBeenCalledWith(`${apiUrl}/products`);
    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn).toHaveBeenCalledWith(expectedMessage);
    expect(consoleSpyOn.mock.calls[1][0]).toBe('Finally');
  });
});

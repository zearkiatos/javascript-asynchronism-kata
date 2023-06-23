import { faker } from "@faker-js/faker";
import * as fetch from "node-fetch";
import { StatusCodes } from "http-status-codes";
import config from "../../src/config";
import { postData } from "../../src/promise/challenge-post";
import ProductPostBuilder from "../builders/productPostBuilder";
import { sleep } from "../utils/testUtils";
describe("Acceptance suite test for post data", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
  test("Should call the api and save a new data", async () => {
    const fetchSpyOn = jest.spyOn(fetch, "default");
    const consoleSpyOn = jest.spyOn(console, "log");
    const productMock = new ProductPostBuilder()
      .withParam("title", faker.lorem.word(2))
      .withParam("description", faker.lorem.sentence(5))
      .withParam("images", [faker.image.urlLoremFlickr()])
      .withParam("price", faker.number.int(1000))
      .build();
    const apiUrl = `${config.PLATZI_FAKE_API_BASE_URL}/products/`;
    const options = {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productMock),
    };

    postData(apiUrl, productMock).then((response) => {
      response
        .json()
        .then((data) => {
          console.log(data);
          return data;
        })
        .then((data) => {
          console.log(data.title);
        });
    });
    await sleep(2000);

    expect(fetchSpyOn).toHaveBeenCalled();
    expect(fetchSpyOn).toHaveBeenCalledWith(apiUrl, options);
    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn.mock.calls).toHaveLength(2);
    expect(consoleSpyOn.mock.calls[1][0]).toBe(productMock.title);
  });
});

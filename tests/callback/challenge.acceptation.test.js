import { XMLHttpRequest } from "xmlhttprequest";
import challenge from "../../src/callback/challenge";
import config from "../../src/config";
import { sleep } from "../utils/testUtils";

describe("Challenge suite acceptation test", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("Should get an error", () => {
    const consoleLogSpyOn = jest.spyOn(console, "log");

    challenge.fetchData(config.PLATZI_FAKE_API_BASE_URL, (error, data) => {
      if (error) {
        console.log(error);
        return error;
      }
      return data;
    });

    expect(consoleLogSpyOn).toHaveBeenCalled();
  });

  test("Should get data", async () => {
    const fetchData = jest.spyOn(challenge, "fetchData");

    challenge.fetchData(
      `${config.PLATZI_FAKE_API_BASE_URL}/products`,
      (error, data) => {
        if (error) return console.error(error);
        challenge.fetchData(
          `${config.PLATZI_FAKE_API_BASE_URL}/products/${data[0].id}`,
          (error2, data2) => {
            if (error2) return console.error(error2);
            challenge.fetchData(
              `${config.PLATZI_FAKE_API_BASE_URL}/categories/${data2?.category?.id}`,
              (error3, data3) => {
                if (error3) return console.error(error);
                console.log(data[0]);
                console.log(data2.title);
                console.log(data3.name);
              }
            );
          }
        );
      }
    );
    await sleep(3000);

    expect(fetchData).toHaveBeenCalled();
  });
});

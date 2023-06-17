import { XMLHttpRequest } from "xmlhttprequest";
import challenge from "../../src/callback/challenge";
import config from "../../src/config";

describe("Challenge suite acceptation test", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("Should get an error", () => {
    const consoleLogSpyOn = jest.spyOn(console, "log");
    challenge.fetchData(config.PLATZI_FAKE_API_BASE_URL, (error, data) => {
      if(error) {
        console.log(error);
        return error;
      }
      return data;
    });

    expect(consoleLogSpyOn).toHaveBeenCalled();
  });
});

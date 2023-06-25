import { delay } from "../../src/promise/delay";
import { sleep } from "../utils/testUtils";
describe("Unit suite test for delay", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("Should return a message after 2000ms", async () => {
    const consoleSpyOn = jest.spyOn(console, "log");
    const message  = 'Hello after 2s'

    delay(2000, message).then((message) => {
        console.log(message);
    });

    await sleep(3000);

    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn).toHaveBeenCalledWith(message);
  });

  test("Should return a message after 3000ms", async () => {
    const consoleSpyOn = jest.spyOn(console, "log");
    const message  = 'Hello after 3s'

    delay(3000, message).then((message) => {
        console.log(message);
    });

    await sleep(3000);

    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn).toHaveBeenCalledWith(message);
  });
});

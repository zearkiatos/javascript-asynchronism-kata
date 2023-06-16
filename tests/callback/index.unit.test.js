import callback from "../../src/callback";
import { sleep } from "../utils/testUtils";
describe("Callback unit test suites", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("Should sum two elements", () => {
    const sumSpyOn = jest.spyOn(callback, "sum");
    const expectedResult = 4;
    const num1 = 2;
    const num2 = 2;

    const result = callback.calc(num1, num2, callback.sum);

    expect(sumSpyOn).toHaveBeenCalled();
    expect(sumSpyOn).toHaveBeenCalledWith(2, 2);
    expect(result).toBe(expectedResult);
  });

  test("Should call an specific function after the timeout", async () => {
    const setTimeoutSpyOn = jest.spyOn(global, "setTimeout");
    const consoleLogSpyOn = jest.spyOn(console, "log");
    const expectedMessage = "Hello JavaScript";

    callback.callSetTimeout();
    await sleep(2000);

    expect(setTimeoutSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalledWith(expectedMessage);
  });

  test("Should call an specific function after 2 seconds", async () => {
    const setTimeoutSpyOn = jest.spyOn(global, "setTimeout");
    const consoleLogSpyOn = jest.spyOn(console, "log");
    const expectedMessage = "Log after 2s";
    const myFunc = () => console.log(expectedMessage);

    callback.execCallback(myFunc);
    await sleep(2000);

    expect(setTimeoutSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalledWith(expectedMessage);
  });
});

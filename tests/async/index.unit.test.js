import { asyncResolved, asyncRejected } from "../../src/async";
import { sleep } from "../utils/testUtils";
describe("Unit test suite for async functions", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("Should call an async function", async () => {
    const expectedResult = "Async!!";

    const result = await asyncResolved();
    await sleep(2000);

    expect(expectedResult).toBe(result);
  });

  test("Should call an reject the request", async () => {
    const expectedResult = new Error("Some error ocurred! 🤯");

    expect(asyncRejected()).rejects.toEqual(expectedResult);
    await sleep(2000);
  });
});

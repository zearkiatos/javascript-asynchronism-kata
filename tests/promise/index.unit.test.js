import { promise, countCows } from "../../src/promise";
describe("Unit suite test for promise", () => {
  test("Should resolve a promise", async () => {
    const expectedResult = "hey!";

    const result = await promise();

    expect(result).toBe(expectedResult);
  });

  test("Should resolve with the cows quantity", () => {
    const expectedCowsQuantity = "We have 15 cows 🐮 in the farm";

    countCows().then((result) => {
      expect(result).toBe(expectedCowsQuantity);
      done();
    });
  });

  test("Should reject when the quantity of cows is less than 10", (done) => {
    const errorMessage = "There are not enough cows 🐮 in the farm";

    countCows(9)
      .then((result) => {})
      .catch((error) => {
        expect(error).toBe(errorMessage);
        done();
      });
  });
});

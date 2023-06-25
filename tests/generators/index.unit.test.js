import { generate, iterable } from "../../src/generators";

describe("Suite unit test with generatorrs", () => {
  test("Should return differents values depends the generators", () => {
    const expectedResult1 = 1;
    const expectedResult2 = 2;
    const expectedResult3 = 3;

    const result = generate();

    expect(result.next().value).toBe(expectedResult1);
    expect(result.next().value).toBe(expectedResult2);
    expect(result.next().value).toBe(expectedResult3);
  });

  test("Should receive an array an return each value with yield", () => {
    const array = ["Pedro", "Oscar", "Omar", "Ama", "Lucia", "Juan"];

    const result = iterable(array);

    expect(result.next().value).toBe(array[0]);
    expect(result.next().value).toBe(array[1]);
    expect(result.next().value).toBe(array[2]);
    expect(result.next().value).toBe(array[3]);
    expect(result.next().value).toBe(array[4]);
    expect(result.next().value).toBe(array[5]);
    expect(result.next().value).toBeUndefined();
  });
});

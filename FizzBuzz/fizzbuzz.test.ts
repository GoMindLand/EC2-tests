import { fizzbuzz } from "./fizzbuzz";

describe("FizzBuzz", () => {
  it("should print 1 when number is 1", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("should print Fizz when number is multiple of 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("should print Buzz when number is multiple of 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });

  it("should print FizzBuzz when number is a multiple of 3 and 5", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });

  it("should print the number when the number is neither multiple of 3 nor of 5", () => {
    expect(fizzbuzz(13)).toEqual("13");
  });
});

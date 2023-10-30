import { createFizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  describe("fizz", () => {
    test.each([
      {
        input: 3,
      },
      {
        input: 6,
      },
      {
        input: 9,
      },
    ])("given $num return fizz", ({ input,  }) => {
      //Arrange
      const sut = createFizzBuzz();
      const expected = "Fizz";

      //Act
      const actual = sut.go(input);

      //Assert
      expect(actual).toBe(expected);
    });
  });
  describe("buzz", () => {
    test.each([
      {
        input: 5,
      },
      {
        input: 10,
      },
      {
        input: 20,
      },
    ])("given $num return buzz", ({ input }) => {
      //Arrange
      const sut = createFizzBuzz();
      const expected = "Buzz";
      //Act
      const actual = sut.go(input);

      //Assert
      expect(actual).toBe(expected);
    });
  });
  describe("fizzbuzz", () => {
    test.each([
      {
        input: 15,
      },
      {
        input: 30,
      },
      {
        input: 45,
      },
    ])("given $num return FizzBuzz", ({ input }) => {
      //Arrange
      const sut = createFizzBuzz();
      const expected = "FizzBuzz";
      //Act
      const actual = sut.go(input);

      //Assert
      expect(actual).toBe(expected);
    });
  });
  describe("number it self", () => {
    test.each([
      {
        input: 7,
      },
      {
        input: 2,
      },
      {
        input: 76,
      },
    ])("given $num return $num", ({ input }) => {
      //Arrange
      const sut = createFizzBuzz();
      const expected = input.toString();
      //Act
      const actual = sut.go(input);

      //Assert
      expect(actual).toBe(expected);
    });
  });
});

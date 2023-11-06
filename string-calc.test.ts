import { StringCalculator } from "./string-calc";

describe("string-calc", () => {
  describe("add", () => {
    test("given empty string should return 0", () => {
      // Arrange

      const input = "";
      const expected = 0;
      const sut = new StringCalculator();

      // Act
      const actual = sut.add(input);

      // Assert

      expect(actual).toBe(expected);
    });
    describe("given single number", () => {
      test.each([
        { input: "5", expected: 5 },
        { input: "15", expected: 15 },
        { input: "3", expected: 3 },
      ])(
        "given single number should return that number",
        ({ input, expected }) => {
          // Arrange
          const sut = new StringCalculator();

          // Act
          const actual = sut.add(input);

          // Assert
          expect(actual).toBe(expected);
        }
      );
    });
    describe("given two number", () => {
        test.each([
          { input: "5,4", expected: 9 },
          { input: "10,4", expected: 14 },
        ])(
          "given single number should return that number",
          ({ input, expected }) => {
            // Arrange
            const sut = new StringCalculator();
  
            // Act
            const actual = sut.add(input);
  
            // Assert
            expect(actual).toBe(expected);
          }
        );
      });
  });
});

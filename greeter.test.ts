import greeter from "./greeter";

describe("greeter", () => {
  describe("helloWorld", () => {
    it('should return "Hello world!"', () => {
      // Arrange
      const expected = "hello world!";
      const sut = greeter();
      // Act
      const actual = sut.helloWorld();
      // Assert
      expect(actual).toBe(expected);
    });
  }),
    describe("helloPerson", () => {
      it('given empty name should return "Hello !"', () => {
        // Arrange
        const expected = "hello !";
        const input = "";
        const sut = greeter();
        // Act
        const actual = sut.helloPerson(input);
        // Assert
        expect(actual).toBe(expected);
      });
      it('given name Peter should return "Hello Peter!"', () => {
        // Arrange
        const expected = "hello Peter!";
        const input = "Peter";
        const sut = greeter();
        // Act
        const actual = sut.helloPerson(input);
        // Assert
        expect(actual).toBe(expected);
      });
    });
});

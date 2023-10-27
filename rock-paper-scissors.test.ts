import { Move, Outcome, createRockPaperScissors } from "./rock-paper-scissors";
describe("rock-paper-scissors", () => {
  describe("Player chooses paper", () => {
    test("given Player move paper and opponent move rock should return player wins", () => {
      // Arrange
      const sut = createRockPaperScissors();

      // Act
      const actual = sut.play(Move.Paper, Move.Rock);

      // Assert
      expect(actual).toBe(Outcome.Win);
    });

    test("given Player move paper and opponent move scissors should return player loses", () => {
      // Arrange
      const sut = createRockPaperScissors();

      // Act
      const actual = sut.play(Move.Paper, Move.Scissors);

      // Assert
      expect(actual).toBe(Outcome.Loss);
    });
    test("given Player move paper and opponent move paper should return player draw", () => {
      // Arrange
      const sut = createRockPaperScissors();

      // Act
      const actual = sut.play(Move.Paper, Move.Paper);

      // Assert
      expect(actual).toBe(Outcome.Draw);
    });
  }),
    describe("Player chooses rock", () => {
      test("given Player move rock and opponent move rock should return player draw", () => {
        // Arrange
        const sut = createRockPaperScissors();

        // Act
        const actual = sut.play(Move.Rock, Move.Rock);

        // Assert
        expect(actual).toBe(Outcome.Draw);
      });
      test("given Player move rock and opponent move scissors should return player win", () => {
        // Arrange
        const sut = createRockPaperScissors();

        // Act
        const actual = sut.play(Move.Rock, Move.Scissors);

        // Assert
        expect(actual).toBe(Outcome.Win);
      });
      test("given Player move rock and opponent move paper should return player loss", () => {
        // Arrange
        const sut = createRockPaperScissors();

        // Act
        const actual = sut.play(Move.Rock, Move.Paper);

        // Assert
        expect(actual).toBe(Outcome.Loss);
      });
   
    }),
    describe("Player chooses Scissors", () => {
        test("given Player move rock and opponent move rock should return player loss", () => {
          // Arrange
          const sut = createRockPaperScissors();
  
          // Act
          const actual = sut.play(Move.Scissors, Move.Rock);
  
          // Assert
          expect(actual).toBe(Outcome.Loss);
        });
        test("given Player move rock and opponent move scissors should return player draw", () => {
          // Arrange
          const sut = createRockPaperScissors();
  
          // Act
          const actual = sut.play(Move.Scissors, Move.Scissors);
  
          // Assert
          expect(actual).toBe(Outcome.Draw);
        });
        test("given Player move rock and opponent move paper should return player loss", () => {
          // Arrange
          const sut = createRockPaperScissors();
  
          // Act
          const actual = sut.play(Move.Scissors, Move.Paper);
  
          // Assert
          expect(actual).toBe(Outcome.Win);
        });
     
      });
});

import { Move, Outcome, createRockPaperScissors } from "./rock-paper-scissors";
import { describe, test, expect } from "@jest/globals";

describe("rock-paper-scissors", () => {
  describe("Player chooses paper", () => {
    test.each([
      {
        playerMove: Move.Paper,
        opponentMove: Move.Paper,
        expected: Outcome.Draw,
      },
      {
        playerMove: Move.Paper,
        opponentMove: Move.Rock,
        expected: Outcome.Win,
      },
      {
        playerMove: Move.Paper,
        opponentMove: Move.Scissors,
        expected: Outcome.Loss,
      },
    ])(`Playermove: $playerMove, opponentMove: $opponentMove`, ({ playerMove, opponentMove, expected }) => {
      //Arrange
      const sut = createRockPaperScissors();

      //Act
      const actual = sut.play(playerMove, opponentMove);

      //Assert
      expect(actual).toBe(expected);
    });
  }),
    describe("Player chooses rock", () => {
      test.each([
        {
          playerMove: Move.Rock,
          opponentMove: Move.Paper,
          expected: Outcome.Loss,
        },
        {
          playerMove: Move.Rock,
          opponentMove: Move.Rock,
          expected: Outcome.Draw,
        },
        {
          playerMove: Move.Rock,
          opponentMove: Move.Scissors,
          expected: Outcome.Win,
        },
      ])("test", ({ playerMove, opponentMove, expected }) => {
        //Arrange
        const sut = createRockPaperScissors();

        //Act
        const actual = sut.play(playerMove, opponentMove);

        //Assert
        expect(actual).toBe(expected);
      });
    }),
    describe("Player chooses Scissors", () => {
      test.each([
        {
          playerMove: Move.Scissors,
          opponentMove: Move.Paper,
          expected: Outcome.Win,
        },
        {
          playerMove: Move.Scissors,
          opponentMove: Move.Rock,
          expected: Outcome.Loss,
        },
        {
          playerMove: Move.Scissors,
          opponentMove: Move.Scissors,
          expected: Outcome.Draw,
        },
      ])("test", ({ playerMove, opponentMove, expected }) => {
        //Arrange
        const sut = createRockPaperScissors();

        //Act
        const actual = sut.play(playerMove, opponentMove);

        //Assert
        expect(actual).toBe(expected);
      });
    });
});

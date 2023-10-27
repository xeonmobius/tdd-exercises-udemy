export enum Move {
  Rock,
  Paper,
  Scissors,
}

export enum Outcome {
  Win,
  Loss,
  Draw,
}

interface RockPaperScissors {
  play(p1Move: Move, p2Move: Move): Outcome;
}

export function createRockPaperScissors(): RockPaperScissors {
  return {
    play(p1Move: Move, p2Move: Move) {
      if (p1Move === Move.Paper && p2Move === Move.Scissors) {
        return Outcome.Loss;
      }
      if (p1Move === Move.Paper && p2Move === Move.Paper) {
        return Outcome.Draw;
      }
      if (p1Move === Move.Rock && p2Move === Move.Rock) {
        return Outcome.Draw;
      }
      if (p1Move === Move.Rock && p2Move === Move.Paper) {
        return Outcome.Loss;
      }
      if (p1Move === Move.Scissors && p2Move === Move.Scissors) {
        return Outcome.Draw;
      }
      if (p1Move === Move.Scissors && p2Move === Move.Rock) {
        return Outcome.Loss;
      }
      return Outcome.Win;
    },
  };
}

export interface Round {
  score: number;
  rating: number;
  slope: number;
}

export type Rounds = Round[];

export interface State {
  rounds: Rounds;
  handicap: number;
}

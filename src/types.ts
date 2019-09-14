export type Round = { score: number; rating: number; slope: number };

export type Rounds = Round[];

export type State = { rounds: Rounds; handicap: number };

import { Reducer } from 'redux';
import { Rounds, State } from './types';

const calcHandicap = (rounds: Rounds) => {
  const numOfDiffs = Math.max(1, Math.floor(rounds.length / 2));
  const diffsSum = rounds
    .map(s => ((s.score - s.rating) * 113) / s.slope)
    .sort((a, b) => a - b)
    .slice(0, numOfDiffs)
    .reduce((a, b) => a + b);
  return (
    parseInt(
      String(Math.max(-5, Math.min((diffsSum / numOfDiffs) * 0.96, 50)) * 10),
      10
    ) / 10
  );
};

const initialState: State = { rounds: [], handicap: 50 };

export const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ROUND': {
      const rounds: Rounds = [...state.rounds.slice(-19), { ...action.round }];
      return { rounds, handicap: calcHandicap(rounds) };
    }

    case 'REMOVE_ROUND': {
      const rounds = [
        ...state.rounds.slice(0, action.index),
        ...state.rounds.slice(action.index + 1)
      ];

      return {
        rounds,
        handicap: rounds.length > 0 ? calcHandicap(rounds) : 50
      };
    }

    default:
      return state;
  }
};

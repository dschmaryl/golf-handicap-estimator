import { Round } from './types';

export const addRound = (round: Round) => ({
  type: 'ADD_ROUND',
  round
});

export const removeRound = (index: number) => ({ type: 'REMOVE_ROUND', index });

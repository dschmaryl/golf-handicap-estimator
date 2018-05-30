export const addScore = (score, rating, slope) => ({
  type: 'ADD_SCORE',
  score,
  rating,
  slope
});

export const removeScore = index => ({ type: 'REMOVE_SCORE', index: index });

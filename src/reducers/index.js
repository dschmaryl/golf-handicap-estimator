const calcHandicap = scores => {
  const numOfDiffs = Math.max(1, Math.floor(scores.length / 2));
  const diffsSum = scores
    .map(s => (s.score - s.rating) * 113 / s.slope)
    .sort((a, b) => a - b)
    .slice(0, numOfDiffs)
    .reduce((a, b) => a + b);
  return (
    parseInt(
      Math.max(-5, Math.min(diffsSum / numOfDiffs * 0.96, 50)) * 10,
      10
    ) / 10
  );
};

export const reducer = (state = { scores: [], handicap: null }, action) => {
  switch (action.type) {
    case 'ADD_SCORE': {
      const scores = [
        ...state.scores.slice(-19),
        {
          score: action.score,
          rating: action.rating,
          slope: action.slope
        }
      ];
      return { scores: scores, handicap: calcHandicap(scores) };
    }

    case 'REMOVE_SCORE': {
      const scores = [
        ...state.scores.slice(0, action.index),
        ...state.scores.slice(action.index + 1)
      ];
      return {
        scores: scores,
        handicap: scores.length > 0 ? calcHandicap(scores) : null
      };
    }

    default:
      return state;
  }
};

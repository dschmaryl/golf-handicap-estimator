import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 10px 0 20px 0;
`;

export function Handicap(props) {
  function getDiffs(scores) {
    return scores.map(s => {
      return (s.score - s.rating) * 113 / s.slope;
    }).sort().reverse().slice(Math.floor(scores.length / 2));
  }

  function calcHandicap(scores) {
    const diffs = getDiffs(scores);
    const diffsSum = diffs.reduce((a, b) => a + b, 0);
    const handicap = diffsSum / diffs.length * .96;
    return parseInt((handicap * 10), 10) / 10; // truncate
  }

  function showHandicap(scores) {
    if (scores.length === 0) {
      return 'Please enter at least one score and as many as 20.';
    } else {
      const handicap = calcHandicap(scores);
      return `Your handicap is approximately ${handicap}`;
    }
  }

  return (
    <Div>
      {showHandicap(props.scores)}
    </Div>
  );
}
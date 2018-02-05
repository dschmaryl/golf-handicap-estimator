import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 10px 0 30px 0;
  font-size: 18px;
`;

const Handi = styled.span`
  font-weight: bold;
`;

export function Handicap(props) {
  function getDiffs(scores) {
    return scores.map(s => {
      return (s.score - s.rating) * 113 / s.slope;
    }).sort((a, b) => a - b).reverse().slice(Math.floor(scores.length / 2));
  }

  function calcHandicap(scores) {
    const diffs = getDiffs(scores);
    const diffsSum = diffs.reduce((a, b) => a + b, 0);
    const handicap = diffsSum / diffs.length * .96;
    return parseInt((handicap * 10), 10) / 10; // truncate
  }

  function showHandicap(scores) {
    if (scores.length === 0) {
      return 'Enter at least one score and as many as 20.';
    } else {
      const handicapNum = Math.max(-5, Math.min(calcHandicap(scores), 50));
      const handicapStr = ('' + handicapNum).replace('-', '+');
      return (
        <span>
          {'Your handicap is approximately: '}
          <Handi>{handicapStr}</Handi>
        </span>
      );
    }
  }

  return (
    <Div>
      {showHandicap(props.scores)}
    </Div>
  );
}

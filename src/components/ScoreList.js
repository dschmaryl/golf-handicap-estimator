import React from 'react';

export function ScoreList(props) {
  function renderScores(scores) {
    if (scores.length === 0) {
      return 'no scores entered yet'
    } else {
      return (
        <ul>
          {scores.map((score, index) => {
            return (
              <li className="score" key={'score-' + index}>
                <h4>Score #{index}: {score.score}</h4>
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <div className="score-list">
      {renderScores(props.scores)}
    </div>
  );
}

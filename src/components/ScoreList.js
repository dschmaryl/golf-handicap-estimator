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
                Round {index + 1}: {score.score}
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <div className="row">
      <div className="col-xs-12">
        {renderScores(props.scores)}
      </div>
    </div>
  );
}

import React from 'react';

export function Handicap(props) {
  function calcHandicap(scores) {
    if (scores.length === 0) {
      return 'Please enter at least one score.';
    } else {
      return 'Your handicap is approximately H';
    }
  }

  return (
    <div className="row">
      <div className="col-xs-12">
        {calcHandicap(props.scores)}
      </div>
    </div>
  );
}

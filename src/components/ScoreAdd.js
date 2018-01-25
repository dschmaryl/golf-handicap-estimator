import React from 'react';

export function ScoreAdd(props) {
  return (
    <div className="score-add">
      <input type="number" />
      <input type="number" />
      <input type="number" />
      <button onClick={props.onClick}>add</button>
    </div>
  );
}

import React from 'react';

export function Header(props) {
  return (
    <header className="row">
      <div className="col-xs-12">
        <h3>Golf Handicap Estimator</h3>
        <p>
          This can give you a rough estimate of your handicap using only the
          total scores. The official algorithm as specified by the USGA is a
          little more complicated since it involves adjusting scores based on
          the player's current handicap, but this can give you an idea of what
          your handicap would be.
        </p>
      </div>
    </header>
  );
}

import React from 'react';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <header>
          <h3>Golf Handicap Estimator</h3>
          <p>This can give you a rough estimate of your handicap using only the total scores. Enter as few as one or as many as twenty rounds.</p>
        </header>
        <article>
          <em>this is where the inputs will be</em>
        </article>
        <br />
        <footer>
          <a href="https://github.com/dschmaryl/golf-handicap-estimator/tree/master">
            Click here to see it on GitHub.
          </a>
        </footer>
      </div>
    );
  }
}

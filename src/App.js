import React from 'react';
import { ScoreList } from './components/ScoreList';
import { ScoreAdd } from './components/ScoreAdd';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {scores: []};
  }

  onSubmitScore(newScore) {
    // this.setState({scores: this.state.scores + newScore})
    console.log('onSubmitScore clicked');
  }

  render() {
    return (
      <div className="main">
        <header>
          <h3>Golf Handicap Estimator</h3>
          <p>
            This can give you a rough estimate of your handicap using only the
            total scores. Enter as few as one or as many as twenty scores.
          </p>
        </header>
        <ScoreList scores={this.state.scores} />
        <br />
        <ScoreAdd onSubmitScore={this.onSubmitScore()} />
        <br />
        <footer>
          <a href="https://github.com/dschmaryl/golf-handicap-estimator">
            Click here to see it on GitHub.
          </a>
        </footer>
      </div>
    );
  }
}

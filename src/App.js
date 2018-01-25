import React from 'react';
import { Header } from './components/Header';
import { Handicap } from './components/Handicap';
import { ScoreList } from './components/ScoreList';
import { ScoreAdd } from './components/ScoreAdd';
import { Footer } from './components/Footer';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      scores: [],
      msg: 'Please enter at least one score.',
      handicap: ''
    };
    this.addScore = this.addScore.bind(this);
  }

  addScore(roundData) {
    const scores = this.state.scores;
    this.setState({scores: scores.concat(roundData)});
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Handicap scores={this.state.scores} />
        <ScoreAdd onClick={this.addScore} />
        <ScoreList scores={this.state.scores} />
        <Footer />
      </div>
    );
  }
}

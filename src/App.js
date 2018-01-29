import React from 'react';
import { Header } from './components/Header';
import { Handicap } from './components/Handicap';
import { ScoreAdd } from './components/ScoreAdd';
import { ScoreList } from './components/ScoreList';
import { Footer } from './components/Footer';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      scores: [],
    };
    this.addScore = this.addScore.bind(this);
    this.removeScore = this.removeScore.bind(this);
  }

  addScore(roundData) {
    const scores = this.state.scores;
    this.setState({scores: scores.slice(-19).concat(roundData)});
  }

  removeScore(index) {
    let scores = this.state.scores;
    scores = scores.filter((v, i) => i !== index);
    this.setState({scores: scores});
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Handicap scores={this.state.scores} />
        <ScoreAdd onClick={this.addScore} />
        <ScoreList scores={this.state.scores} removeScore={this.removeScore}/>
        <Footer />
      </div>
    );
  }
}

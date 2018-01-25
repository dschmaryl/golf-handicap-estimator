import React from 'react';

const inputStyle = {
  maxWidth: '80px',
  margin: 0,
  padding: 0,
};

export class ScoreAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {score: '', rating: '', slope: ''};
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    switch(event.target.name) {
      case 'score':
        this.setState({score: event.target.value});
        break;
      case 'rating':
        this.setState({rating: event.target.value});
        break;
      case 'slope':
        this.setState({slope: event.target.value});
        break;
      default:

    }
  }

  render() {
    const roundData = {
      'score': this.state.score,
      'rating': this.state.rating,
      'slope': this.state.slope
    }

    return (
      <div className="row">
        <div className="col-xs-3">
          <label>score:</label>
          <input
            type="text"
            name="score"
            style={inputStyle}
            className="form-control"
            value={roundData.score}
            onChange={this.handleInput}
          />
        </div>
        <div className="col-xs-3">
          <label>rating:</label>
          <input
            type="text"
            name="rating"
            style={inputStyle}
            className="form-control"
            value={roundData.rating}
            onChange={this.handleInput}
          />
        </div>
        <div className="col-xs-3">
          <label>slope:</label>
          <input
            type="text"
            name="slope"
            style={inputStyle}
            className="form-control"
            value={roundData.slope}
            onChange={this.handleInput}
          />
        </div>
        <div className="col-xs-3">
          <button
            className="btn"
            onClick={() => this.props.onClick(roundData)}
          >
            Add Score
          </button>
        </div>
      </div>
    );
  }
}

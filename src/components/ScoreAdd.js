import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  text-align: right;
  padding-right: 4px;
  margin: 0 10px 0 6px;
  max-width: 40px;
`;

const Button = styled.button`
  margin-left: 10px;
`;

export class ScoreAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {score: '', rating: '', slope: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.addScore = this.addScore.bind(this);
  }

  renderInput(name, value, placeholder) {
    return (
      <span>
        <label>{name}:</label>
        <Input
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
        />
      </span>
    );
  }

  handleChange(event) {
    function checkNum(num) {
      return isNaN(num) ? '' : num;
    }
    switch(event.target.name) {
      case 'score':
        const score = parseInt(event.target.value, 10);
        this.setState({score: checkNum(score)});
        break;
      case 'rating':
        const rating = parseFloat(event.target.value);
        this.setState({rating: checkNum(rating)});
        break;
      case 'slope':
        const slope = parseInt(event.target.value, 10);
        this.setState({slope: checkNum(slope)});
        break;
      default:
    }
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.addScore();
    }
  }

  addScore() {
    const roundData = {
      'score': this.state.score,
      'rating': this.state.rating ? this.state.rating : 72,
      'slope': this.state.slope ? this.state.slope : 113
    };

    if (50 <= roundData.score && roundData.score <= 200) {
      return this.props.onClick(roundData);
    }
  }

  render() {
    return (
      <div>
        {this.renderInput("score", this.state.score)}
        {this.renderInput("rating", this.state.rating, '72')}
        {this.renderInput("slope", this.state.slope, '113')}
        <Button onClick={this.addScore}>
          Add Score
        </Button>
      </div>
    );
  }
}

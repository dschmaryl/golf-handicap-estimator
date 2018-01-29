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
    this.state = {score: '', rating: 72, slope: 113};
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  renderInput(name, value) {
    return (
      <span>
        <label>{name}:</label>
        <Input
          type="text"
          name={name}
          value={value}
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
      console.log('enter pressed');
      this.addScore();
    }
  }

  addScore() {
    const roundData = {
      'score': this.state.score,
      'rating': this.state.rating,
      'slope': this.state.slope
    };

    if (roundData.score > 0) {
      return this.props.onClick(roundData);
    }
  }

  render() {
    return (
      <div>
        {this.renderInput("score", this.state.score)}
        {this.renderInput("rating", this.state.rating)}
        {this.renderInput("slope", this.state.slope)}
        <Button onClick={this.addScore}>
          Add Score
        </Button>
      </div>
    );
  }
}

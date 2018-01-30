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

  handleChange(event) {
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

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.addScore();
    }
  }

  addScore() {
    function asNum(num) {
      return isNaN(num) ? '' : num;
    }
    const roundData = {
      'score': asNum(parseInt(this.state.score, 10)),
      'rating': this.state.rating ? asNum(parseFloat(this.state.rating)) : 72,
      'slope': this.state.slope ? asNum(parseInt(this.state.slope, 10)) : 113
    };
    if (50 <= roundData.score && roundData.score <= 200) {
      return this.props.onClick(roundData);
    }
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

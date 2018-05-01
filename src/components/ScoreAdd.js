import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-weight: bold;
  padding-left: 4px;
`;

const Input = styled.input`
  text-align: right;
  padding: 2px 4px 2px 0;
  margin: 0 10px 0 6px;
  width: 32px;
`;

const Button = styled.button`
  color: #555;
  font-weight: bold;
  margin-left: 10px;
  width: 50px;
`;

export class ScoreAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: '', rating: '', slope: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.addScore = this.addScore.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case 'Score':
        this.setState({ score: event.target.value });
        break;
      case 'Rating':
        this.setState({ rating: event.target.value });
        break;
      case 'Slope':
        this.setState({ slope: event.target.value });
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
      score: asNum(parseInt(this.state.score, 10)),
      rating: this.state.rating ? asNum(parseFloat(this.state.rating)) : 72,
      slope: this.state.slope ? asNum(parseInt(this.state.slope, 10)) : 113
    };
    if (50 <= roundData.score && roundData.score <= 200) {
      this.setState({ score: '' });
      return this.props.onClick(roundData);
    }
  }

  renderInput(name, value, placeholder) {
    return (
      <span>
        <Label>{name}:</Label>
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
        {this.renderInput('Score', this.state.score)}
        {this.renderInput('Rating', this.state.rating, '72')}
        {this.renderInput('Slope', this.state.slope, '113')}
        <Button onClick={this.addScore}>Add</Button>
      </div>
    );
  }
}

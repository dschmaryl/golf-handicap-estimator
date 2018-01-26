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
  }

  renderInput(name, value) {
    return (
      <span>
        <label>{name}:</label>
        <Input
          type="text"
          name={name}
          value={value}
          onChange={this.handleChange}
        />
      </span>
    );
  }

  handleChange(event) {
    switch(event.target.name) {
      case 'score':
        const score = parseInt(event.target.value, 10);
        if (!isNaN(score)) {
          this.setState({score: score});
        }
        break;
      case 'rating':
        const rating = parseFloat(event.target.value);
        if (!isNaN(rating)) {
          this.setState({rating: rating});
        }
        break;
      case 'slope':
        const slope = parseInt(event.target.value, 10);
        if (!isNaN(slope)) {
          this.setState({slope: slope});
        }
        break;
      default:
    }
  }

  render() {
    const roundData = {
      'score': this.state.score,
      'rating': this.state.rating,
      'slope': this.state.slope
    };

    return (
      <div>
        {this.renderInput("score", roundData.score)}
        {this.renderInput("rating", roundData.rating)}
        {this.renderInput("slope", roundData.slope)}
        <Button onClick={() => this.props.onClick(roundData)}>
          Add Score
        </Button>
      </div>
    );
  }
}

import React from 'react';
import styled from 'styled-components';

import { Round } from '../types';

const Label = styled.label`
  font-weight: bold;
  padding-left: 4px;
`;

const Input = styled.input`
  text-align: right;
  padding: 2px 4px 2px 0;
  margin: 0 10px 0 6px;
  width: 36px;
`;

const Button = styled.button`
  color: #555;
  font-weight: bold;
  margin-left: 10px;
  width: 50px;
`;

type PropTypes = { addRound: Function };

export class RoundAdd extends React.Component<PropTypes> {
  state = { score: '', rating: '', slope: '' };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name }
    } = event;
    this.setState({ [name]: value });
  };

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) this.addRound();
  };

  addRound = () => {
    const asNumString: Function = (numString: string) =>
      isNaN(parseFloat(numString)) ? '' : numString;

    const score: number = parseInt(asNumString(this.state.score), 10);
    const rating: number = this.state.rating
      ? parseFloat(asNumString(this.state.rating))
      : 72;
    const slope = this.state.slope
      ? parseInt(asNumString(this.state.slope), 10)
      : 113;

    if (50 <= score && score <= 200) {
      this.setState({ score: '' });
      const round: Round = { score, rating, slope };
      this.props.addRound(round);
    }
  };

  renderInput = (label: string, value: string, placeholder: string) => (
    <span>
      <Label>{label}:</Label>
      <Input
        type="number"
        name={label.toLowerCase()}
        value={value}
        placeholder={placeholder}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
      />
    </span>
  );

  render = () => (
    <div>
      {this.renderInput('Score', this.state.score, '')}
      {this.renderInput('Rating', this.state.rating, '72')}
      {this.renderInput('Slope', this.state.slope, '113')}
      <Button onClick={this.addRound}>Add</Button>
    </div>
  );
}

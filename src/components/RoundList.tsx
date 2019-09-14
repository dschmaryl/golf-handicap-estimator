import React from 'react';
import styled from 'styled-components';

import { Round, Rounds } from '../types';

const Div = styled.div`
  padding-top: 30px;
`;

const Th = styled.th`
  text-align: center;
  width: 72px;
`;

const Td = styled.td`
  text-align: center;
`;

const Button = styled.button`
  color: #555;
  font-weight: bold;
  display: block;
  margin: auto;
`;

interface PropTypes {
  rounds: Rounds;
  removeRound: Function;
}

export const RoundList: React.FC<PropTypes> = ({ rounds, removeRound }) =>
  rounds.length === 0 ? (
    <Div>no scores entered yet</Div>
  ) : (
    <Div>
      <table>
        <thead>
          <tr>
            <Th>Round</Th>
            <Th>Score</Th>
            <Th>Rating</Th>
            <Th>Slope</Th>
            <Th>Delete</Th>
          </tr>
        </thead>
        <tbody>
          {rounds
            .map((round: Round, index: number) => (
              <tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{round.score}</Td>
                <Td>{round.rating}</Td>
                <Td>{round.slope}</Td>
                <Td>
                  <Button onClick={() => removeRound(index)}>X</Button>
                </Td>
              </tr>
            ))
            .reverse()}
        </tbody>
      </table>
    </Div>
  );

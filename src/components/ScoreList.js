import React from 'react';
import styled from 'styled-components';

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

export function ScoreList(props) {
  function renderScores(scores) {
    if (scores.length === 0) {
      return 'no scores entered yet';
    } else {
      return (
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
            {scores.map((s, index) => {
              return (
                <tr key={'score-' + index}>
                  <Td>{index + 1}</Td>
                  <Td>{s.score}</Td>
                  <Td>{s.rating}</Td>
                  <Td>{s.slope}</Td>
                  <Td>
                    <Button onClick={() => props.removeScore(index)}>X</Button>
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  }

  return <Div>{renderScores(props.scores)}</Div>;
}

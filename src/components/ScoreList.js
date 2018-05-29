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

export const ScoreList = ({ scores, dispatch }) => {
  if (scores.length === 0) {
    return <Div>no scores entered yet</Div>;
  } else {
    return (
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
            {scores.map((score, index) => (
              <tr key={'score-' + index}>
                <Td>{index + 1}</Td>
                <Td>{score.score}</Td>
                <Td>{score.rating}</Td>
                <Td>{score.slope}</Td>
                <Td>
                  <Button
                    onClick={() =>
                      dispatch({ type: 'REMOVE_SCORE', index: index })
                    }
                  >
                    X
                  </Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </Div>
    );
  }
};

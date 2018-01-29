import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding-top: 30px;
`;

const Table = styled.table`
  text-align: right;
`;

const Th = styled.th`
  width: 72px;
`;

const Button = styled.button`
  display: block;
  margin: auto;
`;

export function ScoreList(props) {
  function renderScores(scores) {
    if (scores.length === 0) {
      return 'no scores entered yet';
    } else {
      return (
        <Table>
          <thead>
            <tr>
              <Th>Round</Th>
              <Th>Score</Th>
              <Th>Rating</Th>
              <Th>Slope</Th>
              <Th>Remove</Th>
            </tr>
          </thead>
          <tbody>
            {scores.map((s, index) => {
              return (
                <tr key={'score-' + index}>
                  <td>{index + 1}</td>
                  <td>{s.score}</td>
                  <td>{s.rating}</td>
                  <td>{s.slope}</td>
                  <td>
                    <Button onClick={() => props.removeScore(index)}>
                      X
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      );
    }
  }

  return (
    <Div>
      {renderScores(props.scores)}
    </Div>
  );
}

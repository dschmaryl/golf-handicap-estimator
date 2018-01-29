import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding-top: 30px;
`;

const Table = styled.table`
  text-align: right;
  width: 280px;
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
              <th>Round</th>
              <th>Score</th>
              <th>Rating</th>
              <th>Slope</th>
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

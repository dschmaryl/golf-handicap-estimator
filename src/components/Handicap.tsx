import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 10px 0 30px 0;
  font-size: 18px;
`;

const Handi = styled.span`
  font-weight: bold;
`;

interface PropTypes {
  anyRounds: boolean;
  handicap: number;
}

export const Handicap: React.FC<PropTypes> = ({ anyRounds, handicap }) =>
  !anyRounds ? (
    <Div>Enter at least one score and as many as 20.</Div>
  ) : (
    <Div>
      <span>
        {'Your handicap is approximately: '}
        <Handi>{('' + handicap).replace('-', '+')}</Handi>
      </span>
    </Div>
  );

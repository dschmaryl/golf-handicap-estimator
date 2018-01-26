import React from 'react';
import styled from 'styled-components';

const Head = styled.header`
  padding-top: 4px;
  padding-bottom: 6px;
`;

export function Header(props) {
  return (
    <Head className="row">
      <h1>Golf Handicap Estimator</h1>
      <p>
        This can give you a rough estimate of your handicap using only the
        total scores. The official algorithm as specified by the USGA is a
        little more complicated since it involves adjusting scores based on
        the player's current handicap, but this can give you an idea of what
        your handicap would be.
      </p>
    </Head>
  );
}

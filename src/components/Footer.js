import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  padding-top: 40px;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #BBB;
`;

export function Footer(props) {
  return (
    <Foot>
      <Anchor href="https://github.com/dschmaryl/golf-handicap-estimator">
        Click here to see it on GitHub.
      </Anchor>
    </Foot>
  );
}

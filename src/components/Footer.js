import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  padding-top: 40px;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #bbb;
  :hover {
    color: #555;
  }
`;

export const Footer = () => (
  <Foot>
    <Anchor href="https://github.com/dschmaryl/golf-handicap-estimator">
      Click here to see it on GitHub.
    </Anchor>
  </Foot>
);

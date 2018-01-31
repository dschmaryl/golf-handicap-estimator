import React from 'react';
import styled from 'styled-components';

const Head = styled.header`
  padding-top: 4px;
  padding-bottom: 6px;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #999;
`;

export function Header(props) {
  return (
    <Head>
      <h1>Golf Handicap Estimator</h1>
      <p>
        This can give you a rough estimate of your handicap using only the total scores. The official algorithm as specified by the USGA is a little more complicated since it involves adjusting scores based on the player's current handicap, but this can give you an idea of what your handicap would be.
      </p>
      <p>
        The course rating and slope are usually listed on the scorecard from that course, or you can look them up at the <Anchor href="https://ncrdb.usga.org">National Course Rating Database</Anchor>. Using the correct rating and slope is important for the handicap to be accurate, but the average rating (72) and slope (113) could be used.
      </p>
    </Head>
  );
}

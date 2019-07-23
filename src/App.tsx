import React, { Fragment } from 'react';

import { Header } from './components/Header';
import Handicap from './containers/Handicap';
import RoundAdd from './containers/RoundAdd';
import RoundList from './containers/RoundList';
import { Footer } from './components/Footer';

export const App: React.FC = () => (
  <Fragment>
    <Header />
    <Handicap />
    <RoundAdd />
    <RoundList />
    <Footer />
  </Fragment>
);

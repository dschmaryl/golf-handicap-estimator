import React from 'react';
import { Header } from './components/Header';
import Handicap from './containers/Handicap';
import ScoreAdd from './containers/ScoreAdd';
import ScoreList from './containers/ScoreList';
import { Footer } from './components/Footer';

export const App = () => (
  <div>
    <Header />
    <Handicap />
    <ScoreAdd />
    <ScoreList />
    <Footer />
  </div>
);

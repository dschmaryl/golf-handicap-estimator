import { connect } from 'react-redux';

import { State } from '../types';
import { Handicap } from '../components/Handicap';

const mapStateToProps = (state: State) => ({
  anyRounds: state.rounds.length > 0,
  handicap: state.handicap
});

export default connect(mapStateToProps)(Handicap);

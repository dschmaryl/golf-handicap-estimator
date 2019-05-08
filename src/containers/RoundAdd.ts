import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { addRound } from '../actions';
import { Round } from '../types';
import { RoundAdd } from '../components/RoundAdd';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addRound: (round: Round) => dispatch(addRound(round))
});

export default connect(
  null,
  mapDispatchToProps
)(RoundAdd);

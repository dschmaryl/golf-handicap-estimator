import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State } from '../types';
import { removeRound } from '../actions';
import { RoundList } from '../components/RoundList';

const mapStateToProps = (state: State) => ({ rounds: state.rounds });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeRound: (index: number) => dispatch(removeRound(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoundList);

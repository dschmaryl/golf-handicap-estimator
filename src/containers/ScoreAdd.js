import { connect } from 'react-redux';
import { ScoreAdd } from '../components/ScoreAdd';

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(mapDispatchToProps)(ScoreAdd);

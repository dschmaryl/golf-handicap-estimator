import { connect } from 'react-redux';
import { ScoreList } from '../components/ScoreList'

const mapStateToProps = state => ({ scores: state.scores });

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreList);

import { connect } from 'react-redux';
import { removeScore } from '../actions';
import { ScoreList } from '../components/ScoreList';

const mapStateToProps = state => ({ scores: state.scores });

const mapDispatchToProps = dispatch => ({
  removeScore: index => dispatch(removeScore(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreList);

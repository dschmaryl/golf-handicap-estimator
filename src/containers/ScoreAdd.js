import { connect } from 'react-redux';
import { addScore } from '../actions';
import { ScoreAdd } from '../components/ScoreAdd';

const mapDispatchToProps = dispatch => ({
  addScore: (score, rating, slope) => dispatch(addScore(score, rating, slope))
});

export default connect(null, mapDispatchToProps)(ScoreAdd);

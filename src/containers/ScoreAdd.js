import { connect } from 'react-redux';
import { ScoreAdd } from '../components/ScoreAdd';

const mapDispatchToProps = dispatch => ({
  addScore: (score, rating, slope) =>
    dispatch({ type: 'ADD_SCORE', score: score, rating: rating, slope: slope })
});

export default connect(null, mapDispatchToProps)(ScoreAdd);

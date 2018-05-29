import { connect } from 'react-redux';
import { Handicap } from '../components/Handicap';

const mapStateToProps = state => ({ handicap: state.handicap });

export default connect(mapStateToProps)(Handicap);

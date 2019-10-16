import { connect } from 'react-redux';
import * as Actions from '../store/count.actions';
import CounterDemo from './counter';

const mapStateToProps = (state) => ({
  count: state.count.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(Actions.increment()),
  decrement: () => dispatch(Actions.decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterDemo);
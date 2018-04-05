import { connect } from 'react-redux';
import Hello from '../components/Hello';
import { getData } from '../selectors';
import * as act from '../actions';

const mapStateToProps = state => ({
  data: getData(state),
});

const mapDispatchToProps = dispatch => ({
  onGetData: () =>
    dispatch({ type: act.GET_DATA }),
  onClearData: () =>
    dispatch({ type: act.CLEAR_DATA }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

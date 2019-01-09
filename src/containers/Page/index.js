import { connect } from 'react-redux';
import Page from './Page';
import { getDataSelector } from '../../selectors';
import { getData, clearData } from '../../actions/creators';

const mapStateToProps = state => ({
  data: getDataSelector(state),
  name: state.data.name,
});

const mapDispatchToProps = {
  onGetData: getData,
  onClearData: clearData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);

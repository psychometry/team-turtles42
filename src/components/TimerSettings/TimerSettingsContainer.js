import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TimerSettings from './TimerSettings';

const mapStateToProps = state => {
  return {
    timer: state.timer
  };
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(TimerActionCreators ,dispatch);
// }

const TimerSettingsContainer = connect(
  mapStateToProps, 
  // mapDispatchToProps
)(TimerSettings);

export default TimerSettingsContainer;

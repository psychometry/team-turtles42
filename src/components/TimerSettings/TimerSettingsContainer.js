// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TimerSettings from './TimerSettings';
import { toggleNotification } from '../../actions/TimerActionCreators';


const mapStateToProps = state => {
  return {
    settings: state.timer.settings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleNotification: item => dispatch(toggleNotification(item))
  };
};

const TimerSettingsContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(TimerSettings);

export default TimerSettingsContainer;

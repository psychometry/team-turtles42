import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import App from './App';
import * as FocusActionCreators from '../../actions/FocusActionCreators';
import * as TimeActionCreators from '../../actions/TimeActionCreators';
import * as BgActionCreators from '../../actions/BgActionCreators';
import * as NameActionCreators from '../../actions/NameActionCreators';

const mapStateToProps=(state)=>{
  return {
    focus:state.focus,
    time:state.time,
    background:state.background,
    name:state.name,
  };
}
const mapDispatchToProps=(dispatch)=>{
  const dispatchObj = Object.assign(
    {},
    bindActionCreators(FocusActionCreators,dispatch),
    bindActionCreators(TimeActionCreators,dispatch),
    bindActionCreators(BgActionCreators,dispatch),
    bindActionCreators(NameActionCreators,dispatch),
  );
  return dispatchObj;
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

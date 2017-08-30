import * as AppActionCreator from '../../actions/AppActionCreators';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GeneralSetting from './GeneralSetting';
const mapStateToProps=(state)=>{
  return {apps:state.apps};
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators(AppActionCreator,dispatch);
}
const GeneralSettingContainer=connect(mapStateToProps,mapDispatchToProps)(GeneralSetting);
export default GeneralSettingContainer;

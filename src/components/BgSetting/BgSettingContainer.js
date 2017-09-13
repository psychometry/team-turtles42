import * as BgActionCreators from '../../actions/BgActionCreators';
import * as BgSettingActionCreators from '../../actions/SettingActionCreators';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import BgSetting from './BgSetting'
const mapStateToProps=(state)=>{
  return {background:state.background, imageInfo:state.imageInfo};
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators(Object.assign({},BgSettingActionCreators,BgActionCreators),dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BgSetting);

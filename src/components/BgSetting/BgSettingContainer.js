import * as BgActionCreators from '../../actions/BgActionCreators';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import BgSetting from './BgSetting'
const mapStateToProps=(state)=>{
  return {background:state.background};
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators(BgActionCreators,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BgSetting);

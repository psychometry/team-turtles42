import Focus from './Focus';
import * as FocusActionCreators from '../../actions/FocusActionCreators'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {loadFromStorage, saveToStorage} from '../../localStorage';

const mapStateToProps=(state)=>{
  return {focus:state.focus};
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators(FocusActionCreators,dispatch);
}
/*  constructor(props){
    super(props);
    this.state=loadFromStorage('focus')||{
      name:null,
      done:false,
      set:false,
    }
  }
  AddFocus=(value)=>{
    this.setState({name:value, done:false, set:true});
  }
  DeleteFocus=()=>{
    this.setState({name:null,set:false});
  }
  Done=()=>{
    this.setState({done:!this.state.done});
  }
  componentDidUpdate(){
    saveToStorage('focus',this.state);
  }*/
const FocusContainer=connect(mapStateToProps,mapDispatchToProps)(Focus);
export default FocusContainer;

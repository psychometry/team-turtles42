import React, {Component} from 'react';
import AddForm from '../Todo/components/AddForm';
import Item from '../Todo/components/Item';
import * as FocusActionCreators from '../../actions/FocusActionCreators'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {loadFromStorage, saveToStorage} from '../../localStorage';
import './Focus.scss';
const mapStateToProps=(state)=>{
  return {focus:state.focus};
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators(FocusActionCreators,dispatch);
}
class FocusContainer extends Component{
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
  render(){
    const {focus, setFocus, deleteFocus, toggleFocus}=this.props;
    const display=focus.set?(
      <Item className='FocusItem' item={focus} toggleItem={toggleFocus} deleteItem={deleteFocus} />
    ):(
      <div className='Focus'>
        <span>What is your main focus for today?</span>
      </div>
    );
    return(
      <div>
        {display}
        {
          focus.set?null:(<AddForm className='AddFocus' placeholder='' submit={setFocus}/>)
        }
      </div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(FocusContainer);

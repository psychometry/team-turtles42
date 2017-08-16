import React, {Component} from 'react';
import AddForm from '../Todo/components/AddForm';
import Item from '../Todo/components/Item';
import {loadFromStorage, saveToStorage} from '../../localStorage';
import './Focus.scss';
class FocusContainer extends Component{
  constructor(props){
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
  }
  render(){
    const display=this.state.set?(
      <Item className='FocusItem' item={this.state} toggleItem={this.Done} deleteItem={this.DeleteFocus} />
    ):(
      <div className='Focus'>
        <span>What is your main focus for today?</span>
      </div>
    );
    return(
      <div>
        {display}
        {
          this.state.set?null:(<AddForm className='AddFocus' placeholder='' submit={this.AddFocus}/>)
        }
      </div>
    );
  }
}
export default FocusContainer;

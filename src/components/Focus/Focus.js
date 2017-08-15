import React, {Component} from 'react';
import AddForm from '../Todo/components/AddForm';
import Item from '../Todo/components/Item';
import './Focus.scss';
class Focus extends Component{
  constructor(props){
    super(props);
    this.state={
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
  render(){
    const display=this.state.set?(
      <Item className='FocusItem' item={this.state} toggleItem={this.Done} deleteItem={this.DeleteFocus} />
    ):(
      <div className='message'>
        <h2>What is your main focus for today?</h2>
      </div>
    );
    return(
      <div>
        {display}
        <AddForm submit={this.AddFocus}/>
      </div>
    );
  }
}
export default Focus;

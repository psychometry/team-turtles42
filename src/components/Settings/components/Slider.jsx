import React, {Component} from 'react';
import styled from 'styled-components';
const Toggle = styled.div`
  background-color:silver;
  display:inline-block;
  width:40px;
  height:20px;
  border-radius:10px 10px;
  > input{
    display:none
  }
  > div{
    position:relative;
    left:20px;
    background-color:white;
    width:20px;
    height:20px;
    border-radius:50%;
  }
  > input:checked + div{
    left:0;
  }
`;
class Slider extends Component{
  handleChange=(e)=>{
    e.preventDefault();
    const {id, toggle}=this.props;
    toggle(id);
  }
  handleClick=(e)=>{
    e.preventDefault();
    this.handleChange(e);
  }
  render(){
    return(
      <Toggle onClick={this.handleClick}>
        <input type='checkbox' checked={this.props.checked} onChange={this.handleChange}/>
        <div></div>
      </Toggle>
    )
  }
}
export default Slider;

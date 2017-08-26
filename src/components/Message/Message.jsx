import React from 'react';
import PropTypes from 'prop-types';
import "./Message.scss";

const Message=({time,name})=>{
  const hour=time.getHours();
  let greeting="";
  if(hour<12){
    greeting="Good Morning! ";
  }else if(hour<17){
    greeting="Good Afternoon! ";
  }else if(hour<21){
    greeting="Good Evening! ";
  }else{
    greeting="Good Night! ";
  }
  return (
    <div className='Message'>{greeting} {name}. </div>
  )
}
Message.PropTypes={
  name:PropTypes.string.isRequired,
};
export default Message

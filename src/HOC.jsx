import React from 'react';
const toggleOnOff=(WrappedComponent)=>{
  return function Toggle(props){
    const {state,...rest}=props;
    return (state ? <WrappedComponent {...rest}/>:null);
  }
}
export default toggleOnOff;

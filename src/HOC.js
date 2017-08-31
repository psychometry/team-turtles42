import React from 'react';
const toggleOnOff=(WrappedComponent)=>{
  return (props)=>{
    const {state,...rest}=props;
    return (state?<WrappedComponent {...rest}/>:null);
  }
}
export default toggleOnOff;

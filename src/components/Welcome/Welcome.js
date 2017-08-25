import React from 'react';
import AddForm from '../Todo/components/AddForm';
import './Welcome.scss';
const Welcome=({setName})=>{
  return(
    <div>
      <div className='Welcome_text'>Hello! What is your name?</div>
      <AddForm className='Welcome_Add' submit={setName}/>
    </div>
  )
}

export default Welcome;

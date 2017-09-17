import React from 'react';
import AddForm from '../Todo/components/AddForm';
import './Welcome.scss';
const Welcome=({setName})=>{
  return(
    <div className="Welcome">
      <div className='Welcome_text'>Hello, what's your name?</div>
      <AddForm 
        className='Welcome_Add' 
        focus={true}
        submit={setName}
       />
    </div>
  )
}

export default Welcome;

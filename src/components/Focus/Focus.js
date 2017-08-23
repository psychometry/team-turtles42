import React from 'react';
import AddForm from '../Todo/components/AddForm';
import Item from '../Todo/components/Item';
import './Focus.scss';
const Focus=({focus, setFocus, deleteFocus, toggleFocus})=>{
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
export default Focus;

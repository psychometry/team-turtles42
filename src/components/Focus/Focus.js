import React from 'react';
import AddForm from '../Todo/components/AddForm';
import Item from '../Todo/components/Item';
import toggleOnOff from '../../HOC';
import './Focus.scss';

const Focus=({focus, setFocus, deleteFocus, toggleFocus})=>{
  return (
    <div className="Focus">
      <p className="focus-prompt">
        {focus.set
          ? 'Today' 
          : 'What is your main focus for today?'
        }
      </p>
      {focus.set
        ? <Item 
            className='FocusItem' 
            item={focus} 
            toggleItem={toggleFocus} 
            deleteItem={deleteFocus}
          />
        : <AddForm className='AddFocus' placeholder='' submit={setFocus}/>
      }
    </div>
  );
};

export default toggleOnOff(Focus);

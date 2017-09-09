import React from 'react';
import AddForm from '../Todo/components/AddForm';
import Item from '../Todo/components/Item';
import toggleOnOff from '../../HOC';
import './Focus.scss';

const Focus=({active: timer, focus, setFocus, deleteFocus, toggleFocus})=>{
  const renderPrompt = () => {
    if (timer) {
      // TODO: // return <p>{focus.set ? 'NOW' : 'What is your current focus?'}</p>;
    } else {
      return <p className="focus-prompt">{focus.set ? 'Today' : 'What is your main focus for today?'}</p>;
    }    
  };

  const renderFocus = () => {
    if (focus.set) {
      return <Item className='FocusItem' item={focus} toggleItem={toggleFocus} deleteItem={deleteFocus} />
    } else {
      return <AddForm className='AddFocus' placeholder='' submit={setFocus}/>;
    }
  };

  return (
    <div className="Focus">
      {renderPrompt()}
      {renderFocus()}
    </div>
  );
};

export default toggleOnOff(Focus);

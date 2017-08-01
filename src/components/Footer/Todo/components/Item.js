import React from 'react';

import {Button, Checkbox} from 'semantic-ui-react';
import './Item.css'
const TodoItem = ({item, toggleItem,deleteItem})=>{
  return(
    <div className='TodoItem'>
        <Checkbox checked={item.done} onChange={()=>toggleItem(item.id)}/>
      <span>
        {item.name}
      </span>
      <span className='delete'>
        <Button circular size='mini' icon='remove' onClick={()=>deleteItem(item.id)}/>
      </span>
    </div>
  )
}
export default TodoItem;

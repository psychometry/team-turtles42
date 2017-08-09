import React from 'react';
import ItemTypes from '../ItemTypes';
import {DragSource,DropTarget} from 'react-dnd';
import './Item.scss';

const itemSource={
  beginDrag(props){
    return{
      id:props.item.id,
    }
  }
};

function collectDrag(connect, monitor){
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}
const itemTarget = {
  hover(props, monitor) {
    const newId=props.item.id;
    const sourceId=monitor.getItem().id;
    props.updateTodo(sourceId,newId);
  }
};
function collectDrop(connect){
  return{
    connectDropTarget: connect.dropTarget(),
  }
}
const TodoItem = ({item, toggleItem, deleteItem, updateTodo, isDragging, connectDragSource, connectDropTarget})=>{
  return connectDragSource(connectDropTarget(
    <div className='TodoItem'>
      <span>
        <input type='Checkbox' checked={item.done} onChange={()=>toggleItem(item.id)}/>
      </span>
      <span>
        {item.name}
      </span>
      <span className='delete'>
        <button onClick={()=>deleteItem(item.id)}><i className='inverted remove icon'></i></button>
      </span>
    </div>
  ));
}
export default DropTarget(ItemTypes.ListItem, itemTarget, collectDrop)(DragSource(ItemTypes.ListItem, itemSource, collectDrag)(TodoItem));

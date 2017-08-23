import React from 'react';
import {findDOMNode} from 'react-dom';
import ItemTypes from '../ItemTypes';
import Item from './Item';
import {DragSource,DropTarget} from 'react-dnd';

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
const TodoItem = ({isDragging, connectDragSource, connectDropTarget, item, toggleTodo, deleteTodo})=>{
  return(
    <Item
      className='TodoItem'
      item={item}
      toggleItem={toggleTodo}
      deleteItem={deleteTodo}
      ref={
        instance=>{
          connectDragSource(findDOMNode(instance));
          connectDropTarget(findDOMNode(instance));
        }
      }
    />
  );
}
export default DropTarget(ItemTypes.ListItem, itemTarget, collectDrop)(DragSource(ItemTypes.ListItem, itemSource, collectDrag)(TodoItem));

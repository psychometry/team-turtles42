import React, {Component} from 'react';
import TodoItem from './Item';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';

class ListContext extends Component{
  render(){
    const {renderList,toggleItem,deleteItem, updateTodo}=this.props;
    return(
      <ul className='restricted-height'>
        {
          renderList.map((item, i)=>{
            return (
              <li key={i}>
                <TodoItem
                  item={item}
                  toggleItem={toggleItem}
                  deleteItem={deleteItem}
                  updateTodo={updateTodo}
                />
              </li>
            );
          })
        }
      </ul>
    );
  }
}
export default DragDropContext(HTML5Backend)(ListContext);

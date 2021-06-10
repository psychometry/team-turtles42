import React, {Component} from 'react';
import TodoItem from './TodoItem';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd';

class ListContext extends Component{
  render(){
    const {renderList,...rest}=this.props;
    return(
      <DndProvider backend={HTML5Backend}>
        <ul className='list-items'>
        {
          renderList.map((item, i)=>{
            return (
              <li key={i}>
                <TodoItem item={item} {...rest}/>
              </li>
            );
          })
        }
      </ul>
      </DndProvider>
    );
  }
}
export default ListContext;
